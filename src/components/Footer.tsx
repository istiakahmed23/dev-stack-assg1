import React from 'react';
import logo from '../assets/logo-text.png';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="mt-12 border-t border-gray-100 bg-white">
                <div className="container  mx-auto w-full py-12">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                        {/* Brand section */}
                        <div className="lg:col-span-2">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="h-10 w-auto"
                            />

                            <p className="text-[18px] mt-4 text-slate-500">
                                Curated tools, technologies, and resources for developers
                                building modern software.
                            </p>

                            {/* Social icons */}
                            <div className="mt-4 flex items-center gap-4 text-slate-600">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    className="transition hover:text-pink-500"
                                >
                                    <FaGithub size={20} />
                                </a>

                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    className="transition hover:text-pink-500"
                                >
                                    <FaXTwitter size={20} />
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="transition hover:text-pink-500"
                                >
                                    <FaLinkedinIn size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="mb-3 text-[16px] font-bold uppercase">
                                Product
                            </h3>
                            <ul className="space-y-2 text-[14px] text-slate-500">
                                <li><a href="/" className="hover:text-pink-500">Home</a></li>
                                <li><a href="/technologies" className="hover:text-pink-500">Technologies</a></li>
                                <li><a href="/projects" className="hover:text-pink-500">Projects</a></li>
                            </ul>
                        </div>

                        
                        <div>
                            <h3 className="mb-3 text-[16px] font-bold uppercase">
                                Company
                            </h3>
                            <ul className="space-y-2 text-[14px] text-slate-500">
                                <li><a href="/about" className="hover:text-pink-500">About</a></li>
                                <li><a href="/contact" className="hover:text-pink-500">Contact</a></li>
                                <li><a href="/careers" className="hover:text-pink-500">Careers</a></li>
                            </ul>
                        </div>

                        
                        <div>
                            <h3 className="mb-3 text-[16px] font-bold uppercase">
                                Legal
                            </h3>
                            <ul className="space-y-2 text-[14px] text-slate-500">
                                <li><a href="/privacy-policy" className="hover:text-pink-500">Privacy Policy</a></li>
                                <li><a href="/terms-of-service" className="hover:text-pink-500">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-100">
                    <div className=" container mx-auto flex  flex-col gap-2 px-4 py-6 text-[14px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                        
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;