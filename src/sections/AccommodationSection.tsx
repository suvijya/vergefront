import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '../components/AnimatedSection';


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
            price: "₹499",
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
            price: "₹499",
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
            price: "₹999",
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
            price: "₹1999",
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
                <AnimatedSection direction="up" delay={0} duration={0.8} className="accom-header text-center mb-10 md:mb-16 relative select-none px-4 lg:px-0">
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
                </AnimatedSection>

                {/* Pricing Cards */}
                <AnimatedSection direction="up" delay={0.2} duration={0.8}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 justify-items-center w-full max-w-[1400px] mx-auto px-4">
                    {packages.map((tier, index) => (
                        <div
                            key={index}
                            className={`accom-card relative w-full max-w-none h-full group rounded-xl md:rounded-2xl border ${tier.borderColor} bg-gradient-to-b ${tier.color} backdrop-blur-md p-3 md:p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col ${tier.title === 'ULTIMATE COMBO' ? 'ultimate-pulse' : ''}`}
                            style={{
                                boxShadow: `0 10px 40px -10px ${tier.glowColor}, inset 0 0 20px -10px ${tier.glowColor}`
                            }}
                        >
                            {/* Card Hover Glow */}
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Card Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    <h3 className={`text-base md:text-xl font-bold tracking-wider md:tracking-widest ${tier.accent} mb-0.5 drop-shadow-[0_0_8px_currentColor]`} style={{ fontFamily: "'Orbitron', monospace" }}>
                                        {tier.title}
                                    </h3>
                                    <div className="text-[10px] md:text-xs font-mono text-white/50 tracking-wider mb-4 md:mb-8 uppercase group-hover:text-white/80 transition-colors">
                                        {tier.subtitle}
                                    </div>

                                    <div className="flex items-baseline gap-2 mb-4 md:mb-8">
                                        <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all" style={{ fontFamily: "'Orbitron', monospace" }}>
                                            {tier.price}
                                        </span>
                                        <span className="text-xs md:text-sm font-mono text-emerald-400 font-bold mb-1 md:mb-2 tracking-widest">
                                            {tier.duration}
                                        </span>
                                    </div>

                                    {/* Glowing Separator */}
                                    <div className={`h-px w-full bg-gradient-to-r from-transparent ${tier.title === 'ULTIMATE COMBO' ? 'via-amber-500/50' : 'via-white/20'} to-transparent mb-4 md:mb-8 group-hover:${tier.title === 'ULTIMATE COMBO' ? 'via-amber-400' : 'via-white/60'} transition-all duration-500`} />

                                    <ul className="space-y-3 md:space-y-5 mb-6 md:mb-10">
                                        {tier.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3 group/item">
                                                {/* Tech Reticle SVG */}
                                                <svg className={`w-4 h-4 md:w-5 md:h-5 ${tier.accent} shrink-0 tech-spin opacity-70 group-hover/item:opacity-100 transition-opacity drop-shadow-[0_0_5px_currentColor]`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <circle cx="12" cy="12" r="10" strokeWidth="1" strokeDasharray="4 4" />
                                                    <circle cx="12" cy="12" r="4" strokeWidth="1" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
                                                </svg>
                                                <span className="text-xs md:text-sm font-mono text-white/70 leading-relaxed group-hover/item:text-white transition-colors duration-300">
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
                                        <button type="button" className="w-full px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold shadow-lg hover:bg-emerald-600 transition-colors duration-300">
                                            {tier.buttonText}
                                        </button>
                                    </a>
                            </div>
                        </div>
                    ))}
                </AnimatedSection>

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
