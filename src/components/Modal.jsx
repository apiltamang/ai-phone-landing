// src/components/Modal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose }) => {
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { y: "-50%", opacity: 0, scale: 0.9 },
        visible: { y: "0%", opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
        exit: { y: "50%", opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-slate-800 rounded-2xl p-8 w-full max-w-md relative shadow-2xl"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                            <X size={24} />
                        </button>
                        <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
                        <p className="text-slate-400 mb-6">Be the first to know when we launch.</p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">Company</label>
                                <input type="text" id="company" name="company" className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                                <input type="tel" id="phone" name="phone" className="w-full bg-slate-700 border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                            </div>
                            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-primary/90 transition-colors">
                                Notify Me
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;