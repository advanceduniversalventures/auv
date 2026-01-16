import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Advanced Universal Ventures, LLC</h3>
            <p className="text-gray-400 mb-4">
              Driving innovation through technology, education, and creative content. 
              Based in Maryland, USA.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>Maryland, United States</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/saas" className="text-gray-400 hover:text-white transition">
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="/tennis-education" className="text-gray-400 hover:text-white transition">
                  Tennis & Education
                </Link>
              </li>
              <li>
                <Link href="/content" className="text-gray-400 hover:text-white transition">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-400 hover:text-white transition">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Advanced Universal Ventures, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

