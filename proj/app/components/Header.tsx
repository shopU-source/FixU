"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import FixULogo from "../../public/FixULogo.jpg"

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen])

  return (
    <header className="bg-black w-full py-4 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-orange-500">
        {/* FixU */}
        <Image alt="FixU Logo" src={FixULogo} width={120} height={120} />

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/home" className="text-white hover:text-orange-400 transition-colors">Home</a>
          <a href="/services" className="text-white hover:text-orange-400 transition-colors">Services</a>
          <a href="/how-it-works" className="text-white hover:text-orange-400 transition-colors">How It Works</a>
          <a href="/locations" className="text-white hover:text-orange-400 transition-colors">Locations</a>
          <a href="/testimonials" className="text-white hover:text-orange-400 transition-colors">Testimonials</a>
        </nav>

        {/* Contact Button */}
        <a 
          href="/contact" 
          className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
        >
          Contact
        </a>

        {/* Hamburger Button */}
        <button
          ref={toggleButtonRef}
          className="text-orange-500 md:hidden focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar menu"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path 
              fillRule="evenodd" 
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="text-2xl font-bold text-orange-500">FixU</a>
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>  
            </button>
          </div>
          <nav className="space-y-4">
            <a href="/home" className="block text-white hover:text-orange-400 transition-colors py-2">Home</a>
            <a href="/services" className="block text-white hover:text-orange-400 transition-colors py-2">Services</a>
            <a href="/how-it-works" className="block text-white hover:text-orange-400 transition-colors py-2">How It Works</a>
            <a href="/locations" className="block text-white hover:text-orange-400 transition-colors py-2">Locations</a>
            <a href="/testimonials" className="block text-white hover:text-orange-400 transition-colors py-2">Testimonials</a>
            <a href="/contact" className="block bg-orange-500 text-white px-4 py-2 rounded text-center mt-6 hover:bg-orange-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  )
}

export default Header
