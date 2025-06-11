import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

export default function Hero({ onOpen }) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Turn Your Phone Into an <span className="text-blue-600">AI Powerhouse</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Instantly add a 24/7 AI voice agent that answers, books, and delights—no new hardware
          required.
        </p>
        <button
          onClick={onOpen}
          className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          Get Early Access
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mt-12 md:mt-0"
      >
        <Player
          src="/src/assets/hero-wave.json"
          autoplay
          loop
          style={{ height: '400px', width: '400px' }}
          aria-label="Animated phone waveform"
        />
      </motion.div>
    </header>
  );
}
