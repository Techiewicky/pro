import { useState } from 'react';
import { format } from 'date-fns';
import { Button } from '../components/ui/Button';
import { useReservations } from '../hooks/useReservations';

export function Reservations() {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');
  const { reservations } = useReservations();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Reservations</h1>
        <div className="flex gap-2">
          <Button
            variant={filter === 'upcoming' ? 'primary' : 'outline'}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </Button>
          <Button
            variant={filter === 'past' ? 'primary' : 'outline'}
            onClick={() => setFilter('past')}
          >
            Past
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {reservations?.map((reservation) => (
          <div
            key={reservation.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Table {reservation.tableId}</p>
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
                    Cancel
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