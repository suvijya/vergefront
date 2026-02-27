import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Header from './components/Header';
import BootSequence from './sections/BootSequence';
import HeroSection from './sections/HeroSection';
import DataDashboard from './sections/DataDashboard';
import TimelineSection from './sections/TimelineSection';
import EventCardsSection from './sections/EventCardsSection';
import SponsorsSection from './sections/SponsorsSection';
import SpeakersSection from './sections/SpeakersSection';
import AccommodationSection from './sections/AccommodationSection';
import HighlightsSection from './sections/HighlightsSection';
import HumansSection from './sections/HumansSection';
import AboutSection from './sections/AboutSection';
import Footer from './sections/Footer';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [view, setView] = useState<'main' | 'about' | 'crew' | 'sponsors' | 'speakers'>('main'); // specific view state

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

      {/* Header - always visible */}
      <Header
        onLogoClick={() => setView('main')}
        onCrewClick={handleCrewClick}
        onSponsorsClick={handleSponsorsClick}
        onSpeakersClick={handleSpeakersClick}
        onNavigate={handleNavigation}
      />

      {/* Boot Sequence */}
      {!bootComplete && (
        <BootSequence progress={loadingProgress} />
      )}

      {/* Main Content */}
      {bootComplete && (
        <>

          {view === 'main' && (
            <main className="relative">
              <HeroSection />
              <DataDashboard />
              <TimelineSection />
              <EventCardsSection />
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
            </main>
          )}

          {/* About Section */}
          {view === 'about' && (
            <AboutSection onBack={() => setView('main')} />
          )}

          {/* Crew/Humans Section */}
          {view === 'crew' && (
            <HumansSection onBack={handleBackToMain} />
          )}

          {/* Sponsors Section */}
          {view === 'sponsors' && (
            <SponsorsSection onBack={handleBackToMain} />
          )}

          {/* Speakers Section */}
          {view === 'speakers' && (
            <SpeakersSection onBack={handleBackToMain} />
          )}
        </>
      )}

      {/* Status Bar - always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-3 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="relative flex justify-between items-center text-[10px] font-mono tracking-wider text-white/60">
          <div className="flex items-center gap-8">
            <span className="hidden md:inline">SINUSOID OF SPREADING: <span className="text-cosmic-green">ACTIVE</span></span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="12" cy="12" rx="10" ry="4" />
                <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-60 12 12)" />
              </svg>
              <span className="hidden md:inline">QUALITY ASSESSMENT: </span><span className="text-cosmic-green">ACTIVE</span>
            </span>
          </div>



          <div>
            <span className="hidden md:inline">ALL SYSTEM : </span><span className={bootComplete ? "text-cosmic-green" : "text-cosmic-amber"}>
              {bootComplete ? "ACTIVE" : "PENDING"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
