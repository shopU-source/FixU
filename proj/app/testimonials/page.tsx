"use client"
import React, { useState } from 'react';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ComparisonTable from '../components/ComparisonSection';
import Wcs from "../components/wcs"
import ServiceForm from "../components/ServiceForm"
// Define types for testimonials
interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
  initials: string;
}

const TestimonialsPage: React.FC = () => {
  // Sample testimonial data based on the images
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Raj",
      location: "Mumbai",
      service: "AC Repair Service",
      text: "The AC repair service from FixU was outstanding. The technician arrived on time, diagnosed the issue promptly, and fixed it efficiently. I'm thoroughly impressed with the professionalism and expertise.",
      rating: 5,
      initials: "PR"
    },
    {
      id: 2,
      name: "Ankit Singh",
      location: "Delhi",
      service: "Plumbing Service",
      text: "I needed urgent plumbing repair and FixU responded quickly. The plumber was knowledgeable, fixed the issue without any fuss, and left the area clean. Highly recommended!",
      rating: 5,
      initials: "AS"
    },
    {
      id: 3,
      name: "Sneha Desai",
      location: "Pune",
      service: "Painting Service",
      text: "The painting service was fantastic! The team arrived as scheduled, finished within the timeline, and the quality exceeded my expectations. My home looks brand new!",
      rating: 5,
      initials: "SD"
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      location: "Bangalore",
      service: "CCTV Installation",
      text: "Used FixU for CCTV installation at my shop. The technician explained everything clearly, installed high-quality equipment, and ensured I knew how to operate the system. Great service!",
      rating: 5,
      initials: "RK"
    },
    {
      id: 5,
      name: "Maya Agarwal",
      location: "Chennai",
      service: "Nursing Service",
      text: "Hired a nurse for my mother's post-surgery care. The nurse was compassionate and very attentive. My mother recovered faster than expected. Will definitely use FixU's nursing services again.",
      rating: 4,
      initials: "MA"
    },
    {
      id: 6,
      name: "Varun Thakur",
      location: "Hyderabad",
      service: "Computer Repair",
      text: "My laptop was having serious issues and I needed it fixed quickly for work. The FixU technician diagnosed and repaired it same day. Very professional and reasonably priced!",
      rating: 5,
      initials: "VT"
    },
    {
      id: 7,
      name: "Lakshmi Menon",
      location: "Kochi",
      service: "Car Wash Service",
      text: "I use FixU's dry car wash service regularly. The team is punctual, thorough, and uses eco-friendly products. My car always looks showroom-ready after their service!",
      rating: 5,
      initials: "LM"
    }
  ];

  // Stats from the third image
  const stats = [
    { value: "96%", label: "Customer Satisfaction" },
    { value: "25,000+", label: "Monthly Customers" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "92%", label: "Repeat Customers" }
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i <= rating ? 'text-orange-500' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with the first testimonial */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Testimonials</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See what our customers have to say about their experience with FixU services.
          </p>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gray-200">
                <img 
                  // src="/api/placeholder/600/500" 
                  src="https://images.unsplash.com/photo-1659482633518-f2c99276b6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
                  alt="Customers enjoying FixU service" 
                  className="object-cover w-full h-full"
                />
                <div className="p-2 bg-gray-300 text-xs text-gray-600 text-right">
                  Photo by Boxed Water Is Better
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex mb-2">
                  {renderStars(testimonials[0].rating)}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonials[0].text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    {testimonials[0].initials}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold">{testimonials[0].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[0].location} • {testimonials[0].service}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of testimonials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(1).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-orange-500">{stat.value}</p>
                <p className="text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Hear From Our Customers</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-md">
            <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-600">Video testimonials coming soon</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Book a Service Now
            </button>
            <p className="mt-4 text-gray-600">Experience the FixU difference today!</p>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
      <WhyChooseUsSection/>
      <ComparisonTable/>
      <Wcs/>
      <ServiceForm/>
    </div>
  );
};

export default TestimonialsPage;