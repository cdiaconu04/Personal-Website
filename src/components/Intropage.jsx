import headshot from '../images/1727488282356.jpg';
import '../App.css';
import { motion } from "motion/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import React from 'react';

import IntroBackground from './backgrounds/IntroBackground'

const IntroPage = () => {


    return (
        <div className="w-full bg-black">
            <IntroBackground/>

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
    )

}

export default IntroPage;
