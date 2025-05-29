import '../../App.css';
import { motion } from "motion/react"
import React from 'react';

function drawAnimate(baseDelay, duration) {
    return {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.5 + baseDelay
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: duration, bounce: 0 },
                    opacity: { delay, duration: 0.1 },
                },
            }
        }
    }
    
}

const IntroBackground = () => {

    return (
        <div className="absolute inset-0 pointer-events-none h-screen">
                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    className="w-full h-full"
                    initial="hidden"
                    animate="visible"
                >
                    {/* TOP LEFT */}
                    <motion.line x1="-400" y1="150" x2="250" y2="150" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 3)}
                        custom={1}
                    />
                    <motion.line x1="10" y1="150" x2="75" y2="210" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.7, 0.8)}
                        custom={1}
                    />
                    <motion.line x1="75" y1="210" x2="200" y2="210" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.05, 1)}
                        custom={1}
                    />

                    <motion.line x1="-65" y1="150" x2="-5" y2="90" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.5, 0.8)}
                        custom={1}
                    />
                    <motion.line x1="-5" y1="90" x2="150" y2="90" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.9, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="255" cy="150" r="5" stroke="#FFFFFF"
                        pathOffset={0.5}
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(3, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="205" cy="210" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.05, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="155" cy="90" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.1, 1.2)}
                        custom={1}
                    />

                    {/* BOTTOM LEFT */}
                    <motion.line x1="-1000" y1="500" x2="140" y2="500" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 2.2)}
                        custom={1}
                    />
                    <motion.line x1="-20" y1="500" x2="40" y2="440" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.75, 1)}
                        custom={1}
                    />
                    <motion.line x1="40" y1="440" x2="240" y2="440" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.25, 1.7)}
                        custom={1}
                    />
                    <motion.circle cx="145" cy="500" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.2, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="245" cy="440" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.95, 1.2)}
                        custom={1}
                    />

                    {/* TOP RIGHT */}
                    <motion.line x1="2000" y1="90" x2="550" y2="90" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 2.1)}
                        custom={1}
                    />
                    <motion.line x1="740" y1="90" x2="675" y2="150" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.8, 0.9)}
                        custom={1}
                    />
                    <motion.line x1="675" y1="150" x2="470" y2="150" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.21, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="545" cy="90" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.1, 2.1)}
                        custom={1}
                    />
                    <motion.circle cx="465" cy="150" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.41, 2.1)}
                        custom={1}
                    />

                    {/* BOTTOM RIGHT */}
                    <motion.line x1="2000" y1="530" x2="400" y2="530" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 2.5)}
                        custom={1}
                    />
                    <motion.circle cx="395" cy="530" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.5, 2.1)}
                        custom={1}
                    />
                    <motion.line x1="565" y1="530" x2="500" y2="470" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.0, 1.1)}
                        custom={1}
                    />
                    <motion.line x1="500" y1="470" x2="350" y2="470" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.6, 1.7)}
                        custom={1}
                    />
                    <motion.circle cx="345" cy="470" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(3.3, 2.1)}
                        custom={1}
                    />
                </motion.svg>
            
            </div>
    )

}

export default IntroBackground;
