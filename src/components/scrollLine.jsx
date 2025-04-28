import React, { Component } from 'react';
import { motion, useSpring, useScroll } from "framer-motion"

export default function ScrollLine() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleY: scrollYProgress,
                    position: "fixed",
                    top: 220,
                    bottom: 150,
                    left: 150,
                    width: 20,
                    originY: 0,
                    
                }}
                className='bg-gradient-to-b from-pink-400 via-pink-500 to-rose-400'
            />
        </>
    )
}
