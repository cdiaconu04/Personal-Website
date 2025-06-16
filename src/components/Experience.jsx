import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "motion/react"
import IndosoftLogo from '../images/IndosoftLogo.jpg';
import DynamixwareLogo from '../images/DynamixwareLogo.jpg';
import { forwardRef } from 'react';
import ExperienceBackground from './backgrounds/ExperienceBackground'

const Experience = forwardRef((props, ref) => {

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
            <ExperienceBackground inView={isInView}/>
            <div className="max-w-screen-xl mx-auto min-h-screen p-4 flex items-center justify-between relative overflow-hidden" >
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

                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
                        <h2 className="text-5xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200">
                            Experience
                        </h2>
                        
                        <br/>
                        <br/>

                        {/* Experiences */}
                        {/* flex flex-row */}
                        <div className="grid grid-cols-2 min-w-full justify-between gap-4">
                            
                            {/* Indosoft */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-green-600 rounded-lg p-7 min-w-[50%] transition duration-200">

                                    <div className="flex flex-row">
                                        <div>
                                            <h3 className="text-3xl text-gray-800 dark:text-white font-bold transition duration-200">
                                                Indosoft Inc.
                                            </h3>

                                            <h3 className="text-xl text-gray-800 dark:text-white transition duration-200">
                                                Software Developer Intern
                                            </h3>
                                        </div>  

                                        <div className="flex flex-col ms-auto">
                                            <img className="w-9 h-9 ms-auto rounded-full" src={IndosoftLogo} />
                                            <p className="text-gray-800 dark:text-white transition duration-200"> May - August (2025)</p>
                                        </div>

                                    </div>
                                    <br/>
                                    
                                    <div className="px-8">
                                        <ul className="list-disc">
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                        </ul>
                                    </div>

                                </motion.div>
                            </motion.div>

                            {/* Dynamixware */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-gradient-to-r from-green-400 to-green-500 dark:bg-gradient-to-r dark:from-green-600 dark:to-green-700 rounded-lg p-7 min-w-[50%] transition duration-200">
                                    <div className="flex flex-row">
                                        <div>
                                            <h3 className="text-3xl text-gray-800 dark:text-white font-bold transition duration-200">
                                                Dynamixware
                                            </h3>

                                            <h3 className="text-xl text-gray-800 dark:text-white transition duration-200">
                                                Junior Developer
                                            </h3>
                                        </div> 

                                        <div className="flex flex-col ms-auto">
                                            <img className="w-9 h-9 ms-auto rounded-full" src={DynamixwareLogo} />
                                            <p className="text-gray-800 dark:text-white transition duration-200"> May - August (2023)</p>
                                        </div>

                                    </div>                       
                                    
                                    <br/>
                                    
                                    <div className="flex flex-col px-8 gap-3">
                                        <ul className="list-disc">
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                            <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                Did this and that and this and that and this and that and this and that and this and that and this and that and
                                            </li>
                                        </ul>

                                        <div className="flex flex-row gap-2">
                                            <div className="px-3 py-1 rounded-full border-2 border-white">
                                                <p className="text-white text-md font">Application Language (AL)</p>
                                            </div>
                                            <div className="px-3 py-1 rounded-full border-2 border-white">
                                                <p className="text-white text-md font">Microsoft BC</p>
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
