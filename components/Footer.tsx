'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">{t('footer.company')}</h3>
            <p className="text-gray-400 mb-4">{t('footer.description')}</p>
            <p className="text-gray-400 text-sm">
              {t('footer.location')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/saas" className="hover:text-white transition-colors">
                  {t('nav.saas')}
                </Link>
              </li>
              <li>
                <Link href="/tennis-education" className="hover:text-white transition-colors">
                  {t('nav.tennis')}
                </Link>
              </li>
              <li>
                <Link href="/content" className="hover:text-white transition-colors">
                  {t('nav.content')}
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-white transition-colors">
                  {t('nav.join')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  {t('footer.support')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
