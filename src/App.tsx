import { lazy, Suspense } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const QualificationBot = lazy(() => import('@/components/QualificationBot'));
const Projects = lazy(() => import('@/components/Projects'));
const Stack = lazy(() => import('@/components/Stack'));
const BotSection = lazy(() => import('@/components/Bot'));
const Booking = lazy(() => import('@/components/Booking'));
const CTA = lazy(() => import('@/components/CTA'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));

export default function App() {
  return (
    <>
      <SEO />

      {/* Fixed UI */}
      <Navbar />
      <WhatsAppFloat />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Suspense fallback={null}>
          <QualificationBot />
          <Projects />
          <Stack />
          <BotSection />
          <Booking />
          <CTA />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
