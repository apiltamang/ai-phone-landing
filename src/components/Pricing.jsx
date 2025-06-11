// src/components/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: "Starter", price: "For Small Teams", features: ["Basic AI Agent", "1 Phone Number", "500 Calls/mo"] },
  { name: "Pro", price: "For Growing Businesses", features: ["Advanced AI Agent", "5 Phone Numbers", "2,500 Calls/mo", "Calendar Integration"], popular: true },
  { name: "Enterprise", price: "For Large Scale", features: ["Custom AI Models", "Unlimited Numbers", "Dedicated Support", "API & Webhooks"] }
];

const Pricing = () => {
  return (
      <section id="pricing" className="bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-400 mt-2">Choose the plan that's right for you.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col bg-slate-800 p-8 rounded-2xl border ${plan.popular ? 'border-brand-primary' : 'border-slate-700'}`}
                >
                  {plan.popular && <div className="text-center mb-4"><span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span></div>}
                  <h3 className="text-2xl font-bold text-white text-center">{plan.name}</h3>
                  <p className="text-slate-400 text-center mt-2 mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check size={18} className="text-brand-secondary" />
                          <span>{feature}</span>
                        </li>
                    ))}
                  </ul>
                  <button className={`w-full font-bold py-3 rounded-lg transition-colors ${plan.popular ? 'bg-brand-primary text-white hover:bg-brand-primary/90' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                    Contact Sales
                  </button>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Pricing;