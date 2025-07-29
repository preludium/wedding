import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Welcome } from './sections/Welcome';
import './App.css';
import { useEffect } from 'react';
import { config } from './config';
import { Accommodation } from './sections/Accommodation';
import { Breakfast } from './sections/Breakfast';
import { Gifts } from './sections/Gifts';
import { Localization } from './sections/Localization';
import { Questionnaire } from './sections/Questionnaire';
import { Schedule } from './sections/Schedule';
import { useTranslation } from './translations/useTranslation';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    if (import.meta.env.MODE === 'development') return;

    const x = prompt(t('common.enterPassword'));
    if (x !== config.pass) {
      let y: string | null = null;
      while (y !== config.pass) {
        y = prompt(t('common.wrongPassword'));
      }
    }
  }, [t]);

  return (
    <>
      <Navbar />
      <Welcome />
      <Schedule />
      <Localization />
      <Accommodation />
      <Breakfast />
      <Questionnaire />
      <Gifts />
      {/* <Photos /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
