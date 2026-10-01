import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Appliances } from './components/Appliances';
import { WhyChoose } from './components/WhyChoose';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="min-h-screen w-full bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}>
        
        <a
          href="#contact"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">
          
          Skip to contact form
        </a>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Solutions />
          <Appliances />
          <WhyChoose />
          <Process />
          <Projects />
          <Education />
          <Testimonials />
          <CtaBanner />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </motion.div>
    </MotionConfig>);

}