import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
