// src/components/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Settings, Power } from 'lucide-react';

const steps = [
  { icon: <Power size={32} />, title: "Sign Up & Connect", description: "Create your account in minutes and link your existing business phone number." },
  { icon: <UploadCloud size={32} />, title: "Upload Data & Set Rules", description: "Provide your business FAQs, documents, and define how the AI should respond." },
  { icon: <Settings size={32} />, title: "Enable & Go Live", description: "Activate the AI agent on your line and start automating calls instantly." }
];

const HowItWorks = () => {
  return (
      <section id="how-it-works" className="bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get Started in 3 Simple Steps</h2>
            <p className="text-lg text-slate-400 mt-2">Launch your AI agent in a few clicks.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-7 h-full w-px bg-slate-700 md:h-px md:w-full md:top-1/2 md:-translate-y-1/2" aria-hidden="true"></div>
            <div className="grid md:grid-cols-3 gap-16 relative">
              {steps.map((step, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-center flex flex-col items-center bg-slate-900 px-4"
                  >
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-primary text-white border-4 border-slate-900 mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;