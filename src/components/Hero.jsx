// src/components/Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import Modal from './Modal';
import heroAnimation from '../assets/lottie/hero-animation.json';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="min-h-screen flex items-center bg-slate-900">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <Player
                            autoplay
                            loop
                            src={heroAnimation}
                            style={{ height: '500px', width: '500px' }}
                        />
                    </motion.div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;