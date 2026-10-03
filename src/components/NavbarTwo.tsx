
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo-text.png";

const NavbarTwo = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">

                {/* Left: Hamburger icon (mobile only) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-xl text-[#475569] md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FaXmark /> : <FaBars />}
                </button>

                {/* Logo: centered on mobile */}
                <a
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
                >
                    <img src={logo} alt="Logo" className="h-9 w-auto" />
                </a>

                {/* Desktop navigation */}
                <div>
                    <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-lg text-[#475569] md:flex ">
                        <li>
                            <a href="/" className="text-[#DB2777]">Home</a>
                        </li>
                        <li>
                            <a href="/technologies" className="hover:text-[#DB2777]">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-[#DB2777]">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-[#DB2777]">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-[#DB2777]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Sign In / Sign Up */}
                <div className="flex gap-3">
                    <button className="btn btnNav bg-transparent border-0">Sign In</button>
                    <button className="btn btnNav btn-active btn-secondary ">Sign Up</button>
                </div>

            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <ul className="space-y-1 border-t border-gray-100 bg-white px-4 py-3 text-[#475569] md:hidden">
                    <li>
                        <a
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-md px-3 py-2 text-[#DB2777]"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="/technologies"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="/projects"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="/about"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavbarTwo;