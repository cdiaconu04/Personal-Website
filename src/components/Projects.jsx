import { motion } from "motion/react"
import React, { useState, useEffect, useRef } from 'react';
import { forwardRef } from 'react';

import CodeBasketPic from '../images/projectpics/codebasket.png'
import EldiEcomStore from '../images/projectpics/eldiecomstore.png'
import { Code } from "lucide-react";

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
        <div className="w-full bg-white dark:bg-black transition duration-200" ref={ref}>
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
                        <h2 className="text-5xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200">
                            Projects
                        </h2>
                        
                        <br/>
                        <br/>

                        {/* Projects */}
                        <div className="grid grid-cols-3 min-w-full justify-between gap-4">
                            
                            {/* Proj1 */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-gradient-to-r from-emerald-400 via-emerald-400 to-green-400 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-emerald-600 dark:to-green-600 rounded-lg min-w-[32%] transition duration-200">

                                    <div className="inline-block overflow-hidden">
                                        <img src={CodeBasketPic} className="w-full rounded-t-lg hover:scale-105 transition-transform duration-500"/>
                                    </div>
                                    <div className="p-7">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-3xl text-gray-800 dark:text-white font-bold transition duration-200">
                                                Code Basket
                                            </h3>

                                            <p className="text-xl text-gray-800 dark:text-white transition duration-200">
                                                Code snippet manager
                                            </p>

                                            <div className="px-8">
                                                <ul className="list-disc">
                                                    <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                        Organize snippets by language, tags, etc
                                                    </li>
                                                    <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                        One-click copy to keyboard
                                                    </li>
                                                    <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                        Supports syntax highlighting for better readability
                                                    </li>
                                                </ul>
                                            </div>

                                            
 

                                        </div>
                                        <br/>
                                        
                                        {/* <div className="px-8">
                                            <ul className="list-disc">
                                                <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                    Snippet Manager
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
                                        </div> */}

                                    </div>

                                </motion.div>
                            </motion.div>

                            {/* Eldi store */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-green-400 dark:bg-green-600 rounded-lg min-w-[32%] transition duration-200">
                                    <div className="inline-block overflow-hidden">
                                        <img src={EldiEcomStore} className="w-full rounded-t-lg hover:scale-105 transition-transform duration-500"/>
                                    </div>
                                    
                                    <div className="p-7">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-3xl text-gray-800 dark:text-white font-bold transition duration-200">
                                                Eldi Store
                                            </h3>

                                            <p className="text-xl text-gray-800 dark:text-white transition duration-200">
                                                Ecom store
                                            </p>

                                            <div className="px-8">
                                                <ul className="list-disc">
                                                    <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                        Modern ecom platform for Eldi leather products
                                                    </li>
                                                    <li className="text-md text-gray-800 dark:text-white transition duration-200">
                                                        Stripe integration for secure payment
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <br/>

                                    </div>

                                </motion.div>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div whileHover={{ y: -7 }}>
                                <motion.div className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 dark:bg-gradient-to-r dark:from-green-600 dark:via-green-700 dark:to-green-700 rounded-lg p-7 min-w-[32%] transition duration-200">
                                    <div className="flex flex-row">
                                        <div>
                                            <h3 className="text-3xl text-gray-800 dark:text-white font-bold transition duration-200">
                                                Project 2
                                            </h3>

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
                            
                        </div>

                    </div>
                </motion.section>

            </div>


        </div>
    )
})

export default Projects;

