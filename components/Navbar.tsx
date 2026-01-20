'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center h-12 hover:opacity-80 transition-opacity duration-200">
              <img 
                src="/logo.svg" 
                alt="Advanced Universal Ventures, LLC" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Home
              </Link>
              <Link href="/saas" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                SaaS Solutions
              </Link>
              <Link href="/tennis-education" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Tennis & Education
              </Link>
              <Link href="/content" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Content Creation
              </Link>
              <Link href="/support" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Support
              </Link>
              <Link href="/join-us" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Join Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/saas"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              SaaS Solutions
            </Link>
            <Link
              href="/tennis-education"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tennis & Education
            </Link>
            <Link
              href="/content"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Content Creation
            </Link>
            <Link
              href="/support"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/join-us"
              className="block px-3 py-2 bg-primary-600 text-white rounded-md text-base font-medium hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

