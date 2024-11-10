import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/theme/ThemeProvider.tsx";
import "./index.css";
import { TranslationProvider } from './translations/TranslationProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
