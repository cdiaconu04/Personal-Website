import { motion } from "motion/react"
import React, { useState, useEffect, useRef } from 'react';
import { forwardRef } from 'react';

import Landui from '../images/projectpics/landui.png'
import EldiEcomStore from '../images/projectpics/eldiecomstore.png'
import YoutubeDownloader from '../images/projectpics/youtubedownloader.png'
import GuessRealorAI from '../images/projectpics/guessRealOrAI.png'
import ProjectsBackground from './backgrounds/ProjectsBackground'
import { Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from 'lucide-react';

const Projects = forwardRef(({windowSize}, ref) => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const [buttonColour, setButtonColour] = useState("white");

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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
    
            { threshold: 0.1 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    return (
        <div className="w-full bg-white dark:bg-black transition duration-200 relative inline-block
            2xl:py-52 xl:py-20 sm:py-10 py-0
        " ref={ref}>
            {windowSize === "xs" ? <div/> : <ProjectsBackground inView={isInView}/>}

            <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-between relative overflow-hidden
                2xl:p-4 xl:p-20 lg:p-20 md:p-20 p-10
            ">
                <motion.section
                    ref={sectionRef}
                    variants={{
                            hidden: {opacity: 0 }, 
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.25,
                                },
                            },
                    }}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >

                
                    <div className="flex flex-col gap-11">
                        <h2 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl 
                        ">
                            Projects
                        </h2>

                        {/* Projects */}
                        <div className="grid min-w-full justify-between gap-4
                            sm:grid-cols-3 grid-cols-1
                        ">
                            
                            {/* Proj1 */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="rounded-lg min-w-[32%] transition duration-200
                                    sm:bg-gradient-to-r sm:from-emerald-400 sm:via-emerald-400 sm:to-green-400 sm:dark:bg-gradient-to-r sm:dark:from-emerald-600 sm:dark:via-emerald-600 sm:dark:to-green-600 
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500
                                ">

                                    <div className="inline-block overflow-hidden">
                                        <img src={Landui} className="w-full rounded-t-lg transition-transform duration-500"/>
                                    </div>

                                    <div className="2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3 flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                            ">
                                                LandUI
                                            </h3>

                                            <p className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                2xl:text-xl xl:text-xl lg:text-lg
                                            ">
                                                React Component Library
                                            </p>
                                        </div>

                                            <div className="flex flex-col gap-3
                                                2xl:px-8 lg:px-7 px-7
                                            ">
                                                <ul className="list-disc">
                                                    <li className="text-gray-800 dark:text-white transition duration-200
                                                        xl:text-base lg:text-sm text-xs 
                                                    ">
                                                        16 customizable react components to make your next website with
                                                    </li>
                                                    <li className="text-gray-800 dark:text-white transition duration-200
                                                        xl:text-base lg:text-sm text-xs 
                                                    ">
                                                        Detailed documentation and examples to help you get started quickly
                                                    </li>
                                                </ul>

                                                
                                            </div>

                                            <div className="flex flex-row 
                                                lg:gap-5 md:gap-4 sm:gap-2 gap-1">
                                                <p className="text-gray-800 dark:text-white font-semibold
                                                    xl:text-base lg:text-sm text-xs duration-200
                                                ">Next.js</p>
                                                <p className="text-gray-800 dark:text-white font-semibold
                                                    xl:text-base lg:text-sm text-xs duration-200
                                                ">TypeScript</p>
                                            </div>
                                        
                                        <motion.div className="relative justify-start flex items-center
                                            2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                                            space-x-2
                                        ">
                                            <motion.a href="https://github.com/cdiaconu04/Land-UI" target="_blank">
                                                <motion.div
                                                    whileHover={{ scale: 1.09 }}
                                                >
                                                    <FaGithub color={buttonColour} className="transition duration-200
                                                        2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                                    "/>
                                                </motion.div>
                                            </motion.a>

                                        </motion.div>
                                        
                                    </div>

                                    

                                </motion.div>
                            </motion.div>

                            {/* Eldi store */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="rounded-lg min-w-[32%] transition duration-200
                                    sm:bg-gradient-to-r sm:from-green-400 sm:via-green-400 sm:to-green-400 sm:dark:bg-gradient-to-r sm:dark:from-green-600 sm:dark:via-green-600 sm:dark:to-green-600 
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500
                                ">
                                    <div className="inline-block overflow-hidden">
                                        <img src={EldiEcomStore} className="w-full rounded-t-lg transition-transform duration-500"/>
                                    </div>
                                    
                                    <div className="2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3 flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                            ">
                                                Eldi Store
                                            </h3>

                                            <p className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                2xl:text-xl xl:text-xl lg:text-lg
                                            ">
                                                Ecom store
                                            </p>
                                        </div>

                                        <div className="2xl:px-8 lg:px-7 px-7">
                                            <ul className="list-disc">
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Modern ecom platform for Eldi's leather products
                                                </li>
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Stripe integration for simple and secure payment
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-row 
                                            lg:gap-5 md:gap-4 sm:gap-2 gap-1">
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Next.js</p>
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Javascript</p>
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Stripe</p>
                                        </div>
                                        
                                        <motion.div className="relative justify-start flex items-center
                                            2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                                            space-x-2
                                        ">
                                            <motion.a href="https://github.com/cdiaconu04/Eldi-Ecom-Store" target="_blank">
                                                <motion.div
                                                    whileHover={{ scale: 1.09 }}
                                                >
                                                    <FaGithub color={buttonColour} className="transition duration-200
                                                        2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                                    "/>
                                                </motion.div>
                                            </motion.a>

                                        </motion.div>
                                        
                                        
                                    </div>

                                </motion.div>
                            </motion.div>
                            {/* className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 dark:bg-gradient-to-r dark:from-green-600 dark:via-green-700 dark:to-green-700 rounded-lg p-7 min-w-[32%] transition duration-200" */}
                            {/* Project 3 */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="rounded-lg min-w-[32%] transition duration-200
                                    sm:bg-gradient-to-r sm:from-green-400 sm:via-green-500 sm:to-green-500 sm:dark:bg-gradient-to-r sm:dark:from-green-600 sm:dark:via-green-700 sm:dark:to-green-700 
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500
                                ">
                                    <div className="inline-block overflow-hidden">
                                        <img src={GuessRealorAI} className="w-full rounded-t-lg transition-transform duration-500"/>
                                    </div>
                                    
                                    <div className="2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3 flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                            ">
                                                Guess Real or AI
                                            </h3>

                                            <p className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                2xl:text-xl xl:text-xl lg:text-lg
                                            ">
                                                Web Game
                                            </p>
                                        </div>

                                        <div className="2xl:px-8 lg:px-7 px-7">
                                            <ul className="list-disc">
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Guess if the person is real or AI generated
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-row 
                                            lg:gap-5 md:gap-4 sm:gap-2 gap-1">
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Next.js</p>
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Typescript</p>
                                        </div>

                                        <motion.div className="relative justify-start flex items-center
                                            2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                                            space-x-2
                                        ">
                                            <motion.a href="https://github.com/cdiaconu04/Guess-Real-Or-AI" target="_blank">
                                                <motion.div
                                                    whileHover={{ scale: 1.09 }}
                                                >
                                                    <FaGithub color={buttonColour} className="transition duration-200
                                                        2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                                    "/>
                                                </motion.div>
                                            </motion.a>

                                            <motion.a href="https://guess-real-or-ai.vercel.app/" target="_blank">
                                                <motion.div
                                                    whileHover={{ scale: 1.09 }}
                                                >
                                                    <Link className="text-gray-900 dark:text-white transition duration-200
                                                        2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                                    "/>
                                                </motion.div>
                                            </motion.a>

                                        </motion.div>
                                    </div>

                                </motion.div>
                            </motion.div>

                            {/* Project 4 */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="rounded-lg min-w-[32%] transition duration-200
                                    sm:bg-gradient-to-r sm:from-emerald-400 sm:via-emerald-400 sm:to-green-400 sm:dark:bg-gradient-to-r sm:dark:from-emerald-600 sm:dark:via-emerald-600 sm:dark:to-green-600 
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500
                                ">
                                    <div className="inline-block overflow-hidden">
                                        <img src={YoutubeDownloader} className="w-full rounded-t-lg transition-transform duration-500"/>
                                    </div>
                                    
                                    <div className="2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3 flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                            ">
                                                Youtube Downloader
                                            </h3>

                                            <p className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                2xl:text-xl xl:text-xl lg:text-lg
                                            ">
                                                Video downloader
                                            </p>
                                        </div>

                                        <div className="2xl:px-8 lg:px-7 px-7">
                                            <ul className="list-disc">
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Download videos from youtube for free
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-row 
                                            lg:gap-5 md:gap-4 sm:gap-2 gap-1">
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Next.js</p>
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs duration-200
                                            ">Javascript</p>
                                        </div>

                                        <motion.div className="relative justify-start flex items-center
                                            2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                                            space-x-2
                                        ">
                                            <motion.a href="https://github.com/cdiaconu04/Youtube-Downloader" target="_blank">
                                                <motion.div
                                                    whileHover={{ scale: 1.09 }}
                                                >
                                                    <FaGithub color={buttonColour} className="transition duration-200
                                                        2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                                    "/>
                                                </motion.div>
                                            </motion.a>

                                        </motion.div>
                                    </div>

                                </motion.div>
                            </motion.div>

                            
                            
                        </div>

                    </div>
                </motion.section>

            </div>


        </div>
    )
})

export default Projects;

