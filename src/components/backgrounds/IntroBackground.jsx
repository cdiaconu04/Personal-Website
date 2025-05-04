import '../../App.css';
import { motion } from "motion/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import React from 'react';

const IntroBackground = () => {

    return (
        <div className="absolute inset-0 pointer-events-none h-screen">
                <svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    className="w-full h-full"
                >
                    {/* TOP LEFT */}
                    <line x1="-1000" y1="170" x2="250" y2="170" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="10" y1="170" x2="75" y2="230" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="75" y1="230" x2="200" y2="230" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    <line x1="-65" y1="170" x2="-5" y2="110" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="-5" y1="110" x2="150" y2="110" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="255" cy="170" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="205" cy="230" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="155" cy="110" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    {/* Bottom left */}
                    <line x1="-1000" y1="530" x2="140" y2="530" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="-20" y1="530" x2="40" y2="470" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="40" y1="470" x2="240" y2="470" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="145" cy="530" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="245" cy="470" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    {/* Top right */}
                    <line x1="2000" y1="100" x2="550" y2="100" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="740" y1="100" x2="675" y2="160" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="675" y1="160" x2="470" y2="160" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="545" cy="100" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="465" cy="160" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />

                    {/* Top left */}
                    <line x1="2000" y1="550" x2="400" y2="550" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="395" cy="550" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="500" y1="490" x2="565" y2="550" stroke="#059669" //Diagonal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <line x1="500" y1="490" x2="350" y2="490" stroke="#059669" // Horizontal
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                    />
                    <circle cx="345" cy="490" r="5" stroke="#FFFFFF"
                        style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
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
                </svg>

            {/* <div className="text-center items-center animate-bounce w-full">
                <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-none group bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 w-12 h-12 font-bold py-2 px-3 rounded-full"
                >          
                <MoveDown className="h-6 w-6 text-black group-hover:text-white" />
                </motion.button>
            </div> */}
            
            </div>
    )

}

export default IntroBackground;
