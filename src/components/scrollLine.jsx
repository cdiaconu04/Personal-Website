import React, { useState, useEffect, Component } from 'react';
import { motion, useSpring, useScroll } from "framer-motion"

export default function ScrollLine({greenSection}) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    const [width, setWidth] = useState(window.innerWidth);

    const greenStyle = 'bg-gradient-to-b from-emerald-600 via-green-600 to-green-700 z-50'
    const whiteStyle = 'bg-white z-50'

    const lightGreenStyle = 'bg-gradient-to-b from-emerald-400 via-green-400 to-green-500 z-50'
    const blackStyle = 'bg-gray-950 z-50'

    const [darkModeStyle, setDarkModeStyle] = useState(true)

    useEffect(() => {
        const updateColour = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setDarkModeStyle(isDarkMode ? true : false)
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
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 905,
                    bottom: 0,
                    left: 0,
                    width: `${width}px`,
                    originY: 300,
                    
                }}
                // className={greenSection ? whiteStyle : greenStyle}
                className={darkModeStyle ? (greenSection ? whiteStyle : greenStyle) : (greenSection ? blackStyle : lightGreenStyle)}
                // className={greenSection ? whiteStyle : greenStyle}
            />
        </>
    )
}
