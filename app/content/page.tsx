'use client'

import { Video, Instagram, Youtube, Heart, TrendingUp, Users } from 'lucide-react'
import TikTokIcon from '@/components/icons/TikTokIcon'
import XiaohongshuIcon from '@/components/icons/XiaohongshuIcon'
import BilibiliIcon from '@/components/icons/BilibiliIcon'
import { useI18n } from '@/lib/i18n'

export default function Content() {
  const { t } = useI18n()

  const platforms = [
    { icon: Instagram, key: 'instagram', color: 'from-pink-500 to-purple-500', url: 'https://www.instagram.com/jokermason803?igsh=MThyNmxza3h3dzhkeA%3D%3D&utm_source=qr' },
    { icon: Youtube, key: 'youtube', color: 'from-red-500 to-red-600', url: 'https://youtube.com/@tennismedia6235?si=WgnbTnYpIQKk8pl_' },
    { icon: TikTokIcon, key: 'tiktok', color: 'from-cyan-500 to-blue-500', url: 'https://www.tiktok.com/@jokermason?_r=1&_t=ZP-93GePIZi458' },
    { icon: XiaohongshuIcon, key: 'xiaohongshu', color: 'from-red-400 to-pink-500', url: 'https://xhslink.com/m/4lkYOCwHFnO' },
    { icon: BilibiliIcon, key: 'bilibili', color: 'from-blue-500 to-cyan-500', url: 'https://b23.tv/VdMoR7S' }
  ]

  const contentTypes = [
    { icon: Heart, key: 'lifestyle' },
    { icon: TrendingUp, key: 'fitness' },
    { icon: Users, key: 'educational' }
  ]

  const stats = [
    { labelKey: 'followers', valueKey: 'followersValue' },
    { labelKey: 'posts', valueKey: 'postsValue' },
    { labelKey: 'engagement', valueKey: 'engagementValue' },
    { labelKey: 'platforms', valueKey: 'platformsValue' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block bg-gradient-to-br from-purple-600 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <Video className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              {t('content.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              {t('content.subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('content.subtitle2')}
            </p>
          </div>
        </div>
      </section>

      {/* About Creator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('content.aboutCreator')}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t('content.aboutDesc1')}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                {t('content.aboutDesc2')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('content.aboutDesc3')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/jokermason803?igsh=MThyNmxza3h3dzhkeA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  {t('content.followInstagram')}
                </a>
                <a href="https://youtube.com/@tennismedia6235?si=WgnbTnYpIQKk8pl_" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  {t('content.subscribeYouTube')}
                </a>
                <a href="https://www.tiktok.com/@jokermason?_r=1&_t=ZP-93GePIZi458" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  {t('content.followTikTok')}
                </a>
                <a href="https://xhslink.com/m/4lkYOCwHFnO" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  {t('content.followXiaohongshu')}
                </a>
                <a href="https://b23.tv/VdMoR7S" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  {t('content.followBilibili')}
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-12 text-center">
              <div className="bg-white rounded-full w-48 h-48 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Users className="text-purple-600" size={80} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hanyu (Mason) Liu</h3>
              <p className="text-purple-600 font-semibold mb-4">{t('content.creator')}</p>
              <p className="text-gray-700">
                {t('content.creatorTagline')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('content.platforms')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('content.platformsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              const platformData = t(`content.platformsData.${platform.key}`) as any
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 block"
                >
                  <div className={`bg-gradient-to-br ${platform.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{platformData.name}</h3>
                  <p className="text-gray-700">{platformData.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('content.contentFocus')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200"
                >
                  <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{typeData.title}</h3>
                  <p className="text-gray-700">{typeData.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('content.contentImpact')}</h2>
            <p className="text-xl text-gray-600">
              {t('content.contentImpactDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{t(`content.stats.${stat.valueKey}`)}</div>
                  <div className="text-gray-700 font-medium">{t(`content.stats.${stat.labelKey}`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('content.followJourney')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {t('content.followJourneyDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.instagram.com/jokermason803?igsh=MThyNmxza3h3dzhkeA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followInstagram')}
            </a>
            <a href="https://youtube.com/@tennismedia6235?si=WgnbTnYpIQKk8pl_" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.subscribeYouTube')}
            </a>
            <a href="https://www.tiktok.com/@jokermason?_r=1&_t=ZP-93GePIZi458" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followTikTok')}
            </a>
            <a href="https://xhslink.com/m/4lkYOCwHFnO" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followXiaohongshu')}
            </a>
            <a href="https://b23.tv/VdMoR7S" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('content.followBilibili')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
