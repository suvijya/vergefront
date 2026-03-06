import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AccommodationSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in header
            gsap.fromTo(
                ".accom-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".accom-header",
                        start: "top 80%",
                    }
                }
            );

            // Stagger in cards
            gsap.fromTo(
                ".accom-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const packages = [
        {
            title: "1 DAY PASS",
            subtitle: "Accommodation + Mess",
            price: "₹699",
            duration: "",
            color: "from-cyan-500/20 to-blue-500/5",
            borderColor: "border-cyan-500/30",
            glowColor: "rgba(6, 182, 212, 0.15)",
            accent: "text-cyan-400",
            features: [
                "Stay for Day 1 or Day 2",
                "Mess Included",
                "1 Bed Available"
            ],
            buttonText: "BOOK STAY",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        },
        {
            title: "2 DAYS STAY",
            subtitle: "Accommodation Only",
            price: "₹699",
            duration: "",
            color: "from-purple-500/20 to-pink-500/5",
            borderColor: "border-purple-500/30",
            glowColor: "rgba(168, 85, 247, 0.15)",
            accent: "text-purple-400",
            features: [
                "Stay for Day 1 and Day 2",
                "No Mess Included",
                "1 Bed Available",
            ],
            buttonText: "BOOK STAY",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        },
        {
            title: "FULL STAY",
            subtitle: "Accommodation + Mess",
            price: "₹1199",
            duration: "",
            color: "from-emerald-500/20 to-teal-500/5",
            borderColor: "border-emerald-500/30",
            glowColor: "rgba(16, 185, 129, 0.15)",
            accent: "text-emerald-400",
            features: [
                "Stay for Day 1 and Day 2",
                "Mess Included",
                "1 Bed Available"
            ],
            buttonText: "BOOK STAY",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        },
        {
            title: "ULTIMATE COMBO",
            subtitle: "Stay + Mess + Concerts",
            price: "₹2199",
            duration: "",
            color: "from-amber-500/20 to-orange-500/5",
            borderColor: "border-amber-500/30",
            glowColor: "rgba(245, 158, 11, 0.15)",
            accent: "text-amber-400",
            features: [
                "Stay for Day 1 and Day 2",
                "Mess Included",
                "2 Day Concert Pass",
                "1 Bed Available"
            ],
            buttonText: "BOOK COMBO",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="accommodation"
            className="w-full relative bg-black py-12 px-0 lg:px-6 overflow-hidden md:py-32"
        >
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes pulse-amber {
                    0% { box-shadow: 0 0 20px -10px rgba(245, 158, 11, 0.4), inset 0 0 20px -10px rgba(245, 158, 11, 0.4); border-color: rgba(245, 158, 11, 0.4); }
                    50% { box-shadow: 0 0 40px 0px rgba(245, 158, 11, 0.8), inset 0 0 40px -5px rgba(245, 158, 11, 0.6); border-color: rgba(245, 158, 11, 1); }
                    100% { box-shadow: 0 0 20px -10px rgba(245, 158, 11, 0.4), inset 0 0 20px -10px rgba(245, 158, 11, 0.4); border-color: rgba(245, 158, 11, 0.4); }
                }
                .ultimate-pulse {
                    animation: pulse-amber 3s infinite ease-in-out;
                }
                @keyframes spin-slow {
                    to { transform: rotate(360deg); }
                }
                .tech-spin {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px]"
                    style={{
                        background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.03) 0%, transparent 70%)',
                        filter: 'blur(40px)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header */}
                <div className="accom-header text-center mb-10 md:mb-16 relative select-none px-4 lg:px-0">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500/20" />
                        <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                            TICKETS & STAY
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500/20" />
                    </div>

                    <h2
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
                        style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 40px rgba(16, 185, 129, 0.1)' }}
                    >
                        PASSES & ACCOMMODATION
                    </h2>

                    <p className="mt-3 md:mt-6 text-xs md:text-base font-mono text-white/40 max-w-2xl mx-auto leading-relaxed">
                        Secure your access to Verge Techfest. We offer dedicated accommodation packages, exclusive concert passes, and ultimate combos.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 justify-items-center w-full max-w-[1400px] mx-auto px-2 md:px-4"
                >
                    {packages.map((tier, index) => {
                        const isUltimate = index === 3;
                        return (
                            <div
                                key={index}
                                className={`accom-card relative w-full max-w-[350px] lg:max-w-none h-full group rounded-xl md:rounded-2xl border ${isUltimate ? 'border-amber-500/50' : tier.borderColor} bg-gradient-to-b ${tier.color} backdrop-blur-md p-3 md:p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:scale-[1.03] flex flex-col ${isUltimate ? 'ultimate-pulse z-20' : 'z-10 hover:z-20'}`}
                                style={{
                                    boxShadow: isUltimate ? 'none' : `0 10px 40px -10px ${tier.glowColor}, inset 0 0 20px -10px ${tier.glowColor}`
                                }}
                            >
                                {/* Neon Scanline Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.8) 50%)', backgroundSize: '100% 4px' }}
                                />

                                {/* Card Hover Intense Glow */}
                                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${isUltimate ? 'from-amber-400/20' : 'from-white/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                {/* Card Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    <h3 className={`text-sm md:text-xl font-bold tracking-wider md:tracking-widest ${tier.accent} mb-0.5 drop-shadow-[0_0_8px_currentColor]`} style={{ fontFamily: "'Orbitron', monospace" }}>
                                        {tier.title}
                                    </h3>
                                    <div className="text-[8px] md:text-xs font-mono text-white/50 tracking-wider mb-3 md:mb-8 uppercase group-hover:text-white/80 transition-colors">
                                        {tier.subtitle}
                                    </div>

                                    <div className="flex items-baseline gap-1 md:gap-2 mb-3 md:mb-8">
                                        <span className="text-2xl md:text-5xl font-black text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all" style={{ fontFamily: "'Orbitron', monospace" }}>
                                            {tier.price}
                                        </span>
                                        <span className="text-[9px] md:text-sm font-mono text-emerald-400 font-bold mb-1 md:mb-2 tracking-widest">
                                            {tier.duration}
                                        </span>
                                    </div>

                                    {/* Glowing Separator */}
                                    <div className={`h-px w-full bg-gradient-to-r from-transparent via-${isUltimate ? 'amber-500/50' : 'white/20'} to-transparent mb-3 md:mb-8 group-hover:via-${isUltimate ? 'amber-400' : 'white/60'} transition-all duration-500`} />

                                    <ul className="space-y-2 md:space-y-5 mb-4 md:mb-10">
                                        {tier.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-2 md:gap-3 group/item">
                                                {/* Tech Reticle SVG */}
                                                <svg className={`w-3 h-3 md:w-5 md:h-5 ${tier.accent} shrink-0 tech-spin opacity-70 group-hover/item:opacity-100 transition-opacity drop-shadow-[0_0_5px_currentColor]`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <circle cx="12" cy="12" r="10" strokeWidth="1" strokeDasharray="4 4" />
                                                    <circle cx="12" cy="12" r="4" strokeWidth="1" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
                                                </svg>
                                                <span className="text-[9px] md:text-sm font-mono text-white/70 leading-tight md:leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={tier.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block mt-auto relative"
                                    >
                                        <button
                                            className={`w-full py-2 md:py-4 rounded bg-white/5 border border-white/10 text-[8px] md:text-xs font-mono tracking-[0.1em] md:tracking-[0.2em] text-white uppercase transition-all duration-300 group-hover:bg-${isUltimate ? 'amber-500/20' : 'white/10'} hover:border-${isUltimate ? 'amber-400/80' : 'white/50'} hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden`}
                                        >
                                            <span className="relative z-10 flex flex-col items-center justify-center">
                                                <span className="group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-300">
                                                    {tier.buttonText}
                                                </span>
                                                <span className="absolute translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-cyan-300">
                                                    &gt; INITIATE_TRANSFER
                                                </span>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom footnote */}
                <div className="mt-8 md:mt-16 text-center px-4 md:px-0">
                    <p className="text-[10px] md:text-xs font-mono text-white/30 tracking-widest max-w-xl mx-auto uppercase leading-relaxed">
                        Prices and availability are subject to change. <br className="md:hidden" />
                        Please book early as slots are limited.
                    </p>
                </div>
            </div>
        </section>
    );
}
