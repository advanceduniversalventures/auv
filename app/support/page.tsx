'use client'

import { Shield, Lock, FileText, Mail, HelpCircle, AlertCircle, Dumbbell, Video, Code } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Support() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('support.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('support.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="text-gray-800 mr-3" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">{t('support.privacyPolicy')}</h2>
            </div>
            <p className="text-gray-600 mb-4">{t('support.lastUpdated')} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.privacy.intro.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.privacy.intro.content')}</p>
            </div>

            {/* Tennis Coaching Section */}
            <div className="mb-8 bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <Dumbbell className="text-green-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">{t('support.privacy.tennis.title')}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t('support.privacy.tennis.intro')}</p>
              <h4 className="font-semibold text-gray-900 mb-2">{t('support.privacy.dataCollected')}</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.privacy.tennis.data1')}</li>
                <li>{t('support.privacy.tennis.data2')}</li>
                <li>{t('support.privacy.tennis.data3')}</li>
                <li>{t('support.privacy.tennis.data4')}</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mb-2">{t('support.privacy.howUsed')}</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('support.privacy.tennis.use1')}</li>
                <li>{t('support.privacy.tennis.use2')}</li>
                <li>{t('support.privacy.tennis.use3')}</li>
              </ul>
            </div>

            {/* Content Creation Section */}
            <div className="mb-8 bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <Video className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">{t('support.privacy.content.title')}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t('support.privacy.content.intro')}</p>
              <h4 className="font-semibold text-gray-900 mb-2">{t('support.privacy.dataCollected')}</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.privacy.content.data1')}</li>
                <li>{t('support.privacy.content.data2')}</li>
                <li>{t('support.privacy.content.data3')}</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mb-2">{t('support.privacy.howUsed')}</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('support.privacy.content.use1')}</li>
                <li>{t('support.privacy.content.use2')}</li>
                <li>{t('support.privacy.content.use3')}</li>
              </ul>
            </div>

            {/* Software Products Section */}
            <div className="mb-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">{t('support.privacy.software.title')}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t('support.privacy.software.intro')}</p>
              <h4 className="font-semibold text-gray-900 mb-2">{t('support.privacy.dataCollected')}</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.privacy.software.data1')}</li>
                <li>{t('support.privacy.software.data2')}</li>
                <li>{t('support.privacy.software.data3')}</li>
                <li>{t('support.privacy.software.data4')}</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mb-2">{t('support.privacy.howUsed')}</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('support.privacy.software.use1')}</li>
                <li>{t('support.privacy.software.use2')}</li>
                <li>{t('support.privacy.software.use3')}</li>
                <li>{t('support.privacy.software.use4')}</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.privacy.security.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.privacy.security.content')}</p>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.privacy.sharing.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.privacy.sharing.intro')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.privacy.sharing.item1')}</li>
                <li>{t('support.privacy.sharing.item2')}</li>
                <li>{t('support.privacy.sharing.item3')}</li>
                <li>{t('support.privacy.sharing.item4')}</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.privacy.rights.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.privacy.rights.intro')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.privacy.rights.item1')}</li>
                <li>{t('support.privacy.rights.item2')}</li>
                <li>{t('support.privacy.rights.item3')}</li>
                <li>{t('support.privacy.rights.item4')}</li>
                <li>{t('support.privacy.rights.item5')}</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.common.contact')}</h3>
              <p className="text-gray-700 mb-4">{t('support.privacy.contact.content')}</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">{t('support.common.company')}</p>
                <p className="text-gray-700">{t('support.common.privacyEmail')} privacy@advanceduniversalventures.com</p>
                <p className="text-gray-700">{t('support.common.location')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="text-gray-800 mr-3" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">{t('support.termsOfService')}</h2>
            </div>
            <p className="text-gray-600 mb-4">{t('support.lastUpdated')} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.terms.acceptance.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.terms.acceptance.content')}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.terms.services.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.terms.services.content')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.terms.services.item1')}</li>
                <li>{t('support.terms.services.item2')}</li>
                <li>{t('support.terms.services.item3')}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.terms.booking.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.terms.booking.content')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{t('support.terms.booking.item1')}</li>
                <li>{t('support.terms.booking.item2')}</li>
                <li>{t('support.terms.booking.item3')}</li>
                <li>{t('support.terms.booking.item4')}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.terms.liability.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.terms.liability.content')}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('support.terms.changes.title')}</h3>
              <p className="text-gray-700 mb-4">{t('support.terms.changes.content')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="text-gray-800 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('support.needHelp')}</h2>
            <p className="text-xl text-gray-600">
              {t('support.needHelpDesc')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Mail className="text-gray-800 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{t('support.emailSupport')}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t('support.emailSupportDesc')}
                </p>
                <a
                  href="mailto:support@advanceduniversalventures.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  support@advanceduniversalventures.com
                </a>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <AlertCircle className="text-gray-800 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{t('support.reportIssue')}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t('support.reportIssueDesc')}
                </p>
                <a
                  href="mailto:security@advanceduniversalventures.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  security@advanceduniversalventures.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
