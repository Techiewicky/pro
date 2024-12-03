import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import type { Table } from '../../types';

export function TableManagement() {
  const [tables, setTables] = useState<Table[]>([]);
  const [isAddingTable, setIsAddingTable] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Manage Tables</h2>
        <Button onClick={() => setIsAddingTable(true)}>Add Table</Button>
      </div>

      <div className="grid gap-4">
        {tables.map((table) => (
          <div
            key={table.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
          >
            <div>
              <p className="font-medium">Table {table.number}</p>
              <p className="text-sm text-gray-600">{table.seats} seats</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}