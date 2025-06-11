// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Jane Doe", company: "CEO, Innovate Inc.", quote: "The AI agent transformed our customer service overnight. Call volume handled is up 300% without hiring new staff.", avatar: "/src/assets/headshot.png" },
  { name: "John Smith", company: "Operations, Tech Solutions", quote: "Setup was unbelievably easy. We were live in an afternoon and the appointment scheduling feature alone saves us 10 hours a week.", avatar: "/src/assets/headshot.png" },
  { name: "Samantha Bee", company: "Founder, Creative Co.", quote: "A total game-changer for a small business like ours. It feels like we have a dedicated receptionist for a fraction of the cost.", avatar: "/src/assets/headshot.png" }
];

const Testimonials = () => {
  return (
      <section id="testimonials" className="bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Loved by Businesses Big and Small</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                >
                  <p className="text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Testimonials;