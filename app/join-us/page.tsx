'use client'

import { Users, Code, GraduationCap, Video, Briefcase, Heart, ArrowRight, CheckCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function JoinUs() {
  const { t } = useI18n()

  const positions = [
    { icon: Code, key: 'developer' },
    { icon: GraduationCap, key: 'consultant' },
    { icon: Video, key: 'writer' },
    { icon: Video, key: 'editor' },
    { icon: Briefcase, key: 'manager' },
    { icon: Users, key: 'operations' }
  ]

  const benefits = [
    { icon: Heart, key: 'compensation' },
    { icon: Users, key: 'collaborative' },
    { icon: Briefcase, key: 'growth' },
    { icon: CheckCircle, key: 'flexible' }
  ]

  const values = ['innovation', 'collaboration', 'learning', 'balance', 'diversity']
  const coreValues = ['excellence', 'integrity', 'impact']

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('joinUs.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('joinUs.subtitle')}
            </p>
            <a
              href="#open-positions"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              {t('joinUs.viewPositions')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('joinUs.whyJoin')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('joinUs.whyJoinDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const benefitData = t(`joinUs.benefits.${benefit.key}`) as any
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200"
                >
                  <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefitData.title}</h3>
                  <p className="text-gray-700">{benefitData.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('joinUs.ourCulture')}</h2>
              <p className="text-lg text-gray-700 mb-4">
                {t('joinUs.cultureDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                {t('joinUs.cultureDesc2')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('joinUs.cultureDesc3')}
              </p>
              <ul className="space-y-3">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="text-orange-600 mr-3" size={20} />
                    <span className="text-lg">{t(`joinUs.values.${value}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-600 mb-4">AUV</div>
                <div className="text-2xl font-semibold text-gray-900 mb-6">{t('joinUs.ourValues')}</div>
                <div className="space-y-4 text-left">
                  {coreValues.map((value, idx) => {
                    const valueData = t(`joinUs.coreValues.${value}`) as any
                    return (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
                        <div className="font-semibold text-gray-900">{valueData.title}</div>
                        <div className="text-gray-600 text-sm">{valueData.desc}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('joinUs.openPositions')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('joinUs.openPositionsDesc')}
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => {
              const IconComponent = position.icon
              const positionData = t(`joinUs.positions.${position.key}`) as any
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-white" size={40} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-gray-900">{positionData.title}</h3>
                        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                          {positionData.department}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{positionData.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {Array.isArray(positionData.requirements) && positionData.requirements.map((req: string, idx: number) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckCircle className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={`mailto:careers@advanceduniversalventures.com?subject=${t('joinUs.applicationSubject')} ${positionData.title}`}
                        className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                      >
                        {t('joinUs.applyNow')}
                        <ArrowRight className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <Users className="text-orange-600 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('joinUs.dontSeeMatch')}
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              {t('joinUs.dontSeeMatchDesc')}
            </p>
            <a
              href="mailto:careers@advanceduniversalventures.com?subject=General Application"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              {t('joinUs.submitGeneral')}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('joinUs.readyImpact')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {t('joinUs.readyImpactDesc')}
          </p>
          <a
            href="mailto:careers@advanceduniversalventures.com"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {t('joinUs.getInTouch')}
          </a>
        </div>
      </section>
    </div>
  )
}
