import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a mock client for demo mode when Supabase isn't configured
const createSupabaseClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('Supabase not configured - running in demo mode')
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createSupabaseClient()

// Types for Driver Pulse
export interface PulseSubmission {
  id?: string
  star_rating: number
  comment: string | null
  tags: string[]
  driver_id: string
  market_name: string
  vehicle_type: string
  driver_type: string
  created_at?: string
  is_escalated: boolean
}

// Constants for driver metadata
export const MARKETS = ['Market A', 'Market B', 'Market C'] as const
export const VEHICLE_TYPES = ['Box Truck', 'SUV', 'Car', 'Cargo Van', 'Pickup Truck'] as const
export const DRIVER_TYPES = ['Carrier', 'Gig'] as const

// Helper to generate fake driver metadata
export function generateFakeDriverData(): Pick<PulseSubmission, 'driver_id' | 'market_name' | 'vehicle_type' | 'driver_type'> {
  return {
    driver_id: `DRV-${Math.floor(1000 + Math.random() * 9000)}`,
    market_name: MARKETS[Math.floor(Math.random() * MARKETS.length)],
    vehicle_type: VEHICLE_TYPES[Math.floor(Math.random() * VEHICLE_TYPES.length)],
    driver_type: DRIVER_TYPES[Math.floor(Math.random() * DRIVER_TYPES.length)],
  }
}

// Check if submission should be escalated (1-star with lengthy comment)
export function shouldEscalate(rating: number, comment: string | null): boolean {
  return rating === 1 && (comment?.length || 0) > 50
}

