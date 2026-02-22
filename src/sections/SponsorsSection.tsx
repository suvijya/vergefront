import { useRef } from 'react';
import { gsap } from 'gsap';

export default function SponsorsSection({ onBack }: { onBack?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Animation handlers for back button
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
    };

    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
    };

    return (
        <section
            id="sponsors"
            ref={containerRef}
            data-lenis-prevent
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto overflow-x-hidden py-10 px-6 md:px-12 overscroll-contain"
            style={{ overscrollBehavior: 'contain' }}
        >
            {/* Background orbital dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white/10"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Section Header */}
            <div className="text-center mb-20 relative">
                {/* Back Button */}
                {onBack && (
                    <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-8 md:mb-0 flex justify-center md:block">
                        <button
                            onClick={onBack}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                            className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                        >
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="font-mono text-xs tracking-widest hidden md:inline">RETURN</span>
                        </button>
                    </div>
                )}

                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">
                        ALLIED FORCES
                    </span>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                </div>
                <h2
                    className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-white mb-3"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 40px rgba(255, 215, 0, 0.1)',
                    }}
                >
                    MISSION PARTNERS
                </h2>
                <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.3em]">
                        PARTNERSHIPS
                    </span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
                </div>
            </div>

            {/* Announcing Soon Placeholder */}
            <div className="flex flex-col items-center justify-center py-20 px-8">
                {/* Text */}
                <p
                    className="text-3xl md:text-6xl font-black tracking-[0.15em] text-white mb-4 text-center"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 40px rgba(255,215,0,0.4), 0 0 80px rgba(255,215,0,0.15)',
                    }}
                >
                    ANNOUNCING SOON
                    <span className="animate-pulse">...</span>
                </p>
                <p className="text-[11px] font-mono text-white/50 tracking-[0.4em] text-center uppercase">
                    Sponsor lineup will be revealed shortly
                </p>

                {/* Decorative lines */}
                <div className="flex items-center gap-4 mt-10">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-yellow-500/30" />
                    <div className="w-1 h-1 rounded-full bg-yellow-500/40" />
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-yellow-500/30" />
                </div>

                {/* Become a partner CTA */}
                <a
                    href="mailto:sponsors@verge2026.com"
                    className="mt-12 inline-block px-8 py-3 border border-yellow-600/30 text-yellow-500/70 font-mono text-xs tracking-[0.3em] hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all duration-300"
                >
                    [ BECOME A PARTNER ]
                </a>
            </div>
        </section>
    );
}
