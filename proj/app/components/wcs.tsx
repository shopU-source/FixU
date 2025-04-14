import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

export default function FixUHomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img 
              // src="/api/placeholder/600/600" 
              src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8d2h5LWNob29zZS11cyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzMjEwNTIxfDA&ixlib=rb-4.0.3&q=80&w=1080?q=80" 
              alt="Person holding a 'LIKE A BOSS' mug" 
              className="w-full rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">Photo by Brooke Lark</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
          
          {/* Testimonial 1 */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                RK
              </div>
              <div>
                <p className="italic text-gray-700 mb-2">
                  "The plumber arrived on time, fixed the issue quickly, and left the area clean. Extremely professional service!"
                </p>
                <p className="font-semibold">Rajesh Kumar</p>
                <div className="flex text-orange-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                SP
              </div>
              <div>
                <p className="italic text-gray-700 mb-2">
                  "I've used FixU multiple times for AC servicing and electrical work. They're always reliable, skilled, and courteous."
                </p>
                <p className="font-semibold">Sunita Patel</p>
                <div className="flex text-orange-500">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <a href="#" className="text-orange-500 font-medium flex items-center justify-end gap-1 hover:underline">
              Read More Customer Stories
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-500 text-white rounded-lg mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="p-8 text-center border-b sm:border-b lg:border-b-0 sm:border-r border-orange-400">
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div>Verified Professionals</div>
          </div>
          
          {/* Stat 2 */}
          <div className="p-8 text-center border-b lg:border-b-0 lg:border-r border-orange-400">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div>Service Locations</div>
          </div>
          
          {/* Stat 3 */}
          <div className="p-8 text-center border-b sm:border-b-0 sm:border-r border-orange-400">
            <div className="text-3xl font-bold mb-2">500,000+</div>
            <div>Happy Customers</div>
          </div>
          
          {/* Stat 4 */}
          <div className="p-8 text-center">
            <div className="text-3xl font-bold mb-2">4.8/5</div>
            <div>Customer Rating</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the FixU Difference?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers across India who trust us for all their home service needs.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
          Book a Service Now
        </button>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
}