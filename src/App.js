import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <section id="home" className="min-h-screen scroll-mt-24">
          <Home />
        </section>
      </div>
      <div className="pt-20">
        <section id="about" className="min-h-screen scroll-mt-24">
          <About />
        </section>
      </div>
      <div className="pt-20">
        <section id="technologies" className="min-h-screen scroll-mt-24">
          <Technologies />
        </section>
      </div>
      <div className="pt-20">
        <section id="projects" className="min-h-screen scroll-mt-24">
          <Projects />
        </section>
      </div>
      <div className="pt-20">
        <section id="contact" className="min-h-screen scroll-mt-24">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
