import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/logo.png';
import srmLogo from '../assets/srm_logo.png';
import naacLogo from '../assets/naacaplus.png';

export default function HeroSection({ onLogoClick }: { onLogoClick: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);

  const [readyForScroll, setReadyForScroll] = useState(false);

  // Logo animation - appears immediately
  useEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;

    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      logoEl,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        onComplete: () => setReadyForScroll(true),
      }
    );

    return () => { tl.kill(); };
  }, []);

  // Scroll animation - Restored with optimized timing
  useEffect(() => {
    if (!readyForScroll) return;

    const inner = innerRef.current;
    const logoEl = logoRef.current;
    const logoImg = logoImgRef.current;

    if (!inner || !logoEl || !logoImg) return;

    // Collect triggers for scoped cleanup
    const heroTriggers: ScrollTrigger[] = [];

    // Logo Container Fade Out (Text + Decorations) - Exclude VERGE text
    const decorations = logoEl.querySelectorAll('.hero-decoration');
    const decTween = gsap.to(decorations, {
      opacity: 0,
      ease: 'power3.in',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '10% top', // Very quick fade
        scrub: 1,
      },
    });
    if (decTween.scrollTrigger) heroTriggers.push(decTween.scrollTrigger);

    // Logo Image Zoom & Fade Out
    const logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '20% top', // Finishes quickly
        scrub: 1,
      },
    });
    if (logoTl.scrollTrigger) heroTriggers.push(logoTl.scrollTrigger);

    logoTl.to(logoImg, {
      scale: 6.5, // Reduced from 50 to prevent cutting out
      ease: 'power2.in', // Slightly more linear
      duration: 1,
    })
      .to(logoImg, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      }, ">-0.5");

    // VERGE Text Fly Up
    const vergeText = logoEl.querySelector('.verge-text');
    if (vergeText) {
      const vergeTween = gsap.to(vergeText, {
        y: '-48vh', // Move to header position
        scale: 0.15, // Scale down to header size
        opacity: 0, // Fade out at the very end
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 1,
        },
      });
      if (vergeTween.scrollTrigger) heroTriggers.push(vergeTween.scrollTrigger);
    }

    // Scroll Indicator Fade Out
    const scrollIndicator = inner.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      const scrollTween = gsap.to(scrollIndicator, {
        opacity: 0,
        y: 20,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '5% top',
          scrub: 1,
        },
      });
      if (scrollTween.scrollTrigger) heroTriggers.push(scrollTween.scrollTrigger);
    }

    return () => {
      heroTriggers.forEach((st) => st.kill());
    };
  }, [readyForScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[140vh] w-full bg-black"
      style={{ overflow: 'visible' }}
    >
      {/* Sticky inner container */}
      <div
        ref={innerRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* NAAC Logo - Top Left */}
        <img
          src={naacLogo}
          alt="NAAC A++"
          className="absolute top-8 left-8 w-32 md:w-48 z-40 pointer-events-none object-contain"
        />

        {/* SRM Logo - Top Right */}
        <img
          src={srmLogo}
          alt="SRM University"
          className="absolute top-8 right-8 w-32 md:w-48 z-40 pointer-events-none object-contain"
        />

        {/* Logo + VERGE 2026 */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          {/* Radial glow behind logo area */}
          <div
            className="absolute"
            style={{
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(0, 255, 120, 0.04) 0%, rgba(0, 200, 255, 0.02) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div
            ref={logoRef}
            className="flex flex-col items-center gap-4 opacity-0 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-500"
            onClick={onLogoClick}
          >
            {/* Top decorative line */}
            <div className="flex items-center gap-3 w-full max-w-md hero-decoration">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Main logo row */}
            <div className="flex items-center gap-5 md:gap-8">
              <img
                ref={logoImgRef}
                src={logo}
                alt="Verge"
                className="w-20 md:w-32 lg:w-40 object-contain brightness-0 invert"
              />
              {/* Vertical accent line */}
              <div
                className="w-px h-16 md:h-24 hero-decoration"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 180, 0.6), transparent)',
                }}
              />
              {/* Text block */}
              <div className="flex flex-col gap-1">
                <span
                  className="verge-text text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-white"
                  style={{
                    fontFamily: "'Orbitron', 'Rajdhani', 'Courier New', monospace",
                    textShadow: '0 0 30px rgba(0, 255, 180, 0.15)',
                    display: 'inline-block', // Ensure transform works
                    transformOrigin: 'center center',
                  }}
                >
                  VERGE
                </span>
                <span
                  className="hero-decoration text-lg md:text-2xl lg:text-3xl font-light tracking-[0.5em] text-white/60"
                  style={{
                    fontFamily: "'Orbitron', 'Rajdhani', 'Courier New', monospace",
                  }}
                >
                  2026
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3 mt-2 hero-decoration">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-[10px] md:text-xs tracking-[0.4em] text-white/40 uppercase font-mono"
              >
                The Future Awaits
              </span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Bottom decorative line */}
            <div className="flex items-center gap-3 w-full max-w-md hero-decoration">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Corner brackets */}
            <div className="absolute -inset-6 md:-inset-10 pointer-events-none hero-decoration">
              {/* Top-left */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/15" />
              {/* Top-right */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/15" />
              {/* Bottom-left */}
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/15" />
              {/* Bottom-right */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/15" />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 transition-opacity duration-1000"
          style={{ opacity: readyForScroll ? 1 : 0 }}
        >
          <span className="text-[9px] font-mono text-white/40 tracking-[0.4em] uppercase mb-1">Scroll</span>
          {/* Scroll Mouse Icon */}
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 flex justify-center">
            <div className="w-1 h-2 bg-cosmic-green rounded-full animate-scroll-dot" />
          </div>
        </div>

        {/* Animated horizontal scan line */}
        <div
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
          style={{ opacity: 0.03 }}
        >
          <div
            className="absolute w-full h-px bg-white"
            style={{
              animation: 'scanline 8s linear infinite',
              top: '0%',
            }}
          />
          <style>{`
            @keyframes scanline {
              0% { top: -5%; }
              100% { top: 105%; }
            }
            @keyframes scroll-dot {
              0% { transform: translateY(0); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateY(12px); opacity: 0; }
            }
            .animate-scroll-dot {
              animation: scroll-dot 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
            }
          `}</style>
        </div>



        {/* Sun flare effect */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full pointer-events-none z-5"
          style={{
            background: 'radial-gradient(ellipse at 20% 30%, rgba(255, 200, 100, 0.15) 0%, transparent 50%)',
            opacity: 1,
            transition: 'opacity 2s ease',
          }}
        />
      </div>
    </section>
  );
}
