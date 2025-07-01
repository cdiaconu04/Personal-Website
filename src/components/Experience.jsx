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
                        <div className="grid grid-cols-2 min-w-full justify-between gap-4">
                            
                            {/* Indosoft */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-green-600 rounded-lg p-7 min-w-[50%] transition duration-200
                                    2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3
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
                                                    2xl:text-xl xl:text-xl lg:text-lg
                                                ">
                                                    Software Developer Intern
                                                </h3>
                                            </div>  

                                            <div className="flex flex-col ms-auto">
                                                <img className="ms-auto rounded-full
                                                    xl:w-9 xl:h-9 w-8 h-8
                                                " src={IndosoftLogo} />
                                                <p className="text-gray-800 dark:text-white transition duration-200
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

                                        <div className="flex flex-row gap-2">
                                            <div className="rounded-full sm:border-2 sm:border-gray-800 sm:dark:border-white
                                                lg:px-3 lg:py-1 md:px-2 md:py-1">
                                                <p className="text-gray-800 dark:text-white
                                                    xl:text-base lg:text-sm text-xs
                                                ">React.js</p>
                                            </div>
                                            <div className="px-3 py-1 rounded-full sm:border-2 sm:border-gray-800 sm:dark:border-white
                                                lg:px-3 lg:py-1 md:px-2 md:py-1
                                            ">
                                                <p className="text-gray-800 dark:text-white
                                                    xl:text-base lg:text-sm text-xs
                                                ">Javascript</p>
                                            </div>
                                            {/* <div className="px-3 py-1 rounded-full border-2 border-gray-800 dark:border-white
                                                lg:px-3 lg:py-1 md:px-2 md:py-1
                                            ">
                                                <p className="text-gray-800 dark:text-white
                                                    xl:text-base lg:text-sm text-xs
                                                ">Django</p>
                                            </div>
                                            <div className="px-3 py-1 rounded-full border-2 border-gray-800 dark:border-white
                                                lg:px-3 lg:py-1 md:px-2 md:py-1
                                            ">
                                                <p className="text-gray-800 dark:text-white
                                                    xl:text-base lg:text-sm text-xs
                                                ">Python</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Dynamixware */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-gradient-to-r from-green-400 to-green-500 dark:bg-gradient-to-r dark:from-green-600 dark:to-green-700 rounded-lg min-w-[50%] transition duration-200
                                    2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3
                                ">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-row">
                                            <div>
                                                <h3 className="text-gray-800 dark:text-white font-bold transition duration-200
                                                    2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                                ">
                                                    Dynamixware
                                                </h3>

                                                <h3 className="text-gray-800 dark:text-white transition duration-200
                                                    2xl:text-xl xl:text-xl lg:text-lg
                                                ">
                                                    Junior Developer
                                                </h3>
                                            </div> 

                                            <div className="flex flex-col ms-auto justify-center items-center">
                                                <img className="ms-auto rounded-full
                                                    xl:w-9 xl:h-9 w-8 h-8 
                                                " src={DynamixwareLogo} />
                                                <p className="text-gray-800 dark:text-white transition duration-200
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

                                        <div className="flex flex-row gap-2">
                                            <div className="rounded-full sm:border-2 sm:border-gray-800 sm:dark:border-white
                                                lg:px-3 lg:py-1 md:px-2 md:py-1
                                            ">
                                                <p className="text-gray-800 dark:text-white
                                                    xl:text-base lg:text-sm text-xs
                                                ">Application Language (AL)</p>
                                            </div>
                                            <div className="rounded-full sm:border-2 sm:border-gray-800 sm:dark:border-white
                                                lg:px-3 lg:py-1 md:px-2 md:py-1
                                            ">
                                                <p className="text-gray-800 dark:text-white 
                                                    xl:text-base lg:text-sm text-xs
                                                ">Microsoft BC</p>
                                            </div>
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
