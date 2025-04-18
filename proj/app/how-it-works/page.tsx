"use client"
import React, { useEffect, useState } from 'react';
import Howweworks from "../components/hww"
const FixUHowItWorks: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      number: 1,
      title: "Book a Service",
      description: "Choose from our range of professional services."
    },
    {
      number: 2,
      title: "Schedule",
      description: "Select your preferred date and time slot."
    },
    {
      number: 3,
      title: "Professional Visit",
      description: "Our verified expert arrives at your doorstep."
    },
    {
      number: 4,
      title: "Enjoy & Rate",
      description: "Rate your experience and provide feedback."
    }
  ];

  const benefits = [
    {
      icon: "shield-check",
      title: "Verified Professionals",
      description: "All our service providers undergo extensive background checks and skill verification."
    },
    {
      icon: "clock",
      title: "Quick Response",
      description: "Get service within hours for urgent requirements across major cities in India."
    },
    {
      icon: "cash",
      title: "Transparent Pricing",
      description: "No hidden costs. Pay only for what you book with clear price breakdowns."
    },
    {
      icon: "sparkles",
      title: "Satisfaction Guaranteed",
      description: "Not happy? We'll rework the service until you're completely satisfied."
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
<Howweworks/>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience seamless home services with our simple 4-step process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden sm:block absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-xl font-bold mb-4 z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Why Choose FixU?</h2>
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-500">
                        {benefit.icon === "shield-check" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {benefit.icon === "clock" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {benefit.icon === "cash" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                        {benefit.icon === "sparkles" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                      <p className="mt-1 text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition duration-150 ease-in-out">
                  Get Started Today
                </button>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:col-span-7">
              <div className="relative">
                <img
                  // src="/api/placeholder/700/500"
                     src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8aG93LWl0LXdvcmtzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNjYzNjN8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                  alt="Satisfied customer with coffee mug"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2">Photo by Brooke Lark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition duration-150 ease-in-out"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FixUHowItWorks;

