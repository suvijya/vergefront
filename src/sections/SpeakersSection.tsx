export default function SpeakersSection({ onBack }: { onBack?: () => void }) {
    return (
        <section
            id="speakers"
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto overflow-x-hidden py-10 px-6 md:px-12 overscroll-contain"
            style={{ overscrollBehavior: 'contain' }}
            data-lenis-prevent
        >
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.05) 0%, transparent 50%)',
                }}
            />

            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20 relative">
                {/* Back Button */}
                {onBack && (
                    <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-8 md:mb-0 flex justify-center md:block z-10">
                        <button
                            onClick={onBack}
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

                <div className="flex items-center justify-center gap-3 mb-3 pt-4 md:pt-0">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                        KEYNOTES & TALKS
                    </span>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/20" />
                </div>
                <h2
                    className="text-3xl md:text-5xl font-bold tracking-[0.12em] text-white leading-tight"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 30px rgba(0,200,255,0.08)',
                    }}
                >
                    SPEAKERS
                </h2>
            </div>

            {/* Announcing Soon Placeholder */}
            <div className="relative flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-8">

                {/* Text */}
                <p
                    className="text-2xl md:text-6xl font-black tracking-[0.15em] text-white mb-4 text-center leading-relaxed"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 40px rgba(0,200,255,0.4), 0 0 80px rgba(0,200,255,0.15)',
                    }}
                >
                    ANNOUNCING SOON
                    <span className="animate-pulse">...</span>
                </p>
                <p className="text-[9px] md:text-[11px] font-mono text-white/50 tracking-[0.3em] md:tracking-[0.4em] text-center uppercase leading-loose">
                    Speaker lineup will be revealed shortly
                </p>

                {/* Decorative lines */}
                <div className="flex items-center gap-4 mt-8 md:mt-10">
                    <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-cyan-500/20" />
                    <div className="w-1 h-1 rounded-full bg-cyan-500/30" />
                    <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-cyan-500/20" />
                </div>
            </div>
        </section>
    );
}
