import headshot from '../images/1727488282356.jpg';
import '../App.css';
import { motion, useInView, useAnimate, useAnimation } from "motion/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

import IntroBackground from './backgrounds/IntroBackground'
import { forwardRef } from 'react';

import SplitType from 'split-type'

import { gsap } from "gsap";

import { CodeXml } from 'lucide-react';

const IntroPage = forwardRef(({windowSize}, ref) => {
    // const [windowWidth, setWindowWidth] = useState(0);
    // const [windowHeight, setWindowHeight] = useState(0);
    // const [windowSize, setWindowSize] = useState("");

    function getHeadshotDimensions() {
        if (windowSize == "xs") return 100
        else if (windowSize == "sm") return 150;
        else if (windowSize == "md") return 170;
        else if (windowSize == "lg") return 210;
        else if (windowSize == "xl") return 250;
        else return 330;
    }

    function getIconSize() {
        if (windowSize == "xs") return 100
        else if (windowSize == "sm") return 150;
        else if (windowSize == "md") return 170;
        else if (windowSize == "lg") return 210;
        else if (windowSize == "xl") return 250;
        else return 330;
    }


    // const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const buttonControls = useAnimation();

    const [buttonColour, setButtonColour] = useState("white")

    useEffect(() => {
        const updateColour = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setButtonColour(isDarkMode ? "white" : "#1f2937")
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
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
            buttonControls.start("visible");
        }
    }, [isInView]);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //         setWindowHeight(window.innerHeight);

    //         // if (windowWidth >= 1536) setWindowSize("2xl");
    //         // else if (windowWidth >= 1280) setWindowSize("xl");
    //         // else if (windowWidth >= 1024) setWindowSize("lg");
    //         // else if (windowWidth >= 768) setWindowSize("md");
    //         // else if (windowWidth >= 640) setWindowSize("sm");
    //         // else setWindowSize("xs");
    //     };

    //     handleResize();

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // });


    return (
        <div className="w-full bg-white dark:bg-black transition duration-200" ref={ref}>
            <IntroBackground/>

            <div 
                className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-between relative overflow-hidden
                    2xl:p-4 xl:p-20 lg:p-20 md:p-20 p-10
                "
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
                    className="flex flex-col 
                        2xl:gap-4 lg:gap-3 md:gap-2 gap-1
                ">   

                    <div className="flex flex-col">
                        <div className="relative inline-block">
                            <motion.div
                                initial={{ left: 0 }}
                                animate={{ left: "100%" }}
                                transition={{ duration: 1, ease: "easeIn", delay: 0.4}}
                                className="absolute top-0 bottom-0 left-0 right-0 z-10 rounded-xl
                                    bg-gradient-to-r from-emerald-400 via-green-400 to-green-500
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700
                                "
                            />
                            <motion.p className="relative text-gray-800 dark:text-white font-bold transition duration-200
                                2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg
                            " 
                            >
                                Hello, I'm
                            </motion.p>
                        </div>
                        
                        <div className="relative inline-block">
                            <motion.div
                                initial={{ right: 0 }}
                                animate={{ right: "100%" }}
                                transition={{ duration: 1, ease: "easeIn", delay: 0.4}}
                                className="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 dark:bg-gray-300 z-10 rounded-xl"
                            />
                            <motion.h1 className="relative font-bold dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 text-transparent bg-clip-text leading-relaxed transition duration-200
                                2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl
                            "
                            >
                                Cristian Diaconu
                            </motion.h1>
                        </div>
                    </div>


                    
                    

                    
                    

                    <motion.div className="relative justify-start flex items-center
                        2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                    ">

                        <motion.a href="https://linkedin.com/in/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                            <motion.div
                                whileHover={{ scale: 1.09 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeIn", delay: 1}}
                            >
                                <FaLinkedin color={buttonColour} className="transition duration-200
                                    2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                "/>
                            </motion.div>
                        </motion.a>
                        
                        <motion.a href="https://github.com/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                            <motion.div
                                whileHover={{ scale: 1.09 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeIn", delay: 2}}
                            >
                                    
                                <FaGithub color={buttonColour} className="transition duration-200
                                    2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                "/>
                            </motion.div>
                        </motion.a>

                        <motion.div className="border border-2 border-green-500 dark:border-green-700 rounded-full flex flex-row gap-1 justify-center items-center
                            2xl:py-1 2xl:px-2 lg:py-0.5 lg:px-2 md:py-0 md:px-1 py-0 px-1
                        "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeIn", delay: 3}}
                        >   
                            <CodeXml className="text-green-500" width={15}/>
                            <p className="flex justify-center items-center font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 text-transparent bg-clip-text leading-relaxed transition duration-200
                                2xl:text-base xl:text-sm lg:text-sm text-xs
                            ">
                                Software Developer
                            </p>
                        </motion.div>

                        <motion.div className="border border-2 border-green-500 dark:border-green-700 rounded-full flex flex-row gap-1 justify-center items-center
                            2xl:py-1 2xl:px-2 lg:py-0.5 lg:px-2 md:py-0 md:px-1 py-0 px-1
                        "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeIn", delay: 4}}
                        >   
                            <MapPin className="text-green-500" width={15} />
                            <p className="flex justify-center items-center font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 text-transparent bg-clip-text leading-relaxed transition duration-200
                                2xl:text-base xl:text-sm lg:text-sm text-xs
                            ">
                                Toronto, CA
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
                    {/*  w-80 h-80 */}
                    <div> 
                        <img className="relative rounded-full ms-auto" width={getHeadshotDimensions()} height={getHeadshotDimensions()} src={headshot} />
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
