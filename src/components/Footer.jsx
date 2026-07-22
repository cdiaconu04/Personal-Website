import { Mail } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react"
import { useEffect, useRef } from 'react';

const Footer = ({onInView, onOutOfView}) => {
    const ref = useRef(null);

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
        <div className="w-full bg-white dark:bg-zinc-950 relative inline-block border-t border-gray-200 dark:border-white/10 overflow-hidden transition duration-200" ref={ref}>
            <p className="absolute inset-0 flex items-center justify-end pr-10 xl:pr-32 text-[10rem] xl:text-[16rem] font-extrabold text-black/5 dark:text-white/5 select-none pointer-events-none leading-none">
                CD
            </p>

            <div className="relative max-w-screen-xl mx-auto flex items-center justify-between overflow-hidden
                2xl:px-4 xl:px-40 lg:px-20 md:px-20 px-10
                2xl:py-8 xl:py-8 lg:py-6 md:py-5 py-4
            ">
                <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 dark:text-white font-bold transition duration-200
                        2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base
                    ">
                        Cristian Diaconu
                    </h3>
                </div>

                <div className="flex flex-row items-center
                    2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                    space-x-2
                ">
                    <motion.a href="https://linkedin.com/in/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <FaLinkedin className="text-gray-600 dark:text-gray-300 transition duration-200
                            2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                        "/>
                    </motion.a>

                    <motion.a href="https://github.com/cdiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <FaGithub className="text-gray-600 dark:text-gray-300 transition duration-200
                            2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                        "/>
                    </motion.a>

                    <motion.a href="mailto:cristian.diaconu0423@gmail.com" whileHover={{ scale: 1.09 }}>
                        <Mail className="text-gray-600 dark:text-gray-300 transition duration-200
                            2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                        "/>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
