// src/components/Hero.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import heroAnimation from '../assets/lottie/hero-animation.json';
import Modal from './Modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
                {/* --- 1. The main layout is now a flex container that stacks vertically on mobile --- */}
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* --- 2. Text content is now centered on mobile and left-aligned on desktop --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                            Turn Your Phone Into an <span className="text-brand-primary">AI Powerhouse</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-8">
                            Our plug-and-play AI voice agent handles customer calls, schedules appointments, and integrates with your business data 24/7.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-brand-primary text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 hover:bg-brand-primary/90 transition-all"
                        >
                            Get Early Access
                        </motion.button>
                    </motion.div>

                    {/* --- 3. Animation is now always visible but will stack below text on mobile --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 2}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2" // We removed 'hidden md:block'
                    >
                        <Player
                            autoplay
                            loop
                            src={heroAnimation}
                            // The style here keeps the animation from becoming excessively large
                            style={{ maxWidth: '1000px', width: '100%', height: '100%', margin: '0 auto' }}
                        />
                    </motion.div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;