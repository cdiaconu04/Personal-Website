import React from 'react';
import { Disc3 } from 'lucide-react';

const Navbar = ({intro, about, experience, projects}) => {

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between mx-auto px-4 py-2">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Disc3 className="animate-spin text-white"/>
                </a>

                <div id="navbar-default">

                    <ul className="font-medium flex flex-row space-x-2 rtl:space-x-reverse">
                        <li className="flex flex-col">
                            <a href="#Home" onClick={() => scrollTo(intro)} className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">Home
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                        <li className="flex flex-col">
                            <a href="#About" onClick={() => scrollTo(about)} className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">About
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                        <li className="flex flex-col">
                            <a href="#Experience" onClick={() => scrollTo(experience)} className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">Experience
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                        <li className="flex flex-col">
                            <a href="#Projects" onClick={() => scrollTo(projects)} className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">Projects
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
