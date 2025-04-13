
import React from 'react'

interface ComparisonFeature {
  id: number
  feature: string
  fixu: 'yes' | 'no'
  others: 'yes' | 'no' | 'sometimes'
}

const ComparisonTable = () => {
  const features: ComparisonFeature[] = [
    { id: 1, feature: 'Background Verified Professionals', fixu: 'yes', others: 'no' },
    { id: 2, feature: 'Service Guarantee', fixu: 'yes', others: 'sometimes' },
    { id: 3, feature: 'Fixed Pricing', fixu: 'yes', others: 'no' },
    { id: 4, feature: 'Service Insurance', fixu: 'yes', others: 'no' },
    { id: 5, feature: 'Online Booking & Tracking', fixu: 'yes', others: 'sometimes' },
    { id: 6, feature: '24/7 Customer Support', fixu: 'yes', others: 'no' }
  ]

  const renderStatus = (status: 'yes' | 'no' | 'sometimes') => {
    if (status === 'yes') {
      return (
        <svg className="w-6 h-6 text-orange-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    } else if (status === 'no') {
      return (
        <svg className="w-6 h-6 text-gray-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    } else {
      return <span className="block text-center text-gray-600">Sometimes</span>
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b border-gray-300 text-left">Feature</th>
            <th className="py-2 px-4 border-b border-gray-300">FixU</th>
            <th className="py-2 px-4 border-b border-gray-300">Others</th>
          </tr>
        </thead>
        <tbody>
          {features.map(({ id, feature, fixu, others }) => (
            <tr key={id} className="border-t border-gray-300">
              <td className="py-2 px-4 text-left">{feature}</td>
              <td className="py-2 px-4">{renderStatus(fixu)}</td>
              <td className="py-2 px-4">{renderStatus(others)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
