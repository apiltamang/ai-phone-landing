// src/components/Capabilities.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, CalendarDays, PhoneForwarded, FileText, Blocks } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import customerRepAnimation from '../assets/lottie/customer-rep.json';
import scheduleAgent from '../assets/lottie/schedule-agent.json';
import customFAQ from '../assets/lottie/custom-faq.json';
import callFoward from '../assets/lottie/call-forward.json';
import formFiller from '../assets/lottie/form-fill.json';
import customIntegration from '../assets/lottie/custom-integration.json';

const capabilities = [
  {
    lottieAnimation: customerRepAnimation,
    title: "AI Customer Representative",
    subtitle: "Your 24/7 front-line support.",
    description: ["Answers common questions.", "Provides instant, friendly responses.", "Never misses a call."]
  },
  {
    lottieAnimation: customFAQ,
    title: "Ingest & Understand Data",
    subtitle: "Learns from your business documents.",
    description: ["Understands FAQs, policies, and product info.", "Provides accurate, context-aware answers."]
  },
  {
    lottieAnimation: scheduleAgent,
    title: "Appointment Scheduling",
    subtitle: "Books meetings intelligently.",
    description: ["Integrates with your calendar.", "Detects and avoids scheduling conflicts."]
  },
  {
    lottieAnimation: callFoward,
    title: "Smart Call Forwarding",
    subtitle: "Routes calls to the right person.",
    description: ["Understands caller intent.", "Connects to internal departments seamlessly."]
  },
  {
    lottieAnimation: formFiller,
    title: "Auto-Fill Forms",
    subtitle: "Captures information from conversations.",
    description: ["Populates CRM fields from caller responses.", "Reduces manual data entry."]
  },
  {
    lottieAnimation: customIntegration,
    title: "Custom AI Integrations",
    subtitle: "Connects to your existing tools.",
    description: ["Uses webhooks and APIs for custom workflows.", "Extends functionality to any system."]
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Capabilities = () => {
  return (
      <section id="capabilities" className="bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Powerful Capabilities, Simple Setup</h2>
            <p className="text-lg text-slate-400 mt-2">Everything you need to automate your business communications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
                <motion.div
                    key={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-primary transition-colors flex flex-col items-center text-center" // Added flex-col and items-center
                >
                  <div className="flex items-center justify-center h-16 w-16 bg-slate-700 rounded-full mb-6">
                    {/* 2. Conditionally render the Lottie Player or the icon */}
                    {cap.lottieAnimation ? (
                        <Player
                            autoplay
                            loop
                            src={cap.lottieAnimation}
                            style={{ height: '120px', width: '120px' }} // Make player fit the container
                        />
                    ) : (
                        cap.icon
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-slate-400 mb-4 font-medium">{cap.subtitle}</p>
                  <ul className="space-y-2 text-slate-400 list-disc list-inside">
                    {cap.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Capabilities;