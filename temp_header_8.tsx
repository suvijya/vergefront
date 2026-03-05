import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vergeLogo from '../assets/logo.png';

export default function Header({
  onLogoClick,
  onCrewClick,
  onSponsorsClick,
  onSpeakersClick,
  onNavigate,
  showNav = true,
}: {
  onLogoClick: () => void;
  onCrewClick?: () => void;
  onSponsorsClick?: () => void;
  onSpeakersClick?: () => void;
  onNavigate?: (href: string) => void;
  showNav?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  type NavItem = {
    label: string;
    href: string;
    action?: () => void;
    tag?: string;
  };

  const activeOnNavigate = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
  };

  const leftNav: NavItem[] = [
    { label: 'EVENTS', href: '#events', action: () => activeOnNavigate('#events') },
    { label: 'SCHEDULE', href: '#schedule', action: () => activeOnNavigate('#schedule') },
    { label: 'SPONSORS', href: '#sponsors', action: onSponsorsClick },
  ];

  const rightNav: NavItem[] = [
    { label: 'SPEAKERS', href: '#speakers', action: onSpeakersClick },
    { label: 'HUMANS', href: '#humans', action: onCrewClick },
    { label: 'CONTACT', href: '#contact', action: () => activeOnNavigate('#contact') },
  ];

  const allNav = [...leftNav, ...rightNav];

  return (
    <>
      {/* Black strip above navbar */}
      <div className={`fixed top-0 left-0 w-full h-4 bg-black z-[99] transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0'}`} />
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl mb-4 transition-all duration-500 ${showNav ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
      >
        <div className="flex justify-between items-center bg-black backdrop-blur-xl border border-white/5 border-b-cyan-500/30 rounded-2xl px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.5),0_0_20px_rgba(34,211,238,0.05)] transition-all duration-300" style={{ boxShadow: '0 8px 30px rgb(0,0,0,0.5), 0 1px 0 0 rgba(34,211,238,0.25), inset 0 -1px 0 0 rgba(34,211,238,0.15)' }}>

          {/* Left side - Logo + Text */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onLogoClick();
                const hero = document.getElementById('hero');
                if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src={vergeLogo}
                alt="Verge"
                className="h-6 md:h-8 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-110"
              />
              <span
                className="text-white font-black tracking-tighter text-2xl md:text-3xl flex items-center"
                style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 20px rgba(34,211,238,0.4)' }}
              >
                VERGE.
              </span>
            </a>
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.1)]"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay using Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-[#0a0a0a] flex flex-col md:flex-row border-t-2 border-t-cyan-500/20"
          >
            {/* Top Right Actions */}
            <div className="absolute top-6 right-6 lg:right-12 z-50 flex items-center gap-3">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Left Column - Branding Context */}
            <div className="hidden md:flex flex-col flex-1 border-r border-white/5 p-12 lg:p-24 relative overflow-hidden justify-center items-center">

              <div className="relative z-10 w-full max-w-sm text-center flex flex-col items-center">
                <img
                  src={vergeLogo}
                  alt="Verge"
                  className="w-32 md:w-48 mb-6 brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-500 hover:scale-105"
                />
                <div className="flex flex-col gap-3 w-full">
                </div>
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="flex-1 flex flex-col justify-center px-6 py-24 md:p-12 lg:p-24 overflow-y-auto relative">
              <nav className="flex flex-col w-full max-w-xl mx-auto gap-1">
                {allNav.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={item.action ? '#' : item.href}
                      className="group flex items-center justify-between py-5 md:py-6 border-b border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                      onClick={(e) => {
                        if (item.action) {
                          e.preventDefault();
                          item.action();
                        }
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="text-xl md:text-3xl font-black tracking-tight text-white/90 group-hover:text-cyan-100 transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        {item.label}
                      </span>

                      <div className="flex items-center gap-3 md:gap-6">
                        {item.tag && (
                          <span className="text-[9px] md:text-[10px] font-mono border border-orange-500/30 text-orange-400 px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                        )}
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-white/30 group-hover:text-white transition-all group-hover:translate-x-1 duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </nav>

              <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 font-mono text-[10px] text-blue-500/50 flex gap-4 tracking-widest uppercase">
                <span>// VERGE BETA</span>
              </div>
              <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 font-mono text-[10px] text-white/20 flex gap-4 tracking-widest uppercase">
                <span>BUILD 2026.ALPHA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

