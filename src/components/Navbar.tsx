import React from 'react';
import logo from '../assets/logo-text.png';
import '../App.css';

const Navbar = () => {
    return (
        <div>
            <nav className="">
                <div className="container mx-auto flex items-center justify-between py-6">
                    <img src={logo} alt="Logo" className="" />
                    <ul className="flex gap-5 items-center text-2xl text-[#475569]">
                        <li><span className="text-[#DB2777]">Home</span></li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <div className="flex gap-3">
                       <button className="btn btnNav bg-transparent border-0">Sign In</button>
                       <button className="btn btnNav btn-active btn-secondary ">Sign Up</button>
                    </div>


                </div>

            </nav>
            
        </div>
    );
};

export default Navbar;