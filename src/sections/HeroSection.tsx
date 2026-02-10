import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/logo.png';
import earthImg from '../assets/earthback.png';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [readyForScroll, setReadyForScroll] = useState(false);

  // Timed animation - text types, waits 2s, fades, logo appears
  useEffect(() => {
    const text = textRef.current;
    const logoEl = logoRef.current;
    if (!text || !logoEl) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.set(text, { opacity: 1 })
      .fromTo(
        text.querySelectorAll('.char'),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          stagger: 0.03,
          ease: 'none',
          onComplete: () => setTextVisible(true),
        }
      )
      // Wait 2 seconds
      .to({}, { duration: 2 })
      // Text fades out
      .to(text, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power2.inOut',
      })
      // Logo appears
      .fromTo(
        logoEl,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          onComplete: () => setReadyForScroll(true),
        },
        '-=0.3'
      );

    return () => { tl.kill(); };
  }, []);

  // Scroll animation - uses sticky positioning instead of pin
  useEffect(() => {
    if (!readyForScroll) return;

    const inner = innerRef.current;
    const earth = earthRef.current;
    const logoEl = logoRef.current;
    const logoImg = logoImgRef.current;

    if (!inner || !earth || !logoEl || !logoImg) return;

    // Logo Container Fade Out (Text + Decorations) - Exclude VERGE text
    // We target specific children to fade out, allowing VERGE text to move independently
    const decorations = logoEl.querySelectorAll('.hero-decoration');
    gsap.to(decorations, {
      opacity: 0,
      ease: 'power3.in',
      scrollTrigger: {
        trigger: inner,
        start: 'top top',
        end: '40% top',
        scrub: 1,
      },
    });

    // Logo Image Zoom (Only the V logo) & Fade Out
    const logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: inner,
        start: 'top top',
        end: '40% top',
        scrub: 1,
      },
    });

    logoTl.to(logoImg, {
      scale: 50,
      ease: 'power3.in',
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
      gsap.to(vergeText, {
        y: '-48vh', // Move to header position
        scale: 0.15, // Scale down to header size
        opacity: 0, // Fade out at the very end to let header text take over
        ease: 'power3.in',
        scrollTrigger: {
          trigger: inner,
          start: 'top top',
          end: '40% top',
          scrub: 1,
        },
      });
    }

    // Earth emerges
    gsap.fromTo(
      earth,
      { xPercent: 30, yPercent: 50, opacity: 0 },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: inner,
          start: '20% top',
          end: '60% top',
          scrub: 1,
        },
      }
    );

    // Earth fades out at the end
    gsap.to(earth, {
      opacity: 0,
      y: -30,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: inner,
        start: '90% top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [readyForScroll]);

  const heroText = '[SPACE IS THE DREAM OF HUMANITY]';

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-black"
      style={{ overflow: 'visible' }}
    >
      {/* Sticky inner container */}
      <div
        ref={innerRef}
        className="sticky top-0 h-screen w-full"
        style={{ overflow: 'visible' }}
      >
        {/* Hero Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ opacity: 0 }}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-mono tracking-[0.2em] text-white/90">
            {heroText.split('').map((char, index) => (
              <span key={index} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

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
            className="flex flex-col items-center gap-4 opacity-0"
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
          `}</style>
        </div>

        {/* Earth rising from right bottom */}
        <div
          ref={earthRef}
          className="absolute bottom-0 right-0 w-[80%] z-10 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <img
            src={earthImg}
            alt="Earth"
            className="w-full h-auto"
          />
          {/* Atmosphere glow */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(100, 180, 255, 0.4) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Sun flare effect */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full pointer-events-none z-5"
          style={{
            background: 'radial-gradient(ellipse at 20% 30%, rgba(255, 200, 100, 0.15) 0%, transparent 50%)',
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 2s ease',
          }}
        />
      </div>
    </section>
  );
}
