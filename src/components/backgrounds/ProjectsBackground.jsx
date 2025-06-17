import '../../App.css';
import { motion } from "motion/react"
import React from 'react';
import { useEffect, useState } from "react";

function drawAnimate(inView, viewedOnce, baseDelay, duration) {
    return {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = i * 0.5 + baseDelay

            if (inView && !viewedOnce) {
                return {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                        pathLength: { delay, type: "spring", duration: duration, bounce: 0 },
                        opacity: { delay, duration: 0.1 },
                    },
                }
            } else if ((inView && viewedOnce) || (!inView && viewedOnce)) {
                return {
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 0 }
                }
            } else {
                return {
                    pathLength: 0,
                    opacity: 0,
                    transition: { duration: 0 }
                }
            }
            
        }
    }
    
}

const ProjectsBackground = ({ inView }) => {

    // let colour = isDarkMode ? "#FFFFFF" : "#0a0a0a"
    
    const [circleColour, setCircleColour] = useState("#FFFFFF");
    const [lineColour, setLineColour] = useState("#059669");

    const [viewedOnce, setViewedOnce] = useState(false)
    

    useEffect(() => {
        const updateColour = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setCircleColour(isDarkMode ? "#FFFFFF" : "#1f2937")
            setLineColour(isDarkMode ? "#059669" : "#34d399")
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
        if (inView) {
            setViewedOnce(true)
        }
    }, [inView])
    

    return (
        <div className="absolute inset-0 pointer-events-none h-screen">
                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    className="w-full h-full transition duration-200"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.line x1="2000" y1="130" x2="300" y2="130" stroke={lineColour} // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(inView, viewedOnce, 0, 2.7)}
                        custom={1}
                    />
                    <motion.line x1="565" y1="130" x2="500" y2="70" stroke={lineColour} //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(inView, viewedOnce, 1, 0.8)}
                        custom={1}
                    />
                    <motion.line x1="500" y1="70" x2="100" y2="70" stroke={lineColour} // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(inView, viewedOnce, 1.4, 2.2)}
                        custom={1}
                    />
                    <motion.circle cx="295" cy="130" r="5" stroke={circleColour}
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(inView, viewedOnce, 2.45, 2.1)}
                        custom={1}
                    />
                    <motion.circle cx="95" cy="70" r="5" stroke={circleColour}
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(inView, viewedOnce, 3.3, 2.1)}
                        custom={1}
                    />
                    
                    
                </motion.svg>
            
            </div>
    )

}

export default ProjectsBackground;
