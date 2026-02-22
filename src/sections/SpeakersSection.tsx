export default function SpeakersSection() {
    return (
        <section id="speakers" className="w-full bg-black py-24 relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.05) 0%, transparent 50%)',
                }}
            />

            {/* Header */}
            <div className="text-center mb-16 px-8 select-none relative z-30">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                        KEYNOTES & TALKS
                    </span>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/20" />
                </div>
                <h2
                    className="text-3xl md:text-4xl font-bold tracking-[0.12em] text-white"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 30px rgba(0,200,255,0.08)',
                    }}
                >
                    SPEAKERS
                </h2>
            </div>

            {/* Announcing Soon Placeholder */}
            <div className="relative flex flex-col items-center justify-center py-20 px-8">

                {/* Text */}
                <p
                    className="text-3xl md:text-6xl font-black tracking-[0.15em] text-white mb-4 text-center"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 40px rgba(0,200,255,0.4), 0 0 80px rgba(0,200,255,0.15)',
                    }}
                >
                    ANNOUNCING SOON
                    <span className="animate-pulse">...</span>
                </p>
                <p className="text-[11px] font-mono text-white/50 tracking-[0.4em] text-center uppercase">
                    Speaker lineup will be revealed shortly
                </p>

                {/* Decorative lines */}
                <div className="flex items-center gap-4 mt-10">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-500/20" />
                    <div className="w-1 h-1 rounded-full bg-cyan-500/30" />
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-500/20" />
                </div>
            </div>
        </section>
    );
}
