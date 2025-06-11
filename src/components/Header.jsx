// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/placeholder-logo.svg" alt="AI Phone Logo" className="h-8 w-8" />
                    <span className="text-xl font-bold text-white">AI Phone</span>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#capabilities" className="hover:text-brand-primary transition-colors">Capabilities</a>
                    <a href="#how-it-works" className="hover:text-brand-primary transition-colors">How It Works</a>
                    <a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a>
                    <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
                </nav>
                <a href="#contact" className="hidden md:flex items-center gap-2 bg-brand-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors">
                    <Phone size={16} />
                    Contact Sales
                </a>
            </div>
        </motion.header>
    );
};

export default Header;