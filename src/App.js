import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Competitions from './components/Competitions/Competitions';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Competitions />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
