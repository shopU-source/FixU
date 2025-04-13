"use client"

import React from 'react';
import { Monitor, Megaphone, Heart, Briefcase, ArrowRight, ChevronUp } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  items: string[];
  link: string;
}

const services: Service[] = [
  {
    icon: <Monitor className="text-orange-500" size={28} />,
    title: 'Appliance & AC Services',
    items: [
      'Electronics Appliances',
      'Appliance Repair',
      'Computer/Laptop Repair',
      'Air Conditioning',
      'RO Repair',
    ],
    link: '/book-service/appliance-ac',
  },
  {
    icon: <Megaphone className="text-orange-500" size={28} />,
    title: 'Home Repairs & Maintenance',
    items: [
      'Plumbing',
      'Painter',
      'Electrician',
      'CCTV Installation',
    ],
    link: '/book-service/home-repairs',
  },
  {
    icon: <Heart className="text-orange-500" size={28} />,
    title: 'Health & Nursing Care',
    items: [
      'Medical Care',
      'Nursing Services',
      'Elder Care',
      'Home Healthcare',
    ],
    link: '/book-service/health-nursing',
  },
  {
    icon: <Briefcase className="text-orange-500" size={28} />,
    title: 'Other Services',
    items: [
      'Advertising Services',
      'On Demand Driver',
      'Dry Car and Bike Wash',
      'Creative Services',
    ],
    link: '/book-service/other',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional services delivered by experts across India. Find what you need, when you need it.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={service.link} 
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                Book Service <ArrowRight size={18} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
