import Header from './components/navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col   font-sans">
      <Header />
      <Hero />
      <About />
      <Features />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
}
