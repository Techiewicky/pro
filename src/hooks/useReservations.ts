import { useState, useEffect } from 'react';
import type { Reservation } from '../types';

export function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const mockReservations: Reservation[] = [
      {
        id: '1',
        userId: '1',
        tableId: '1',
        date: '2024-03-20',
        timeSlot: '18:30-20:00',
        guestCount: 4,
        status: 'confirmed',
      },
      {
        id: '2',
        userId: '1',
        tableId: '2',
        date: '2024-03-25',
        timeSlot: '20:00-21:30',
        guestCount: 2,
        status: 'pending',
      },
    ];

    setReservations(mockReservations);
    setIsLoading(false);
  }, []);

  return {
    reservations,
    isLoading,
    error,
  };
}