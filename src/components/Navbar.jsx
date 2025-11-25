import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Button } from './ui/moving-border';
import logo from '../assets/Group 4.png';

const Navbar = () => {
    return (
        <nav className="py-2 mb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="flex flex-col items-center">
                    <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors mb-1.5">
                        <img src={logo} alt="Logo" className="w-[20rem] h-40 object-contain" />
                    </Link>

                    <div className="flex gap-4 mb-8">
                        <a href="https://x.com/jhm_uk" className="text-gray-400 hover:text-white transition-colors"><FiTwitter size={20} /></a>
                        <a href="https://github.com/jamahl" className="text-gray-400 hover:text-white transition-colors"><FiGithub size={20} /></a>
                        <a href="https://www.linkedin.com/in/jamahlmcmurran/" className="text-gray-400 hover:text-white transition-colors"><FiLinkedin size={20} /></a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#111] border border-[#222] text-sm text-gray-300 w-[110px] h-[34px] hover:border-white/20 transition-colors cursor-default">
                            <div className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                                <FiMapPin size={14} />
                                <span className="font-medium">Melbourne</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r from-blue-500/10 to-red-500/10">
                                <span className="text-base">🇦🇺</span>
                                <span className="text-gray-200 font-medium">Australia</span>
                            </div>
                        </div>

                        <Button
                            borderRadius="1.75rem"
                            className="bg-[#111] border-[#222] px-3 py-1.5 h-[34px]"
                            containerClassName="h-[34px]"
                            duration={3000}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-300 font-medium">Open to Work</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
