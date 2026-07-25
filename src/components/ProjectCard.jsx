import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ image, title, subtitle, bullets = [], techs = [], githubUrl, liveUrl, buttonColour }) => {
    return (
        <div className="rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-800/20 transition duration-200 overflow-hidden flex flex-col h-full w-full">
            <div className="overflow-hidden">
                <img src={image} alt={title} className="w-full rounded-t-lg transition-transform duration-500"/>
            </div>

            <div className="2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 dark:text-white font-heading font-bold transition duration-200
                        2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base
                    ">
                        {title}
                    </h3>
                    <p className="text-green-600 dark:text-green-500 font-medium transition duration-200
                        xl:text-base lg:text-sm text-sm
                    ">
                        {subtitle}
                    </p>
                </div>

                <ul className="flex flex-col gap-1">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 transition duration-200
                            xl:text-base lg:text-sm text-xs
                        ">
                            {bullet}
                        </li>
                    ))}
                </ul>

                <div className="border-t border-gray-200 dark:border-white/10 transition duration-200"></div>

                <div className="flex flex-row flex-wrap gap-2">
                    {techs.map((tech, index) => (
                        <span key={index} className="rounded-sm border border-green-600/40 dark:border-green-500/40 text-green-700 dark:text-green-400 font-mono transition duration-200
                            2xl:text-sm xl:text-sm text-xs
                            px-2 py-1
                        ">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="relative justify-start flex items-center
                    2xl:space-x-3 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-1
                    space-x-2
                ">
                    {githubUrl && (
                        <motion.a href={githubUrl} target="_blank" rel="noreferrer">
                            <motion.div whileHover={{ scale: 1.09 }}>
                                <FaGithub color={buttonColour} className="transition duration-200
                                    2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                "/>
                            </motion.div>
                        </motion.a>
                    )}

                    {liveUrl && (
                        <motion.a href={liveUrl} target="_blank" rel="noreferrer">
                            <motion.div whileHover={{ scale: 1.09 }}>
                                <ExternalLink className="text-gray-900 dark:text-white transition duration-200
                                    2xl:w-8 2xl:h-8 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6
                                "/>
                            </motion.div>
                        </motion.a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
