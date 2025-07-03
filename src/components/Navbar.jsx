import React from 'react';
import { useState, useEffect } from "react";
import { Disc3 } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { motion } from "motion/react"

const Navbar = ({intro, about, experience, projects}) => {

    const [theme, setTheme] = useState("dark")

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        }

    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        
        localStorage.setItem("theme", theme);

    }, [theme]);

    return (
        <nav className="dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 fixed top-0 left-0 w-full z-50 transition duration-300">
            <div className="flex items-center justify-between mx-auto
                xl:px-4 xl:py-2 lg:px-4 lg:py-1 md:px-3 md:py-0.5 px-2 py-0.5
            ">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Disc3 className="animate-spin text-gray-800 dark:text-white transition duration-200
                        2xl:w-7 2xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4
                    "/>
                </a>

                

                <div id="navbar-default">
                    <div className="flex flex-row gap-4">
                        <ul className="font-medium flex flex-row rtl:space-x-reverse
                            2xl:space-x-2 xl:space-x-2 lg:space-x-0.5 md:space-x-0.5 space-x-0.5
                        ">
                            <li className="flex flex-col">
                                <a href="#Home" onClick={() => scrollTo(intro)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">Home
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#About" onClick={() => scrollTo(about)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">About
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#Experience" onClick={() => scrollTo(experience)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">Experience
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#Projects" onClick={() => scrollTo(projects)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">Projects
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                        </ul>


                        <button>
                            {theme === "dark" ? 
                                <motion.div className="group hover:bg-white rounded-full p-1 transition duration-200"
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => {theme === "light" ? setTheme("dark") : setTheme("light")}}
                                >
                                    <Sun className="text-white group-hover:bg-white group-hover:text-black rounded-full
                                        2xl:w-7 2xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4
                                    "/> 
                                </motion.div>
                                
                            
                            :   
                                <motion.div className="group hover:bg-gray-800 rounded-full p-1 transition duration-200"
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => {theme === "light" ? setTheme("dark") : setTheme("light")}}
                                >
                                    <Moon className="text-gray-800 group-hover:text-white
                                        2xl:w-7 2xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4
                                    "/>
                                </motion.div>

                            }
                        </button>
                    </div>

                    
                    
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
