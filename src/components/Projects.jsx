import { motion } from "motion/react"
import React, { useState, useEffect, useRef } from 'react';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
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
        <div className="w-full bg-white dark:bg-black" ref={ref}>
            <div className="max-w-screen-xl mx-auto min-h-screen p-4 flex items-center justify-between relative overflow-hidden">
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

                
                    <div>
                        <h2 className="text-5xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600">
                            Projects
                        </h2>
                        
                        <br/>
                        <br/>

                        {/* Experiences */}
                        <div className="flex flex-row min-w-full justify-between space-x-4">
                            
                            {/* Proj1 */}
                            <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-emerald-400 via-emerald-400 to-green-400 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-emerald-600 dark:to-green-600 rounded-lg p-7 min-w-[32%]">

                                <div className="flex flex-row">
                                    <div>
                                        <h3 className="text-3xl text-gray-800 dark:text-white font-bold">
                                            Project 1
                                        </h3>

                                    
                                    </div>  

                                </div>
                                <br/>
                                
                                <div className="px-8">
                                    <ul className="list-disc">
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                    </ul>
                                </div>

                            </motion.div>

                            {/* Dynamixware */}
                            <motion.div whileHover={{ y: -7 }} className="bg-green-400 dark:bg-green-600 rounded-lg p-7 min-w-[32%]">
                                <div className="flex flex-row">
                                    <div>
                                        <h3 className="text-3xl text-gray-800 dark:text-white font-bold">
                                            Project 2
                                        </h3>

                                    </div> 

                                </div>
                                
                                
                                <br/>
                                
                                <div className="px-8">
                                    <ul className="list-disc">
                                        <li className="text-md text-gray-800 dark:text-white">
                                        Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                        Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                        Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                        Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                        Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 dark:bg-gradient-to-r dark:from-green-600 dark:via-green-700 dark:to-green-700 rounded-lg p-7 min-w-[32%]">
                                <div className="flex flex-row">
                                    <div>
                                        <h3 className="text-3xl text-gray-800 dark:text-white font-bold">
                                            Project 2
                                        </h3>

                                    </div> 

                                </div>
                                
                                
                                <br/>
                                
                                <div className="px-8">
                                    <ul className="list-disc">
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                        <li className="text-md text-gray-800 dark:text-white">
                                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            
                        </div>

                    </div>
                </motion.section>

            </div>


        </div>
    )
})

export default Projects;

