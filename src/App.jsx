import './App.css';
import Navbar from "./components/Navbar"
import { motion } from "motion/react"
import ScrollLine from './components/scrollLine';

import { TypeAnimation } from 'react-type-animation';



import { useParallax } from 'react-scroll-parallax';

import LocomotiveScroll from 'locomotive-scroll';

import { useScroll, useTransform } from "motion/react";

import AnimatedCursor from "react-animated-cursor"

import Experience from "./components/Experience"
import IntroPage from "./components/Intropage"
import About from './components/About';
import Projects from './components/Projects'
import Footer from './components/Footer';
import { ReactLenis } from "lenis/dist/lenis-react"
import React, { useRef, useState, useEffect } from "react";

function App() {
  
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const [greenSection, setGreenSection] = React.useState(false);

  const [cursorColour, setCursorColour] = useState('255, 255, 255')
  useEffect(() => {
    const updateColour = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
      setCursorColour(isDarkMode ? '255, 255, 255' : '31, 41, 55')
    }
      
    updateColour()
      
    const observer = new MutationObserver(updateColour);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
      
      return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full bg-black">

      <AnimatedCursor
        innerSize={15}
        outerSize={0}
        color={cursorColour}
        outerAlpha={0}
        innerScale={1.4}
        outerScale={0}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      <Navbar intro={introRef} about={aboutRef} experience={experienceRef} projects={projectsRef}/>
      <ScrollLine greenSection={greenSection}/>

      <ReactLenis root>
        <IntroPage ref={introRef}/>
        <About ref={aboutRef} onStrictlyPartlyInView={() => setGreenSection(false)} notOnStrictlyPartlyInView={() => setGreenSection(true)}/>
        <Experience ref={experienceRef}/>
        <Projects ref={projectsRef}/>
        <Footer onInView={() => setGreenSection(true)} onOutOfView={() => setGreenSection(false)}/>
      </ReactLenis>

    </div>
    
  );
}

export default App;
