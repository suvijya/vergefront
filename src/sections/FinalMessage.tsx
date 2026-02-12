import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FinalMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const message = messageRef.current;

    if (!section || !message) return;


    // Message reveal
    gsap.fromTo(
      message,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: message,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden py-20"
    >
      {/* Background starfield */}
      <Starfield />



      {/* Main message */}
      <div
        ref={messageRef}
        className="h-screen flex items-center justify-center px-6"
      >
        <div className="text-center">
          <div className="text-[8vw] md:text-[6vw] font-bold text-white/90 leading-tight tracking-tight">
            JOIN US AT VERGE 2026
            <br />
            FOR AN ASTRONOMICAL
            <br />
            EXPERIENCE
          </div>

          <div className="mt-12 text-sm font-mono text-white/40 tracking-wider">
            NASA TAKES STEPS.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative pt-20 pb-10 border-t border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              VERGE 2026
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-mono">
              The biggest technical festival bringing innovation and technology together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-3 font-mono text-sm text-gray-400">
              {['Events', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <span className="text-cyan-500/50 group-hover:text-cyan-400">→</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Contact Info
            </h3>
            <div className="space-y-4 font-mono text-sm text-gray-400">
              <a href="mailto:verge@srmuniversity.ac.in" className="flex items-start gap-3 hover:text-cyan-400 transition-colors group">
                <svg className="w-5 h-5 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>verge@srmuniversity.ac.in</span>
              </a>
              <a href="tel:+918953348042" className="flex items-start gap-3 hover:text-cyan-400 transition-colors group">
                <svg className="w-5 h-5 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 8953348042</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>SRM University, Delhi-NCR</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/10 hover:border-cyan-500/50 group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-pink-400 transition-all border border-white/10 hover:border-pink-500/50 group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-mono text-gray-500">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-cyan-400">Suvijya Arya</span>
            </p>
            <p className="text-xs font-mono text-gray-600">
              © 2026 VERGE TECHFEST. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

// Starfield background component
function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.01 + 0.005,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += Math.sin(Date.now() * star.speed) * 0.005;
        star.opacity = Math.max(0.05, Math.min(0.7, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
