import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/theme/ThemeProvider.tsx';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';
import { TranslationProvider } from './translations/TranslationProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <>
    <ThemeProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </ThemeProvider>
    <Toaster duration={1000} />
  </>
);
