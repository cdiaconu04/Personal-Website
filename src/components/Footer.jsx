import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react"

const Footer = () => {
    return (
        <div className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 relative inline-block border-b-2 border-t-2 border-emerald-600 z-10">
            <div className="relative max-w-screen-xl mx-auto p-4 py-10 flex items-center justify-between relative overflow-hidden">
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-4xl font-bold">Cristian Diaconu</h1>
                    <p className="text-white"> cristian.diaconu0423@gmail.com </p>
                </div>

                <div className="flex flex-row gap-3">
                    <motion.a href="https://linkedin.com/in/cristian-diaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <div>
                            <FaLinkedin color="white" className="w-8 h-8"/>
                        </div>
                    </motion.a>
                                            
                    <motion.a href="https://github.com/CristianDiaconu04" target="_blank" whileHover={{ scale: 1.09 }}>
                        <div>
                                                        
                            <FaGithub color="white" className="w-8 h-8"/>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
