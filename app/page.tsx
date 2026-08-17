import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Achievements from "@/app/components/Achievements";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Scene from "@/app/components/canvas/Scene";

export default function Home() {
  return (
    <>
      <Scene />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}