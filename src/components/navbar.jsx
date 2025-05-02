import React from 'react';
import { Disc3 } from 'lucide-react';

const Navbar = () => {

    return (
        <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 sticky top-0 z-50">
            <div className="flex items-center justify-between mx-auto p-4">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Disc3 className="animate-spin text-white"/>
                </a>

                <div id="navbar-default">

                    <ul className="font-medium flex flex-row space-x-4 rtl:space-x-reverse">
                        <li className="flex flex-col">
                            <a href="#" className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">About
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                        <li className="flex flex-col">
                            <a href="#" className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">Experience
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                        <li className="flex flex-col">
                            <a href="#" className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">Projects
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                            </a>
                        </li>
                        <li className="flex flex-col">
                            <a href="#" className="group block py-2 px-3 text-white rounded-sm border-0 hover:text-white transition duration-300">Connect
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
