import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white selection:bg-sky-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
