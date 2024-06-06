import React from 'react';
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import logo3 from "../assets/logo3.png"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between mb-10 py-6">
                <div className="flex flex-shrink-0 items-center">
                    <motion.img whileHover={{scale: 1.1}}
                   transition={{type:'spring',stiffness:500}} className="mx-2 w-auto h-14" src={logo3} alt="logo"/>
                </div>
                <div className="flex items-center justify-center m-8 gap-4 text-2xl">
                   <motion.a
                   whileHover={{scale: 1.1, color:'#fca311'}}
                   transition={{type:'spring',stiffness:500}}
                   href={import.meta.env.VITE_REACT_APP_EMAIL}><SiGmail /></motion.a>
                   <motion.a whileHover={{scale: 1.1, color:'#0077b6'}}
                   transition={{type:'spring',stiffness:500}} href={import.meta.env.VITE_REACT_APP_LINKEDIN}><FaLinkedin/></motion.a>
                    <motion.a whileHover={{scale: 1.1, color:'#778da9'}}
                   transition={{type:'spring',stiffness:500}} href={import.meta.env.VITE_REACT_APP_GITHUB}><FaGithub/></motion.a>
                </div>
            </nav>
        </>
    )
}

export default Navbar