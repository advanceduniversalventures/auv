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
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                <p className="text-gray-800 font-semibold mb-2">App-Specific Privacy Policies</p>
                <p className="text-gray-700 text-sm">
                  While this is our general privacy policy, each of our applications may have specific privacy 
                  considerations based on the type of data they collect. Please refer to the app-specific sections 
                  below for detailed information about:
                </p>
                <ul className="list-disc pl-6 text-gray-700 text-sm mt-2 space-y-1">
                  <li><strong>Kevobin</strong> - Health tracking for seniors (see dedicated section below)</li>
                  <li>HealthTrack Pro - Health & Wellness data</li>
                  <li>FitLife Coach - Fitness & Training data</li>
                  <li>Lifestyle Balance - Lifestyle & Habit tracking data</li>
                  <li>Wellness Planner - Wellness planning & scheduling data</li>
                </ul>
              </div>
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
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">App-Specific Data Collection</h4>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">HealthTrack Pro</h5>
                  <p className="text-gray-700 text-sm mb-2">This app collects sensitive health information including:</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                    <li>Vital signs and health metrics</li>
                    <li>Medication schedules and history</li>
                    <li>Medical appointment information</li>
                    <li>Health goals and progress tracking</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2 italic">All health data is encrypted and stored securely in compliance with HIPAA guidelines where applicable.</p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">FitLife Coach</h5>
                  <p className="text-gray-700 text-sm mb-2">This app collects fitness-related information including:</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                    <li>Workout routines and exercise data</li>
                    <li>Nutrition and meal tracking information</li>
                    <li>Body measurements and progress photos (optional)</li>
                    <li>Wearable device integration data</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Lifestyle Balance</h5>
                  <p className="text-gray-700 text-sm mb-2">This app collects lifestyle management data including:</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                    <li>Habit tracking information</li>
                    <li>Goal setting and achievement data</li>
                    <li>Time management and scheduling data</li>
                    <li>Mindfulness and wellness activity logs</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Wellness Planner</h5>
                  <p className="text-gray-700 text-sm mb-2">This app collects wellness planning data including:</p>
                  <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                    <li>Personalized schedule preferences</li>
                    <li>Wellness activity planning data</li>
                    <li>Sleep, nutrition, and exercise scheduling</li>
                    <li>Calendar integration data</li>
                  </ul>
                </div>
              </div>
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

      {/* Kevobin Privacy Policy */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="text-blue-800 mr-3" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Kevobin Privacy Policy</h2>
            </div>
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-green-800 font-semibold text-lg mb-2">✓ Your Privacy is Our Priority</p>
              <p className="text-green-700 text-sm">
                Kevobin is designed with privacy first. All your data stays on your device. We do not collect, 
                upload, or share any of your information.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h3>
              <p className="text-gray-700 mb-4">
                Welcome to Kevobin, a health tracking application designed specifically for seniors. Advanced Universal 
                Ventures, LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how Kevobin handles your information.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Kevobin</strong> is a simple daily companion designed to help seniors stay connected and healthy. 
                The app manages daily health essentials with a large, easy-to-read interface including daily check-ins, 
                medication reminders, hydration tracking, safety features, activity monitoring, and mindfulness content.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. What Information Does Kevobin Collect?</h3>
              <p className="text-gray-700 mb-4">
                <strong>Kevobin collects minimal information, and all data is stored locally on your device only.</strong>
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Data Stored Locally on Your Device:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Hydration Data:</strong> Your daily water intake records</li>
                  <li><strong>Step Count:</strong> Daily step data from Apple HealthKit or device pedometer</li>
                  <li><strong>Medication Records:</strong> Your medication schedule and intake history</li>
                  <li><strong>Daily Check-ins:</strong> Your "I'm OK" check-in timestamps</li>
                  <li><strong>Activity Data:</strong> Exercise and activity logs</li>
                  <li><strong>App Preferences:</strong> Settings and customization choices</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-800 font-semibold mb-2">What We DO NOT Collect:</p>
                <ul className="list-disc pl-6 text-red-700 text-sm space-y-1">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Location data or GPS information</li>
                  <li>Contact information or address book data</li>
                  <li>Payment or financial information</li>
                  <li>Any data that identifies you personally</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. How Does Kevobin Use Your Information?</h3>
              <p className="text-gray-700 mb-4">
                All information collected by Kevobin is used <strong>exclusively on your device</strong> to provide 
                the app's features:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Display your daily hydration progress</li>
                <li>Show your step count and activity data</li>
                <li>Provide medication reminders based on your schedule</li>
                <li>Track your daily check-ins</li>
                <li>Store your activity history</li>
                <li>Remember your app preferences and settings</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Your data never leaves your device.</strong> It is stored using AsyncStorage, which is a 
                local storage system on your mobile device.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h3>
              <p className="text-gray-700 mb-4">
                <strong>All data is stored locally on your device using AsyncStorage.</strong> This means:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Your data never leaves your device</li>
                <li>No data is uploaded to cloud servers</li>
                <li>No data is transmitted over the internet</li>
                <li>Your data is only accessible on your device</li>
                <li>If you delete the app, all data is permanently deleted</li>
              </ul>
              <p className="text-gray-700 mb-4">
                The security of your data depends on the security of your device. We recommend using device 
                passcodes, biometric authentication, and keeping your device's operating system updated.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. HealthKit and Pedometer Access</h3>
              <p className="text-gray-700 mb-4">
                Kevobin may request access to Apple HealthKit or your device's pedometer to track your daily steps. 
                This access is optional and can be denied or revoked at any time through your device settings.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>If you grant access, Kevobin will only read step count data</li>
                <li>Step data is stored locally on your device only</li>
                <li>You can revoke this access at any time in your device's Privacy settings</li>
                <li>If you deny access, the app will still function, but step tracking will be unavailable</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services and Tracking</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <p className="text-green-800 font-semibold mb-2">✓ No Third-Party Tracking</p>
                <p className="text-green-700 text-sm mb-2">
                  Kevobin does <strong>NOT</strong> use:
                </p>
                <ul className="list-disc pl-6 text-green-700 text-sm space-y-1">
                  <li>Analytics services (Google Analytics, Firebase Analytics, etc.)</li>
                  <li>Advertising networks or ad tracking</li>
                  <li>Crash reporting services</li>
                  <li>User behavior tracking tools</li>
                  <li>Any third-party data collection services</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">
                Kevobin operates completely offline and does not connect to any external services for data collection 
                or tracking purposes.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing and Disclosure</h3>
              <p className="text-gray-700 mb-4">
                <strong>We do not share, sell, or disclose your data to anyone.</strong> Because all data is stored 
                locally on your device:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>We cannot access your data</li>
                <li>We cannot share your data</li>
                <li>We cannot sell your data</li>
                <li>We cannot use your data for any purpose</li>
              </ul>
              <p className="text-gray-700 mb-4">
                The only way your data could be accessed is if someone has physical access to your device and knows 
                your device passcode. We recommend keeping your device secure.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Control</h3>
              <p className="text-gray-700 mb-4">
                You have complete control over your data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> All your data is visible within the app</li>
                <li><strong>Deletion:</strong> Delete the app to permanently remove all data, or use the app's data reset feature if available</li>
                <li><strong>Modification:</strong> You can modify or delete individual records within the app</li>
                <li><strong>Permissions:</strong> You can revoke HealthKit or pedometer access at any time in device settings</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h3>
              <p className="text-gray-700 mb-4">
                Kevobin is designed for seniors and adult users. We do not knowingly collect information from children 
                under the age of 13. If you believe a child under 13 is using Kevobin, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating 
                the "Last updated" date at the top of this policy. We encourage you to review this Privacy Policy 
                periodically.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> Even if this Privacy Policy changes, Kevobin's core privacy principle 
                remains the same: all data stays on your device and is never uploaded or shared.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or Kevobin's privacy 
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Advanced Universal Ventures, LLC</p>
                <p className="text-gray-700 mb-1">
                  <strong>Privacy Email:</strong> <a href="mailto:privacy@advanceduniversalventures.com" className="text-primary-600 hover:text-primary-700">privacy@advanceduniversalventures.com</a>
                </p>
                <p className="text-gray-700">Location: Maryland, United States</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-800 font-semibold mb-2">Summary</p>
              <p className="text-blue-700 text-sm">
                Kevobin is designed with your privacy in mind. All data is stored locally on your device, never uploaded 
                to servers, and never shared with third parties. You have complete control over your information. 
                Designed with love to keep families connected while respecting your privacy.
              </p>
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

