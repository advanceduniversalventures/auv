'use client'

import { Instagram, Youtube, Brain, Cpu, TrendingUp } from 'lucide-react'
import TikTokIcon from '@/components/icons/TikTokIcon'
import XiaohongshuIcon from '@/components/icons/XiaohongshuIcon'
import BilibiliIcon from '@/components/icons/BilibiliIcon'
import { useI18n } from '@/lib/i18n'

export default function Content() {
  const { t } = useI18n()

  const platforms = [
    { icon: Instagram, key: 'instagram', color: 'from-pink-500 to-purple-500', url: 'https://www.instagram.com/jokermason803?igsh=MThyNmxza3h3dzhkeA%3D%3D&utm_source=qr' },
    { icon: Youtube, key: 'youtube', color: 'from-red-500 to-red-600', url: 'https://youtube.com/@tennismedia6235?si=WgnbTnYpIQKk8pl_' },
    { icon: TikTokIcon, key: 'tiktok', color: 'from-gray-800 to-black', url: 'https://www.tiktok.com/@jokermason?_r=1&_t=ZP-93GePIZi458' },
    { icon: XiaohongshuIcon, key: 'xiaohongshu', color: 'from-red-400 to-pink-500', url: 'https://xhslink.com/m/4lkYOCwHFnO' },
    { icon: BilibiliIcon, key: 'bilibili', color: 'from-blue-500 to-cyan-500', url: 'https://b23.tv/VdMoR7S' }
  ]

  const contentTypes = [
    { icon: Brain, key: 'performance', color: 'bg-green-600' },
    { icon: Cpu, key: 'technology', color: 'bg-blue-600' },
    { icon: TrendingUp, key: 'growth', color: 'bg-purple-600' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              {t('content.title')}
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 font-medium mb-4">
              {t('content.subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('content.subtitle2')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('content.aboutCreator')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('content.aboutDesc1')}</p>
                <p>{t('content.aboutDesc2')}</p>
                <p>{t('content.aboutDesc3')}</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-purple-200">
                  <span className="text-4xl font-bold text-purple-600">ML</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Hanyu (Mason) Liu</h3>
                <p className="text-purple-600 font-medium mb-2">{t('content.creator')}</p>
                <p className="text-gray-600 text-sm">{t('content.creatorTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('content.contentFocus')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('content.contentFocusDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => {
              const IconComponent = type.icon
              const typeData = t(`content.contentTypes.${type.key}`) as any
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`${type.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{typeData.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{typeData.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('content.platforms')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('content.platformsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              const platformData = t(`content.platformsData.${platform.key}`) as any
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${platform.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{platformData.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{platformData.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats/Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t('content.stats.followersValue')}</div>
              <div className="text-gray-600 text-sm">{t('content.stats.followers')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t('content.stats.postsValue')}</div>
              <div className="text-gray-600 text-sm">{t('content.stats.posts')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t('content.stats.engagementValue')}</div>
              <div className="text-gray-600 text-sm">{t('content.stats.engagement')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t('content.stats.platformsValue')}</div>
              <div className="text-gray-600 text-sm">{t('content.stats.platforms')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('content.followJourney')}
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            {t('content.followJourneyDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://www.instagram.com/jokermason803" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followInstagram')}
            </a>
            <a href="https://youtube.com/@tennismedia6235" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.subscribeYouTube')}
            </a>
            <a href="https://www.tiktok.com/@jokermason" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followTikTok')}
            </a>
            <a href="https://xhslink.com/m/4lkYOCwHFnO" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followXiaohongshu')}
            </a>
            <a href="https://b23.tv/VdMoR7S" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followBilibili')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
