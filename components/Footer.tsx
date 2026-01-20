import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Advanced Universal Ventures, LLC" 
                className="h-12 sm:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                style={{ transform: 'scale(1.2)', transformOrigin: 'left center' }}
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Driving innovation through technology, education, and creative content. 
              Based in Maryland, USA.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={18} className="mr-2 text-primary-400" />
              <span>Maryland, United States</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/saas" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="/tennis-education" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Tennis & Education
                </Link>
              </li>
              <li>
                <Link href="/content" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Advanced Universal Ventures, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

