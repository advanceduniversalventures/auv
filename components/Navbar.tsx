'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useI18n()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600">AUV</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/saas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.saas')}
            </Link>
            <Link href="/tennis-education" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.tennis')}
            </Link>
            <Link href="/content" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.content')}
            </Link>
            <Link href="/join-us" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.join')}
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.support')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-primary-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
