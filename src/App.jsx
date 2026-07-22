import './App.css';
import Navbar from "./components/Navbar"
import { motion } from "motion/react"
import ScrollLine from './components/scrollLine';
import { TypeAnimation } from 'react-type-animation';
import { useParallax } from 'react-scroll-parallax';
import LocomotiveScroll from 'locomotive-scroll';
import { useScroll, useTransform } from "motion/react";
import AnimatedCursor from "react-animated-cursor"

import Experience from "./components/archived/Experience"
import IntroPage from "./components/IntroPage"
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/archived/Projects'
import Contact from './components/archived/Contact';
import Footer from './components/archived/Footer';
import { ReactLenis } from "lenis/dist/lenis-react"
import React, { useRef, useState, useEffect } from "react";

function App() {
  
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [greenSection, setGreenSection] = React.useState(false);

  const [cursorColour, setCursorColour] = useState('255, 255, 255')

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [screenSize, setScreenSize] = useState("");

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
  
      if (windowWidth >= 1536) setScreenSize("2xl");
      else if (windowWidth >= 1280) setScreenSize("xl");
      else if (windowWidth >= 1024) setScreenSize("lg");
      else if (windowWidth >= 768) setScreenSize("md");
      else if (windowWidth >= 640) setScreenSize("sm");
      else setScreenSize("xs");
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="w-full bg-black">
      <Navbar intro={introRef} about={aboutRef} experience={experienceRef} projects={projectsRef}/>
      <ScrollLine greenSection={greenSection}/>

      {/* <ReactLenis root> */}
        <IntroPage ref={introRef} windowSize={screenSize}/>
        <About ref={aboutRef} windowSize={screenSize}/>
        <Tech windowSize={screenSize}/>
        <Experience ref={experienceRef} windowSize={screenSize}/>
        <Projects ref={projectsRef} windowSize={screenSize}/>
        <Contact ref={contactRef} windowSize={screenSize}/>
        <Footer onInView={() => setGreenSection(true)} onOutOfView={() => setGreenSection(false)}/>
      {/* </ReactLenis> */}

    </div>
    
  );
}

export default App;
