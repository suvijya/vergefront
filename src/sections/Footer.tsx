export default function Footer() {
    return (
        <footer id="contact" className="relative pt-10 md:pt-24 pb-8 md:pb-12 bg-black overflow-hidden">

            {/* Top glow line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Faint corner radial glow */}
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[300px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at bottom left, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
            />

            {/* 4-column grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">

                {/* Brand */}
                <div className="space-y-4 md:space-y-6">
                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        VERGE<br />2026
                    </h2>
                    <p className="text-sm text-white/30 leading-relaxed font-mono tracking-wide max-w-xs">
                        The biggest technical festival bringing innovation and technology together.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h3
                        className="text-[10px] font-mono text-emerald-500/50 tracking-[0.4em] uppercase"
                    >
                        Quick Links
                    </h3>
                    <ul className="space-y-3 font-mono text-sm text-white/35">
                        {['Events', 'Schedule', 'Speakers', 'Sponsors', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="flex items-center gap-3 group hover:text-emerald-400 transition-colors duration-200"
                                >
                                    <span className="w-3 h-px bg-white/15 group-hover:w-5 group-hover:bg-emerald-500 transition-all duration-300" />
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-[10px] font-mono text-emerald-500/50 tracking-[0.4em] uppercase">
                        Contact Info
                    </h3>
                    <div className="space-y-4 font-mono text-sm text-white/35">
                        <a href="mailto:verge@srmuniversity.ac.in" className="flex items-center gap-3 hover:text-emerald-400 transition-colors group w-fit">
                            <div className="p-2 rounded border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all">
                                <svg className="w-4 h-4 text-emerald-500/60 group-hover:text-emerald-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span>verge@srmuniversity.ac.in</span>
                        </a>
                        <a href="tel:+918953348042" className="flex items-center gap-3 hover:text-emerald-400 transition-colors group w-fit">
                            <div className="p-2 rounded border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all">
                                <svg className="w-4 h-4 text-emerald-500/60 group-hover:text-emerald-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span>+91 8953348042</span>
                        </a>
                        <div className="flex flex-col gap-3 text-white/35 mt-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded border border-white/10 shrink-0">
                                    <svg className="w-4 h-4 text-emerald-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="flex-1">SRM University, Sonipat, Haryana</span>
                            </div>
                            <div className="w-full h-32 md:h-40 rounded-lg overflow-hidden border border-white/10 mt-2 hover:border-emerald-500/40 transition-colors">
                                <iframe
                                    src="https://maps.google.com/maps?q=SRM%20University%20Sonipat%20Haryana&t=m&z=14&output=embed&iwloc=near"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(85%) opacity(0.8)' }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    title="Map showing SRM University Sonipat Campus location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="space-y-6">
                    <h3 className="text-[10px] font-mono text-emerald-500/50 tracking-[0.4em] uppercase">
                        Follow Us
                    </h3>
                    <div className="flex gap-3">
                        <a href="#" className="p-3 border border-white/10 rounded hover:border-emerald-500/40 hover:bg-emerald-500/10 text-white/30 hover:text-emerald-400 transition-all duration-200 group">
                            <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#" className="p-3 border border-white/10 rounded hover:border-cyan-500/40 hover:bg-cyan-500/10 text-white/30 hover:text-cyan-400 transition-all duration-200 group">
                            <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 border-t border-white/[0.06]">
                {/* Scanline texture */}
                <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #10b981 1px, transparent 1px)',
                        backgroundSize: '4px 100%',
                        maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-sm md:text-base font-mono text-white/60 tracking-wider uppercase">
                        Made by{' '}
                        <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold tracking-widest">
                            Suvijya Arya
                        </a>
                    </span>
                    <p className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">
                        © 2026 VERGE TECHFEST. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}
