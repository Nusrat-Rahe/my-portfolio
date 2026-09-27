import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen space-y-20 bg-transparent text-accent md:space-y-28">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
       <Footer />
    </main>
  );
}