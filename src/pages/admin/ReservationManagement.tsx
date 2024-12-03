import { useState } from 'react';
import { format } from 'date-fns';
import { Button } from '../../components/ui/Button';
import type { Reservation } from '../../types';

export function ReservationManagement() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Manage Reservations</h2>

      <div className="grid gap-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  Table {reservation.tableId} - {reservation.guestCount} guests
                </p>
                <p className="text-sm text-gray-600">
                  {format(new Date(reservation.date), 'PPP')} at{' '}
                  {reservation.timeSlot}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    reservation.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : reservation.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {reservation.status}
                </span>
                {reservation.status === 'pending' && (
                  <Button variant="outline" size="sm">
                    Confirm
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}