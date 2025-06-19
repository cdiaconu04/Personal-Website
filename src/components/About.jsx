import '../App.css';
import { motion, useInView, useAnimate, useAnimation } from "motion/react"
import { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';
import AboutBackground from './backgrounds/AboutBackground'
import Marquee from "react-fast-marquee";

import Cplusplus from '../images/techIcons/Cplusplus.png'
import C from '../images/techIcons/C.png'
import AL from '../images/techIcons/AL.png'
import Git from '../images/techIcons/Git.png'
import Github from '../images/techIcons/Github.png'
import GithubWhite from '../images/techIcons/GithubWhite.png'
import HTML from '../images/techIcons/HTML.webp'
import Java from '../images/techIcons/Java.png'
import Javascript from '../images/techIcons/Javascript.png'
import Next from '../images/techIcons/Next.png'
import PostgreSQL from '../images/techIcons/PostgreSQL.png'
import Prisma from '../images/techIcons/Prisma.png'
import Python from '../images/techIcons/Python.png'
import React from '../images/techIcons/React.webp'
import Supabase from '../images/techIcons/Supabase.png'
import Tailwind from '../images/techIcons/Tailwind.png'


const About = forwardRef((props, ref) => {
    const isHalfInView = useInView(ref, { once: true, amount: 0.5 });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isHalfInView) {
            mainControls.start("visible");
        }
    }, [isHalfInView]);

    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const [githubPic, setGithubPic] = useState(GithubWhite)


    useEffect(() => {
        const updateColour = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setGithubPic(isDarkMode ? GithubWhite : Github)
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
    
            { threshold: 0.3 }
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
        <div className="w-full bg-white dark:bg-black relative inline-block z-10 transition duration-200 py-12" ref={ref}>
            <AboutBackground inView={isInView}/>

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

                <div className="relative max-w-screen-xl mx-auto p-4 py-10 flex flex-col gap-14 relative overflow-hidden">
                    <div className="flex flex-col gap-11">
                        <h2 className="text-5xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200">
                            About me
                        </h2>

                        <motion.div whileHover={{ y: -7 }}>
                            <div className="dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 rounded-lg p-7 flex flex-col gap-2 transition duration-200">
                                {/* <p className="text-gray-800 dark:text-white text-lg transition duration-200">
                                    Hi! I'm Cristian, a CS student at the University of Waterloo with a passion for building cool things through code.
                                </p>
                                <p className="text-gray-800 dark:text-white text-lg transition duration-200">
                                    I am interested in this and that and this and that and this and that.
                                </p>
                                <p className="text-gray-800 dark:text-white text-lg transition duration-200">
                                    In my free time, I love weightlifting, making electronic music, and 
                                </p>
                                <p className="text-gray-800 dark:text-white text-lg transition duration-200">
                                    I am currently looking for internships for summer 2026.
                                </p> */}
                                <p className="text-gray-800 dark:text-white text-lg transition duration-200">
                                    Hi, I'm Cristian. I am a Computer Science student at the University of Waterloo and love building cool things through code. 
                                        I am interested in fullstack software development. In my free time, I like weightlifting, making electronic music, and biking. 
                                        I am always open to and opportunities for projects, collaborations, or internships that allow me to contribute to meaningful work.
                                        Feel free to check out some of my work down below and on Github. If you'd like to connect, reach out via Linkedin or Email - I'd love to chat.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="flex flex-col gap-11">
                        <h3 className="text-4xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200">
                            Tech I work with
                        </h3>

                        <div className="grid grid-cols-7 gap-5">
                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200 
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Cplusplus} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> C++ </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Java} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Java </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Supabase} width={30} className="rounded-full"/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Supabase </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Python} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Python </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={React} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> React.js </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={githubPic} width={30} className=""/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Github </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Prisma} width={30} className="dark:bg-white rounded-full"/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Prisma </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={HTML} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> HTML </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Git} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Git </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={AL} width={30} className="rounded-full"/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> AL </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={PostgreSQL} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> PostgreSQL </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Next} width={30} className="dark:bg-white dark:rounded-full"/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Next.js </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Javascript} width={30} className="rounded-lg"/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Javascript </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={C} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> C </p>
                            </div>

                            <div className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 py-2 px-5 rounded-xl transition duration-200
                                dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500">
                                <img src={Tailwind} width={30}/>
                                <p className="text-gray-950 dark:text-white font-bold text-lg transition duration-200"> Tailwind </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </motion.section>

        </div>
    )
})

export default About;
