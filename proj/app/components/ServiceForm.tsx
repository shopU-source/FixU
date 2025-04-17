import React, { useState, ChangeEvent, useEffect } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function ServiceRequestPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceType: '',
    message: '',
    agreeToTerms: false
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null)
  
  const { user, token, isAuthenticated } = useAuth()
  const router = useRouter()
  
  // Add more detailed logging for debugging
  useEffect(() => {
    console.log("Authentication state:", {
      isAuthenticated,
      tokenExists: !!token,
      tokenPrefix: token ? token.substring(0, 20) + "..." : "no token"
    });

    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || prev.fullName,
        email: user.email || prev.email,
        phoneNumber: user.phone || prev.phoneNumber
      }))
    }
  }, [isAuthenticated, user, token])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: e.target.checked
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }

    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitStatus(null) // Clear previous status when form is edited
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required'
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLoginRedirect = () => {
    router.push(`/login?from=/book`);
  }

  // Add function to check token validity
  const checkTokenValidity = () => {
    if (!token) return false;
    
    try {
      // Basic token parsing to check expiration
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      
      const payload = JSON.parse(atob(parts[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      console.log("Token expiration:", payload.exp);
      console.log("Current time:", currentTime);
      console.log("Time difference:", payload.exp - currentTime);
      
      return payload.exp > currentTime;
    } catch (e) {
      console.error("Error checking token:", e);
      return false;
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if user is authenticated first
    if (!isAuthenticated || !token) {
      setSubmitStatus({
        success: false,
        message: 'Please log in to submit a service request.',
      });
      return;
    }
    
    // Check token validity
    if (!checkTokenValidity()) {
      setSubmitStatus({
        success: false,
        message: 'Your session has expired. Please log in again.',
      });
      
      // Redirect to login after a short delay
      setTimeout(() => {
        router.push('/login?from=/book');
      }, 2000);
      
      return;
    }
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Debug log for token
      console.log("Using token for request:", token.substring(0, 20) + "...");
      
      // 1. Send the email notification
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      })
      
      if (!emailResponse.ok) {
        const emailErrorText = await emailResponse.text();
        console.error("Email API error:", emailErrorText);
        throw new Error('Failed to send email notification');
      }
      
      // 2. Create order in database
      const orderData = {
        serviceName: getServiceName(formData.serviceType),
        serviceProvider: "FixU Service Provider",
        status: 'pending',
        scheduledDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Default to tomorrow
        price: Math.floor(Math.random() * 2000) + 500, // Random price between 500 and 2500
        // address: "Customer address will be confirmed",
        address: formData.message ,
        customerName: formData.fullName,
        customerPhone: formData.phoneNumber,
        customerEmail: formData.email,
        // customerNotes: formData.message || "No additional notes"
      };

      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData),
      });

      // Improved error handling
      if (!orderResponse.ok) {
        const errorText = await orderResponse.text();
        console.error("API error details:", {
          status: orderResponse.status,
          statusText: orderResponse.statusText,
          errorBody: errorText
        });
        throw new Error(`API error: ${orderResponse.status} - ${errorText || 'Unknown error'}`);
      }

      const orderResult = await orderResponse.json();

      setSubmitStatus({
        success: true,
        message: 'Your service request has been submitted successfully! We will contact you soon.',
      });
      
      // Reset form on successful submission
      setFormData({
        fullName: user?.name || '',
        phoneNumber: user?.phone || '',
        email: user?.email || '',
        serviceType: '',
        message: '',
        agreeToTerms: false
      });

      // Redirect to profile page after a short delay
      setTimeout(() => {
        router.push('/profile');
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred while submitting your request. Please try again.',
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }



  // Helper function to get full service name from value
  const getServiceName = (value: string): string => {
    const options: {[key: string]: string} = {
      "advertising": "Advertising Services",
      "electronics": "Electronics Appliances",
      "appliance_repair": "Appliance Repair",
      "computer_repair": "Computer Repair / Laptop / Printer",
      "ac_service": "Air Conditioning",
      "ro_repair": "RO Repair",
      "on_demand_driver": "On Demand Driver",
      "medical": "Medical Services",
      "nursing": "Nursing Services",
      "plumbing": "Plumbing Services",
      "painting": "Painting Services",
      "electrician": "Electrical Services",
      "cctv_installation": "CCTV Installation",
      "car_bike_wash": "Dry Car and Bike Wash",
      "cleaning": "Home Cleaning",
      "ac": "AC Service"
    };
    
    return options[value] || value;
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg mb-12">
          <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-center relative">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Your Home Fixed?
            </h1>
            <p className="mb-8">
              Book professional home services with just a few clicks. Our
              experts are ready to solve all your problems quickly and
              efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors">
                <span className="material-icons">calendar_today</span> Book a
                Service
              </button>
              <button className="border border-white hover:bg-white hover:text-gray-900 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors">
                <span className="material-icons">phone</span> Call Us
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="flex gap-1">
                  <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                    JB
                  </span>
                  <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                    AB
                  </span>
                  <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                    SK
                  </span>
                </div>
                <span className="ml-2">Trusted by 500,000+ customers</span>
              </div>

              <div className="flex items-center">
                <div className="flex text-orange-500">{'★'.repeat(5)}</div>
                <span className="ml-2">
                  4.8 out of 5 based on 10,000+ reviews
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Request a Service</h2>
            
            {!isAuthenticated ? (
              <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
                <h3 className="text-xl font-semibold mb-4">Login Required</h3>
                <p className="text-gray-700 mb-6">
                  Please log in to submit a service request. Creating an account helps you track your service history and get personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleLoginRedirect}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition-colors"
                  >
                    Login to Continue
                  </button>
                  <button
                    onClick={() => router.push('/register?from=/book')}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-md transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            ) : (
              <>
                {submitStatus && (
                  <div className={`p-4 mb-6 rounded-md ${
                    submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`w-full px-4 py-2 border ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className={`w-full px-4 py-2 border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-2 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="serviceType" className="block mb-2">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className={`w-full px-4 py-2 border ${
                        errors.serviceType ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white`}
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select service type
                      </option>
                      <option value="advertising">Advertising Services</option>
                      <option value="electronics">Electronics Appliances</option>
                      <option value="appliance_repair">Appliance Repair</option>
                      <option value="computer_repair">
                        Computer Repair / Laptop / Printer
                      </option>
                      <option value="ac_service">Air Conditioning</option>
                      <option value="ro_repair">RO Repair</option>
                      <option value="on_demand_driver">On Demand Driver</option>
                      <option value="medical">Medical</option>
                      <option value="nursing">Nursing</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="painting">Painter</option>
                      <option value="electrician">Electrician</option>
                      <option value="cctv_installation">CCTV Installation</option>
                      <option value="car_bike_wash">Dry Car and Bike Wash</option>
                      <option value="cleaning">Home Cleaning</option>
                      <option value="ac">AC Service</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">
                      {/* Message (Optional) */}
                      Address
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Provide clear Address"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        className="mr-2"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <span>
                        I agree to the{' '}
                        <a
                          href="#"
                          className="text-orange-500 hover:underline"
                        >
                          Terms & Conditions
                        </a>
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </>
            )}

            <div className="text-right mt-2 text-xs text-gray-500">
              Photo by Ben Rosett
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is available 24/7
            </p>
            <a
              href="tel:+918888888888"
              className="text-orange-500 font-bold text-lg hover:underline"
            >
              +91 8888 888 888
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your queries anytime</p>
            <a
              href="mailto:support@fixu.in"
              className="text-orange-500 font-bold hover:underline"
            >
              support@fixu.in
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Chat with our team instantly</p>
            <a
              href="https://wa.me/918888888888"
              className="text-orange-500 font-bold text-lg hover:underline"
            >
              +91 8888 888 888
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}