import React, { useState } from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title 
                        font-bold"> Campus Cupid </a>
            <ul>
                <li className="rounded-full">
                    <a href="/">Home</a>
                </li>
                <li className="rounded-full">
                    <a href="/form">Form</a>
                </li>
                <li className="rounded-full">
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar;

