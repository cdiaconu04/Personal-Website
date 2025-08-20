import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "motion/react"
import IndosoftLogo from '../images/IndosoftLogo.jpg';
import DynamixwareLogo from '../images/DynamixwareLogo.jpg';
import { forwardRef } from 'react';
import ExperienceBackground from './backgrounds/ExperienceBackground'

const Experience = forwardRef(({windowSize}, ref) => {

    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

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
        <div className="w-full bg-white dark:bg-black relative inline-block transition duration-200" ref={ref}>
            {windowSize === "xs" ? <div/> : <ExperienceBackground inView={isInView}/>}

            <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-between relative overflow-hidden
                2xl:p-4 xl:p-20 lg:p-20 md:p-20 p-10
            " >
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

                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className="flex flex-col gap-11"
                    >
                        <h2 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl 
                        ">
                            Experience
                        </h2>

                        {/* Experiences */}
                        {/* flex flex-row */}
                        <div className="grid min-w-full justify-between gap-4
                            sm:grid-cols-2 grid-cols-1
                        ">
                            
                            {/* Indosoft */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="rounded-lg min-w-[50%] transition duration-200
                                    2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3
                                    sm:bg-gradient-to-r sm:from-emerald-400 sm:to-green-400 sm:dark:bg-gradient-to-r sm:dark:from-emerald-600 sm:dark:to-green-600 
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 
                                ">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-row">
                                            <div className="flex flex-col">
                                                <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                    2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                                ">
                                                    Indosoft Inc.
                                                </h3>

                                                <h3 className="text-gray-800 dark:text-white transition duration-200
                                                    2xl:text-xl xl:text-xl lg:text-lg font-semibold
                                                ">
                                                    Software Developer
                                                </h3>
                                            </div>  

                                            <div className="flex flex-col ms-auto">
                                                <img className="ms-auto rounded-full
                                                    xl:w-9 xl:h-9 w-8 h-8
                                                " src={IndosoftLogo} />
                                                <p className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                    lg:text-base text-xs
                                                "> May - August (2025)</p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col gap-3
                                            2xl:px-8 lg:px-7 px-7
                                        ">
                                            <ul className="list-disc">
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Building a responsive frontend using ReactJS, allowing users to select and interact with LLMs through a unified chat interface, enhancing usability and model comparison
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-row 
                                            lg:gap-5 md:gap-4 sm:gap-3 gap-2
                                        ">
                                            
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs
                                            ">React.js</p>
                                            
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs
                                            ">Javascript</p>
                                            
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Dynamixware */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="rounded-lg min-w-[50%] transition duration-200
                                    2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3
                                    sm:bg-gradient-to-r sm:from-green-400 sm:to-green-500 sm:dark:bg-gradient-to-r sm:dark:from-green-600 sm:dark:to-green-700 
                                    dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500
                                ">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-row">
                                            <div>
                                                <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                    2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                                ">
                                                    Dynamixware
                                                </h3>

                                                <h3 className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                    2xl:text-xl xl:text-xl lg:text-lg
                                                ">
                                                    Junior Developer
                                                </h3>
                                            </div> 

                                            <div className="flex flex-col ms-auto justify-center items-center">
                                                <img className="ms-auto rounded-full
                                                    xl:w-9 xl:h-9 w-8 h-8 
                                                " src={DynamixwareLogo} />
                                                <p className="text-gray-800 dark:text-white transition duration-200 font-semibold
                                                    lg:text-base text-xs
                                                "> May - August (2023)</p>
                                            </div>

                                        </div>                       
                                        
                                        
                                        
                                        <div className="flex flex-col gap-3
                                            2xl:px-8 lg:px-7 px-7
                                        ">
                                            <ul className="list-disc">
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Developed 15+ Microsoft Business Central apps using Application Language (AL) to enable efficient client-side business management
                                                </li>
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Implemented table flow-fields to automate customer database updates, enhancing data accuracy and system efficiency by 20%
                                                </li>
                                                <li className="text-gray-800 dark:text-white transition duration-200
                                                    xl:text-base lg:text-sm text-xs 
                                                ">
                                                    Collaborated with internal development team to successfully deliver production-ready solutions under tight client deadlines
                                                </li>
                                            </ul>

                                            

                                        </div>
                                        
                                        <div className="flex flex-row
                                            lg:gap-5 md:gap-4 sm:gap-3 gap-2
                                        ">
                                            
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs
                                            ">Application Language (AL)</p>
                                            
                                            
                                            <p className="text-gray-800 dark:text-white font-semibold
                                                xl:text-base lg:text-sm text-xs
                                            ">Microsoft BC</p>
                                            
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.div>
                            
                        </div>

                    </motion.div>
                </motion.section>
            </div>
        </div>
    )
})

export default Experience