import Hero from './components/Hero.tsx';
import Header from './components/Header.tsx';
import { MarqueeDemo } from './components/Marquee.tsx';
import About from './components/About.tsx';
import Features from './components/Features.tsx';
import Downloads from './components/Downloads.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-[5rem]'>
        <Hero />
        <About />
        <Features />
        <Downloads />
        <MarqueeDemo />
        <CTA />
        <Footer />
      </div>
      
    </div>
  )
}
