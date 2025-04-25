import React, { useState } from 'react';

const Navbar = () => {
    return (
        <nav class="bg-gradient-to-r from-emerald-600 via-green-600 to-green-700">

            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <a class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-bold whitespace-nowrap">Cristian Diaconu</span>
                </a>

                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0">Home</a>
                        </li>

                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 ">About</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    
    )
}

export default Navbar;

