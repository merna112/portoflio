import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}
