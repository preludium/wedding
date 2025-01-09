import { Welcome } from "./sections/Welcome";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Photos } from './sections/Photos';
import { Schedule } from './sections/Schedule';
import { Questionnaire } from './sections/Questionnaire';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Schedule />
      <Questionnaire />
      <Photos />
      <ScrollToTop />
    </>
  );
}

export default App;
