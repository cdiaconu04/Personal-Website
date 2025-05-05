import '../App.css';
import { motion, useInView, useAnimate, useAnimation } from "motion/react"
import { useEffect, useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <div className="w-full bg-black relative inline-block border-b-2 border-t-2 border-emerald-600">
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
                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 z-10 rounded-xl"
                />
                <div className="relative max-w-screen-xl mx-auto p-4 py-10 flex items-center justify-between relative overflow-hidden">

                    <div>
                        <h2 className="text-5xl text-white font-bold underline decoration-emerald-600">
                            About me
                        </h2>

                        <br/>
                        <br/>

                        <p className="text-white text-lg">
                            Hi! I'm Cristian, a CS student at the University of Waterloo with a passion for building cool things through code.
                        </p>
                        <br/>
                        <p className="text-white text-lg">
                            I am interested in this and that and this and that and this and that.
                        </p>
                        <br/>
                        <p className="text-white text-lg">
                            In my free time, I love this and that and this and that and this and that.
                        </p>
                        <br/>
                        <p className="text-white text-lg">
                            I am currently looking for internships for summer 2026.
                        </p>

                    </div>

                </div>
            </div>
        </div>
        

    )
}

export default About;
