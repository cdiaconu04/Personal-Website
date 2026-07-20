import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react"
import { useEffect, useRef, useState } from 'react';

const Footer = ({onInView, onOutOfView}) => {
    const ref = useRef(null);
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
        
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onInView();
                } else {
                    onOutOfView();
                }
            },
        
            { threshold: 0.01 }
        );
            
        if (ref.current) {
            observer.observe(ref.current);
        }
            
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [onInView, onOutOfView]);

    return (
        <div className="w-full bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 relative inline-block border-b-2 border-t-2 border-emerald-400 dark:border-emerald-600 z-10 transition duration-200" ref={ref}>
            <div className="relative max-w-screen-xl mx-auto  flex items-center justify-between relative overflow-hidden
                2xl:px-4 xl:px-20 lg:px-20 md:px-20 px-10
                2xl:py-6 xl:py-6 lg:py-5 md:py-4 py-3

            ">
                <div className="flex flex-col gap-3">
                    <h1 className="text-gray-800 dark:text-white font-bold transition duration-200
                        2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg
                    ">Cristian Diaconu</h1>
                    <p className="text-gray-800 dark:text-white transition duration-200
                        lg:text-base text-sm
                    "> cristian.diaconu0423@gmail.com </p>
                </div>

                <div className="flex flex-row gap-3">
                    <motion.a href="https://linkedin.com/in/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <div>
                            <FaLinkedin color={buttonColour} className="transition duration-200
                                2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                            "/>
                        </div>
                    </motion.a>
                                            
                    <motion.a href="https://github.com/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <div>
                                                        
                            <FaGithub color={buttonColour} className="transition duration-200
                                2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                            "/>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
