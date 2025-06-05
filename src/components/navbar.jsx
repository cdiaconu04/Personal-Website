import React from 'react';
import { useState, useEffect } from "react";
import { Disc3 } from 'lucide-react';
import { Sun } from 'lucide-react';

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
        <nav className="dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between mx-auto px-4 py-2">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Disc3 className="animate-spin text-gray-800 dark:text-white"/>
                </a>

                <div id="navbar-default">
                    <div className="flex flex-row gap-4">
                        <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                            <li className="flex flex-col">
                                <a href="#Home" onClick={() => scrollTo(intro)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-300">Home
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#About" onClick={() => scrollTo(about)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-300">About
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#Experience" onClick={() => scrollTo(experience)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-300">Experience
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <a href="#Projects" onClick={() => scrollTo(projects)} className="group block py-2 px-3 text-gray-800 dark:text-white rounded-sm border-0 transition duration-300">Projects
                                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-950 dark:bg-white"></span>
                                </a>
                            </li>
                        </ul>


                        <button>
                            <Sun className="text-gray-800 dark:text-white"
                                onClick={() => {theme === "light" ? setTheme("dark") : setTheme("light")}}
                            />
                        </button>
                    </div>

                    
                    
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
