import React, { useState } from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 sticky top-0 z-50">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap">Cristian Diaconu</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 ">About</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Experience</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Projects</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    
    )
}

export default Navbar;

