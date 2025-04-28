import logo from './logo.svg';
import headshot from './images/1727488282356.jpg';
import linkedinOriginal from './images/linkedin--v2.png';
import githubOriginal from './images/github.png';
import './App.css';
import Navbar from "./components/navbar"
import { motion } from "motion/react"
import ScrollLine from './components/scrollLine';


import { FaG, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <ScrollLine/>
      
      
      {/* First section */}
      <div className="w-full bg-black">

        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

          <div>

            <motion.p className="text-4xl text-white font-bold"
              // style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              // initial={{ width : 0 }}
              // animate={{ width: "100%" }}
              // transition={{ duration: 1, ease: "easeInOut" }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 text-transparent bg-clip-text leading-relaxed"
                      // style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                      // initial={{ width : 0 }}
                      // animate={{ width: "100%" }}
                      // transition={{ duration: 3, ease: "easeInOut" }}
            >
              Cristian Diaconu
            </motion.h1>

            <br/>

            <div className="justify-start flex space-x-3">
              <motion.div
                className="onHover:scale-150">
                <FaLinkedin color="white" className="w-8 h-8"/>
              </motion.div>

              <motion.div>
                <FaGithub color="white" className="w-8 h-8"/>
              </motion.div>
            </div>
            
            
          </div>

          <div>
            <img className="rounded-full ms-auto w-80 h-80" src={headshot} />
          </div>

          

          
          
        </div>
      </div>

      {/* Second section */}
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

      {/* Third section */}
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden">

          <h2 className="text-5xl text-white font-bold">
            Experience
          </h2>

        </div>
      </div>

      {/* Fourth section */}
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
