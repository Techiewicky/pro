import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.reservations': 'My Reservations',
    'nav.login': 'Login',
    'home.welcome': 'Welcome to TableEase',
    'home.subtitle': 'Book your perfect dining experience',
    'home.dateTime': 'Select Date & Time',
    'home.tables': 'Available Tables',
    'home.complete': 'Complete Reservation',
  },
  ar: {
    'nav.reservations': 'حجوزاتي',
    'nav.login': 'تسجيل الدخول',
    'home.welcome': 'مرحباً بكم في TableEase',
    'home.subtitle': 'احجز تجربة طعام مثالية',
    'home.dateTime': 'اختر التاريخ والوقت',
    'home.tables': 'الطاولات المتاحة',
    'home.complete': 'إتمام الحجز',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}