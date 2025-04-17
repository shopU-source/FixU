'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Reset dropdown when auth state changes or component mounts
  useEffect(() => {
    setIsProfileOpen(false);
  }, [isAuthenticated]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Close the mobile menu when clicking profile
    setIsMenuOpen(false);
    if (isAuthenticated) {
      router.push('/profile');
    } else {
      // Using direct navigation instead of router.push to avoid encoding
      window.location.href = '/login?redirect=/profile';
    }
  };

  const toggleProfileDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/FixULogo.jpg" 
              alt="FixU Logo" 
              width={120} 
              height={120} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-orange-500 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Dropdown menu for services */}
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isServicesOpen ? 'block' : 'hidden'} z-10`}>
                <div className="py-1">
                  <Link href="/services/plumbing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Plumbing
                  </Link>
                  <Link href="/services/electrical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Electrical
                  </Link>
                  <Link href="/services/cleaning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cleaning
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/how-it-works" className="hover:text-orange-500 transition-colors">
              How It Works
            </Link>
            <Link href="/testimonials" className="hover:text-orange-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/locations" className="hover:text-orange-500 transition-colors">
              Locations
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="relative" ref={profileDropdownRef}>
                <button 
                  className="flex items-center hover:text-orange-500 transition-colors"
                  onClick={toggleProfileDropdown}
                >
                  <User className="mr-1 w-5 h-5" />
                  {user.name.split(' ')[0]}
                </button>
                {/* Force hidden by default, controlled fully by state */}
                <div 
                  className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isProfileOpen ? 'block' : 'hidden'} z-10`}
                  style={{ display: isProfileOpen ? 'block' : 'none' }}
                >
                  <div className="py-1">
                    <button 
                      onClick={handleProfileClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    {/* <Link href="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      My Bookings
                    </Link> */}
                    <button
                      onClick={() => logout()}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-2">
          <Link
            href="/"
            className="block py-2 px-4 text-base hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <button
            className="flex items-center justify-between w-full py-2 px-4 text-base hover:bg-gray-800"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Services
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {isServicesOpen && (
            <div className="bg-gray-800 py-2">
              <Link
                href="/services/plumbing"
                className="block py-2 px-8 text-base hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Plumbing
              </Link>
              <Link
                href="/services/electrical"
                className="block py-2 px-8 text-base hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Electrical
              </Link>
              <Link
                href="/services/cleaning"
                className="block py-2 px-8 text-base hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Cleaning
              </Link>
              <Link
                href="/services"
                className="block py-2 px-8 text-base hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                View All
              </Link>
            </div>
          )}
          <Link
            href="/how-it-works"
            className="block py-2 px-4 text-base hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/testimonials"
            className="block py-2 px-4 text-base hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/locations"
            className="block py-2 px-4 text-base hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Locations
          </Link>

          {/* Mobile auth menu */}
          <div className="border-t border-gray-800 mt-2 pt-2">
            {isAuthenticated && user ? (
              <>
                <button
                  onClick={handleProfileClick}
                  className="block w-full text-left py-2 px-4 text-base hover:bg-gray-800"
                >
                  Profile
                </button>
                {/* <Link
                  href="/bookings"
                  className="block py-2 px-4 text-base hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Bookings
                </Link> */}
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 px-4 text-base hover:bg-gray-800"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block py-2 px-4 text-base hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block py-2 px-4 text-base hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}