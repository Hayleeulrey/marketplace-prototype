export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          name: string
          email: string
          role: "learner" | "trainer" | "admin" | "partner"
          password_hash: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          role: "learner" | "trainer" | "admin" | "partner"
          password_hash?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          role?: "learner" | "trainer" | "admin" | "partner"
          password_hash?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      trainer_profiles: {
        Row: {
          id: string
          user_id: string
          bio: string | null
          profile_image_url: string | null
          areas_of_expertise: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          bio?: string | null
          profile_image_url?: string | null
          areas_of_expertise?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          bio?: string | null
          profile_image_url?: string | null
          areas_of_expertise?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      partner_orgs: {
        Row: {
          id: string
          name: string
          contact_email: string
          share_percentage: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          contact_email: string
          share_percentage: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          contact_email?: string
          share_percentage?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          trainer_id: string
          duration: string | null
          format: string | null
          price: number | null
          image_url: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          trainer_id: string
          duration?: string | null
          format?: string | null
          price?: number | null
          image_url?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          trainer_id?: string
          duration?: string | null
          format?: string | null
          price?: number | null
          image_url?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      course_sessions: {
        Row: {
          id: string
          course_id: string
          session_date: string
          start_time: string
          end_time: string
          max_attendees: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          session_date: string
          start_time: string
          end_time: string
          max_attendees?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          session_date?: string
          start_time?: string
          end_time?: string
          max_attendees?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          course_id: string
          user_id: string
          enrolled_at: string
          completed: boolean
          completion_date: string | null
          progress: number
        }
        Insert: {
          id?: string
          course_id: string
          user_id: string
          enrolled_at?: string
          completed?: boolean
          completion_date?: string | null
          progress?: number
        }
        Update: {
          id?: string
          course_id?: string
          user_id?: string
          enrolled_at?: string
          completed?: boolean
          completion_date?: string | null
          progress?: number
        }
      }
      reviews: {
        Row: {
          id: string
          course_id: string
          user_id: string
          rating: number
          comment: string | null
          trainer_response: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          user_id: string
          rating: number
          comment?: string | null
          trainer_response?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          user_id?: string
          rating?: number
          comment?: string | null
          trainer_response?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      saved_courses: {
        Row: {
          id: string
          user_id: string
          course_id: string
          saved_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          saved_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          saved_at?: string
        }
      }
      certificates: {
        Row: {
          id: string
          user_id: string
          course_id: string
          issued_at: string
          certificate_url: string | null
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          issued_at?: string
          certificate_url?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          issued_at?: string
          certificate_url?: string | null
        }
      }
    }
  }
}
