export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Table {
  id: string;
  number: number;
  seats: number;
  isAvailable: boolean;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Reservation {
  id: string;
  userId: string;
  tableId: string;
  date: string;
  timeSlot: string;
  guestCount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}