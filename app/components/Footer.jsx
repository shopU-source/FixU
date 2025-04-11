import { MdOutlineElectricalServices } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { MdCarRepair } from "react-icons/md";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <Image
                src="/favicon.png"
                alt="FixU Logo"
                width={60}
                height={30}
                className="h-[30px] w-[60px]"
              />
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Home service company specialized in Electric appliances repair and
              other services
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                  <FaFacebookF size={18} />
                </div>
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <div className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                  <FaInstagram size={18} />
                </div>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              Services
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/repair"
                className="text-gray-600 hover:text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                <MdOutlineElectricalServices className="text-primary" />
                <span>Electric appliances</span>
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                <TbAirConditioning className="text-primary" />
                <span>Air condition</span>
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                <MdCarRepair className="text-primary" />
                <span>Car repair</span>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="md:w-1/5">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              Company
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary hover:translate-x-1 transition-transform"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary hover:translate-x-1 transition-transform"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary hover:translate-x-1 transition-transform"
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary hover:translate-x-1 transition-transform"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              Contact Us
            </h2>
            <div className="flex flex-col gap-3">
              <p className="text-gray-600">123 Repair Street</p>
              <p className="text-gray-600">Fix City, FC 12345</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: info@fixu.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} FixU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
