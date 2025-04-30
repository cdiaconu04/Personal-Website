import logo from './logo.svg';
import headshot from './images/1727488282356.jpg';
import './App.css';
import Navbar from "./components/navbar"
import { motion } from "motion/react"
import ScrollLine from './components/scrollLine';

import {Car, MoveDown} from "lucide-react";


import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


function App() {
  return (
    <div className="w-full">
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
              cx="-117"
              cy="200"
              r="5"
              stroke="#059669"
              style={{
                strokeWidth: 3,
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
        </div>

        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">
          {/* <div>


          </div> */}

          
          <div>

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
            
            
          </div>
          
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
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

          <div>
            <h2 className="text-5xl text-white font-bold">
              About me
            </h2>

            <br/>


            <p className="text-1xl text-white font-bold">
              Hello! Here is some info about me
            </p>
          </div>

          
        </div>
      </div>

      {/* 3rd section */}
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">
          
          <div>
            <h2 className="text-5xl text-white font-bold">
              Experience
            </h2>
            
            <br/>
            <br/>

            <div className="">


              {/* Indosoft */}
              <div className="flex flex-col space-y-4 w-full max-w-[50%]">

                <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 rounded-lg p-7">
                    

                  <h3 className="text-3xl text-white font-bold">
                    Indosoft Inc.
                  </h3>

                  <h3 className="text-xl text-white">
                    Software Developer Intern
                  </h3>
                  <br/>
                  <p className="text-md text-white">
                    Currently working on a project that involves creating a web application for a client using React and Node.js. The project is in the early stages of development, and I am responsible for implementing the front-end components and integrating them with the back-end API.
                  </p>
                </div>

                {/* Dynamixware */}
                <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 rounded-lg p-7">
                    

                  <h3 className="text-3xl text-white font-bold">
                    Dynamixware
                  </h3>

                  <h3 className="text-xl text-white">
                    Junior Developer
                  </h3>
                  <br/>
                  <p className="text-md text-white">
                    Currently working on a project that involves creating a web application for a client using React and Node.js. The project is in the early stages of development, and I am responsible for implementing the front-end components and integrating them with the back-end API.
                  </p>
                </div>
                

              </div>
            </div>
            
            

            
          </div>
        </div>
      </div>

      {/* 4th section */}
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

          <h2 className="text-5xl text-white font-bold">
            Projects
          </h2>

        </div>


      </div>


    </div>
  );
}

export default App;
