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

function App() {
  // const { ref: headshotRef } = useParallax({
  //   translateY: [35, -50], 
  //   easing: 'easeInOut',
  // });

  return (
    <div className="w-full">

      <AnimatedCursor
        innerSize={15}
        outerSize={0}
        color='255, 255, 255'
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

      <Navbar/>
      <ScrollLine/>

      <IntroPage/>

      <About/>

      <Experience/>

      <Projects/>

    </div>
    
  );
}

export default App;
