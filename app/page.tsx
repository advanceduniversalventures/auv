'use client'

import Link from 'next/link'
import { ArrowRight, Code, GraduationCap, Video, Users } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Home() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                href="/saas"
                className="btn-primary text-lg px-8 py-4"
              >
                {t('home.exploreServices')}
              </Link>
              <Link
                href="/join-us"
                className="btn-secondary text-lg px-8 py-4"
              >
                {t('home.joinTeam')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{t('home.whatWeDo')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.whatWeDoDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/saas" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl card-hover h-full border border-blue-100">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.saasTitle')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('home.saasDesc')}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>

            <Link href="/tennis-education" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl card-hover h-full border border-green-100">
                <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.tennisTitle')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('home.tennisDesc')}
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>

            <Link href="/content" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl card-hover h-full border border-purple-100">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Video className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.contentTitle')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('home.contentDesc')}
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>

            <Link href="/join-us" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl card-hover h-full border border-orange-100">
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.joinTitle')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('home.joinDesc')}
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{t('home.aboutTitle')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('home.aboutDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('home.aboutDesc2')}
              </p>
              <Link
                href="/join-us"
                className="btn-primary inline-block"
              >
                {t('home.partnerWithUs')}
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-3xl p-12 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-primary-700 mb-3 drop-shadow-lg">AUV</div>
                  <div className="text-primary-600 font-bold text-lg tracking-wide">{t('home.innovation')}</div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
