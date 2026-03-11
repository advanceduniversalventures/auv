'use client'

import { useState, useEffect } from 'react'
import { 
  Lock, LogOut, Calendar, Users, Plus, Trash2, Edit2, 
  Check, X, Clock, MapPin, DollarSign, RefreshCw,
  ChevronDown, ChevronUp, AlertCircle
} from 'lucide-react'
import { supabase, TimeSlot as DBTimeSlot, Booking } from '@/lib/supabase'

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ''

interface BookingWithSlot extends Booking {
  time_slots?: DBTimeSlot
  created_at?: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [activeTab, setActiveTab] = useState<'slots' | 'bookings'>('slots')
  const [timeSlots, setTimeSlots] = useState<DBTimeSlot[]>([])
  const [bookings, setBookings] = useState<BookingWithSlot[]>([])
  const [loading, setLoading] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingSlot, setEditingSlot] = useState<DBTimeSlot | null>(null)
  const [expandedBookings, setExpandedBookings] = useState<Set<string>>(new Set())

  const [newSlot, setNewSlot] = useState({
    date: '',
    start_time: '10:00',
    end_time: '11:30',
    location: '',
    address: '',
    max_participants: 8,
    min_participants: 4,
    price: 50,
    price_per_person: 50,
    lesson_type: 'group' as 'individual' | 'duo' | 'group',
    is_active: true
  })

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_auth')
    if (saved === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchData()
    }
  }, [isAuthenticated, activeTab])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_auth', 'true')
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_auth')
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      if (activeTab === 'slots') {
        const { data, error } = await supabase
          .from('time_slots')
          .select('*')
          .order('date', { ascending: true })
          .order('start_time', { ascending: true })

        if (error) throw error
        setTimeSlots(data || [])
      } else {
        const { data, error } = await supabase
          .from('bookings')
          .select('*, time_slots(*)')
          .order('created_at', { ascending: false })

        if (error) throw error
        setBookings(data || [])
      }
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddSlot = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { error } = await supabase.from('time_slots').insert([{
        ...newSlot,
        current_participants: 0,
        status: 'open'
      }])

      if (error) throw error

      setShowAddForm(false)
      setNewSlot({
        date: '',
        start_time: '10:00',
        end_time: '11:30',
        location: '',
        address: '',
        max_participants: 8,
        min_participants: 4,
        price: 50,
        price_per_person: 50,
        lesson_type: 'group',
        is_active: true
      })
      fetchData()
    } catch (err) {
      console.error('Error adding slot:', err)
      alert('Failed to add time slot')
    }
  }

  const handleUpdateSlot = async (slot: DBTimeSlot) => {
    try {
      const { error } = await supabase
        .from('time_slots')
        .update({
          date: slot.date,
          start_time: slot.start_time,
          end_time: slot.end_time,
          location: slot.location,
          address: slot.address,
          max_participants: slot.max_participants,
          min_participants: slot.min_participants,
          current_participants: slot.current_participants,
          price: slot.price,
          price_per_person: slot.price_per_person,
          lesson_type: slot.lesson_type,
          is_active: slot.is_active,
          status: slot.status
        })
        .eq('id', slot.id)

      if (error) throw error

      setEditingSlot(null)
      fetchData()
    } catch (err) {
      console.error('Error updating slot:', err)
      alert('Failed to update time slot')
    }
  }

  const handleDeleteSlot = async (id: string) => {
    if (!confirm('Are you sure you want to delete this time slot? This cannot be undone.')) return

    try {
      const { error } = await supabase.from('time_slots').delete().eq('id', id)
      if (error) throw error
      fetchData()
    } catch (err) {
      console.error('Error deleting slot:', err)
      alert('Failed to delete time slot. It may have existing bookings.')
    }
  }

  const handleToggleActive = async (slot: DBTimeSlot) => {
    try {
      const { error } = await supabase
        .from('time_slots')
        .update({ is_active: !slot.is_active })
        .eq('id', slot.id)

      if (error) throw error
      fetchData()
    } catch (err) {
      console.error('Error toggling slot:', err)
    }
  }

  const handleCancelBooking = async (booking: BookingWithSlot) => {
    if (!confirm(`Cancel booking for ${booking.customer_name}? This will free up ${booking.participants} spot(s).`)) return

    try {
      const { error: deleteError } = await supabase
        .from('bookings')
        .delete()
        .eq('id', booking.id)

      if (deleteError) throw deleteError

      if (booking.time_slot_id) {
        const slot = timeSlots.find(s => s.id === booking.time_slot_id) || booking.time_slots
        if (slot) {
          const { error: updateError } = await supabase
            .from('time_slots')
            .update({ 
              current_participants: Math.max(0, slot.current_participants - booking.participants)
            })
            .eq('id', booking.time_slot_id)

          if (updateError) throw updateError
        }
      }

      fetchData()
    } catch (err) {
      console.error('Error canceling booking:', err)
      alert('Failed to cancel booking')
    }
  }

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number)
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-green-600" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
            <p className="text-gray-600 mt-2">Enter password to continue</p>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 mb-4"
              autoFocus
            />
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">AUV Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('slots')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'slots' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Calendar size={20} />
            Time Slots
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'bookings' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users size={20} />
            Bookings
          </button>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-gray-50 ml-auto"
          >
            <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {activeTab === 'slots' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Manage Time Slots ({timeSlots.length} total)
              </h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
              >
                <Plus size={20} />
                Add New Slot
              </button>
            </div>

            {showAddForm && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Add New Time Slot</h3>
                <form onSubmit={handleAddSlot} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input
                      type="date"
                      required
                      value={newSlot.date}
                      onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
                    <input
                      type="time"
                      required
                      value={newSlot.start_time}
                      onChange={(e) => setNewSlot({ ...newSlot, start_time: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time *</label>
                    <input
                      type="time"
                      required
                      value={newSlot.end_time}
                      onChange={(e) => setNewSlot({ ...newSlot, end_time: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={newSlot.location}
                      onChange={(e) => setNewSlot({ ...newSlot, location: e.target.value })}
                      placeholder="e.g., Bethesda Tennis Club"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                    <input
                      type="text"
                      required
                      value={newSlot.address}
                      onChange={(e) => setNewSlot({ ...newSlot, address: e.target.value })}
                      placeholder="Full address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Type *</label>
                    <select
                      value={newSlot.lesson_type}
                      onChange={(e) => {
                        const type = e.target.value as 'individual' | 'duo' | 'group'
                        const defaults = {
                          individual: { max: 1, min: 1 },
                          duo: { max: 2, min: 2 },
                          group: { max: 8, min: 4 }
                        }
                        setNewSlot({ 
                          ...newSlot, 
                          lesson_type: type,
                          max_participants: defaults[type].max,
                          min_participants: defaults[type].min
                        })
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="individual">Private (1 person)</option>
                      <option value="duo">Duo (2 people)</option>
                      <option value="group">Group (4-8 people)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
                    <input
                      type="number"
                      min="1"
                      value={newSlot.max_participants}
                      onChange={(e) => setNewSlot({ ...newSlot, max_participants: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Participants</label>
                    <input
                      type="number"
                      min="1"
                      value={newSlot.min_participants}
                      onChange={(e) => setNewSlot({ ...newSlot, min_participants: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price per Person ($)</label>
                    <input
                      type="number"
                      min="0"
                      value={newSlot.price_per_person}
                      onChange={(e) => setNewSlot({ 
                        ...newSlot, 
                        price_per_person: parseInt(e.target.value),
                        price: parseInt(e.target.value)
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="md:col-span-2 lg:col-span-3 flex gap-3">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                    >
                      Add Time Slot
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Enrolled</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {timeSlots.map((slot) => (
                      <tr key={slot.id} className={`hover:bg-gray-50 ${!slot.is_active ? 'bg-gray-100 opacity-60' : ''}`}>
                        <td className="px-4 py-3 text-sm text-gray-900">{formatDate(slot.date)}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {slot.start_time.slice(0, 5)} - {slot.end_time.slice(0, 5)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{slot.location}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            slot.lesson_type === 'individual' ? 'bg-blue-100 text-blue-700' :
                            slot.lesson_type === 'duo' ? 'bg-purple-100 text-purple-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {slot.lesson_type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`font-medium ${
                            slot.current_participants >= slot.max_participants ? 'text-red-600' :
                            slot.current_participants >= slot.min_participants ? 'text-green-600' :
                            'text-amber-600'
                          }`}>
                            {slot.current_participants}/{slot.max_participants}
                          </span>
                          <span className="text-gray-500 text-xs ml-1">(min: {slot.min_participants})</span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">${slot.price_per_person}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleToggleActive(slot)}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              slot.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {slot.is_active ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingSlot(slot)}
                              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                              title="Edit"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteSlot(slot.id)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {timeSlots.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No time slots found. Add one to get started.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Manage Bookings ({bookings.length} total)
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Contact</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Lesson</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Participants</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900">{booking.customer_name}</div>
                          {booking.notes && (
                            <div className="text-xs text-gray-500 mt-1">Note: {booking.notes}</div>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <div className="text-gray-900">{booking.customer_email}</div>
                          <div className="text-gray-500">{booking.customer_phone}</div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {booking.time_slots ? (
                            <div>
                              <div className="font-medium text-gray-900">
                                {formatDate(booking.time_slots.date)}
                              </div>
                              <div className="text-gray-500">
                                {booking.time_slots.start_time.slice(0, 5)} - {booking.time_slots.end_time.slice(0, 5)}
                              </div>
                              <div className="text-gray-500 text-xs">{booking.time_slots.location}</div>
                            </div>
                          ) : (
                            <span className="text-gray-400">Slot deleted</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className="font-medium text-gray-900">{booking.participants}</span>
                          <span className="text-gray-500"> person(s)</span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleCancelBooking(booking)}
                            className="flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded text-sm font-medium"
                          >
                            <X size={14} />
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {bookings.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No bookings found.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {editingSlot && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Edit Time Slot</h3>
              <button onClick={() => setEditingSlot(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleUpdateSlot(editingSlot)
              }}
              className="p-6 space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={editingSlot.date}
                    onChange={(e) => setEditingSlot({ ...editingSlot, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Type</label>
                  <select
                    value={editingSlot.lesson_type}
                    onChange={(e) => setEditingSlot({ 
                      ...editingSlot, 
                      lesson_type: e.target.value as 'individual' | 'duo' | 'group'
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="individual">Private</option>
                    <option value="duo">Duo</option>
                    <option value="group">Group</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                  <input
                    type="time"
                    value={editingSlot.start_time.slice(0, 5)}
                    onChange={(e) => setEditingSlot({ ...editingSlot, start_time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                  <input
                    type="time"
                    value={editingSlot.end_time.slice(0, 5)}
                    onChange={(e) => setEditingSlot({ ...editingSlot, end_time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={editingSlot.location}
                    onChange={(e) => setEditingSlot({ ...editingSlot, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={editingSlot.address}
                    onChange={(e) => setEditingSlot({ ...editingSlot, address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Participants</label>
                  <input
                    type="number"
                    min="0"
                    value={editingSlot.current_participants}
                    onChange={(e) => setEditingSlot({ ...editingSlot, current_participants: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
                  <input
                    type="number"
                    min="1"
                    value={editingSlot.max_participants}
                    onChange={(e) => setEditingSlot({ ...editingSlot, max_participants: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Min Participants</label>
                  <input
                    type="number"
                    min="1"
                    value={editingSlot.min_participants}
                    onChange={(e) => setEditingSlot({ ...editingSlot, min_participants: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price per Person ($)</label>
                  <input
                    type="number"
                    min="0"
                    value={editingSlot.price_per_person}
                    onChange={(e) => setEditingSlot({ 
                      ...editingSlot, 
                      price_per_person: parseInt(e.target.value),
                      price: parseInt(e.target.value)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={editingSlot.status}
                    onChange={(e) => setEditingSlot({ 
                      ...editingSlot, 
                      status: e.target.value as 'open' | 'confirmed' | 'cancelled'
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="open">Open</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={editingSlot.is_active}
                    onChange={(e) => setEditingSlot({ ...editingSlot, is_active: e.target.checked })}
                    className="w-4 h-4 text-green-600 rounded"
                  />
                  <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Active (visible on website)</label>
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditingSlot(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
