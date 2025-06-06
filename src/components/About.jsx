import '../App.css';
import { motion, useInView, useAnimate, useAnimation } from "motion/react"
import { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';
import AboutBackground from './backgrounds/AboutBackground'

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

            {/* <motion.section
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
                <motion.div
                    initial={{ left: 0 }}
                    animate={mainControls}
                    variants={{
                        visible: { left: "100%", transition: { duration: 0.8, ease: "easeIn" } }
                    }}
                    className="absolute top-0 bottom-0 left-0 right-0 h-1/2 bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 z-10 rounded-xl"
                />
                <motion.div
                    initial={{ left: 0 }}
                    animate={mainControls}
                    variants={{
                        visible: { right: "100%", transition: { duration: 0.8, ease: "easeIn" } }
                    }}
                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-300 z-10 rounded-xl"
                />
                <div className="relative max-w-screen-xl mx-auto p-4 py-10 flex items-center justify-between relative overflow-hidden">

                    <div>
                        <h2 className="text-5xl text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600">
                            About me
                        </h2>

                        <br/>
                        <br/>

                        <p className="text-gray-800 dark:text-white text-lg">
                            Hi! I'm Cristian, a CS student at the University of Waterloo with a passion for building cool things through code.
                        </p>
                        <br/>
                        <p className="text-gray-800 dark:text-white text-lg">
                            I am interested in this and that and this and that and this and that.
                        </p>
                        <br/>
                        <p className="text-gray-800 dark:text-white text-lg">
                            In my free time, I love this and that and this and that and this and that.
                        </p>
                        <br/>
                        <p className="text-gray-800 dark:text-white text-lg">
                            I am currently looking for internships for summer 2026.
                        </p>

                    </div>

                </div>
            </motion.section> */}
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

            <div className="relative max-w-screen-xl mx-auto p-4 py-10 flex flex-col gap-11 relative overflow-hidden">
                
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

            </motion.section>

        </div>
    )
})

export default About;
