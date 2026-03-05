import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

import Header from './components/Header';
import BootSequence from './sections/BootSequence';
import HeroSection from './sections/HeroSection';
import DataDashboard from './sections/DataDashboard';
import TimelineSection from './sections/TimelineSection';
import EventCardsSection from './sections/EventCardsSection';
import SponsorsSection from './sections/SponsorsSection';
import SpeakersSection from './sections/SpeakersSection';
import AccommodationSection from './sections/AccommodationSection';
import PrismaConcertSection from './sections/PrismaConcertSection';
import HighlightsSection from './sections/HighlightsSection';
import HumansSection from './sections/HumansSection';
import AboutSection from './sections/AboutSection';
import Footer from './sections/Footer';

import './App.css';

// ΓöÇΓöÇ Framer Motion variant presets ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: 'easeIn' } },
};

const bootFadeVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [view, setView] = useState<'main' | 'about' | 'crew' | 'sponsors' | 'speakers'>('main'); // specific view state
  const [showNav, setShowNav] = useState(false);

  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Handle back button (popstste)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        setView('main');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle pending scroll after view change
  useEffect(() => {
    if (view === 'main' && pendingScroll) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScroll(null);
      }, 100);
    }
  }, [view, pendingScroll]);

  const handleCrewClick = () => {
    window.history.pushState({ view: 'crew' }, '', '#crew');
    setView('crew');
  };

  const handleSponsorsClick = () => {
    window.history.pushState({ view: 'sponsors' }, '', '#sponsors');
    setView('sponsors');
  };

  const handleSpeakersClick = () => {
    window.history.pushState({ view: 'speakers' }, '', '#speakers');
    setView('speakers');
  };

  const handleBackToMain = () => {
    // specific check to avoid keeping hashes in URL if we manually click back
    if (window.location.hash === '#crew' || window.location.hash === '#sponsors' || window.location.hash === '#speakers') {
      window.history.back();
    } else {
      setView('main');
    }
  };

  const handleNavigation = (href: string) => {
    if (view !== 'main') {
      setPendingScroll(href);
      setView('main');
      window.history.pushState(null, '', '/');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Hide navbar when scrolled past hero section
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowNav(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [bootComplete]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smooth duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard easeOoutQuad 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Standard wheel speed
      touchMultiplier: 2, // Smooth touch response
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Loading progress animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setLoadingProgress(progress);

      if (progress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setBootComplete(true), 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Global noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Header - visible only at hero section */}
      <Header
        showNav={showNav}
        onLogoClick={() => setView('main')}
        onCrewClick={handleCrewClick}
        onSponsorsClick={handleSponsorsClick}
        onSpeakersClick={handleSpeakersClick}
        onNavigate={handleNavigation}
      />

      {/* Boot Sequence */}
      <AnimatePresence>
        {!bootComplete && (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          >
            <BootSequence progress={loadingProgress} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content ΓÇö animated in after boot, view-switching with AnimatePresence */}
      <AnimatePresence mode="wait">
        {bootComplete && view === 'main' && (
          <motion.main
            key="main"
            className="relative"
            variants={bootFadeVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: -16, transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] } }}
          >
            <HeroSection />
            <DataDashboard />
            <TimelineSection />
            <EventCardsSection />
            <PrismaConcertSection />
            <HighlightsSection />
            <AccommodationSection />
            {/* SpeakersSection moved to own page */}
            {/* SponsorsSection moved to own page */}
            {/* HumansSection moved to own page */}
            <Footer
              onSponsorsClick={handleSponsorsClick}
              onSpeakersClick={handleSpeakersClick}
              onNavigate={handleNavigation}
            />
          </motion.main>
        )}

        {/* About Section */}
        {bootComplete && view === 'about' && (
          <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <AboutSection onBack={() => setView('main')} />
          </motion.div>
        )}

        {/* Crew/Humans Section */}
        {bootComplete && view === 'crew' && (
          <motion.div key="crew" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <HumansSection onBack={handleBackToMain} />
          </motion.div>
        )}

        {/* Sponsors Section */}
        {bootComplete && view === 'sponsors' && (
          <motion.div key="sponsors" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <SponsorsSection onBack={handleBackToMain} />
          </motion.div>
        )}

        {/* Speakers Section */}
        {bootComplete && view === 'speakers' && (
          <motion.div key="speakers" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <SpeakersSection onBack={handleBackToMain} />
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}

export default App;
