import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import QualificationBot from '@/components/QualificationBot';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import BotSection from '@/components/Bot';
import Booking from '@/components/Booking';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function App() {
  return (
    <>
      {/* Fixed UI */}
      <Navbar />
      <WhatsAppFloat />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <QualificationBot />
        <Projects />
        <Stack />
        <BotSection />
        <Booking />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
