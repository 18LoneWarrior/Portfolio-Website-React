import React from 'react';
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import logo3 from "../assets/logo3.png"

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between mb-10 py-6">
                <div className="flex flex-shrink-0 items-center">
                    <img className="mx-2 w-auto h-14" src={logo3} alt="logo"/>
                </div>
                <div className="flex items-center justify-center m-8 gap-4 text-2xl">
                   <a href={import.meta.env.VITE_REACT_APP_EMAIL}><SiGmail /></a>
                   <a href={import.meta.env.VITE_REACT_APP_LINKEDIN}><FaLinkedin/></a>
                    <a href={import.meta.env.VITE_REACT_APP_GITHUB}><FaGithub/></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar