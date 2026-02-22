import { useState, useEffect } from 'react';
import vergeLogo from '../assets/logo.png';

export default function Header({
  onLogoClick,
  onCrewClick,
  onSponsorsClick,
  onSpeakersClick,
  onNavigate
}: {
  onLogoClick: () => void;
  onCrewClick?: () => void;
  onSponsorsClick?: () => void;
  onSpeakersClick?: () => void;
  onNavigate?: (href: string) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);

  // Show header text after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowLogoText(true);
      } else {
        setShowLogoText(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavItem = {
    label: string;
    href: string;
    action?: () => void;
  };

  const activeOnNavigate = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
  }

  const leftNav: NavItem[] = [
    { label: 'EVENTS', href: '#events', action: () => activeOnNavigate('#events') },
    { label: 'SCHEDULE', href: '#schedule', action: () => activeOnNavigate('#schedule') },
    { label: 'SPONSORS', href: '#sponsors', action: onSponsorsClick },
  ];

  const rightNav: NavItem[] = [
    { label: 'SPEAKERS', href: '#speakers', action: onSpeakersClick },
    { label: 'HUMANS', href: '#humans', action: onCrewClick },
    { label: 'CONTACT US', href: '#contact', action: () => activeOnNavigate('#contact') },
  ];

  const allNav = [...leftNav, ...rightNav];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-8">
          {/* Mobile Menu Button - Left */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Left side - Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {leftNav.map((item) => (
              <a
                key={item.label}
                href={item.action ? '#' : item.href}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                }}
                className="text-[11px] font-mono tracking-wider text-white/70 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onLogoClick();
                const hero = document.getElementById('hero');
                if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center transition-all duration-500 ease-in-out ${showLogoText ? 'gap-3' : 'gap-0'}`}
            >
              <img
                src={vergeLogo}
                alt="Verge"
                className="h-4 md:h-6 w-auto brightness-0 invert"
              />
              <span
                className={`text-white font-bold tracking-[0.15em] text-base md:text-lg transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${showLogoText ? 'max-w-[140px] opacity-100 play-text-reveal' : 'max-w-0 opacity-0'}`}
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                VERGE
              </span>
            </a>
          </div>

          {/* Right side - Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {rightNav.map((item) => (
              <a
                key={item.label}
                href={item.action ? '#' : item.href}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                }}
                className="text-[11px] font-mono tracking-wider text-white/70 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Spacer - Right (balances layout) */}
          <div className="md:hidden w-6" />
        </div>

        {/* Light Dash Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            {allNav.map((item, index) => (
              <a
                key={item.label}
                href={item.action ? '#' : item.href}
                className="text-2xl font-mono tracking-[0.2em] text-white/80 hover:text-cyan-400 transition-colors"
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                  setIsMenuOpen(false);
                }}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease forwards ${index * 0.1}s`
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-12 text-[10px] font-mono text-white/30 tracking-widest">
            VERGE 2026
          </div>

          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
