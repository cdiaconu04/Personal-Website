import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "motion/react"
import { forwardRef } from 'react';
import ExperienceCard from './ExperienceCard'
// import ExperienceBackground from './backgrounds/ExperienceBackground'

const experiences = [
    {
        title: "Full-Stack Engineer Intern",
        company: "Xennial Innovations",
        dateRange: "Jan - May 2026",
        bullets: ["Starting as a Full-Stack Engineer"],
        techs: ["React.js", "TypeScript"],
    },
    {
        title: "Software Developer",
        company: "Indosoft Inc.",
        dateRange: "May - August 2025",
        bullets: ["Developed company-specific LLM website using ReactJS and Django"],
        techs: ["React.js", "JavaScript", "Django", "Python"],
    },
    {
        title: "Developer Intern",
        company: "Dynamixware",
        dateRange: "May - August 2023",
        bullets: ["Developed Microsoft Business Central apps in AL"],
        techs: ["Application Language (AL)", "Microsoft BC"],
    },
]

const Experience = forwardRef(({windowSize}, ref) => {

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
        <div className="w-full bg-white dark:bg-zinc-950 relative inline-block transition duration-200
            2xl:py-52 xl:py-20 sm:py-10 py-0"
        ref={ref}>
            {/* {windowSize === "xs" ? <div/> : <ExperienceBackground inView={isInView}/>} */}

            <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-between relative overflow-hidden
                2xl:p-4 xl:p-20 xl:px-40 lg:p-20 md:p-20 p-10
            " >
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

                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className="flex flex-col gap-11"
                    >
                        <h2 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-green-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl
                        ">
                            Experience
                        </h2>

                        <div className="grid min-w-full justify-between gap-4
                            sm:grid-cols-2 grid-cols-1
                        ">
                            {experiences.map((exp, index) => (
                                <motion.div key={index} whileHover={{ y: -7 }} className="h-full w-full">
                                    <ExperienceCard
                                        title={exp.title}
                                        company={exp.company}
                                        dateRange={exp.dateRange}
                                        bullets={exp.bullets}
                                        techs={exp.techs}
                                    />
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </motion.section>
            </div>
        </div>
    )
})

export default Experience
