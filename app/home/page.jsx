"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Circle, Hexagon, Plus, ChevronRight } from 'lucide-react';

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const slides = [
        {
            url: '/api/placeholder/1920/1080',
            title: "Engineering Excellence",
            highlight: "Precision",
            description: "Next-generation EDM solutions with unmatched accuracy",
            features: ["0.01mm Precision", "150mm²/min Speed", "Industry Leading"]
        },
        {
            url: '/api/placeholder/1920/1080',
            title: "Future of Manufacturing",
            highlight: "Innovation",
            description: "Advanced wire-cutting technology for complex industrial challenges",
            features: ["24/7 Support", "99.9% Accuracy", "Premium Quality"]
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 blur-3xl"
                    animate={{
                        x: mousePosition.x * 2,
                        y: mousePosition.y * 2,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-orange-200 to-transparent blur-3xl"
                    animate={{
                        x: mousePosition.x * -2,
                        y: mousePosition.y * -2,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }}
                />
            </div>

            {/* Main Navigation */}
            <motion.nav
                className="absolute top-0 left-0 right-0 z-50 border-b border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/api/placeholder/40/40"
                                    alt="Excon Engineering"
                                    className="h-8"
                                />
                                <span className="text-gray-900 font-bold text-xl">EXCON</span>
                            </div>
                            <div className="hidden md:flex items-center gap-6">
                                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Solutions</a>
                                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Services</a>
                                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
                            </div>
                        </div>
                        <button className="bg-gray-900 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            Contact Us
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Content */}
            <div className="relative container mx-auto px-4 min-h-screen flex items-center pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Tech Badge */}
                        <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 border border-orange-100">
                            <Circle className="w-3 h-3 text-orange-500 animate-pulse" />
                            <span className="text-orange-600 text-sm font-medium">Advanced EDM Technology</span>
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <motion.h1
                                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {slides[activeSlide].title}
                                <span className="block text-orange-500">{slides[activeSlide].highlight}</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 max-w-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {slides[activeSlide].description}
                            </motion.p>
                        </div>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {slides[activeSlide].features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl p-4 hover:border-orange-200 transition-colors group"
                                >
                                    <Hexagon className="w-5 h-5 text-orange-500 group-hover:rotate-90 transition-transform" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors group">
                                Explore Solutions
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-orange-50 text-orange-600 px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors">
                                Learn More
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative aspect-square rounded-3xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent" />
                        <img
                            src={slides[activeSlide].url}
                            alt="Engineering Excellence"
                            className="w-full h-full object-cover"
                        />
                        {/* Decorative Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-4 right-4 w-24 h-24 border border-orange-200 rounded-full" />
                            <div className="absolute bottom-4 left-4 w-32 h-32 border border-orange-200 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Slide Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 flex gap-3 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === activeSlide
                                ? 'w-12 bg-orange-500'
                                : 'w-2 bg-gray-200 hover:bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;