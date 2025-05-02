import logo from './logo.svg';
import headshot from './images/1727488282356.jpg';
import './App.css';
import Navbar from "./components/navbar"
import { motion } from "motion/react"
import ScrollLine from './components/scrollLine';

import { TypeAnimation } from 'react-type-animation';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import IndosoftLogo from './images/IndosoftLogo.jpg';
import DynamixwareLogo from './images/DynamixwareLogo.jpg';


import { useParallax } from 'react-scroll-parallax';

import LocomotiveScroll from 'locomotive-scroll';

import { useScroll, useTransform } from "motion/react";

import AnimatedCursor from "react-animated-cursor"

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

      {/* 1st section */}
      <div className="w-full bg-black">

        {/* Background stuff */}
        <div className="absolute inset-0 pointer-events-none h-screen">
          <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            className="w-full h-full"
          >
            {/* <circle
              cx="-240"
              cy="200"
              r="30"
              stroke="#FFFFFF"
              style={{
                strokeWidth: 5,
                strokeLinecap: "round",
                fill: "transparent",
              }}
            /> */}
            <line
              x1="-110"
              y1="500"
              x2="260"
              y2="500"
              stroke="#059669"
              style={{
                strokeWidth: 3,
                strokeLinecap: "round",
                fill: "transparent",
              }}
            />
            <line
              x1="-110"
              y1="200"
              x2="260"
              y2="200"
              stroke="#059669"
              style={{
                strokeWidth: 3,
                strokeLinecap: "round",
                fill: "transparent",
              }}
            />
          </svg>

          {/* <div className="text-center items-center animate-bounce w-full">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-none group bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 w-12 h-12 font-bold py-2 px-3 rounded-full"
            >          
              <MoveDown className="h-6 w-6 text-black group-hover:text-white" />
            </motion.button>
          </div> */}
          
        </div>

        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">
          
          <motion.div>

            <motion.p className="text-4xl text-white font-bold" 
            >
              Hello, I'm
            </motion.p>
            <motion.h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 text-transparent bg-clip-text leading-relaxed "
            >
              Cristian Diaconu
            </motion.h1>

            <br/>

            <div className="justify-start flex space-x-3">

              <a href="https://linkedin.com/in/cristian-diaconu04" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.09 }}
                  >
                  <FaLinkedin color="white" className="w-8 h-8"/>
                </motion.div>
              </a>
              
              <a href="https://github.com/CristianDiaconu04" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.09 }}>
                  <FaGithub color="white" className="w-8 h-8"/>
                </motion.div>
              </a>
            </div>
            
            
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur"></div>
            <div>
              <img className="relative rounded-full ms-auto w-80 h-80" src={headshot} />
            </div>
          </div>

        </div>

        {/* <div className="text-center items-center animate-bounce w-full">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border-none group bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 w-12 h-12 font-bold py-2 px-3 rounded-full"
          >          
            <MoveDown className="h-6 w-6 text-black group-hover:text-white" />
          </motion.button>
        </div> */}

        
      </div>

      {/* 2nd section */}
      <div className="w-full bg-black ">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

          <div>
            <h2 className="text-5xl text-white font-bold underline decoration-emerald-600">
              About me
            </h2>

            <br/>
            <br/>

            
            
            
          </div>

          
        </div>
      </div>

      {/* 3rd section */}
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden" >
          
          <div >
            <h2 className="text-5xl text-white font-bold underline decoration-emerald-600">
              Experience
            </h2>
            
            <br/>
            <br/>

            {/* Experiences */}
            <div className="flex flex-row min-w-full justify-between space-x-4">
                
              {/* Indosoft */}
              <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-7 min-w-[50%]">

                <div className="flex flex-row">
                  <div>
                    <h3 className="text-3xl text-white font-bold">
                      Indosoft Inc.
                    </h3>

                    <h3 className="text-xl text-white">
                      Software Developer Intern
                    </h3>
                  </div>  

                  <div className="flex flex-col ms-auto">
                    <img className="w-9 h-9 ms-auto rounded-full" src={IndosoftLogo} />
                    <p className="text-white"> May - August (2025)</p>
                  </div>

                </div>
                <br/>
                
                <div className="px-8">
                  <ul className="list-disc">
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                  </ul>
                </div>

              </motion.div>

              {/* Dynamixware */}
              <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-7 min-w-[50%]">
                <div className="flex flex-row">
                  <div>
                    <h3 className="text-3xl text-white font-bold">
                      Dynamixware
                    </h3>

                    <h3 className="text-xl text-white">
                      Junior Developer
                    </h3>
                  </div> 

                  <div className="flex flex-col ms-auto">
                    <img className="w-9 h-9 ms-auto rounded-full" src={DynamixwareLogo} />
                    <p className="text-white"> May - August (2023)</p>
                  </div>

                </div>
                
                
                <br/>
                
                <div className="px-8">
                  <ul className="list-disc">
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                  </ul>
                </div>
              </motion.div>
                
            </div>

          </div>
        </div>
      </div>

      {/* 4th section */}
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

        <div>
            <h2 className="text-5xl text-white font-bold underline decoration-emerald-600">
              Projects
            </h2>
            
            <br/>
            <br/>

            {/* Experiences */}
            <div className="flex flex-row min-w-full justify-between space-x-4">
                
              {/* Proj1 */}
              <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-7 min-w-[32%]">

                <div className="flex flex-row">
                  <div>
                    <h3 className="text-3xl text-white font-bold">
                      Project 1
                    </h3>

                   
                  </div>  

                </div>
                <br/>
                
                <div className="px-8">
                  <ul className="list-disc">
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                  </ul>
                </div>

              </motion.div>

              {/* Dynamixware */}
              <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-7 min-w-[32%]">
                <div className="flex flex-row">
                  <div>
                    <h3 className="text-3xl text-white font-bold">
                      Project 2
                    </h3>

                  </div> 

                </div>
                
                
                <br/>
                
                <div className="px-8">
                  <ul className="list-disc">
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-7 min-w-[32%]">
                <div className="flex flex-row">
                  <div>
                    <h3 className="text-3xl text-white font-bold">
                      Project 2
                    </h3>

                  </div> 

                </div>
                
                
                <br/>
                
                <div className="px-8">
                  <ul className="list-disc">
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                    <li className="text-md text-white">
                      Did this and that and this and that and this and that and this and that and this and that and this and that and
                    </li>
                  </ul>
                </div>
              </motion.div>
                
            </div>

          </div>

        </div>


      </div>


    </div>
    
  );
}

export default App;
