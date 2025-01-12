import { Welcome } from "./sections/Welcome";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Photos } from './sections/Photos';
import { Schedule } from './sections/Schedule';
import { Questionnaire } from './sections/Questionnaire';
import { Gifts } from './sections/Gifts';
import { Transport } from './sections/Transport';

function App() {
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
