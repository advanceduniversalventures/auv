'use client'

import { Smartphone, Globe, Heart, Activity, Coffee, Calendar, Users } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function SaaS() {
  const { t } = useI18n()

  const softwareProducts = [
    {
      icon: Users,
      titleKey: 'kevobin',
      platforms: ['iOS', 'Android'],
      privacyPolicyLink: '/kevobin/privacy'
    },
    {
      icon: Heart,
      titleKey: 'healthtrack',
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      icon: Activity,
      titleKey: 'fitlife',
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      icon: Coffee,
      titleKey: 'lifestyle',
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      icon: Calendar,
      titleKey: 'wellness',
      platforms: ['iOS', 'Android', 'Web']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <Globe className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              {t('saas.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('saas.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('saas.ourProducts')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('saas.productsDesc')}
            </p>
          </div>

          <div className="space-y-12">
            {softwareProducts.map((product, index) => {
              const IconComponent = product.icon
              const baseKey = `saas.products.${product.titleKey}`
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 card-hover shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-white" size={48} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-gray-900">{t(`${baseKey}.title`)}</h3>
                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                          {t(`${baseKey}.category`)}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{t(`${baseKey}.description`)}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('saas.keyFeatures')}</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {Array.isArray(t(`${baseKey}.features`)) && (t(`${baseKey}.features`) as string[]).map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="text-blue-600 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm font-semibold text-gray-700">{t('saas.availableOn')}</span>
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
                            className="ml-auto text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 underline"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('saas.ourTechnology')}</h2>
            <p className="text-xl text-gray-600">
              {t('saas.technologyDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React Native', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-lg font-semibold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('saas.interested')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('saas.interestedDesc')}
          </p>
          <a
            href="mailto:contact@advanceduniversalventures.com"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            {t('saas.contactUs')}
          </a>
        </div>
      </section>
    </div>
  )
}
