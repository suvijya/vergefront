import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/logo.png';
import earthImg from '../../asset/earthback.png';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
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
    if (!inner || !earth || !logoEl) return;

    // Logo zoom animation
    gsap.to(logoEl, {
      scale: 50,
      opacity: 0,
      ease: 'power3.in',
      scrollTrigger: {
        trigger: inner,
        start: 'top top',
        end: '50% top',
        scrub: 1,
      },
    });

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
          start: '30% top',
          end: '70% top',
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
        start: '80% top',
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
      className="relative h-[200vh] w-full bg-black"
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

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <img
            ref={logoRef}
            src={logo}
            alt="Verge"
            className="w-32 md:w-48 lg:w-64 object-contain opacity-0 brightness-0 invert"
          />
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
