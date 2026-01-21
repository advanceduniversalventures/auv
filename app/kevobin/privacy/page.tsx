'use client'

import { Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function KevobinPrivacy() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/saas" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t('support.backToSaaS')}
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-block bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <Lock className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t('support.kevobinPrivacy')}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {t('support.subtitle')}
            </p>
            <p className="text-gray-600">{t('support.lastUpdated')} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
            <p className="text-green-800 font-semibold text-lg mb-2">✓ Your Privacy is Our Priority</p>
            <p className="text-green-700">
              Kevobin is designed with privacy first. All your data stays on your device. We do not collect, 
              upload, or share any of your information.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Kevobin, a health tracking application designed specifically for seniors. Advanced Universal 
                Ventures, LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how Kevobin handles your information.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Kevobin</strong> is a simple daily companion designed to help seniors stay connected and healthy. 
                The app manages daily health essentials with a large, easy-to-read interface including daily check-ins, 
                medication reminders, hydration tracking, safety features, activity monitoring, and mindfulness content.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. What Information Does Kevobin Collect?</h2>
              <p className="text-gray-700 mb-4">
                <strong>Kevobin collects minimal information, and all data is stored locally on your device only.</strong>
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Stored Locally on Your Device:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Hydration Data:</strong> Your daily water intake records</li>
                  <li><strong>Step Count:</strong> Daily step data from Apple HealthKit or device pedometer</li>
                  <li><strong>Medication Records:</strong> Your medication schedule and intake history</li>
                  <li><strong>Daily Check-ins:</strong> Your "I'm OK" check-in timestamps</li>
                  <li><strong>Activity Data:</strong> Exercise and activity logs</li>
                  <li><strong>App Preferences:</strong> Settings and customization choices</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-800 font-semibold mb-2">What We DO NOT Collect:</p>
                <ul className="list-disc pl-6 text-red-700 text-sm space-y-1">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Location data or GPS information</li>
                  <li>Contact information or address book data</li>
                  <li>Payment or financial information</li>
                  <li>Any data that identifies you personally</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How Does Kevobin Use Your Information?</h2>
              <p className="text-gray-700 mb-4">
                All information collected by Kevobin is used <strong>exclusively on your device</strong> to provide 
                the app's features:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Display your daily hydration progress</li>
                <li>Show your step count and activity data</li>
                <li>Provide medication reminders based on your schedule</li>
                <li>Track your daily check-ins</li>
                <li>Store your activity history</li>
                <li>Remember your app preferences and settings</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Your data never leaves your device.</strong> It is stored using AsyncStorage, which is a 
                local storage system on your mobile device.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">
                <strong>All data is stored locally on your device using AsyncStorage.</strong> This means:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Your data never leaves your device</li>
                <li>No data is uploaded to cloud servers</li>
                <li>No data is transmitted over the internet</li>
                <li>Your data is only accessible on your device</li>
                <li>If you delete the app, all data is permanently deleted</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. {t('support.common.contact')}</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or Kevobin's privacy 
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">{t('support.common.company')}</p>
                <p className="text-gray-700 mb-1">
                  <strong>{t('support.common.privacyEmail')}</strong> <a href="mailto:privacy@advanceduniversalventures.com" className="text-blue-600 hover:text-blue-700">privacy@advanceduniversalventures.com</a>
                </p>
                <p className="text-gray-700">{t('support.common.location')}</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-blue-800 font-semibold text-lg mb-2">Summary</p>
              <p className="text-blue-700">
                Kevobin is designed with your privacy in mind. All data is stored locally on your device, never uploaded 
                to servers, and never shared with third parties. You have complete control over your information. 
                Designed with love to keep families connected while respecting your privacy.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/saas"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t('support.backToSaaS')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
