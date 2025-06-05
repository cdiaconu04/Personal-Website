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
            <div className="relative max-w-screen-xl mx-auto p-4 py-10 flex items-center justify-between relative overflow-hidden">
                <div className="flex flex-col gap-3">
                    <h1 className="text-gray-800 dark:text-white text-4xl font-bold transition duration-200">Cristian Diaconu</h1>
                    <p className="text-gray-800 dark:text-white transition duration-200"> cristian.diaconu0423@gmail.com </p>
                </div>

                <div className="flex flex-row gap-3">
                    <motion.a href="https://linkedin.com/in/cristian-diaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <div>
                            <FaLinkedin color={buttonColour} className="w-8 h-8 transition duration-200"/>
                        </div>
                    </motion.a>
                                            
                    <motion.a href="https://github.com/CristianDiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <div>
                                                        
                            <FaGithub color={buttonColour} className="w-8 h-8 transition duration-200"/>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
