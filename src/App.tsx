import { Welcome } from "./sections/Welcome";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Photos } from './sections/Photos';
import { Schedule } from './sections/Schedule';
import { Questionnaire } from './sections/Questionnaire';
import { Gifts } from './sections/Gifts';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Schedule />
      <Questionnaire />
      <Gifts />
      <Photos />
      <ScrollToTop />
    </>
  );
}

export default App;
