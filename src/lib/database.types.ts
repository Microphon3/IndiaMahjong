export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          phone: string | null
          city: string | null
          state: string | null
          skill_level: 'beginner' | 'intermediate' | 'advanced' | 'expert' | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          city?: string | null
          state?: string | null
          skill_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          city?: string | null
          state?: string | null
          skill_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | null
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          title: string
          description: string
          instructor_id: string
          skill_level: 'beginner' | 'intermediate' | 'advanced'
          price: number
          duration_minutes: number
          max_students: number
          current_students: number
          image_url: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          instructor_id: string
          skill_level: 'beginner' | 'intermediate' | 'advanced'
          price: number
          duration_minutes: number
          max_students: number
          current_students?: number
          image_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          description?: string
          skill_level?: 'beginner' | 'intermediate' | 'advanced'
          price?: number
          duration_minutes?: number
          max_students?: number
          current_students?: number
          image_url?: string | null
          is_active?: boolean
          updated_at?: string
        }
      }
      venues: {
        Row: {
          id: string
          name: string
          description: string
          address: string
          city: string
          state: string
          postal_code: string
          latitude: number
          longitude: number
          phone: string | null
          email: string | null
          website: string | null
          opening_hours: Json | null
          amenities: string[]
          table_count: number
          hourly_rate: number
          image_urls: string[]
          rating: number
          review_count: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          address: string
          city: string
          state: string
          postal_code: string
          latitude: number
          longitude: number
          phone?: string | null
          email?: string | null
          website?: string | null
          opening_hours?: Json | null
          amenities?: string[]
          table_count: number
          hourly_rate: number
          image_urls?: string[]
          rating?: number
          review_count?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          description?: string
          address?: string
          city?: string
          state?: string
          postal_code?: string
          latitude?: number
          longitude?: number
          phone?: string | null
          email?: string | null
          website?: string | null
          opening_hours?: Json | null
          amenities?: string[]
          table_count?: number
          hourly_rate?: number
          image_urls?: string[]
          rating?: number
          review_count?: number
          is_active?: boolean
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          category: 'tiles' | 'tables' | 'accessories' | 'books'
          price: number
          discount_price: number | null
          brand: string | null
          sku: string
          stock_quantity: number
          image_urls: string[]
          specifications: Json | null
          rating: number
          review_count: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          category: 'tiles' | 'tables' | 'accessories' | 'books'
          price: number
          discount_price?: number | null
          brand?: string | null
          sku: string
          stock_quantity: number
          image_urls?: string[]
          specifications?: Json | null
          rating?: number
          review_count?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          description?: string
          category?: 'tiles' | 'tables' | 'accessories' | 'books'
          price?: number
          discount_price?: number | null
          brand?: string | null
          stock_quantity?: number
          image_urls?: string[]
          specifications?: Json | null
          rating?: number
          review_count?: number
          is_active?: boolean
          updated_at?: string
        }
      }
      tournaments: {
        Row: {
          id: string
          name: string
          description: string
          tournament_type: 'championship' | 'regional' | 'local'
          start_date: string
          end_date: string
          registration_deadline: string
          entry_fee: number
          max_participants: number
          current_participants: number
          prize_pool: number
          venue_id: string | null
          rules: Json | null
          status: 'upcoming' | 'registration_open' | 'ongoing' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          tournament_type: 'championship' | 'regional' | 'local'
          start_date: string
          end_date: string
          registration_deadline: string
          entry_fee: number
          max_participants: number
          current_participants?: number
          prize_pool: number
          venue_id?: string | null
          rules?: Json | null
          status?: 'upcoming' | 'registration_open' | 'ongoing' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          description?: string
          start_date?: string
          end_date?: string
          registration_deadline?: string
          entry_fee?: number
          max_participants?: number
          current_participants?: number
          prize_pool?: number
          venue_id?: string | null
          rules?: Json | null
          status?: 'upcoming' | 'registration_open' | 'ongoing' | 'completed' | 'cancelled'
          updated_at?: string
        }
      }
      leaderboard: {
        Row: {
          id: string
          player_id: string
          tournament_points: number
          tournaments_won: number
          tournaments_played: number
          win_percentage: number
          current_rank: number
          previous_rank: number | null
          region: string | null
          last_tournament_date: string | null
          achievements: string[]
          updated_at: string
        }
        Insert: {
          id?: string
          player_id: string
          tournament_points?: number
          tournaments_won?: number
          tournaments_played?: number
          win_percentage?: number
          current_rank: number
          previous_rank?: number | null
          region?: string | null
          last_tournament_date?: string | null
          achievements?: string[]
          updated_at?: string
        }
        Update: {
          tournament_points?: number
          tournaments_won?: number
          tournaments_played?: number
          win_percentage?: number
          current_rank?: number
          previous_rank?: number | null
          region?: string | null
          last_tournament_date?: string | null
          achievements?: string[]
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}