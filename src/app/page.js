import Header from './components/navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 font-sans">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
}
