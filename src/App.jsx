// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion } from 'framer-motion'; // Make sure this is imported

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Capabilities />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}

export default App;