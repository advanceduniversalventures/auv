'use client'

import { useState, useMemo } from 'react'
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight, Check, Mail, User, Phone, X } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import emailjs from '@emailjs/browser'
import { supabase } from '@/lib/supabase'

export interface TimeSlot {
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

interface BookingCalendarProps {
  timeSlots: TimeSlot[]
  onBookingComplete?: (booking: BookingData) => void
}

export interface BookingData {
  slotId: string
  name: string
  email: string
  phone: string
  participants: number
  notes: string
  slot: TimeSlot
}

type BookingStep = 'select' | 'details' | 'confirm' | 'success'

function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export default function BookingCalendar({ timeSlots, onBookingComplete }: BookingCalendarProps) {
  const { t } = useI18n()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [bookingStep, setBookingStep] = useState<BookingStep>('select')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    notes: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate()
  }, [currentYear, currentMonth])

  const firstDayOfMonth = useMemo(() => {
    return new Date(currentYear, currentMonth, 1).getDay()
  }, [currentYear, currentMonth])

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getSlotsForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return timeSlots.filter(slot => slot.date === dateStr)
  }

  const hasSlots = (day: number) => {
    return getSlotsForDate(day).length > 0
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('booking.errors.nameRequired') as string
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('booking.errors.emailRequired') as string
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('booking.errors.emailInvalid') as string
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('booking.errors.phoneRequired') as string
    }
    
    if (selectedSlot && formData.participants > (selectedSlot.maxParticipants - selectedSlot.currentParticipants)) {
      newErrors.participants = t('booking.errors.tooManyParticipants') as string
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSelectSlot = (slot: TimeSlot) => {
    setSelectedSlot(slot)
    setBookingStep('details')
  }

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setBookingStep('confirm')
    }
  }

  const handleConfirmBooking = async () => {
    if (!selectedSlot) return
    
    setIsSubmitting(true)
    
    try {
      // First, save booking to Supabase
      const { error: bookingError } = await supabase
        .from('bookings')
        .insert([{
          time_slot_id: selectedSlot.id,
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          participants: formData.participants,
          notes: formData.notes || null
        }])

      if (bookingError) {
        throw new Error(`Database error: ${bookingError.message}`)
      }

      const bookingData: BookingData = {
        slotId: selectedSlot.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        participants: formData.participants,
        notes: formData.notes,
        slot: selectedSlot
      }

      const formattedDate = parseLocalDate(selectedSlot.date).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })

      // Send email notifications
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_tennis',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER || 'template_booking_owner',
        {
          to_email: 'tennis@advanceduniversalventures.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          participants: formData.participants,
          date: formattedDate,
          time: `${selectedSlot.startTime} - ${selectedSlot.endTime}`,
          location: selectedSlot.location,
          address: selectedSlot.address,
          price: `$${selectedSlot.price * formData.participants}`,
          notes: formData.notes || 'None'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY'
      )

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_tennis',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CUSTOMER || 'template_booking_customer',
        {
          to_email: formData.email,
          customer_name: formData.name,
          participants: formData.participants,
          date: formattedDate,
          time: `${selectedSlot.startTime} - ${selectedSlot.endTime}`,
          location: selectedSlot.location,
          address: selectedSlot.address,
          price: `$${selectedSlot.price * formData.participants}`,
          coach_email: 'tennis@advanceduniversalventures.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY'
      )

      setBookingStep('success')
      onBookingComplete?.(bookingData)
    } catch (error: any) {
      console.error('Booking error:', error)
      console.error('Error details:', error?.text || error?.message || JSON.stringify(error))
      alert(`${t('booking.errors.submitFailed')}\n\nError: ${error?.text || error?.message || 'Unknown error'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetBooking = () => {
    setSelectedSlot(null)
    setBookingStep('select')
    setFormData({
      name: '',
      email: '',
      phone: '',
      participants: 1,
      notes: ''
    })
    setErrors({})
  }

  const renderCalendar = () => {
    const days = []
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 md:h-16" />)
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const slotsForDay = getSlotsForDate(day)
      const hasAvailableSlots = slotsForDay.some(slot => slot.currentParticipants < slot.maxParticipants)
      const isPast = new Date(currentYear, currentMonth, day) < new Date(new Date().setHours(0, 0, 0, 0))
      
      days.push(
        <div
          key={day}
          className={`h-12 md:h-16 border border-gray-200 rounded-lg flex flex-col items-center justify-center relative cursor-pointer transition-all
            ${hasAvailableSlots && !isPast ? 'bg-green-50 hover:bg-green-100 border-green-300' : ''}
            ${isPast ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''}
          `}
          onClick={() => {
            if (hasAvailableSlots && !isPast) {
              setSelectedDay(day)
            }
          }}
        >
          <span className={`text-sm md:text-base font-medium ${hasAvailableSlots && !isPast ? 'text-green-800' : ''}`}>
            {day}
          </span>
          {hasAvailableSlots && !isPast && (
            <span className="text-xs text-green-600 hidden md:block">
              {slotsForDay.length} {t('booking.slot')}
            </span>
          )}
          {hasAvailableSlots && !isPast && (
            <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full md:hidden" />
          )}
        </div>
      )
    }
    
    return days
  }

  const renderDayModal = () => {
    if (selectedDay === null) return null
    
    const slotsForDay = getSlotsForDate(selectedDay)
    const availableSlots = slotsForDay.filter(s => s.currentParticipants < s.maxParticipants)
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`
    const formattedDate = parseLocalDate(dateStr).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedDay(null)}>
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-2xl">
            <h3 className="text-lg font-bold text-gray-900">{formattedDate}</h3>
            <button
              onClick={() => setSelectedDay(null)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 space-y-3">
            {availableSlots.length === 0 ? (
              <p className="text-gray-500 text-center py-8">{t('booking.noSlots')}</p>
            ) : (
              availableSlots.map(slot => {
                const lessonType = slot.lessonType
                const spotsLeft = slot.maxParticipants - slot.currentParticipants
                const needsMore = slot.currentParticipants < slot.minParticipants
                const moreNeeded = slot.minParticipants - slot.currentParticipants
                
                const typeStyles = {
                  individual: {
                    border: 'border-blue-200 bg-blue-50/30',
                    badge: 'bg-blue-100 text-blue-700',
                    button: 'bg-blue-600 hover:bg-blue-700',
                    icon: 'text-blue-600',
                    label: t('booking.individual') || 'Private (1 Person)'
                  },
                  duo: {
                    border: 'border-purple-200 bg-purple-50/30',
                    badge: 'bg-purple-100 text-purple-700',
                    button: 'bg-purple-600 hover:bg-purple-700',
                    icon: 'text-purple-600',
                    label: t('booking.duo') || 'Duo (2 People)'
                  },
                  group: {
                    border: 'border-green-200 bg-green-50/30',
                    badge: 'bg-green-100 text-green-700',
                    button: 'bg-green-600 hover:bg-green-700',
                    icon: 'text-green-600',
                    label: t('booking.group') || 'Group (4-8 People)'
                  }
                }
                
                const style = typeStyles[lessonType]
                
                return (
                  <div
                    key={slot.id}
                    onClick={() => {
                      setSelectedDay(null)
                      handleSelectSlot(slot)
                    }}
                    className={`border rounded-xl p-4 hover:shadow-md cursor-pointer transition-all ${style.border}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${style.badge}`}>
                        {style.label}
                      </span>
                      {needsMore && lessonType !== 'individual' && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                          {moreNeeded} {t('booking.moreNeeded') || 'more needed'}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <Clock size={16} className={style.icon} />
                      <span className="font-medium">{slot.startTime} - {slot.endTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <MapPin size={16} className={style.icon} />
                      <span>{slot.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Users size={14} />
                        <span>{spotsLeft} {t('booking.spotsLeft')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">${slot.pricePerPerson || slot.price}</span>
                        <button className={`px-3 py-1.5 rounded-lg text-sm font-medium transition text-white ${style.button}`}>
                          {t('booking.selectSlot')}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderSlotSelection = () => {
    // Only show slots at least 48 hours from now
    const minBookingTime = new Date()
    minBookingTime.setHours(minBookingTime.getHours() + 48)
    
    const availableSlots = timeSlots.filter(slot => {
      const slotDateTime = new Date(`${slot.date}T${slot.startTime}`)
      return slotDateTime >= minBookingTime && 
             slot.currentParticipants < slot.maxParticipants
    }).sort((a, b) => {
      const dateCompare = parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime()
      if (dateCompare !== 0) return dateCompare
      return a.startTime.localeCompare(b.startTime)
    })

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronLeft size={24} />
            </button>
            <h3 className="text-xl font-bold text-gray-900">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar()}
          </div>
          
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border border-green-300 rounded" />
              <span>{t('booking.available')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded" />
              <span>{t('booking.unavailable')}</span>
            </div>
          </div>
        </div>

        <div id="available-slots-list" className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('booking.availableSlots')}</h3>
          
          {availableSlots.length === 0 ? (
            <p className="text-gray-500 text-center py-8">{t('booking.noSlots')}</p>
          ) : (
            <div className="space-y-3">
              {availableSlots.map(slot => {
                const lessonType = slot.lessonType
                const spotsLeft = slot.maxParticipants - slot.currentParticipants
                const needsMore = slot.currentParticipants < slot.minParticipants
                const moreNeeded = slot.minParticipants - slot.currentParticipants
                
                const typeStyles = {
                  individual: {
                    border: 'border-blue-200 bg-blue-50/30',
                    badge: 'bg-blue-100 text-blue-700',
                    button: 'bg-blue-600 hover:bg-blue-700',
                    icon: 'text-blue-600',
                    label: t('booking.individual') || 'Private (1 Person)',
                    desc: t('booking.privateLesson') || 'Private 1-on-1 lesson'
                  },
                  duo: {
                    border: 'border-purple-200 bg-purple-50/30',
                    badge: 'bg-purple-100 text-purple-700',
                    button: 'bg-purple-600 hover:bg-purple-700',
                    icon: 'text-purple-600',
                    label: t('booking.duo') || 'Duo (2 People)',
                    desc: t('booking.duoLesson') || 'Semi-private lesson for 2'
                  },
                  group: {
                    border: 'border-green-200 bg-green-50/30',
                    badge: 'bg-green-100 text-green-700',
                    button: 'bg-green-600 hover:bg-green-700',
                    icon: 'text-green-600',
                    label: t('booking.group') || 'Group (4-8 People)',
                    desc: `${slot.currentParticipants}/${slot.maxParticipants} ${t('booking.enrolled') || 'enrolled'} · ${spotsLeft} ${t('booking.spotsLeft')}`
                  }
                }
                
                const style = typeStyles[lessonType]
                
                return (
                  <div
                    key={slot.id}
                    onClick={() => handleSelectSlot(slot)}
                    className={`border rounded-xl p-4 hover:shadow-md cursor-pointer transition-all ${style.border}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${style.badge}`}>
                            {style.label}
                          </span>
                          {lessonType !== 'individual' && slot.status === 'confirmed' && (
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                              {t('booking.confirmed') || 'Confirmed'}
                            </span>
                          )}
                          {needsMore && lessonType !== 'individual' && (
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                              {moreNeeded} {t('booking.moreNeeded') || 'more needed to start'}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-900 font-medium">
                          <Calendar size={18} className={style.icon} />
                          <span>{parseLocalDate(slot.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock size={18} className={style.icon} />
                          <span>{slot.startTime} - {slot.endTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin size={18} className={style.icon} />
                          <span>{slot.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Users size={16} className={style.icon} />
                          <span>{style.desc}</span>
                        </div>
                        {lessonType === 'group' && (
                          <div className="text-xs text-gray-500">
                            {t('booking.minParticipants') || 'Minimum'}: {slot.minParticipants} {t('booking.participants') || 'participants'}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-2xl font-bold text-gray-900">${slot.pricePerPerson || slot.price}</span>
                        <span className="text-sm text-gray-500">{t('booking.perPerson')}</span>
                        <button className={`px-4 py-2 rounded-lg font-medium transition text-white ${style.button}`}>
                          {t('booking.selectSlot')}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderDetailsForm = () => {
    if (!selectedSlot) return null

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <button
          onClick={() => setBookingStep('select')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft size={20} />
          <span>{t('booking.backToSlots')}</span>
        </button>

        <div className={`rounded-xl p-4 mb-6 ${
          selectedSlot.lessonType === 'individual' ? 'bg-blue-50' : 
          selectedSlot.lessonType === 'duo' ? 'bg-purple-50' : 'bg-green-50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{t('booking.selectedSlot')}</h4>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              selectedSlot.lessonType === 'individual' ? 'bg-blue-100 text-blue-700' :
              selectedSlot.lessonType === 'duo' ? 'bg-purple-100 text-purple-700' :
              'bg-green-100 text-green-700'
            }`}>
              {selectedSlot.lessonType === 'individual' ? (t('booking.individual') || 'Private (1 Person)') : 
               selectedSlot.lessonType === 'duo' ? (t('booking.duo') || 'Duo (2 People)') :
               (t('booking.group') || 'Group (4-8 People)')}
            </span>
          </div>
          <div className="space-y-1 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar size={16} className={
                selectedSlot.lessonType === 'individual' ? 'text-blue-600' : 
                selectedSlot.lessonType === 'duo' ? 'text-purple-600' : 'text-green-600'
              } />
              <span>{parseLocalDate(selectedSlot.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green-600" />
              <span>{selectedSlot.startTime} - {selectedSlot.endTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              <span>{selectedSlot.location} - {selectedSlot.address}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmitDetails} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <User size={16} className="inline mr-1" />
              {t('booking.yourName')} *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={t('booking.namePlaceholder') as string}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail size={16} className="inline mr-1" />
              {t('booking.yourEmail')} *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={t('booking.emailPlaceholder') as string}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Phone size={16} className="inline mr-1" />
              {t('booking.yourPhone')} *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={t('booking.phonePlaceholder') as string}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Users size={16} className="inline mr-1" />
              {t('booking.numberOfPeople')} *
            </label>
            <select
              value={formData.participants}
              onChange={e => setFormData({ ...formData, participants: parseInt(e.target.value) })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.participants ? 'border-red-500' : 'border-gray-300'}`}
            >
              {Array.from({ length: selectedSlot.maxParticipants - selectedSlot.currentParticipants }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num} {num === 1 ? t('booking.person') : t('booking.people')}</option>
              ))}
            </select>
            {errors.participants && <p className="text-red-500 text-sm mt-1">{errors.participants}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('booking.notes')}
            </label>
            <textarea
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              rows={3}
              placeholder={t('booking.notesPlaceholder') as string}
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">{t('booking.total')}</span>
              <span className="text-2xl font-bold text-green-600">
                ${(selectedSlot.pricePerPerson || selectedSlot.price) * formData.participants}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              ${selectedSlot.pricePerPerson || selectedSlot.price} x {formData.participants} {formData.participants === 1 ? t('booking.person') : t('booking.people')}
            </p>
          </div>

          {selectedSlot.lessonType === 'duo' && selectedSlot.currentParticipants < selectedSlot.minParticipants && (
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="text-purple-800 text-sm">
                <strong>{t('booking.duoNotice') || 'Note:'}</strong> {t('booking.duoNoticeText') || 'This lesson requires 2 people. You can book for yourself and a partner, or wait for another person to join.'}
              </p>
            </div>
          )}

          {selectedSlot.lessonType === 'group' && selectedSlot.currentParticipants < selectedSlot.minParticipants && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <strong>{t('booking.groupNotice') || 'Note:'}</strong> {t('booking.groupNoticeText') || 'This is a group lesson that requires a minimum of'} {selectedSlot.minParticipants} {t('booking.participants') || 'participants'}. {t('booking.groupNoticeText2') || 'If the minimum is not met, you will be notified and can reschedule or receive a full refund.'}
              </p>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold transition text-white ${
              selectedSlot.lessonType === 'individual' ? 'bg-blue-600 hover:bg-blue-700' :
              selectedSlot.lessonType === 'duo' ? 'bg-purple-600 hover:bg-purple-700' :
              'bg-green-600 hover:bg-green-700'
            }`}
          >
            {t('booking.continueToConfirm')}
          </button>
        </form>
      </div>
    )
  }

  const renderConfirmation = () => {
    if (!selectedSlot) return null

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <button
          onClick={() => setBookingStep('details')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft size={20} />
          <span>{t('booking.backToDetails')}</span>
        </button>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('booking.confirmBooking')}</h3>

        <div className="space-y-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-3">{t('booking.lessonDetails')}</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-green-600" />
                <span>{parseLocalDate(selectedSlot.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-green-600" />
                <span>{selectedSlot.startTime} - {selectedSlot.endTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-green-600" />
                <span>{selectedSlot.location}</span>
              </div>
              <div className="text-sm text-gray-500 ml-6">{selectedSlot.address}</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-3">{t('booking.yourDetails')}</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gray-500" />
                <span>{formData.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gray-500" />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gray-500" />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-gray-500" />
                <span>{formData.participants} {formData.participants === 1 ? t('booking.person') : t('booking.people')}</span>
              </div>
              {formData.notes && (
                <div className="mt-2 text-sm">
                  <span className="font-medium">{t('booking.notes')}:</span> {formData.notes}
                </div>
              )}
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">{t('booking.totalAmount')}</span>
              <span className="text-3xl font-bold">${selectedSlot.price * formData.participants}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          {t('booking.confirmationNote')}
        </p>

        <button
          onClick={handleConfirmBooking}
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {t('booking.processing')}
            </>
          ) : (
            <>
              <Check size={20} />
              {t('booking.confirmAndBook')}
            </>
          )}
        </button>
      </div>
    )
  }

  const renderSuccess = () => {
    if (!selectedSlot) return null

    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-green-600" size={40} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('booking.bookingConfirmed')}</h3>
        <p className="text-gray-600 mb-6">{t('booking.confirmationSent')}</p>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <h4 className="font-semibold text-gray-900 mb-3">{t('booking.bookingSummary')}</h4>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-green-600" />
              <span>{parseLocalDate(selectedSlot.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-green-600" />
              <span>{selectedSlot.startTime} - {selectedSlot.endTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-green-600" />
              <span>{selectedSlot.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-green-600" />
              <span>{formData.participants} {formData.participants === 1 ? t('booking.person') : t('booking.people')}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          {t('booking.questionsContact')} <a href="mailto:tennis@advanceduniversalventures.com" className="text-green-600 hover:underline">tennis@advanceduniversalventures.com</a>
        </p>

        <button
          onClick={resetBooking}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          {t('booking.bookAnother')}
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {renderDayModal()}
      {bookingStep === 'select' && renderSlotSelection()}
      {bookingStep === 'details' && renderDetailsForm()}
      {bookingStep === 'confirm' && renderConfirmation()}
      {bookingStep === 'success' && renderSuccess()}
    </div>
  )
}
