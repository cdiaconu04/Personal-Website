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
            // style={image}
                >
                    {/* TOP LEFT */}
                    <motion.line x1="-400" y1="170" x2="250" y2="170" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 3)}
                        custom={1}
                    />
                    <motion.line x1="10" y1="170" x2="75" y2="230" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.7, 0.8)}
                        custom={1}
                    />
                    <motion.line x1="75" y1="230" x2="200" y2="230" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.05, 1)}
                        custom={1}
                    />

                    <motion.line x1="-65" y1="170" x2="-5" y2="110" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.5, 0.8)}
                        custom={1}
                    />
                    <motion.line x1="-5" y1="110" x2="150" y2="110" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.9, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="255" cy="170" r="5" stroke="#FFFFFF"
                        pathOffset={0.5}
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(3, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="205" cy="230" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.05, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="155" cy="110" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.1, 1.2)}
                        custom={1}
                    />

                    {/* BOTTOM LEFT */}
                    <motion.line x1="-1000" y1="530" x2="140" y2="530" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 2.2)}
                        custom={1}
                    />
                    <motion.line x1="-20" y1="530" x2="40" y2="470" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.75, 1)}
                        custom={1}
                    />
                    <motion.line x1="40" y1="470" x2="240" y2="470" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.25, 1.7)}
                        custom={1}
                    />
                    <motion.circle cx="145" cy="530" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.2, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="245" cy="470" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.95, 1.2)}
                        custom={1}
                    />

                    {/* TOP RIGHT */}
                    <motion.line x1="2000" y1="100" x2="550" y2="100" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 2.1)}
                        custom={1}
                    />
                    <motion.line x1="740" y1="100" x2="675" y2="160" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0.8, 0.9)}
                        custom={1}
                    />
                    <motion.line x1="675" y1="160" x2="470" y2="160" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.21, 1.2)}
                        custom={1}
                    />
                    <motion.circle cx="545" cy="100" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.1, 2.1)}
                        custom={1}
                    />
                    <motion.circle cx="465" cy="160" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.41, 2.1)}
                        custom={1}
                    />

                    {/* BOTTOM RIGHT */}
                    <motion.line x1="2000" y1="550" x2="400" y2="550" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(0, 2.5)}
                        custom={1}
                    />
                    <motion.circle cx="395" cy="550" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(2.5, 2.1)}
                        custom={1}
                    />
                    <motion.line x1="565" y1="550" x2="500" y2="490" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.0, 1.1)}
                        custom={1}
                    />
                    <motion.line x1="500" y1="490" x2="350" y2="490" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(1.6, 1.7)}
                        custom={1}
                    />
                    <motion.circle cx="345" cy="490" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={drawAnimate(3.3, 2.1)}
                        custom={1}
                    />
                
                    {/* <circle cx="-330" cy="200" r="30" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 5,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    <circle cx="800" cy="90" r="80" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 7,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    <circle cx="400" cy="440" r="45" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    <circle cx="200" cy="130" r="10" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 4,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    <circle cx="930" cy="550" r="30" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    /> */}
                    

                    {/* Border lines here */}
                    {/* <line x1="-110" y1="500" x2="260" y2="500" stroke="#059669"
                        style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    <line x1="-110" y1="200" x2="260" y2="200" stroke="#059669"
                        style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    /> */}
                </motion.svg>
            
            </div>
    )

}

export default IntroBackground;
