import React from 'react';
import { Disc3 } from 'lucide-react';
import { motion } from "motion/react"

const Navbar = () => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 sticky top-0 z-50">
            <div className="flex items-center justify-between mx-auto p-4">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <span className="self-center text-2xl font-bold whitespace-nowrap">CD</span> */}
                    <Disc3 className="animate-spin text-white"/>
                </a>

                <div id="navbar-default">

                    <ul className="font-medium flex flex-row space-x-4 rtl:space-x-reverse">
                        <motion.li className="flex flex-col" onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm border-0 hover:text-white">About</a>
                            <div className={`border-t-2 border-white rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}> </div>
                        </motion.li>
                        <motion.li className="flex flex-col" onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm border-0 hover:text-white">Experience</a>
                            <div className={`border-t-2 border-white rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}> </div>
                        </motion.li>
                        <motion.li className="flex flex-col" onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm border-0 hover:text-white">Projects</a>
                            <div className={`border-t-2 border-white rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}> </div>
                        </motion.li>
                        <motion.li className="flex flex-col" onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
                            <a href="#" className="block py-2 px-3 text-white rounded-sm border-0 hover:text-white">Connect</a>
                            <div className={`border-t-2 border-white rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}> </div>
                        </motion.li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
