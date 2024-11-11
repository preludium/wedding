import { FAQ } from "./sections/FAQ";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Details } from './sections/Details';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <FAQ />
      <ScrollToTop />
    </>
  );
}

export default App;
