import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUsSection: React.FC = () => {
  // Main features with icons
  const features: Feature[] = [
    {
      id: 1,
      title: "Verified Professionals",
      description: "All our service providers undergo rigorous background checks and skill verification. We only send trusted experts to your doorstep.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Fast Response Time",
      description: "Our professionals arrive at your location within 60-120 minutes for urgent services, and as per your scheduled time for regular bookings.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Transparent Pricing",
      description: "No hidden costs or surprise charges. We provide detailed estimates before starting any work, so you know exactly what you're paying for.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Satisfaction Guarantee",
      description: "Not satisfied with our service? We'll fix the issue at no additional cost until you're completely happy with the results.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  // Benefit cards with icons
  const benefitCards: BenefitCard[] = [
    {
      id: 1,
      title: "Safe & Secure",
      description: "All our professionals have verified IDs and carry proper equipment. Your safety is our top priority.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Insured Services",
      description: "All our services come with insurance coverage, protecting you against any accidental damage during service delivery.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to address your queries and provide assistance.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what sets FixU apart from other home service providers across India.
          </p>
        </div>

        {/* Main content section with image */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          {/* Features list */}
          <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
            <div className="space-y-10">
              {features.map((feature) => (
                <div key={feature.id} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                // src="/api/placeholder/600/500" 
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8d2h5LWNob29zZS11cyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzMjEwNTIxfDA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
                alt="Professional service provider" 
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                Photo by Ben Rosett
              </div>
            </div>
          </div>
        </div>

        {/* Benefits cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {benefitCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="rounded-full bg-orange-500 w-16 h-16 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;