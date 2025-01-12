import { Welcome } from "./sections/Welcome";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Photos } from "./sections/Photos";
import { Schedule } from "./sections/Schedule";
import { Questionnaire } from "./sections/Questionnaire";
import { Gifts } from "./sections/Gifts";
import { Transport } from "./sections/Transport";
import { useEffect } from "react";
import { config } from "./config";
import { useTranslation } from "./translations/useTranslation";

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    const x = prompt(t("common.enterPassword"));
    if (x !== config.pass) {
      let y;
      while (y !== config.pass) {
        y = prompt(t("common.wrongPassword"));
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <Welcome />
      <Schedule />
      <Transport />
      <Questionnaire />
      <Gifts />
      <Photos />
      <ScrollToTop />
    </>
  );
}

export default App;
