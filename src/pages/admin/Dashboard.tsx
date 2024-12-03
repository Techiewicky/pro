import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { TableManagement } from './TableManagement';
import { ReservationManagement } from './ReservationManagement';

type Tab = 'tables' | 'reservations';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('tables');

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="mt-4 flex gap-4">
          <Button
            variant={activeTab === 'tables' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('tables')}
          >
            Tables
          </Button>
          <Button
            variant={activeTab === 'reservations' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('reservations')}
          >
            Reservations
          </Button>
        </div>
      </div>

      {activeTab === 'tables' ? <TableManagement /> : <ReservationManagement />}
    </div>
  );
}