import { useState } from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EarlyAccessModal from './components/EarlyAccessModal';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main>
        <Hero onOpen={() => setOpen(true)} />
        <Capabilities />
        <HowItWorks />
        <Testimonials />
        <Pricing onOpen={() => setOpen(true)} />
        <FAQ />
      </main>
      <Footer />
      {open && <EarlyAccessModal onClose={() => setOpen(false)} />}
    </>
  );
}
