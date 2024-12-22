import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import MainRoutes from './routes/MainRoutes';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import AuthProvider from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <TooltipProvider>
                    <MainRoutes />
                    <Toaster />
                </TooltipProvider>
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>
);
