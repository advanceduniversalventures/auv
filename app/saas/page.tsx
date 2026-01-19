import { Smartphone, Globe, Heart, Activity, Coffee, Calendar } from 'lucide-react'

export default function SaaS() {
  const softwareProducts = [
    {
      icon: Heart,
      title: 'HealthTrack Pro',
      category: 'Health & Wellness',
      description: 'Comprehensive health monitoring application that helps users track vital signs, medications, and wellness metrics. Features include AI-powered health insights, appointment reminders, and integration with healthcare providers.',
      features: [
        'Real-time health metrics tracking',
        'Medication reminder system',
        'Healthcare provider integration',
        'AI-powered health insights',
        'Secure data encryption'
      ],
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      icon: Activity,
      title: 'FitLife Coach',
      category: 'Fitness & Training',
      description: 'Personalized fitness coaching platform with workout plans, nutrition tracking, and progress analytics. Includes social features for community support and motivation.',
      features: [
        'Custom workout plans',
        'Nutrition tracking & meal planning',
        'Progress analytics & visualization',
        'Social community features',
        'Wearable device integration'
      ],
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      icon: Coffee,
      title: 'Lifestyle Balance',
      category: 'Lifestyle Management',
      description: 'All-in-one lifestyle management tool that helps users balance work, personal life, and wellness. Features include habit tracking, goal setting, and mindfulness exercises.',
      features: [
        'Habit tracking & formation',
        'Goal setting & achievement',
        'Mindfulness & meditation guides',
        'Time management tools',
        'Work-life balance analytics'
      ],
      platforms: ['iOS', 'Android', 'Web']
    },
    {
      icon: Calendar,
      title: 'Wellness Planner',
      category: 'Health & Lifestyle',
      description: 'Intelligent wellness planning application that creates personalized schedules for exercise, meals, sleep, and self-care activities based on user preferences and goals.',
      features: [
        'AI-powered schedule optimization',
        'Multi-category planning (fitness, nutrition, sleep)',
        'Smart notifications & reminders',
        'Progress tracking & reports',
        'Integration with calendar apps'
      ],
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
              SaaS <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovative mobile and web applications designed to enhance health, fitness, and lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Software Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each application is carefully crafted to address specific needs in health, fitness, and lifestyle management
            </p>
          </div>

          <div className="space-y-12">
            {softwareProducts.map((product, index) => {
              const IconComponent = product.icon
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
                        <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="text-blue-600 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm font-semibold text-gray-700">Available on:</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology</h2>
            <p className="text-xl text-gray-600">
              Built with modern, scalable technologies for optimal performance
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
            Interested in Our Software Solutions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our applications can help transform your health, fitness, or lifestyle goals
          </p>
          <a
            href="mailto:contact@advanceduniversalventures.com"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

