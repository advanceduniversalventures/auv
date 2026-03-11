'use client'

import { GraduationCap, Trophy, Target, Users, CheckCircle, ArrowRight, Calendar, Mail, User } from 'lucide-react'
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
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('tennis.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('tennis.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tennis-education/book"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg shadow-lg"
              >
                <Calendar size={24} />
                {t('tennis.bookLesson')}
              </Link>
              <a
                href="mailto:tennis@advanceduniversalventures.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition text-lg"
              >
                <Mail size={24} />
                {t('tennis.scheduleConsultation')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('tennis.yourPath')}
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('tennis.pathDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('tennis.pathDesc2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tennis-education/book"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  <Calendar size={20} />
                  {t('tennis.bookLesson')}
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-2 flex-shrink-0">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{t('tennis.ncaaExpertise')}</div>
                    <div className="text-gray-700">{t('tennis.ncaaExpertiseDesc')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-2 flex-shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{t('tennis.personalizedApproach')}</div>
                    <div className="text-gray-700">{t('tennis.personalizedApproachDesc')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-2 flex-shrink-0">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{t('tennis.provenResults')}</div>
                    <div className="text-gray-700">{t('tennis.provenResultsDesc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Types Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tennis.lessonTypes') || 'Lesson Options'}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tennis.privateLessons') || 'Private Lessons'}</h3>
              <p className="text-gray-600 text-sm">{t('tennis.privateDesc') || 'One-on-one coaching focused on your specific goals and technique'}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tennis.duoLessons') || 'Duo Lessons'}</h3>
              <p className="text-gray-600 text-sm">{t('tennis.duoDesc') || 'Train with a partner—ideal for friends or family members'}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tennis.groupLessons') || 'Group Lessons'}</h3>
              <p className="text-gray-600 text-sm">{t('tennis.groupDesc') || 'Small group sessions for skill development and match play'}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tennis.ncaaServices') || 'NCAA Consulting'}</h3>
              <p className="text-gray-600 text-sm">{t('tennis.ncaaDesc') || 'Eligibility assessment, recruitment strategy, and application support'}</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/tennis-education/book"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              <Calendar size={20} />
              {t('tennis.viewAvailability')}
            </Link>
          </div>
        </div>
      </section>

      {/* NCAA Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tennis.ourServices')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
                >
                  <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{serviceData.title}</h3>
                  <p className="text-gray-700 mb-4">{serviceData.description}</p>
                  <ul className="space-y-2">
                    {Array.isArray(serviceData.details) && serviceData.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
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

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tennis.whyChooseUs')}</h2>
            <p className="text-lg text-gray-600">
              {t('tennis.whyChooseUsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.isArray(benefits) && benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-gray-200"
              >
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tennis.ourProcess')}</h2>
            <p className="text-lg text-gray-600">
              {t('tennis.processDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => {
              const stepData = t(`tennis.process.${item.key}`) as any
              return (
                <div key={index} className="text-center relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:flex items-center absolute left-[calc(50%+35px)] right-0 top-7">
                        <div className="flex-1 h-0.5 bg-green-200"></div>
                        <ArrowRight className="text-green-400 flex-shrink-0" size={18} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{stepData.title}</h3>
                  <p className="text-gray-600 text-sm">{stepData.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Book a Lesson CTA */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
            <Calendar className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('tennis.bookLessonTitle')}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {t('tennis.bookLessonDesc')}
          </p>
          <Link
            href="/tennis-education/book"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            <Calendar size={24} />
            {t('tennis.viewAvailability')}
          </Link>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('tennis.ready')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('tennis.readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tennis-education/book"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              <Calendar size={20} />
              {t('tennis.bookLesson')}
            </Link>
            <a
              href="mailto:tennis@advanceduniversalventures.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition"
            >
              <Mail size={20} />
              {t('tennis.getStarted')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
