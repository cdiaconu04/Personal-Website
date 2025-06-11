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
    // const { onStrictlyPartlyInView, notOnStrictlyPartlyInView } = props;


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

    // const greenRef = useRef(null);
    // const isPartlyInView = useInView(greenRef, { amount: 0.01 });
    // const isFullyInView = useInView(greenRef, { amount: 1 });
    // const [isStrictlyPartlyInView, setIsStrictlyPartlyInView] = useState(false)
    // const prev = useRef(null);

    // useEffect(() => {
    //     const current = isPartlyInView && !isFullyInView
    //     setIsStrictlyPartlyInView(current)

    //     if (prev.current !== current) {
    //         if (current) onStrictlyPartlyInView()
    //         else notOnStrictlyPartlyInView()
    //     }

        
    // }, [isPartlyInView, isFullyInView])

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
                            <div className="bg-gradient-to-r from-emerald-400 to-green-400 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-green-600 rounded-lg p-7 flex flex-col gap-2 transition duration-200">
                                <p className="text-gray-800 dark:text-white text-lg transition duration-200">
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
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="flex flex-col gap-11">
                        <h3 className="text-4xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200">
                            Technologies I work with
                        </h3>

                        <Marquee
                            pauseOnHover={true}
                            speed={15}
                            className="flex flex-row gap-5"
                            direction="right"
                        >
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Cplusplus} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> C++ </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Java} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Java </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Supabase} width={50} className="rounded-full"/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Supabase </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Python} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Python </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={React} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> React.js </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={githubPic} width={50} className=""/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Github </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Prisma} width={40} className="dark:bg-white rounded-full"/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Prisma </p>
                                </div>
                            </div>
                        </Marquee>

                        <Marquee
                            pauseOnHover={true}
                            speed={15}
                            className="flex flex-row gap-5"
                        >
                            <div className="flex flex-row gap-5">
                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={HTML} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> HTML </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Git} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Git </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={AL} width={50} className="rounded-full"/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> AL </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={PostgreSQL} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> PostgreSQL </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Next} width={50} className="dark:bg-white dark:rounded-full"/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Next.js </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Javascript} width={50} className="rounded-lg"/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Javascript </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={C} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> C </p>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-3 border border-4 border-green-500 dark:border-green-700 py-3 px-5 rounded-full transition duration-200">
                                    <img src={Tailwind} width={50}/>
                                    <p className="text-gray-950 dark:text-white font-bold text-xl transition duration-200"> Tailwind CSS </p>
                                </div>
                            </div>
                        </Marquee>
                    </div>
                    

                </div>

            </motion.section>

        </div>
    )
})

export default About;
