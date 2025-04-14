import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Book a Service',
      description: 'Choose from our range of professional services.'
    },
    {
      number: 2,
      title: 'Schedule',
      description: 'Select your preferred date and time slot.'
    },
    {
      number: 3,
      title: 'Professional Visit',
      description: 'Our verified expert arrives at your doorstep.'
    },
    {
      number: 4,
      title: 'Enjoy & Rate',
      description: 'Rate your experience and provide feedback.'
    }
  ];

  return (
    <div className="py-16 px-4 bg-white mb-2">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-700">
            Experience seamless home services with our simple 4-step process.
          </p>
        </div>

        {/* Steps Display */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Step Number Circle */}
                <div className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-3xl font-bold mb-6">
                  {step.number}
                </div>
                
                {/* Step Title & Description */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}