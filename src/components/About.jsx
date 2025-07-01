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

import { tech } from '../data/tech.js'


const About = forwardRef(({windowSize}, ref) => {
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

    function getTechIconDimensions() {
        if (windowSize == "xs") return 20
        else if (windowSize == "sm") return 20;
        else if (windowSize == "md") return 23;
        else if (windowSize == "lg") return 25;
        else if (windowSize == "xl") return 27;
        else return 30;
    }

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
            {windowSize === "xs" ? <div/> : <AboutBackground inView={isInView}/>}

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

                <div className="relative max-w-screen-xl mx-auto py-10 flex flex-col gap-14 relative overflow-hidden
                    2xl:p-4 xl:p-20 lg:p-20 md:p-20 p-10
                ">
                    <div className="flex flex-col gap-11">
                        <h2 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl 
                        ">
                            About me
                        </h2>

                        <motion.div whileHover={{ y: -7 }}>
                            <div className="dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 rounded-lg p-7 flex flex-col gap-2 transition duration-200">
                                <p className="text-gray-800 dark:text-white transition duration-200
                                    2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs
                                ">
                                    Hi, I'm Cristian. I am a Computer Science student at the University of Waterloo and love building cool things through code. 
                                        I am interested in fullstack software development. In my free time, I like weightlifting, making electronic music, and biking. 
                                        I am always open to and opportunities for projects, collaborations, or internships that allow me to contribute to meaningful work.
                                        Feel free to check out some of my work down below and on Github. If you'd like to connect, reach out via Linkedin or Email - I'd love to chat.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="flex flex-col gap-11">
                        <h3 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200
                            2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base
                        ">
                            Tech I work with
                        </h3>

                        <div className="grid 
                            lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4
                            2xl:gap-5 xl:gap-5 lg:gap-4 md:gap-3 gap-2
                        ">
                            {tech.map((tec, index) => (
                                <div key={index} className="flex flex-row justify-center items-center gap-3 border border-2 border-green-500 dark:border-green-700 rounded-xl transition duration-200 
                                    dark:hover:bg-gradient-to-r dark:hover:from-emerald-600 dark:hover:via-green-600 dark:hover:to-green-700
                                    hover:bg-gradient-to-r hover:from-emerald-400 hover:via-green-400 hover:to-green-500
                                    py-2 px-8S
                                ">
                                    <img src={tec.pic} width={getTechIconDimensions()} className={tec.specialStyle}/>
                                    <p className="text-gray-950 dark:text-white font-bold transition duration-200
                                        2xl:text-lg xl:text-base lg:text-sm md:text-sm sm:text-sm
                                    "> {tec.name} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>

            </motion.section>

        </div>
    )
})

export default About;
