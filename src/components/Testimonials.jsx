import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sofia R.',
    text: '“Our call volume dropped 40% while customer happiness shot up. The AI agent never sleeps!”',
  },
  {
    name: 'Daniel K.',
    text: '“Setup was stupid-simple. Booked 32 appointments in week one.”',
  },
  {
    name: 'Priya N.',
    text: '“Love the custom webhook—orders now flow straight into our ERP.”',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 mb-4" aria-hidden="true" />
              <blockquote className="italic text-sm text-gray-700">{t.text}</blockquote>
              <figcaption className="mt-4 font-semibold">{t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
