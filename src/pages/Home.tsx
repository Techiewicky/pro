import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const SAMPLE_TABLES = [
  { id: '1', number: 1, seats: 4, isAvailable: true },
  { id: '2', number: 2, seats: 6, isAvailable: true },
  { id: '3', number: 3, seats: 2, isAvailable: true },
];

const TIME_SLOTS = [
  '17:00-18:30',
  '18:30-20:00',
  '20:00-21:30',
  '21:30-23:00',
];

export function Home() {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTable, setSelectedTable] = useState('');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t('home.welcome')}</h1>
        <p className="mt-2 text-lg text-gray-600">{t('home.subtitle')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="flex items-center text-xl font-semibold">
            <Calendar className="mr-2 h-5 w-5" />
            {t('home.dateTime')}
          </h2>
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            min={format(new Date(), 'yyyy-MM-dd')}
          />
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map((slot) => (
              <Button
                key={slot}
                variant={selectedTime === slot ? 'primary' : 'outline'}
                onClick={() => setSelectedTime(slot)}
              >
                <Clock className="mr-2 h-4 w-4" />
                {slot}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold">{t('home.tables')}</h2>
          <div className="grid gap-4">
            {SAMPLE_TABLES.map((table) => (
              <button
                key={table.id}
                onClick={() => setSelectedTable(table.id)}
                className={`flex items-center justify-between rounded-lg border p-4 transition-colors ${
                  selectedTable === table.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                }`}
              >
                <div>
                  <p className="font-medium">Table {table.number}</p>
                  <p className="text-sm text-gray-600">{table.seats} seats</p>
                </div>
                {selectedTable === table.id && (
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          disabled={!selectedDate || !selectedTime || !selectedTable}
          onClick={() => {
            console.log({ selectedDate, selectedTime, selectedTable });
          }}
        >
          {t('home.complete')}
        </Button>
      </div>
    </div>
  );
}