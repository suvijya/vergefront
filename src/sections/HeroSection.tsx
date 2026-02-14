import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import astro from '../assets/astro.png';
import astroleft from '../assets/astroleft.png';
import webback from '../assets/webback1.png';
import srmLogo from '../assets/srm_logo.png';
import naacLogo from '../assets/naacaplus.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ onLogoClick }: { onLogoClick: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const astroLeftRef = useRef<HTMLImageElement>(null);
  const astroRightRef = useRef<HTMLImageElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);

  const [readyForScroll, setReadyForScroll] = useState(false);
  // Mouse position state removed


  // Removed mouse move handler


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



  useEffect(() => {
    if (!readyForScroll) return;

    const inner = innerRef.current;
    const logoEl = logoRef.current;
    const bgText = bgTextRef.current;
    const astroLeft = astroLeftRef.current;
    const astroRight = astroRightRef.current;
    const planet = planetRef.current;

    if (!inner || !logoEl) return;

    // WARP SPEED SCROLL EFFECT
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5, // Smooth scrubbing
        pin: false, // We rely on the container being sticky
      }
    });

    // 1. Text Explosion (Fly-through) - REMOVED per user request
    /*
    tl.to(logoEl, {
      scale: 15, // Massive zoom
      opacity: 0,
      filter: 'blur(20px)',
      ease: 'power2.in',
      duration: 1
    }, 0);
    */

    // 2. Background Text Parallax (Moves Down)
    if (bgText) {
      tl.to(bgText, {
        y: 400,
        scale: 1.2,
        opacity: 0,
        ease: 'power1.in',
        duration: 1
      }, 0);
    }

    // 3. Astronauts Drift Out (Fly-by)
    if (astroLeft) {
      tl.to(astroLeft, {
        x: '-50vw', // Move way off screen left
        y: '-20vh',
        rotation: -45,
        scale: 1.5,
        ease: 'power1.in',
        duration: 1
      }, 0);
    }
    if (astroRight) {
      tl.to(astroRight, {
        x: '50vw', // Move way off screen right
        y: '-20vh',
        rotation: 45,
        scale: 1.5,
        ease: 'power1.in',
        duration: 1
      }, 0);
    }

    // 4. Planet Slight Parallax (Grounding)
    if (planet) {
      tl.to(planet, {
        y: -100,
        scale: 1.1,
        ease: 'power1.out',
        duration: 1
      }, 0);
    }

    // Scroll Indicator Fade Out
    const scrollIndicator = inner.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      tl.to(scrollIndicator, {
        opacity: 0,
        y: 50,
        duration: 0.2
      }, 0);
    }

    return () => {
      tl.kill();
    };
  }, [readyForScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] w-full bg-black" // Reduced height to fix "empty space" gap
      // onMouseMove={handleMouseMove}
      style={{
        overflow: 'clip', // Prevent overflow during zoom
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center center',
      }}
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
          className="absolute top-8 left-8 w-32 md:w-48 z-40 pointer-events-none object-contain mix-blend-screen"
        />

        {/* SRM Logo - Top Right */}
        <img
          src={srmLogo}
          alt="SRM University"
          className="absolute top-8 right-8 w-32 md:w-48 z-40 pointer-events-none object-contain mix-blend-screen"
        />



        {/* Logo + VERGE 2026 */}
        {/* Background Text Layer */}
        {/* Background Text Layer - Wireframe & Parallax */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none overflow-hidden pb-32"
          style={{
            // transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`, // Removed swinging
            transition: 'transform 0.1s ease-out'
          }}
        >
          <span
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgb(40, 0, 0)',
              WebkitTextStroke: '1px rgba(200, 0, 0, 0.3)',
              filter: 'drop-shadow(0 0 50px rgba(100, 0, 0, 0.3))'
            }}
          >
            VERGE
          </span>
          <span
            className="text-[16vw] md:text-[18vw] font-black leading-none tracking-tighter -mt-2 md:-mt-8"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgb(40, 0, 0)',
              WebkitTextStroke: '1px rgba(200, 0, 0, 0.3)',
              filter: 'drop-shadow(0 0 50px rgba(100, 0, 0, 0.3))'
            }}
          >
            2026
          </span>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          {/* Radial glow removed to favor the bottom horizon */
          /*
          <div
            className="absolute"
            style={{ ... }}
          />
          */}

          <div
            ref={logoRef}
            className="flex flex-col items-center gap-4 opacity-0 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-500 z-50 origin-center"
            onClick={onLogoClick}
            style={{
              // transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`, // Removed swinging
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Top decorative line - REMOVED */}

            <div className="flex flex-col items-center gap-2">
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white text-center"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  filter: 'drop-shadow(0 0 40px rgba(0, 255, 255, 0.3))'
                }}
              >
                VERGE 2026
              </h1>
            </div>

            {/* Tagline - REMOVED */}

            {/* Bottom decorative line - REMOVED */}

            {/* Corner brackets - REMOVED */}
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

        {/* Planet Horizon - Image Asset */}
        <div
          ref={planetRef}
          className="absolute inset-x-0 bottom-[-10vh] pointer-events-none z-10 flex justify-center origin-bottom"
        >
          {/* Atmospheric Glow - Tight to the Planet Border */}
          <img
            src={webback}
            alt="Horizon"
            className="w-full h-auto max-h-[85vh] object-cover object-bottom"
            style={{
              filter: 'drop-shadow(0 -10px 40px rgba(0, 100, 255, 0.5))'
            }}
          />
        </div>

        {/* Bottom Fade Gradient for Smooth Transition */}
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none" />

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
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            .animate-float-slow {
              animation: float 6s ease-in-out infinite;
            }
            .animate-float-slower {
              animation: float 8s ease-in-out infinite;
            }
          `}</style>
        </div>



        {/* Floating Astronauts */}
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          {/* Left Astronaut - Large & Using dedicated left asset */}
          <img
            ref={astroLeftRef}
            src={astroleft}
            alt="Astronaut Left"
            className="absolute bottom-[10vh] md:bottom-[2vh] left-[-2vw] md:left-[2vw] w-48 md:w-80 lg:w-[450px] opacity-100 animate-float-slow"
            style={{
              // Removed flip/rotate as we now have a dedicated left-facing image
              animationDelay: '0s',
              filter: 'drop-shadow(0 0 30px rgba(0,100,255,0.4))'
            }}
          />
          {/* Right Astronaut - Large & Default Orientation */}
          <img
            ref={astroRightRef}
            src={astro}
            alt="Astronaut"
            className="absolute bottom-[10vh] md:bottom-[2vh] right-[-2vw] md:right-[2vw] w-48 md:w-80 lg:w-[450px] opacity-100 animate-float-slower"
            style={{
              transform: 'rotate(-15deg)', // Tilted inward
              animationDelay: '1.5s',
              filter: 'drop-shadow(0 0 30px rgba(0,100,255,0.4))'
            }}
          />
        </div>


      </div>
    </section>
  );
}
