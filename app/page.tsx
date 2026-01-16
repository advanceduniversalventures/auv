import Link from 'next/link'
import { ArrowRight, Code, GraduationCap, Video, Users } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced Universal Ventures
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Driving innovation through cutting-edge SaaS solutions, elite tennis education, 
              and compelling digital content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/saas"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
              >
                Explore Our Services
              </Link>
              <Link
                href="/join-us"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-primary-600"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions across technology, education, and media
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/saas" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full">
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Custom mobile and web applications focused on health, fitness, and lifestyle enhancement.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>

            <Link href="/tennis-education" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full">
                <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tennis & Education</h3>
                <p className="text-gray-700 mb-4">
                  Expert consulting services for student-athletes pursuing NCAA tennis opportunities.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>

            <Link href="/content" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full">
                <div className="bg-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation</h3>
                <p className="text-gray-700 mb-4">
                  Engaging social media content by Hanyu (Mason) Liu, connecting with audiences worldwide.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </Link>

            <Link href="/join-us" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full">
                <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
                <p className="text-gray-700 mb-4">
                  Be part of an innovative team shaping the future of technology and education.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2" size={20} />
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
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Advanced Universal Ventures</h2>
              <p className="text-lg text-gray-700 mb-4">
                Based in Maryland, USA, Advanced Universal Ventures, LLC is a forward-thinking 
                company dedicated to excellence across multiple domains. We combine technological 
                innovation with educational expertise and creative content to deliver exceptional 
                value to our clients and partners.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to empower individuals and organizations through cutting-edge 
                software solutions, personalized educational consulting, and engaging digital 
                content that inspires and connects.
              </p>
              <Link
                href="/join-us"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Partner With Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-700 mb-2">AUV</div>
                <div className="text-primary-600 font-semibold">Innovation • Excellence • Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

