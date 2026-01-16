import { Video, Instagram, Youtube, Music, Heart, TrendingUp, Users } from 'lucide-react'

export default function Content() {
  const platforms = [
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Engaging visual content including photos, reels, and stories that connect with audiences through lifestyle, fitness, and personal insights.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      description: 'Long-form video content including vlogs, tutorials, and lifestyle content that provides value and entertainment to subscribers.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Music,
      name: 'TikTok',
      description: 'Short-form creative videos that capture attention, showcase personality, and engage with trending topics and challenges.',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const contentTypes = [
    {
      title: 'Lifestyle Content',
      description: 'Authentic glimpses into daily life, routines, and personal experiences that resonate with viewers.',
      icon: Heart
    },
    {
      title: 'Fitness & Health',
      description: 'Workout routines, nutrition tips, and wellness advice to inspire and educate the community.',
      icon: TrendingUp
    },
    {
      title: 'Educational Content',
      description: 'Valuable insights, tutorials, and knowledge sharing across various topics of interest.',
      icon: Users
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <Video className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Social Media Content by Hanyu (Mason) Liu
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating engaging, authentic content that connects with audiences worldwide
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
                About Hanyu (Mason) Liu
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                As a passionate content creator, Hanyu (Mason) Liu brings a unique perspective 
                to social media, combining personal experiences with valuable insights across 
                lifestyle, fitness, education, and entertainment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With a commitment to authenticity and quality, the content focuses on building 
                genuine connections with audiences while sharing knowledge, inspiration, and 
                engaging stories that resonate with viewers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through consistent, high-quality content across multiple platforms, the goal is 
                to inspire, educate, and entertain while building a community of engaged followers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Follow on Instagram
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-12 text-center">
              <div className="bg-white rounded-full w-48 h-48 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Users className="text-purple-600" size={80} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hanyu (Mason) Liu</h3>
              <p className="text-purple-600 font-semibold mb-4">Content Creator</p>
              <p className="text-gray-700">
                Creating content that matters, one post at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engaging audiences across multiple social media platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${platform.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                  <p className="text-gray-700">{platform.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse content that engages and inspires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200"
                >
                  <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-700">{type.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Impact</h2>
            <p className="text-xl text-gray-600">
              Building a community through authentic engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Followers', value: 'Growing Community' },
              { label: 'Content Posts', value: 'Regular Updates' },
              { label: 'Engagement Rate', value: 'High Interaction' },
              { label: 'Platforms', value: 'Multi-Platform' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
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
            Follow Along on the Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the community and stay connected with the latest content and updates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Follow on Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

