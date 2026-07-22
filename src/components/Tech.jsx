import { motion } from "motion/react"
import { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';

import { tech } from '../data/tech.js'

const Tech = forwardRef(({windowSize}, ref) => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    function getTechIconDimensions() {
        if (windowSize == "xs") return 20
        else if (windowSize == "sm") return 20;
        else if (windowSize == "md") return 23;
        else if (windowSize == "lg") return 25;
        else if (windowSize == "xl") return 27;
        else return 30;
    }

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
        <div className="w-full bg-white dark:bg-neutral-800/40 relative inline-block z-10 transition duration-200 py-12" ref={ref}>
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
                    2xl:p-4 xl:p-20 xl:px-40 lg:p-20 md:p-20 p-10
                ">
                    <div className="flex flex-col gap-11">
                        <h3 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl
                        ">
                            Tech I work with
                        </h3>

                        <div className="grid
                            lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3
                            2xl:gap-5 xl:gap-5 lg:gap-4 md:gap-3 gap-2
                        ">
                            {tech.map((tec, index) => (
                                <div key={index} className="flex flex-row justify-center items-center gap-3 
                                    border border-green-500 dark:border-neutral-700 rounded-full transition duration-200
                                    dark:hover:ring dark:hover:ring-1 dark:hover:ring-neutral-700
                                    hover:ring hover:ring-2 hover:ring-green-500
                                    py-2 px-8S
                                ">
                                    <img src={tec.pic} width={getTechIconDimensions()} className={tec.specialStyle}/>
                                    <p className="text-gray-950 dark:text-neutral-300/80 transition duration-200
                                        font-semibold
                                        2xl:text-lg xl:text-base lg:text-sm md:text-sm sm:text-sm text-xs
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

export default Tech;
