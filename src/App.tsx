import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQ />
      <ScrollToTop />
    </>
  );
}

export default App;
