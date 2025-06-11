import { motion } from 'framer-motion';

const steps = [
  {
    n: 1,
    title: 'Sign Up',
    text: 'Create your account & verify phone number.',
  },
  {
    n: 2,
    title: 'Upload Data & Rules',
    text: 'Docs, FAQs, calendars—train the agent in minutes.',
  },
  {
    n: 3,
    title: 'Enable on Phone',
    text: 'Point or forward your number—done!',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl shadow-md bg-white"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-xl">
                {s.n}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
