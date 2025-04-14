// import React from 'react';

// export default function HowWeWorkSection() {
//   const steps = [
//     {
//       number: 1,
//       title: 'Book Online',
//       description: 'Select your service and preferred time slot'
//     },
//     {
//       number: 2,
//       title: 'Confirmation',
//       description: 'Receive appointment details and professional\'s info'
//     },
//     {
//       number: 3,
//       title: 'Service Delivery',
//       description: 'Our professional arrives and completes the service'
//     },
//     {
//       number: 4,
//       title: 'Feedback',
//       description: 'Rate your experience and help us improve'
//     }
//   ];

//   return (
//     <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-2">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Work</h2>
//           <p className="text-gray-600">
//             Simple steps to get your service booked and completed.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
//           {steps.map((step) => (
//             <div key={step.number} className="flex flex-col items-center text-center">
//               {/* Step number circle with light orange background */}
//               <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
//                 <span className="text-2xl font-bold text-orange-500">{step.number}</span>
//               </div>
              
//               {/* Step title */}
//               <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              
//               {/* Step description */}
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center mt-8">
//           <button onClick={()=>router.push("/book")} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
//             Book Your Service Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'
import { useRouter } from 'next/navigation'

export default function HowWeWorkSection() {
  const router = useRouter()

  const steps = [
    {
      number: 1,
      title: 'Book Online',
      description: 'Select your service and preferred time slot'
    },
    {
      number: 2,
      title: 'Confirmation',
      description: 'Receive appointment details and professional\'s info'
    },
    {
      number: 3,
      title: 'Service Delivery',
      description: 'Our professional arrives and completes the service'
    },
    {
      number: 4,
      title: 'Feedback',
      description: 'Rate your experience and help us improve'
    }
  ]

  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Work</h2>
          <p className="text-gray-600">
            Simple steps to get your service booked and completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-500">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/book')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Book Your Service Now
          </button>
        </div>
      </div>
    </div>
  )
}
