import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/theme/ThemeProvider.tsx";
import "./index.css";
import { TranslationProvider } from './translations/TranslationProvider';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </ThemeProvider>
    <Toaster duration={1000} />
  </>
);
