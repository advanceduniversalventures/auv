'use client'

import Link from 'next/link'
import { ArrowRight, GraduationCap, Video, Smartphone, MapPin, Calendar } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Home() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              {t('home.subtitle')}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('home.subtitleCta')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                href="/tennis-education/book"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
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

      {/* Services Overview - 3 Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t('home.whatWeDo')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.whatWeDoDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tennis Coaching - Primary Service */}
            <Link href="/tennis-education" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl card-hover h-full border border-green-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Book Now
                </div>
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

            {/* Content Creation */}
            <Link href="/content" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl card-hover h-full border border-purple-200">
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

            {/* Software Products */}
            <Link href="/saas" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl card-hover h-full border border-blue-200">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Smartphone className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.softwareTitle')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('home.softwareDesc')}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('home.learnMore')} <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{t('home.aboutTitle')}</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('home.aboutDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('home.aboutDesc2')}
              </p>
              <a
                href="mailto:contact@advanceduniversalventures.com"
                className="btn-primary inline-block"
              >
                {t('home.partnerWithUs')}
              </a>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-5xl font-extrabold text-gray-900 mb-2">AUV</div>
                  <div className="text-gray-600 font-medium text-lg">{t('home.tagline')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="text-green-600 flex-shrink-0" size={20} />
                    <span>{t('home.location')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="text-green-600 flex-shrink-0" size={20} />
                    <span>{t('home.founded')}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">Tennis</div>
                      <div className="text-sm text-gray-500">Coaching</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">Content</div>
                      <div className="text-sm text-gray-500">Creation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">Software</div>
                      <div className="text-sm text-gray-500">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to book a tennis lesson?
          </h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            View available time slots and book your private, duo, or group session.
          </p>
          <Link
            href="/tennis-education/book"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            <Calendar size={24} />
            View Available Times
          </Link>
        </div>
      </section>
    </div>
  )
}
