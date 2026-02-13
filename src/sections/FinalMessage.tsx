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
      id="contact"
      ref={sectionRef}
      className="relative md:min-h-screen w-full bg-black overflow-hidden py-10 md:py-20"
    >
      {/* Background starfield */}
      <Starfield />



      {/* Main message */}
      <div
        ref={messageRef}
        className="hidden md:flex h-screen items-center justify-center px-6"
      >
        <div className="text-center">
          <div className="text-[8vw] md:text-[6vw] font-bold text-white/90 leading-tight tracking-tight">
            JOIN US AT VERGE 2026
            <br />
            FOR AN ASTRONOMICAL
            <br />
            EXPERIENCE
          </div>


        </div>
      </div>

      {/* Footer */}
      <footer className="relative pt-10 md:pt-24 pb-8 md:pb-12 border-t border-emerald-500/10 bg-black/95 backdrop-blur-xl overflow-hidden">
        {/* Top Glow Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.4)]" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20 relative z-10">
          {/* Brand Column */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              VERGE 2026
            </h2>
            <p className="text-sm text-emerald-100/60 leading-relaxed font-mono tracking-wide max-w-xs">
              The biggest technical festival bringing innovation and technology together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-widest uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-4 font-mono text-sm text-emerald-100/60">
              {['Events', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-all flex items-center gap-3 group w-fit">
                    <span className="text-emerald-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="relative overflow-hidden group-hover:tracking-wider transition-all duration-300">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-widest uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Contact Info
            </h3>
            <div className="space-y-5 font-mono text-sm text-cyan-100/60">
              <a href="mailto:verge@srmuniversity.ac.in" className="flex items-center gap-4 hover:text-cyan-400 transition-colors group w-fit">
                <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-900/40 transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>verge@srmuniversity.ac.in</span>
              </a>
              <a href="tel:+918953348042" className="flex items-center gap-4 hover:text-cyan-400 transition-colors group w-fit">
                <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-900/40 transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 8953348042</span>
              </a>
              <div className="flex items-center gap-4 text-cyan-100/60 group w-fit">
                <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>SRM University, Delhi-NCR</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-widest uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="p-3.5 bg-transparent rounded-full hover:bg-emerald-500/10 hover:text-emerald-400 text-emerald-600 transition-all border border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-3.5 bg-transparent rounded-full hover:bg-cyan-500/10 hover:text-cyan-400 text-cyan-600 transition-all border border-cyan-500/30 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dense Scanline Texture */}
        <div className="relative pt-4 md:pt-6 pb-4 md:pb-6 mt-8 md:mt-12 border-t border-white/5">
          {/* Scanline Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: 'linear-gradient(90deg, #10b981 1px, transparent 1px)',
              backgroundSize: '4px 100%',
              maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
            }}
          />

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-emerald-100/60 tracking-wider">
              <span>Made with</span>
              <span className="text-pink-500 animate-pulse text-lg">❤️</span>
              <span>by</span>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold tracking-widest hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                Suvijya Arya
              </a>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-[10px] font-mono text-emerald-100/30 tracking-[0.2em] uppercase">
                © 2026 VERGE TECHFEST. ALL RIGHTS RESERVED.
              </p>
            </div>
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
