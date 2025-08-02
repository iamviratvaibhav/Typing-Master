import React from 'react';
import { useState, useEffect } from 'react';
import { House } from 'lucide-react';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
// import { label } from 'framer-motion/client';
const Navbar = () => {
    const navigate= useNavigate();
    const [isScroll, setIsScroll] = useState(false);
    const [activeSection, setActiveSection] = useState("")
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuIteam = [
        { id: "home", label: "Home" },
        { id: "multiplayer", lable: "Multiplayer" },
        { id: "leaderboard", lable: "Leaderboard" },
        // { id: "profile", lable: "Profile" },
        { id: "UserProfile", lable: "Profile" },
    ]

    const handleMenuItemClick = (selectionId, path) => {
        setActiveSection(selectionId);
        navigate(path);

    }


    return (
    
        <nav className={` flex justify-between items-center px-8 py-4 bg-black text-white border-b border-zinc-800 fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${isScroll ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <h1 className="text-xl font-bold text-teal-400">⚡ TypeFast</h1>
            <ul className={`flex gap-6 text-sm font-medium`}>

                <li>
                    <House 
                    id="home"
                    className={`hover:text-teal-400 cursor-pointer size-6 ${activeSection === "home" && "text-teal-400"}`}
                    onClick={() =>handleMenuItemClick("home", "/heroSection")}
                    />

                </li>

                <li>
                    <MdOutlinePeopleAlt 
                    id='multiplayer'
                    className={`hover:text-teal-400 cursor-pointer size-6 ${activeSection === "multiplayer" && "text-teal-400"}`}
                    onClick={()=> handleMenuItemClick("multiplayer", "/multiPlayer")}
                    />
                </li>

                <li>
                    <MdOutlineLeaderboard
                    id='leaderboard'
                    className={`hover:text-teal-400 cursor-pointer size-6 ${activeSection === "leaderboard" && "text-teal-400"}`}
                    onClick={()=> handleMenuItemClick("leaderboard", '/leaderboard')}
                    />
                </li>

                <li>
                    <CgProfile
                    id='profile'
                    className={`hover:text-teal-400 cursor-pointer size-6 ${activeSection === "UsreProfile" && "text-teal-400"}`}
                    onClick={()=> handleMenuItemClick("UserProfile", '/profile')}
                    />
                </li>

                {menuIteam.map((item)=>{
                    <li key={item.id}
                     className={`cursor-pointer hover:text-teal-400 ${activeSection === item.id ? "text-teal-400 cursor-pointer" : "none"}`}
                    >
                        <button onClick={() =>handleMenuItemClick(item.id, item.path)}>{item.label}</button>
                    </li>
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
