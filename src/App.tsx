import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Reservations } from './pages/Reservations';
import { AdminDashboard } from './pages/admin/Dashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="mx-auto max-w-7xl px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;