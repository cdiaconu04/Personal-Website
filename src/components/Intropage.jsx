import headshot from '../images/1727488282356.jpg';
import '../App.css';
import { motion, useInView, useAnimate, useAnimation } from "motion/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import React from 'react';
import { useEffect, useRef } from 'react';

import IntroBackground from './backgrounds/IntroBackground'
import { forwardRef } from 'react';

import SplitType from 'split-type'

import { gsap } from "gsap";

const IntroPage = forwardRef((props, ref) => {
    // const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const buttonControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
            buttonControls.start("visible");
        }
    }, [isInView]);

    

    return (
        <div className="w-full bg-white dark:bg-black" ref={ref}>
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
                    className="flex flex-col"
                >


                    <div className="relative inline-block">
                        <motion.div
                            initial={{ left: 0 }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 1, ease: "easeIn", delay: 0.4}}
                            className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 z-10 rounded-xl"
                        />
                        <motion.p className="relative text-4xl text-gray-800 dark:text-white font-bold" 
                        >
                            Hello, I'm
                        </motion.p>
                    </div>
                    
                    <div className="relative inline-block">
                        <motion.div
                            initial={{ right: 0 }}
                            animate={{ right: "100%" }}
                            transition={{ duration: 1, ease: "easeIn", delay: 0.4}}
                            className="absolute top-0 bottom-0 left-0 right-0 bg-gray-300 z-10 rounded-xl"
                        />
                        <motion.h1 className="relative text-7xl font-bold dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 text-transparent bg-clip-text leading-relaxed "
                        >
                            Cristian Diaconu
                        </motion.h1>
                    </div>
                    

                    <br/>
                    

                    <motion.div className="relative justify-start flex space-x-3"
                        
                    >

                        <motion.a href="https://linkedin.com/in/cristian-diaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                            <motion.div
                                whileHover={{ scale: 1.09 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeIn", delay: 1}}
                            >
                            <FaLinkedin color="white" className="w-8 h-8"/>
                            </motion.div>
                        </motion.a>
                        
                        <motion.a href="https://github.com/CristianDiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                            <motion.div
                                whileHover={{ scale: 1.09 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeIn", delay: 2}}
                            >
                                    
                            <FaGithub color="white" className="w-8 h-8"/>
                            </motion.div>
                        </motion.a>

                        <motion.div className="border border-2 border-green-500 dark:border-green-700 rounded-full p-1 px-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeIn", delay: 3}}
                        >
                            <p className="font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 text-transparent bg-clip-text leading-relaxed ">
                                Software Developer
                            </p>
                        </motion.div>

                    </motion.div>

                    
                    
                    
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

})

export default IntroPage;
