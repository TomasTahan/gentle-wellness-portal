
import { createClient } from '@supabase/supabase-js';

// These environment variables would normally be set in a .env file
// For this project, we're just initializing the client without real credentials
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our Supabase tables
export type Resident = {
  id: string;
  name: string;
  room: string;
  status: 'Active' | 'Inactive';
  age?: number;
  allergies?: string;
  notes?: string;
  created_at?: string;
};

export type Staff = {
  id: string;
  name: string;
  role: 'Nurse' | 'Caregiver' | 'Admin';
  shift: string;
  email?: string;
  phone?: string;
  created_at?: string;
};

export type Payment = {
  id: string;
  resident_id: string;
  resident_name: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  due_date: string;
  created_at?: string;
};

export type Medication = {
  id: string;
  resident_id: string;
  name: string;
  dose: string;
  time: string;
  created_at?: string;
};

export type HistoryEvent = {
  id: string;
  resident_id: string;
  description: string;
  date: string;
  created_at?: string;
};
