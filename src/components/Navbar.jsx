import React from 'react';
import { useState, useEffect } from "react";
import { Disc3, Sun, Moon } from 'lucide-react';
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
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-md border-b border-gray-200/60 dark:border-white/10 transition duration-300">
            <div className="flex items-center justify-between mx-auto
                xl:px-8 xl:py-4 lg:px-6 lg:py-3 md:px-4 md:py-2.5 px-3 py-2
            ">

                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Disc3 className="animate-spin text-gray-800 dark:text-white transition duration-200
                        2xl:w-7 2xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4
                    "/>
                </a>

                <div id="navbar-default">
                    <div className="flex flex-row items-center gap-4">
                        <ul className="font-medium flex flex-row rtl:space-x-reverse
                            2xl:space-x-2 xl:space-x-2 lg:space-x-0.5 md:space-x-0.5 space-x-0.5
                        ">
                            <li className="flex flex-col">
                                <a href="#Home" onClick={() => scrollTo(intro)} className="group block py-2 px-3 text-gray-700 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">Home
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600 dark:bg-green-400"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#About" onClick={() => scrollTo(about)} className="group block py-2 px-3 text-gray-700 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">About
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600 dark:bg-green-400"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#Experience" onClick={() => scrollTo(experience)} className="group block py-2 px-3 text-gray-700 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">Experience
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600 dark:bg-green-400"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#Projects" onClick={() => scrollTo(projects)} className="group block py-2 px-3 text-gray-700 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 rounded-sm border-0 transition duration-200
                                    xl:text-base md:text-sm sm:text-xs
                                ">Projects
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600 dark:bg-green-400"></span>
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
