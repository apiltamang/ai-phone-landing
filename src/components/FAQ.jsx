// src/components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How long does setup take?", a: "Setup is incredibly fast. You can sign up, connect your phone number, and configure your AI agent in under 15 minutes." },
  { q: "What phone systems is this compatible with?", a: "Our AI add-on is designed to be universally compatible with any business phone line, including VoIP and traditional landlines, with no complex hardware changes." },
  { q: "Can the AI understand industry-specific jargon?", a: "Yes. You can upload your own documents, glossaries, and FAQs, allowing the AI to learn your specific terminology and provide accurate, context-aware responses." },
  { q: "Is my business data secure?", a: "Absolutely. We use end-to-end encryption and follow industry best practices for data security and privacy. Your data is used only to power your AI agent." },
  { q: "What happens if the AI can't answer a question?", a: "You can set custom rules for escalation. If the AI is unable to handle a request, it can seamlessly forward the call to a specific person or department as you've defined." }
];

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-slate-700">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center text-left py-6"
        >
          <span className="text-lg font-medium text-white">{item.q}</span>
          <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
              >
                <p className="pb-6 text-slate-400">{item.a}</p>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

const FAQ = () => {
  return (
      <section id="faq" className="bg-slate-800/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((item, index) => (
                <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default FAQ;