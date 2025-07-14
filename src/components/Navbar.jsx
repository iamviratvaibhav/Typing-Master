import React from 'react';
import { useState, useEffect } from 'react';
const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        // <nav className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-zinc-800">
        <nav className={` flex justify-between items-center px-8 py-4 bg-black text-white border-b border-zinc-800 fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${isScroll ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <h1 className="text-xl font-bold text-teal-400">⚡ TypeFast</h1>
            <ul className="flex gap-6 text-sm font-medium">
                <li className="hover:text-teal-400 cursor-pointer">Type</li>
                <li className="hover:text-teal-400 cursor-pointer">Multiplayer</li>
                <li className="hover:text-teal-400 cursor-pointer">Leaderboard</li>
                <li className="hover:text-teal-400 cursor-pointer">Profile</li>
            </ul>
        </nav>
    );
};

export default Navbar;
