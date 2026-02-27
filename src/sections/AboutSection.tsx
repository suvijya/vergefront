import { useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

interface AboutSectionProps {
    onBack: () => void;
}

export default function AboutSection({ onBack }: AboutSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Simple enter animation
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
    };

    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto overflow-x-hidden"
        >
            {/* Background Grid */}
            <div
                className="fixed inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative z-10">

                {/* Navigation */}
                <button
                    onClick={onBack}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    className="group flex items-center gap-3 mb-16 text-white/60 hover:text-white transition-colors"
                >
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="font-mono text-xs tracking-widest">RETURN TO MISSION CONTROL</span>
                </button>

                {/* Content Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <img
                        src={logo}
                        alt="Verge Logo"
                        className="w-24 h-24 mb-8 brightness-0 invert opacity-90"
                    />
                    <h1
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        ABOUT VERGE
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                </div>

                {/* Content Body */}
                <div className="space-y-20 font-light text-lg md:text-xl leading-relaxed text-white/80">

                    <section>
                        <h2 className="text-2xl md:text-3xl font-mono text-cyan-400 mb-6 tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>[ THE GENESIS ]</h2>
                        <p className="mb-6">
                            Verge isn't just a techfest; it's a glimpse into the future. Born from the collective ambition of the brightest minds at SRM, it represents the convergence of technology, creativity, and innovation.
                        </p>
                        <p>
                            Our mission is to bridge the gap between theoretical knowledge and real-world application, providing a platform where code meets culture and ideas become reality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-mono text-purple-400 mb-6 tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>[ THE VISION ]</h2>
                        <p className="mb-6">
                            We envision a world where technology serves as a canvas for human expression. At Verge, we celebrate the hackers, the designers, the dreamers, and the doers.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {[
                                "FOSTERING INNOVATION",
                                "BUILDING COMMUNITY",
                                "CHALLENGING BOUNDARIES",
                                "EMPOWERING CREATORS"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 border border-white/10 p-4 rounded bg-white/5 hover:border-white/30 transition-colors">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    <span className="font-mono text-sm tracking-wider">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-mono text-green-400 mb-6 tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>[ THE LEGACY ]</h2>
                        <p>
                            Since its inception, Verge has hosted thousands of participants, sparked countless startups, and showcased groundbreaking projects. As we move towards 2026, we are setting our sights even higher — exploring the frontiers of AI, Space Tech, and Sustainable Computing.
                        </p>
                    </section>

                    {/* Contact / Footer for About */}
                    <div className="pt-16 border-t border-white/10 mt-16 text-center">
                        <p className="text-white/40 font-mono text-sm">
              // END OF FILE <br />
              // VERGE_SYSTEM_V4.0
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
