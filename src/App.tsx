import { Welcome } from "./sections/Welcome";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Schedule } from "./sections/Schedule";
import { Questionnaire } from "./sections/Questionnaire";
import { Gifts } from "./sections/Gifts";
import { Transport } from "./sections/Transport";
import { useEffect } from "react";
import { config } from "./config";
import { useTranslation } from "./translations/useTranslation";
import { Accommodation } from './sections/Accommodation';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    if(import.meta.env.MODE === 'development') return;

    const x = prompt(t("common.enterPassword"));
    if (x !== config.pass) {
      let y;
      while (y !== config.pass) {
        y = prompt(t("common.wrongPassword"));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Welcome />
      <Schedule />
      <Accommodation />
      <Transport />
      <Questionnaire />
      <Gifts />
      {/* <Photos /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
