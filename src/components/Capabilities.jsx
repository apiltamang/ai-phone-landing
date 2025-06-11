import { Player } from '@lottiefiles/react-lottie-player';
import { Bot, BookOpen, CalendarClock, Share2, FileText, Plug } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Based Customer Representative',
    subtitle: 'Natural, friendly voice support 24/7.',
    bullets: ['Answers FAQs', 'Handles multiple callers', 'Learns tones'],
    icon: Bot,
  },
  {
    title: 'Ingest & Understand Data',
    subtitle: 'Upload docs, CSVs, FAQs—agent trains in minutes.',
    bullets: ['Smart search', 'Automatic updates', 'Secure storage'],
    icon: BookOpen,
  },
  {
    title: 'Appointment Scheduling',
    subtitle: 'Real-time conflict detection & reminders.',
    bullets: ['Google/Outlook sync', 'SMS/email confirms'],
    icon: CalendarClock,
  },
  {
    title: 'Call Forwarding',
    subtitle: 'Seamless hand-off to live staff.',
    bullets: ['Department routing', 'Warm transfer'],
    icon: Share2,
  },
  {
    title: 'Auto-Fill Forms',
    subtitle: 'Capture caller info & push to CRM.',
    bullets: ['No-code mapping', 'Error-free entries'],
    icon: FileText,
  },
  {
    title: 'Custom AI Integrations',
    subtitle: 'Connect any webhook or API.',
    bullets: ['Zapier friendly', 'Developer SDK'],
    icon: Plug,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Capabilities</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              {f.icon ? (
                <f.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" aria-hidden="true" />
              ) : (
                <Player src={f.lottie} autoplay loop style={{ height: 60 }} />
              )}
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{f.subtitle}</p>
              <ul className="text-sm text-left space-y-1">
                {f.bullets.map((b) => (
                  <li key={b} className="before:content-['•'] before:mr-2">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
