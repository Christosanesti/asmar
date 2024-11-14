"use client";
import Hero from "@/app/components/shared/Hero";
import About from "./components/shared/About";
import Projects from "./components/shared/Projects";
import Contact from "./components/shared/Contact";
function Home() {
  return (
    <>
      <main className="bg-black h-full">
        <Hero />
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
    </>
  );
}

export default Home;
