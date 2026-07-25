import '../App.css';
import { motion } from "motion/react"
import { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';
// import AboutBackground from './backgrounds/AboutBackground'

const About = forwardRef(({windowSize}, ref) => {
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
        <div className="w-full bg-white dark:bg-zinc-950 relative inline-block z-10 transition duration-200 py-12" ref={ref}>
            {/* {windowSize === "xs" ? <div/> : <AboutBackground inView={isInView}/>} */}

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
                        <h2 className="text-gray-800 dark:text-white font-heading font-bold underline decoration-emerald-400 dark:decoration-green-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl
                        ">
                            About me
                        </h2>

                        <div className="flex flex-col gap-6
                            2xl:text-lg xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs
                        ">
                            <p className="text-gray-800 dark:text-neutral-300/80 transition duration-200">
                                <span className="font-normal dark:text-white transition duration-200">Hi, I'm Cristian.
                                </span> I am a Computer Science student at the University of Waterloo and love building cool things through code. I am interested in fullstack software development.
                            </p>
                            <p className="text-gray-800 dark:text-neutral-300/80 transition duration-200">
                                In my free time, I like weightlifting, making electronic music, and biking. I am always open to opportunities for projects, collaborations, or internships that allow me to contribute to meaningful work.
                            </p>
                            <p className="text-gray-800 dark:text-neutral-300/80 transition duration-200">
                                Feel free to check out some of my work down below and on Github. If you'd like to connect, reach out via Linkedin or Email - I'd love to chat.
                            </p>
                        </div>
                    </div>
                </div>

            </motion.section>

        </div>
    )
})

export default About;
