import { Users, Code, GraduationCap, Video, Briefcase, Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function JoinUs() {
  const positions = [
    {
      icon: Code,
      title: 'Software Developer',
      department: 'SaaS Solutions',
      description: 'Build innovative mobile and web applications in health, fitness, and lifestyle domains.',
      requirements: [
        'Experience with React Native, Next.js, or similar frameworks',
        'Strong problem-solving skills',
        'Passion for creating user-friendly applications',
        'Knowledge of modern development practices'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Tennis Education Consultant',
      department: 'Tennis & Education',
      description: 'Guide student-athletes through the NCAA recruitment process and academic planning.',
      requirements: [
        'Deep understanding of NCAA regulations',
        'Experience in college athletics or education',
        'Excellent communication and mentoring skills',
        'Passion for helping student-athletes succeed'
      ]
    },
    {
      icon: Video,
      title: 'Social Media Content Writer',
      department: 'Content & Social Media',
      description: 'Plan and write engaging content scripts for short-form and long-form social media videos.',
      requirements: [
        'Strong writing and storytelling skills for video content',
        'Understanding of social media trends and audience engagement',
        'Ability to translate business goals into creative content ideas',
        'Comfort collaborating with video editors and on-camera talent'
      ]
    },
    {
      icon: Video,
      title: 'Video Editor',
      department: 'Content & Social Media',
      description: 'Edit and refine video content for TikTok, Instagram Reels, YouTube, and other platforms.',
      requirements: [
        'Experience with video editing tools (e.g., CapCut, Premiere Pro, Final Cut, or similar)',
        'Sense of pacing, music, and visual storytelling for social platforms',
        'Ability to optimize content for different formats and aspect ratios',
        'Attention to detail and ability to work with feedback quickly'
      ]
    },
    {
      icon: Briefcase,
      title: 'Social Media Business Manager',
      department: 'Content & Social Media',
      description: 'Build partnerships with brands, events, and organizations for collaborations and sponsorships.',
      requirements: [
        'Experience in business development, partnerships, or influencer marketing',
        'Strong networking and relationship-building skills',
        'Comfort reaching out to businesses, events, and agencies',
        'Ability to negotiate win-win collaboration agreements'
      ]
    },
    {
      icon: Users,
      title: 'Social Media Operations',
      department: 'Content & Social Media',
      description: 'Operate and manage our social media accounts day-to-day across multiple platforms.',
      requirements: [
        'Hands-on experience managing social media accounts',
        'Ability to schedule posts, respond to comments, and monitor community feedback',
        'Familiarity with analytics and performance tracking tools',
        'Highly organized with strong attention to detail'
      ]
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Competitive Compensation',
      description: 'Fair and competitive salary packages with performance incentives'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with a diverse, talented team in a supportive atmosphere'
    },
    {
      icon: Briefcase,
      title: 'Growth Opportunities',
      description: 'Professional development and career advancement pathways'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Work',
      description: 'Remote and hybrid work options to fit your lifestyle'
    }
  ]

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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Be part of an innovative team shaping the future of technology, education, and content creation
            </p>
            <a
              href="#open-positions"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Advanced Universal Ventures?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building something special, and we want you to be part of it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200"
                >
                  <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Advanced Universal Ventures, we believe in fostering an environment where innovation 
                thrives, diversity is celebrated, and every team member can make a meaningful impact.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We value collaboration, continuous learning, and a growth mindset. Our team members 
                are encouraged to bring their unique perspectives, take initiative, and contribute to 
                our shared mission of excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're passionate about building cutting-edge software, helping students achieve 
                their dreams, or creating compelling content, you'll find a place to grow and excel here.
              </p>
              <ul className="space-y-3">
                {['Innovation & Creativity', 'Collaboration & Teamwork', 'Continuous Learning', 'Work-Life Balance', 'Diversity & Inclusion'].map((value, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="text-orange-600 mr-3" size={20} />
                    <span className="text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-600 mb-4">AUV</div>
                <div className="text-2xl font-semibold text-gray-900 mb-6">Our Values</div>
                <div className="space-y-4 text-left">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="font-semibold text-gray-900">Excellence</div>
                    <div className="text-gray-600 text-sm">Striving for the highest standards in everything we do</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="font-semibold text-gray-900">Integrity</div>
                    <div className="text-gray-600 text-sm">Doing the right thing, always</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="font-semibold text-gray-900">Impact</div>
                    <div className="text-gray-600 text-sm">Making a positive difference in people's lives</div>
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => {
              const IconComponent = position.icon
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
                        <h3 className="text-3xl font-bold text-gray-900">{position.title}</h3>
                        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{position.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckCircle className="text-orange-600 mr-2 mt-1 flex-shrink-0" size={20} />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={`mailto:careers@advanceduniversalventures.com?subject=Application: ${position.title}`}
                        className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                      >
                        Apply Now
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
              Don't See a Perfect Match?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We're always looking for talented individuals who share our passion and values. 
              Send us your resume and let us know how you'd like to contribute!
            </p>
            <a
              href="mailto:careers@advanceduniversalventures.com?subject=General Application"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              Submit General Application
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join us in building innovative solutions and creating meaningful experiences
          </p>
          <a
            href="mailto:careers@advanceduniversalventures.com"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}


