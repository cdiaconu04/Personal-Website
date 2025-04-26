import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700 sticky top-0 z-50">
            <div className="flex items-center justify-between mx-auto p-4">
                
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap">Cristian Diaconu</span>
                </a>

                <div id="navbar-default">

                    <ul className="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm border-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm border-0">Experience</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm border-0">Projects</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
