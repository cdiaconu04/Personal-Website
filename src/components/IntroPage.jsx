import headshot from '../images/myheadshot.png';
import '../App.css';
import { motion } from "motion/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import React from 'react';
import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

import IntroBackground from './backgrounds/IntroBackground'
import { forwardRef } from 'react';

import { CodeXml } from 'lucide-react';

const IntroPage = forwardRef(({windowSize}, ref) => {

    function getHeadshotDimensions() {
        if (windowSize == "xs") return 140
        else if (windowSize == "sm") return 140;
        else if (windowSize == "md") return 170;
        else if (windowSize == "lg") return 210;
        else if (windowSize == "xl") return 250;
        else return 330;
    }

    const [buttonColour, setButtonColour] = useState("white")

    useEffect(() => {
        const updateColour = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setButtonColour(isDarkMode ? "white" : "#1f2937")
        }

        updateColour()

        const observer = new MutationObserver(updateColour);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        return () => observer.disconnect()

    }, [])

    return (
        <div className="w-full bg-white dark:bg-zinc-950 transition duration-200" ref={ref}>
            {/* {windowSize === "xs" ? <div/> : <IntroBackground/>} */}

            <div
                className="max-w-screen-xl mx-auto min-h-screen items-center relative overflow-hidden
                    2xl:p-4 xl:p-20 xl:px-40 lg:p-20 md:p-20 p-10
                    flex sm:flex-row flex-col
                    sm:gap-0 gap-10
                    sm:justify-between justify-center
                "
            >

                <div className="flex flex-col items-center sm:items-start
                        2xl:gap-8 lg:gap-6 md:gap-5 gap-4
                ">

                    <div className="flex flex-col items-center sm:items-start
                        2xl:gap-3 lg:gap-2 gap-1
                    ">
                        <div className="inline-flex items-center border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 rounded-sm w-fit transition duration-200
                            2xl:py-1.5 2xl:px-3 lg:py-1 lg:px-2.5 md:py-1 md:px-2 py-1 px-2
                        ">
                            <p className="text-gray-800 dark:text-white font-semibold transition duration-200
                                2xl:text-base xl:text-sm lg:text-sm text-xs
                            ">
                                Hello, I'm
                            </p>
                        </div>

                        <div className="relative inline-block">
                            
                            <h1 className="relative flex flex-col font-heading font-bold leading-tight transition duration-200
                                2xl:text-8xl xl:text-8xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl
                                sm:text-left text-center
                            "
                            >
                                <div className="relative inline-block">
                                    <motion.div
                                        initial={{ left: 0 }}
                                        animate={{ left: "100%" }}
                                        transition={{ duration: 1, ease: "easeIn", delay: 0.1}}
                                        className="absolute top-0 bottom-0 left-0 right-0 bg-green-600 z-10 rounded-md"
                                    />
                                    <p className="relative block text-gray-900 dark:text-white transition duration-200">
                                        Cristian
                                    </p>
                                </div>

                                <div className="relative inline-block">
                                    <motion.div
                                        initial={{ right: 0 }}
                                        animate={{ right: "100%" }}
                                        transition={{ duration: 1, ease: "easeIn", delay: 0.1}}
                                        className="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 dark:bg-white z-10 rounded-md transition duration-200"
                                    />
                                    <p className="relative dark:text-green-500 text-green-600 transition duration-200">
                                        Diaconu
                                    </p>
                                </div>
                            </h1>
                        </div>
                    </div>

                    <motion.div className="relative justify-start flex items-center
                        2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                        space-x-2
                    ">

                        <div className="border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 rounded-sm flex flex-row gap-1.5 justify-center items-center transition duration-200
                            2xl:py-1.5 2xl:px-3 lg:py-1 lg:px-2.5 md:py-1 md:px-2 py-1 px-2
                        ">
                            <CodeXml className="text-green-500" width={15}/>
                            <p className="flex justify-center items-center font-semibold text-gray-800 dark:text-white transition duration-200
                                2xl:text-base xl:text-sm lg:text-sm text-xs
                            ">
                                Software Engineer
                            </p>
                        </div>

                        <div className="border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 rounded-sm flex flex-row gap-1.5 justify-center items-center transition duration-200
                            2xl:py-1.5 2xl:px-3 lg:py-1 lg:px-2.5 md:py-1 md:px-2 py-1 px-2
                        ">
                            <MapPin className="text-green-500" width={15} />
                            <p className="flex justify-center items-center font-semibold text-gray-800 dark:text-white transition duration-200
                                2xl:text-base xl:text-sm lg:text-sm text-xs
                            ">
                                Toronto, ON
                            </p>
                        </div>

                    </motion.div>

                    <motion.div className="relative justify-start flex items-center
                        2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                        space-x-2
                    ">

                        <motion.a href="https://linkedin.com/in/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                            <FaLinkedin color={buttonColour} className="transition duration-200
                                2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                            "/>
                        </motion.a>

                        <motion.a href="https://github.com/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                            <FaGithub color={buttonColour} className="transition duration-200
                                2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                            "/>
                        </motion.a>

                    </motion.div>

                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur"></div>
                    <div>
                        <img className="relative rounded-full ms-auto" width={getHeadshotDimensions()} height={getHeadshotDimensions()} src={headshot} />
                    </div>
                </div>

            </div>

        </div>
    )

})

export default IntroPage;
