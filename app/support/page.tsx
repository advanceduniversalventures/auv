import { Shield, Lock, FileText, Mail, HelpCircle, AlertCircle } from 'lucide-react'

export default function Support() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Support & Privacy
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your privacy and security are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="text-gray-800 mr-3" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h3>
              <p className="text-gray-700 mb-4">
                Advanced Universal Ventures, LLC ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you use our software applications, websites, and services.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h3>
              <p className="text-gray-700 mb-4">We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Health and fitness data (when using our health and fitness applications)</li>
                <li>Usage data and analytics</li>
                <li>Device information and technical data</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h3>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h3>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in operating our services (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h3>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h3>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected information from 
                a child under 13, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Advanced Universal Ventures, LLC</p>
                <p className="text-gray-700">Email: privacy@advanceduniversalventures.com</p>
                <p className="text-gray-700">Location: Maryland, United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="text-gray-800 mr-3" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Terms of Service</h2>
            </div>
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing and using the services provided by Advanced Universal Ventures, LLC, you accept 
                and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h3>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily use our services for personal, non-commercial transitory 
                viewing only. This is the grant of a license, not a transfer of title, and under this license 
                you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in our services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                The materials on our services are provided on an 'as is' basis. Advanced Universal Ventures, LLC 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h3>
              <p className="text-gray-700 mb-4">
                In no event shall Advanced Universal Ventures, LLC or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on our services.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Revisions</h3>
              <p className="text-gray-700 mb-4">
                Advanced Universal Ventures, LLC may revise these terms of service at any time without notice. 
                By using our services, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="text-gray-800 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-xl text-gray-600">
              We're here to assist you with any questions or concerns
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Mail className="text-gray-800 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Email Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For general inquiries, privacy concerns, or technical support:
                </p>
                <a
                  href="mailto:support@advanceduniversalventures.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  support@advanceduniversalventures.com
                </a>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <AlertCircle className="text-gray-800 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Report an Issue</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Found a bug or have a security concern? Let us know:
                </p>
                <a
                  href="mailto:security@advanceduniversalventures.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  security@advanceduniversalventures.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

