import headshot from '../images/1727488282356.jpg';
import '../App.css';
import { motion, useInView, useAnimate, useAnimation } from "motion/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import React from 'react';
import { useEffect, useRef } from 'react';

import IntroBackground from './backgrounds/IntroBackground'

import SplitType from 'split-type'

import { gsap } from "gsap";

const IntroPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className="w-full bg-black">
            <IntroBackground/>

            <div 
                className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden"
                ref={ref}
            >
            
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >

                    

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

                        <div className="border border-green-700 rounded-full p-1 px-2">
                            <p className="font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 text-transparent bg-clip-text leading-relaxed ">
                                Software Developer
                            </p>
                        </div>

                    </div>
                    
                    
                </motion.div>
                
                <motion.div 
                    className="relative"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    <div className="absolute inset-0 bg-green-400 rounded-full blur"></div>
                    <div>
                    <img className="relative rounded-full ms-auto w-80 h-80" src={headshot} />
                    </div>
                </motion.div>

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
