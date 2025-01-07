import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Details } from './sections/Details';
import { Photos } from './sections/Photos';
import { Timeline } from './sections/Timeline';
import { Questionnaire } from './sections/Questionnaire';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <Timeline />
      <Questionnaire />
      <Photos />
      <ScrollToTop />
    </>
  );
}

export default App;
