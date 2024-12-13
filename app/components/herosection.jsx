'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gauge, Zap, Target, Award } from 'lucide-react';

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Precision EDM",
            subtitle: "Manufacturing",
            description: "Experience unmatched accuracy of 0.01mm with our state-of-the-art Wire Cut EDM machines.",
            stats: [
                { icon: Gauge, value: "150mm²/min", label: "Cutting Speed" },
                { icon: Target, value: "±0.01mm", label: "Accuracy" }
            ],
            features: ["Closed Loop System", "Auto Edge Detection", "4-Axis Control"]
        },
        {
            title: "Advanced",
            subtitle: "Wire Cutting",
            description: "High-speed CNC wire cutting with innovative BMXP pm-k system software for complex industrial applications.",
            stats: [
                { icon: Zap, value: "24/7", label: "Operation" },
                { icon: Award, value: "Since 2015", label: "Experience" }
            ],
            features: ["Auto Wire Threading", "Windows Based Control", "Servo Drive System"]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="    relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 pt-24 pb-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Brand Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-orange-200 rounded-full px-4 py-2"
                        >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-orange-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-orange-500" />
              </span>
                            <span className="text-gray-800 font-medium">Leading EDM Solutions</span>
                        </motion.div>

                        {/* Title */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                                {slides[activeSlide].title}
                            </h1>
                            <h2 className="text-5xl lg:text-6xl font-bold text-orange-500">
                                {slides[activeSlide].subtitle}
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-xl"
                        >
                            {slides[activeSlide].description}
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4"
                        >
                            {slides[activeSlide].stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur border border-orange-100 rounded-xl p-4"
                                >
                                    <stat.icon className="w-6 h-6 text-orange-500 mb-2" />
                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Feature Tags */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-2"
                        >
                            {slides[activeSlide].features.map((feature, index) => (
                                <span
                                    key={index}
                                    className="bg-orange-50 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium"
                                >
                  {feature}
                </span>
                            ))}
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20">
                                Get Started
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group bg-white text-gray-900 px-8 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all border border-gray-200">
                                View Machines
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Machine Showcase */}
                    <motion.div
                        variants={itemVariants}
                        className="relative lg:h-[600px]"
                    >
                        {/* Main Image Container */}
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-orange-500/5 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent z-10" />
                            <img
                                src="/api/placeholder/800/600"
                                alt="EDM Machine"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Achievement Cards */}
                            <motion.div
                                className="absolute top-6 right-6 bg-white/90 backdrop-blur shadow-lg rounded-xl p-3"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-3">
                                    <Award className="w-8 h-8 text-orange-500" />
                                    <div>
                                        <div className="font-bold text-gray-900">ISO 9001</div>
                                        <div className="text-sm text-gray-600">Certified</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 pointer-events-none">
                            <motion.div
                                className="absolute -right-4 -bottom-4 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: 360
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Slide Navigation */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`h-2 rounded-full transition-all ${
                                index === activeSlide
                                    ? 'w-8 bg-orange-500'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;