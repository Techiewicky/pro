import { Link } from 'react-router-dom';
import { Utensils, Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export function Header() {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Utensils className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">TableEase</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/reservations" className="text-gray-600 hover:text-gray-900">
            {t('nav.reservations')}
          </Link>
          <Link to="/auth/login" className="text-gray-600 hover:text-gray-900">
            {t('nav.login')}
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Languages className="h-4 w-4" />
            {language === 'en' ? 'العربية' : 'English'}
          </Button>
        </nav>
      </div>
    </header>
  );
}