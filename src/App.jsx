import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css" 
import "./index.css";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero /> 
        <About></About>
        <Skills />
        <Projects />
      </main>

      <Contact />
    </>
  );
}

export default App;