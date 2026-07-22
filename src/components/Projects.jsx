import { motion } from "motion/react"
import React, { useState, useEffect, useRef } from 'react';
import { forwardRef } from 'react';

// import ProjectsBackground from './backgrounds/ProjectsBackground'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Projects = forwardRef(({windowSize}, ref) => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const [buttonColour, setButtonColour] = useState("white");

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
        <div className="w-full bg-white dark:bg-zinc-950 transition duration-200 relative inline-block
            2xl:py-52 xl:py-20 sm:py-10 py-0
        " ref={ref}>
            {/* {windowSize === "xs" ? <div/> : <ProjectsBackground inView={isInView}/>} */}

            <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-between relative overflow-hidden
                2xl:p-4 xl:p-20 xl:px-40 lg:p-20 md:p-20 p-10
            ">
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

                    <div className="flex flex-col gap-11">
                        <h2 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-green-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl
                        ">
                            Projects
                        </h2>

                        <div className="grid min-w-full justify-between gap-4
                            sm:grid-cols-3 grid-cols-1
                        ">
                            {projects.map((project, index) => (
                                <motion.div key={index} whileHover={{ y: -7 }}>
                                    <ProjectCard
                                        image={project.image}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        bullets={project.bullets}
                                        techs={project.techs}
                                        githubUrl={project.githubUrl}
                                        liveUrl={project.liveUrl}
                                        buttonColour={buttonColour}
                                    />
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </motion.section>

            </div>


        </div>
    )
})

export default Projects;
