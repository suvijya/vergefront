import vergeLogo from '../assets/logo.png';

export default function Header() {
  const leftNav = [
    { label: 'EVENTS', href: '#events' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'SPONSORS', href: '#sponsors' },
  ];

  const rightNav = [
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'HUMANS', href: '#humans' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left side - Navigation buttons */}
        <nav className="flex items-center gap-8">
          {leftNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-mono tracking-wider text-white/70 hover:text-cyan-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#home">
            <img
              src={vergeLogo}
              alt="Verge"
              className="h-6 w-auto brightness-0 invert"
            />
          </a>
        </div>

        {/* Right side - More navigation buttons */}
        <nav className="flex items-center gap-8">
          {rightNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-mono tracking-wider text-white/70 hover:text-cyan-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
