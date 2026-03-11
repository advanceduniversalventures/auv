'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Calendar, Loader2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import BookingCalendar from '@/components/BookingCalendar'
import { supabase, TimeSlot as DBTimeSlot } from '@/lib/supabase'

interface TimeSlot {
  id: string
  date: string
  startTime: string
  endTime: string
  location: string
  address: string
  maxParticipants: number
  minParticipants: number
  currentParticipants: number
  price: number
  pricePerPerson: number
  lessonType: 'individual' | 'duo' | 'group'
  status: 'open' | 'confirmed' | 'cancelled'
}

function convertDBSlotToUISlot(dbSlot: DBTimeSlot): TimeSlot {
  return {
    id: dbSlot.id,
    date: dbSlot.date,
    startTime: dbSlot.start_time.slice(0, 5),
    endTime: dbSlot.end_time.slice(0, 5),
    location: dbSlot.location,
    address: dbSlot.address,
    maxParticipants: dbSlot.max_participants,
    minParticipants: dbSlot.min_participants,
    currentParticipants: dbSlot.current_participants,
    price: Number(dbSlot.price),
    pricePerPerson: Number(dbSlot.price_per_person),
    lessonType: dbSlot.lesson_type,
    status: dbSlot.status
  }
}

export default function BookLessonPage() {
  const { t } = useI18n()
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTimeSlots = async () => {
    try {
      // Only show slots at least 48 hours from now
      const minBookingDate = new Date()
      minBookingDate.setHours(minBookingDate.getHours() + 48)
      const minDateStr = minBookingDate.toISOString().split('T')[0]
      
      const { data, error } = await supabase
        .from('time_slots')
        .select('*')
        .eq('is_active', true)
        .gte('date', minDateStr)
        .order('date', { ascending: true })
        .order('start_time', { ascending: true })

      if (error) throw error

      const slots = (data || []).map(convertDBSlotToUISlot)
      setTimeSlots(slots)
    } catch (err) {
      console.error('Error fetching time slots:', err)
      setError('Failed to load available time slots')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTimeSlots()

    const channel = supabase
      .channel('time_slots_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'time_slots' },
        () => {
          fetchTimeSlots()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleBookingComplete = () => {
    fetchTimeSlots()
  }

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
          {/* Booking Policy Notice */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-blue-600 text-sm font-bold">i</span>
              </div>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">{t('booking.bookingNotice')}</p>
                <p className="text-blue-700">{t('booking.cancellationPolicy')}</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-green-600" />
              <span className="ml-3 text-gray-600">{t('booking.loading') || 'Loading available times...'}</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={() => { setLoading(true); setError(null); fetchTimeSlots(); }}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Try Again
              </button>
            </div>
          ) : (
            <BookingCalendar timeSlots={timeSlots} onBookingComplete={handleBookingComplete} />
          )}
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
