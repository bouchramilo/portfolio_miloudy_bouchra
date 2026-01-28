import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Education from '../components/home/Education';
import Experience from '../components/home/Experience';
import Skills from '../components/home/Skills';
import ProjectsCarousel from '../components/home/ProjectsCarousel';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <ProjectsCarousel />
      <Contact />
    </>
  );
}
