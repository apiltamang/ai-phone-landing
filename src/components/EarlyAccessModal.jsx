import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EarlyAccessModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Join the Early Access List</h2>
          <button aria-label="Close modal" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <form
          action="https://example.com/early-access"
          method="POST"
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Name" required className="w-full border rounded-lg p-3" />
          <input type="email" name="email" placeholder="Email" required className="w-full border rounded-lg p-3" />
          <input type="text" name="company" placeholder="Company" className="w-full border rounded-lg p-3" />
          <input type="tel" name="phone" placeholder="Phone" className="w-full border rounded-lg p-3" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium">
            Request Access
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
