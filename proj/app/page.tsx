'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Zap,
  MonitorSmartphone,
  Snowflake,
  ShieldCheck,
  Home as HomeIcon
} from 'lucide-react';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import HowWeWorkSection from './components/hww';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Professional Home Services
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">
            At Your Fingertips
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Quality service providers for all your home and business needs across India. One platform, endless solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded transition-colors text-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/book"
              className="bg-transparent hover:bg-gray-800 text-white border border-white font-medium py-3 px-8 rounded transition-colors text-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-black px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex justify-center mb-3">
                <Wrench className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-lg font-medium text-white">Plumbing</h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex justify-center mb-3">
                <Zap className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-lg font-medium text-white">Electrical</h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex justify-center mb-3">
                <MonitorSmartphone className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-lg font-medium text-white">Electronics</h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex justify-center mb-3">
                <Snowflake className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-lg font-medium text-white">AC Services</h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex justify-center mb-3">
                <ShieldCheck className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-lg font-medium text-white">Maintenance</h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex justify-center mb-3">
                <HomeIcon className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-lg font-medium text-white">Home Care</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* How We Work Section */}
      <HowWeWorkSection />
    </div>
  );
}
