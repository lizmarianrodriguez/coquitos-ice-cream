import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Flavors from './components/Flavors';
import Reviews from './components/Reviews';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Flavors />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}