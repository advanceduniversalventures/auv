'use client'

import { Smartphone, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function SaaS() {
  const { t } = useI18n()

  const softwareProducts = [
    {
      icon: Users,
      titleKey: 'kevobin',
      platforms: ['iOS', 'Android'],
      privacyPolicyLink: '/kevobin/privacy',
      isReleased: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <Smartphone className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('saas.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              {t('saas.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('saas.ourProducts')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('saas.productsDesc')}
            </p>
          </div>

          <div className="space-y-8">
            {softwareProducts.map((product, index) => {
              const IconComponent = product.icon
              const baseKey = `saas.products.${product.titleKey}`
              const isReleased = product.isReleased
              
              return (
                <div
                  key={index}
                  className={`bg-white border rounded-2xl p-6 md:p-8 shadow-md ${
                    isReleased ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 opacity-80'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                        isReleased 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-br from-gray-400 to-gray-500'
                      }`}>
                        <IconComponent className="text-white" size={40} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{t(`${baseKey}.title`)}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isReleased 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {isReleased ? (t('saas.released') || 'Released') : (t('saas.inDevelopment') || 'In Development')}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {t(`${baseKey}.category`)}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{t(`${baseKey}.description`)}</p>
                      
                      {isReleased && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('saas.keyFeatures')}</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {Array.isArray(t(`${baseKey}.features`)) && (t(`${baseKey}.features`) as string[]).map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-start text-gray-600 text-sm">
                                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm font-medium text-gray-600">{t('saas.availableOn')}</span>
                        <div className="flex gap-2">
                          {product.platforms.map((platform, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                        {product.privacyPolicyLink && (
                          <Link
                            href={product.privacyPolicyLink}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
                          >
                            {t('saas.privacyPolicy')} →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('saas.ourTechnology')}</h2>
            <p className="text-lg text-gray-600">
              {t('saas.technologyDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React Native', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Supabase'].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100"
              >
                <div className="text-gray-900 font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('saas.interested')}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('saas.interestedDesc')}
          </p>
          <a
            href="mailto:contact@advanceduniversalventures.com"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {t('saas.contactUs')}
          </a>
        </div>
      </section>
    </div>
  )
}
