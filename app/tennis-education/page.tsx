'use client'

import { GraduationCap, Trophy, Target, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function TennisEducation() {
  const { t } = useI18n()

  const services = [
    { icon: Target, key: 'eligibility' },
    { icon: Trophy, key: 'recruitment' },
    { icon: GraduationCap, key: 'academic' },
    { icon: Users, key: 'application' }
  ]

  const benefits = t('tennis.benefits') as string[]
  const processSteps = [
    { step: '1', key: 'step1' },
    { step: '2', key: 'step2' },
    { step: '3', key: 'step3' },
    { step: '4', key: 'step4' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('tennis.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('tennis.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('tennis.yourPath')}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t('tennis.pathDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('tennis.pathDesc2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:tennis@advanceduniversalventures.com"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                >
                  {t('tennis.scheduleConsultation')}
                </a>
                <Link
                  href="/join-us"
                  className="inline-block bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition text-center"
                >
                  {t('tennis.becomeConsultant')}
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Trophy className="text-green-600 mr-4" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{t('tennis.ncaaExpertise')}</div>
                    <div className="text-gray-700">{t('tennis.ncaaExpertiseDesc')}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Target className="text-green-600 mr-4" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{t('tennis.personalizedApproach')}</div>
                    <div className="text-gray-700">{t('tennis.personalizedApproachDesc')}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-4" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{t('tennis.provenResults')}</div>
                    <div className="text-gray-700">{t('tennis.provenResultsDesc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('tennis.ourServices')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('tennis.servicesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const serviceData = t(`tennis.services.${service.key}`) as any
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{serviceData.title}</h3>
                  <p className="text-gray-700 mb-6">{serviceData.description}</p>
                  <ul className="space-y-2">
                    {Array.isArray(serviceData.details) && serviceData.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('tennis.whyChooseUs')}</h2>
            <p className="text-xl text-gray-600">
              {t('tennis.whyChooseUsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(benefits) && benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-600"
              >
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-900 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('tennis.ourProcess')}</h2>
            <p className="text-xl text-gray-600">
              {t('tennis.processDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => {
              const stepData = t(`tennis.process.${item.key}`) as any
              return (
                <div key={index} className="text-center relative">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stepData.title}</h3>
                  <p className="text-gray-600">{stepData.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="text-green-600 mx-auto" size={24} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('tennis.ready')}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t('tennis.readyDesc')}
          </p>
          <a
            href="mailto:tennis@advanceduniversalventures.com"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {t('tennis.getStarted')}
          </a>
        </div>
      </section>
    </div>
  )
}
