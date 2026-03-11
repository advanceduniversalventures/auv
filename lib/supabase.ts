import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface TimeSlot {
  id: string
  date: string
  start_time: string
  end_time: string
  location: string
  address: string
  max_participants: number
  min_participants: number
  current_participants: number
  price: number
  price_per_person: number
  lesson_type: 'individual' | 'duo' | 'group'
  status: 'open' | 'confirmed' | 'cancelled'
  is_active: boolean
}

export interface Booking {
  id?: string
  time_slot_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  participants: number
  notes?: string
  status?: string
}

export async function getTimeSlots(): Promise<TimeSlot[]> {
  const { data, error } = await supabase
    .from('time_slots')
    .select('*')
    .eq('is_active', true)
    .gte('date', new Date().toISOString().split('T')[0])
    .order('date', { ascending: true })
    .order('start_time', { ascending: true })

  if (error) {
    console.error('Error fetching time slots:', error)
    return []
  }

  return data || []
}

export async function createBooking(booking: Booking): Promise<{ success: boolean; error?: string }> {
  // First check if there's availability
  const { data: slot, error: slotError } = await supabase
    .from('time_slots')
    .select('*')
    .eq('id', booking.time_slot_id)
    .single()

  if (slotError || !slot) {
    return { success: false, error: 'Time slot not found' }
  }

  const availableSpots = slot.max_participants - slot.current_participants
  if (booking.participants > availableSpots) {
    return { success: false, error: 'Not enough spots available' }
  }

  // Create the booking
  const { error: bookingError } = await supabase
    .from('bookings')
    .insert([booking])

  if (bookingError) {
    console.error('Error creating booking:', bookingError)
    return { success: false, error: 'Failed to create booking' }
  }

  return { success: true }
}
