"use client"

import React, { useState } from 'react';

const ServiceLocations: React.FC = () => {
  const [showAllLocations, setShowAllLocations] = useState(false);

  const majorCities = [
    { name: 'Delhi NCR', region: 'North India' },
    { name: 'Mumbai', region: 'West India' },
    { name: 'Bangalore', region: 'South India' },
    { name: 'Hyderabad', region: 'South India' },
    { name: 'Chennai', region: 'South India' },
    { name: 'Kolkata', region: 'East India' },
    { name: 'Pune', region: 'West India' },
    { name: 'Ahmedabad', region: 'West India' },
    { name: 'Jaipur', region: 'North India' },
    { name: 'Chandigarh', region: 'North India' },
    { name: 'Lucknow', region: 'North India' },
    { name: 'Kochi', region: 'South India' },
  ];

  const allCitiesByRegion = {
    'North India': ['Delhi NCR', 'Chandigarh', 'Lucknow', 'Jaipur', 'Amritsar', 'Dehradun', 'Jammu'],
    'South India': ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Coimbatore', 'Thiruvananthapuram', 'Visakhapatnam'],
    'East India': ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Patna', 'Ranchi', 'Siliguri', 'Cuttack'],
    'West India': ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Vadodara', 'Nagpur', 'Indore'],
  };

  const comingSoonCities = ['Bhopal', 'Mangalore', 'Varanasi', 'Goa', 'Shillong', 'Shimla', 'And many more!'];

  const toggleAllLocations = () => {
    setShowAllLocations(!showAllLocations);
  };

  return (
    <div className={`bg-white font-sans ${showAllLocations ? 'backdrop-blur-sm overflow-hidden h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Service Locations</h2>
          <p className="mt-4 text-lg text-gray-600 mx-auto max-w-3xl">
            FixU is available across major cities and expanding to new locations throughout India.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="ml-2 text-xl font-semibold text-gray-900">Major Cities</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {majorCities.map((city, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">{city.name}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={toggleAllLocations}
              className="mt-6 inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
            >
              View all cities
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px] w-full bg-black">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c2VydmljZS1sb2NhdGlvbnMlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0NDQ3NDM1M3ww&ixlib=rb-4.0.3&q=80&w=1080')"
              }}
            >
              
            </div>
            
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-3xl font-bold mb-4">Nationwide Service Network</h3>
              <p className="text-center text-lg">
                Our growing network ensures quality service professionals are just a click away no matter where you are in India.
              </p>
              <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-md font-medium transition duration-150 ease-in-out">
                Check Availability in Your Area
              </button>
            </div>
            <p className="absolute bottom-2 right-3 text-xs text-white bg-black bg-opacity-30 px-2 py-1 rounded">
              Photo by Ben R
            </p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition duration-150 ease-in-out"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {showAllLocations && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">All Service Locations</h3>
                <button 
                  onClick={toggleAllLocations}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Object.entries(allCitiesByRegion).map(([region, cities]) => (
                  <div key={region}>
                    <h4 className="text-lg font-semibold text-orange-500 mb-3">{region}</h4>
                    <ul className="space-y-2">
                      {cities.map((city, index) => (
                        <li key={index} className="text-gray-700">{city}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Coming Soon</h4>
                <div className="flex flex-wrap gap-2">
                  {comingSoonCities.map((city, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceLocations;
