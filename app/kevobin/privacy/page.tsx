import { Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function KevobinPrivacy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/saas" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to SaaS Solutions
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-block bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <Lock className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Kevobin Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your privacy and security are our top priorities
            </p>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
            <p className="text-green-800 font-semibold text-lg mb-2">✓ Your Privacy is Our Priority</p>
            <p className="text-green-700">
              Kevobin is designed with privacy first. All your data stays on your device. We do not collect, 
              upload, or share any of your information.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. What Information Does Kevobin Collect?</h2>
              <p className="text-gray-700 mb-4">
                <strong>Kevobin collects minimal information, and all data is stored locally on your device only.</strong>
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Stored Locally on Your Device:</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How Does Kevobin Use Your Information?</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. HealthKit and Pedometer Access</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Third-Party Services and Tracking</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Data Sharing and Disclosure</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Your Rights and Control</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Kevobin is designed for seniors and adult users. We do not knowingly collect information from children 
                under the age of 13. If you believe a child under 13 is using Kevobin, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or Kevobin's privacy 
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Advanced Universal Ventures, LLC</p>
                <p className="text-gray-700 mb-1">
                  <strong>Privacy Email:</strong> <a href="mailto:privacy@advanceduniversalventures.com" className="text-blue-600 hover:text-blue-700">privacy@advanceduniversalventures.com</a>
                </p>
                <p className="text-gray-700">Location: Maryland, United States</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-blue-800 font-semibold text-lg mb-2">Summary</p>
              <p className="text-blue-700">
                Kevobin is designed with your privacy in mind. All data is stored locally on your device, never uploaded 
                to servers, and never shared with third parties. You have complete control over your information. 
                Designed with love to keep families connected while respecting your privacy.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/saas"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to SaaS Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


