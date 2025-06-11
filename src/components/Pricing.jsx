import { motion } from 'framer-motion';

const plans = [
  { name: 'Starter', price: '$49', desc: 'Up to 500 minutes / mo' },
  { name: 'Pro', price: '$149', desc: 'Up to 2,500 minutes / mo' },
  { name: 'Enterprise', price: 'Custom', desc: 'Unlimited, SLA, white-glove' },
];

export default function Pricing({ onOpen }) {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white shadow-md"
            >
              <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
              <p className="text-4xl font-bold mb-2">{p.price}</p>
              <p className="mb-6 text-sm text-gray-600">{p.desc}</p>
              <button
                onClick={onOpen}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
              >
                Contact Sales
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
