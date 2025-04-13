import React from 'react';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-4">FixU</h2>
            <p className="text-gray-400 mb-6">
              Professional home services across India. We bring skilled professionals to your doorstep, making home service hassle-free.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.768 7.465H14.5V5.56c0-.896.594-1.105 1.012-1.105h2.988V.513L14.171.5C10.244.5 9.5 3.438 9.5 5.32v2.145h-3v4h3v12h5v-12h3.851l.417-4z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/>
                </svg>
              </a>
            </div>
            
            {/* Location */}
            <div className="flex items-center text-gray-400">
              <MapPin className="mr-2 text-orange-500" size={20} />
              <p>Available across all major cities in India</p>
            </div>
          </div>
          
          {/* Service Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Categories</h3>
            <ul className="space-y-2">
              <li><a href="/services/appliance-ac" className="text-gray-400 hover:text-white transition-colors">Appliance & AC Services</a></li>
              <li><a href="/services/repairs-maintenance" className="text-gray-400 hover:text-white transition-colors">Home Repairs & Maintenance</a></li>
              <li><a href="/services/driver" className="text-gray-400 hover:text-white transition-colors">Driver on Demand</a></li>
              <li><a href="/services/health-nursing" className="text-gray-400 hover:text-white transition-colors">Health & Nursing Care</a></li>
              <li><a href="/services/advertising-creative" className="text-gray-400 hover:text-white transition-colors">Advertising & Creative Services</a></li>
              <li><a href="/services/washing" className="text-gray-400 hover:text-white transition-colors">Washing Services</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/locations" className="text-gray-400 hover:text-white transition-colors">Service Locations</a></li>
              <li><a href="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/partner" className="text-gray-400 hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>
          
          {/* Contact & Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact & Support</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-orange-500 mr-3" size={20} />
                <div className="text-gray-400">+91-XXXXXXXXXX</div>
              </div>
              <div className="flex items-center">
                <Mail className="text-orange-500 mr-3" size={20} />
                <div className="text-gray-400">info@fixu.com</div>
              </div>
              <div className="flex items-center">
                <Clock className="text-orange-500 mr-3" size={20} />
                <div className="text-gray-400">Mon-Sun: 9 AM - 9 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
