import unstopLogo from '../../asset/unstopLogo.png';

export default function PartnersSection() {
    return (
        <section
            id="partners"
            className="w-full relative bg-black py-16 px-4 md:px-6 overflow-hidden md:py-24 border-t border-white/5"
        >
            <style>{`
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .partner-scan {
                    animation: scanline 8s linear infinite;
                }
            `}</style>

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(35, 181, 211, 0.05) 0%, transparent 60%)',
                        filter: 'blur(40px)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
                {/* Header */}
                <div className="text-center mb-12 relative select-none">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#23b5d3]/60" />
                        <span className="text-[10px] md:text-xs font-mono text-[#23b5d3]/80 tracking-[0.5em] uppercase font-bold">
                            Official Collaborations
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#23b5d3]/60" />
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 uppercase"
                        style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 40px rgba(35, 181, 211, 0.15)' }}
                    >
                        OFFICIAL PARTNERS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-12 w-full">
                    {/* Platform Partner Wrapper */}
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[10px] md:text-xs font-mono text-[#23b5d3]/60 tracking-[0.4em] uppercase font-bold mb-6">
                            Platform Partner
                        </span>
                        <div className="relative group w-full max-w-[320px] md:max-w-[400px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#23b5d3]/40 via-purple-500/40 to-[#23b5d3]/40 rounded-xl blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />

                            <div className="relative flex justify-center items-center py-12 px-8 bg-black/60 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden transform group-hover:-translate-y-1 transition-all duration-500">
                                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-overlay">
                                    <div className="w-full h-1 bg-[#23b5d3] partner-scan shadow-[0_0_15px_rgba(35,181,211,1)]" />
                                </div>
                                <div
                                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                                        backgroundSize: '16px 16px'
                                    }}
                                />
                                <img
                                    src={unstopLogo}
                                    alt="Unstop Platform Partner"
                                    className="h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(35,181,211,0.4)] group-hover:scale-105 transition-all duration-500 relative z-10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Media Partner Wrapper */}
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[10px] md:text-xs font-mono text-[#23b5d3]/60 tracking-[0.4em] uppercase font-bold mb-6">
                            Media Partner
                        </span>
                        <div className="relative group w-full max-w-[320px] md:max-w-[400px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#23b5d3]/40 via-pink-500/40 to-[#23b5d3]/40 rounded-xl blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#23b5d3] opacity-50 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:opacity-100" />

                            <div className="relative flex justify-center items-center py-10 px-8 bg-black/60 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden transform group-hover:-translate-y-1 transition-all duration-500">
                                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-overlay">
                                    <div className="w-full h-1 bg-[#23b5d3] partner-scan shadow-[0_0_15px_rgba(35,181,211,1)]" />
                                </div>
                                <div
                                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                                        backgroundSize: '16px 16px'
                                    }}
                                />
                                <img
                                    src="https://res.cloudinary.com/dkidiafve/image/upload/v1772432172/bj9eb9xpjfqtnjvf9qll.png"
                                    alt="Theia Media Partner"
                                    className="h-20 md:h-24 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(35,181,211,0.4)] group-hover:scale-105 transition-all duration-500 relative z-10"
                                    style={{ background: 'rgba(35,181,211,0.04)', borderRadius: '0.5rem' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
