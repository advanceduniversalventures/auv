'use client'

import Link from 'next/link'
import { ChevronLeft, Calendar } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import BookingCalendar, { TimeSlot } from '@/components/BookingCalendar'

// ============================================================
// MANAGE YOUR TIME SLOTS HERE
// To add/edit/remove time slots, modify this array and push to GitHub
// ============================================================
const timeSlots: TimeSlot[] = [
  {
    id: '1',
    date: '2026-03-15',          // Format: YYYY-MM-DD
    startTime: '09:00',          // Format: HH:MM (24-hour)
    endTime: '10:30',
    location: 'Bethesda Tennis Club',
    address: '7800 Arlington Rd, Bethesda, MD 20814',
    maxParticipants: 4,          // Max people per session
    currentParticipants: 0,      // Set to 0 for new slots
    price: 75                    // Price per person in USD
  },
  {
    id: '2',
    date: '2026-03-15',
    startTime: '14:00',
    endTime: '15:30',
    location: 'Rock Creek Tennis Center',
    address: '5200 16th St NW, Washington, DC 20011',
    maxParticipants: 4,
    currentParticipants: 0,
    price: 80
  },
  {
    id: '3',
    date: '2026-03-17',
    startTime: '10:00',
    endTime: '11:30',
    location: 'Bethesda Tennis Club',
    address: '7800 Arlington Rd, Bethesda, MD 20814',
    maxParticipants: 6,
    currentParticipants: 0,
    price: 65
  },
  {
    id: '4',
    date: '2026-03-18',
    startTime: '16:00',
    endTime: '17:30',
    location: 'Cabin John Regional Park',
    address: '7400 Tuckerman Ln, Rockville, MD 20852',
    maxParticipants: 4,
    currentParticipants: 0,
    price: 70
  },
  {
    id: '5',
    date: '2026-03-20',
    startTime: '09:00',
    endTime: '10:30',
    location: 'Bethesda Tennis Club',
    address: '7800 Arlington Rd, Bethesda, MD 20814',
    maxParticipants: 4,
    currentParticipants: 0,
    price: 75
  },
  {
    id: '6',
    date: '2026-03-22',
    startTime: '11:00',
    endTime: '12:30',
    location: 'Rock Creek Tennis Center',
    address: '5200 16th St NW, Washington, DC 20011',
    maxParticipants: 6,
    currentParticipants: 0,
    price: 60
  }
]
// ============================================================

export default function BookLessonPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tennis-education"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6"
          >
            <ChevronLeft size={20} />
            <span>{t('booking.backToTennis')}</span>
          </Link>
          
          <div className="text-center">
            <div className="inline-block bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <Calendar className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('booking.title')}
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('booking.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingCalendar timeSlots={timeSlots} />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('booking.howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('booking.step1Title')}</h3>
              <p className="text-gray-600">{t('booking.step1Desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('booking.step2Title')}</h3>
              <p className="text-gray-600">{t('booking.step2Desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('booking.step3Title')}</h3>
              <p className="text-gray-600">{t('booking.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
