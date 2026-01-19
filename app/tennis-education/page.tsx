import { GraduationCap, Trophy, Target, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function TennisEducation() {
  const services = [
    {
      icon: Target,
      title: 'NCAA Eligibility Assessment',
      description: 'Comprehensive evaluation of your academic and athletic profile to determine NCAA eligibility status and identify areas for improvement.',
      details: [
        'Academic transcript review',
        'Core course requirements analysis',
        'GPA and test score evaluation',
        'Eligibility center registration guidance'
      ]
    },
    {
      icon: Trophy,
      title: 'Recruitment Strategy',
      description: 'Personalized recruitment plan tailored to your skill level, academic achievements, and college preferences.',
      details: [
        'College selection guidance',
        'Recruitment timeline planning',
        'Coach communication strategies',
        'Video highlight package creation'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Academic Planning',
      description: 'Strategic academic planning to ensure you meet all NCAA requirements while maintaining strong performance.',
      details: [
        'Course selection guidance',
        'Study schedule optimization',
        'Test preparation strategies',
        'Academic performance tracking'
      ]
    },
    {
      icon: Users,
      title: 'Application Support',
      description: 'End-to-end support throughout the college application and recruitment process.',
      details: [
        'Application essay assistance',
        'Interview preparation',
        'Scholarship opportunity identification',
        'Decision-making guidance'
      ]
    }
  ]

  const benefits = [
    'Expert knowledge of NCAA regulations and requirements',
    'Personalized approach tailored to each student-athlete',
    'Proven track record of successful placements',
    'Comprehensive support from assessment to enrollment',
    'Strong network of college coaches and programs',
    'Focus on both athletic and academic excellence'
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
              Tennis & Education Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Expert guidance for student-athletes pursuing NCAA tennis opportunities
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
                Your Path to NCAA Tennis
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Navigating the NCAA recruitment process can be complex and overwhelming. 
                Our consulting services provide student-athletes and their families with 
                expert guidance to successfully navigate the path to collegiate tennis.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We understand the unique challenges of balancing academic excellence with 
                athletic performance, and we're here to help you achieve both goals while 
                finding the right college fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:tennis@advanceduniversalventures.com"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                >
                  Schedule Consultation
                </a>
                <Link
                  href="/join-us"
                  className="inline-block bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition text-center"
                >
                  Become a Consultant
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Trophy className="text-green-600 mr-4" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">NCAA Expertise</div>
                    <div className="text-gray-700">Deep understanding of regulations</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Target className="text-green-600 mr-4" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Personalized Approach</div>
                    <div className="text-gray-700">Tailored to each student-athlete</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-4" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Proven Results</div>
                    <div className="text-gray-700">Successful placements and outcomes</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support throughout your NCAA journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              What sets our consulting services apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A structured approach to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Assessment', desc: 'Evaluate your current status and goals' },
              { step: '2', title: 'Strategic Planning', desc: 'Develop personalized roadmap' },
              { step: '3', title: 'Active Support', desc: 'Ongoing guidance and assistance' },
              { step: '4', title: 'Achievement', desc: 'Reach your NCAA goals' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-green-600 mx-auto" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your NCAA Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's work together to make your collegiate tennis dreams a reality
          </p>
          <a
            href="mailto:tennis@advanceduniversalventures.com"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}


