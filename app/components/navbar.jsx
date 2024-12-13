'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ChevronDown,
    Menu,
    X,
    Phone,
    Mail,
    Clock,
    MapPin,
    ArrowUpRight,
    Search
} from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        {
            title: 'Solutions',
            dropdown: [
                { title: 'Wire Cut EDM', description: 'High-precision wire cutting solutions' },
                { title: 'EDM Drilling', description: 'Advanced drilling technologies' },
                { title: 'CNC Machining', description: 'Modern CNC solutions' },
                { title: 'Custom Solutions', description: 'Tailored engineering services' }
            ]
        },
        {
            title: 'Services',
            dropdown: [
                { title: 'Maintenance', description: 'Regular service & support' },
                { title: 'Consulting', description: 'Expert technical consulting' },
                { title: 'Training', description: 'Operator training programs' }
            ]
        },
        {
            title: 'Company',
            dropdown: [
                { title: 'About Us', description: 'Our story & vision' },
                { title: 'Careers', description: 'Join our team' },
                { title: 'News', description: 'Latest updates' }
            ]
        }
    ];

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-gray-100 text-gray-600 py-2 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-orange-500" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-orange-500" />
                                <span>info@excon.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-orange-500" />
                                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-orange-500" />
                                <span>Find Us</span>
                            </div>
                            <button className="text-orange-500 hover:text-orange-600 transition-colors">Support</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <motion.nav
                className={`sticky top-0 w-full z-50 ${
                    isScrolled ? 'shadow-lg' : ''
                }`}
                animate={{
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <motion.img
                                src="/api/placeholder/40/40"
                                alt="Excon Engineering"
                                className="h-10"
                                whileHover={{ scale: 1.05 }}
                            />
                            <motion.span
                                className="text-gray-900 font-bold text-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                EXCON
                            </motion.span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigationItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(item.title)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-orange-500 transition-colors py-2">
                                        {item.title}
                                        <ChevronDown className="w-4 h-4" />
                                    </button>

                                    <AnimatePresence>
                                        {activeDropdown === item.title && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                                            >
                                                <div className="p-2">
                                                    {item.dropdown.map((dropItem, idx) => (
                                                        <motion.a
                                                            key={idx}
                                                            href="#"
                                                            className="flex flex-col p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                                                            whileHover={{ x: 5 }}
                                                        >
                              <span className="text-gray-900 font-medium group-hover:text-orange-500 transition-colors">
                                {dropItem.title}
                              </span>
                                                            <span className="text-sm text-gray-500">
                                {dropItem.description}
                              </span>
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                                Contact Us
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-gray-100"
                        >
                            <div className="container mx-auto px-4 py-4 space-y-4">
                                {navigationItems.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <button className="flex items-center justify-between w-full text-gray-900 font-medium">
                                            {item.title}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        <div className="pl-4 space-y-2">
                                            {item.dropdown.map((dropItem, idx) => (
                                                <a
                                                    key={idx}
                                                    href="#"
                                                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                                                >
                                                    {dropItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                                    Contact Us
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;