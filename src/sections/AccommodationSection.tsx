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
            title: "BASE CAMP",
            subtitle: "Accommodation Package",
            price: "₹999",
            duration: "",
            color: "from-cyan-500/20 to-blue-500/5",
            borderColor: "border-cyan-500/30",
            glowColor: "rgba(6, 182, 212, 0.15)",
            accent: "text-cyan-400",
            features: [
                "2 Days Duration",
                "1 Bed with Pillow & Bedsheet",
                "₹499 Without Meals",
                "₹999 With 4 Meals Included",
                "Valid Per Person"
            ],
            buttonText: "BOOK STAY",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        },
        {
            title: "THE ULTIMATE PASS",
            subtitle: "Stay + Concerts Combo",
            price: "₹1999",
            duration: "SL",
            color: "from-amber-500/20 to-orange-500/5",
            borderColor: "border-amber-500/30",
            glowColor: "rgba(245, 158, 11, 0.15)",
            accent: "text-amber-400",
            features: [
                "2 Days Accommodation",
                "4 Meals Included",
                "1 Bed with Pillow & Bedsheet",
                "Day 1 Cultural Concert Pass",
                "Day 2 Main Concert Pass"
            ],
            buttonText: "BOOK COMBO",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        },
        {
            title: "CONCERT PASSES",
            subtitle: "Festival Entry",
            price: "₹499+",
            duration: "SL",
            color: "from-purple-500/20 to-pink-500/5",
            borderColor: "border-purple-500/30",
            glowColor: "rgba(168, 85, 247, 0.15)",
            accent: "text-purple-400",
            features: [
                "Day 1 Cultural Night: ₹499",
                "Day 2 Main Event: ₹599",
                "Epic Headline Performances",
                "Access to Food Stalls",
                "Non-transferable"
            ],
            buttonText: "BUY TICKETS",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSf..." // REPLACE WITH ACTUAL LINK
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="accommodation"
            className="w-full relative bg-black py-12 px-4 overflow-hidden md:py-32 md:px-6"
        >
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

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="accom-header text-center mb-10 md:mb-16 relative select-none">
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
                    className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 md:gap-8"
                >
                    {packages.map((tier, index) => (
                        <div
                            key={index}
                            className={`accom-card relative w-[90vw] max-w-[320px] md:max-w-none md:w-[350px] group rounded-xl md:rounded-2xl border ${tier.borderColor} bg-gradient-to-b ${tier.color} backdrop-blur-md p-4 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2`}
                            style={{
                                boxShadow: `0 10px 40px -10px ${tier.glowColor}, inset 0 0 20px -10px ${tier.glowColor}`
                            }}
                        >
                            {/* Card Hover Glow */}
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Card Content */}
                            <div className="relative z-10">
                                <h3 className={`text-base md:text-xl font-bold tracking-wider md:tracking-widest ${tier.accent} mb-0.5`} style={{ fontFamily: "'Orbitron', monospace" }}>
                                    {tier.title}
                                </h3>
                                <div className="text-[10px] md:text-xs font-mono text-white/50 tracking-wider mb-4 md:mb-8 uppercase">
                                    {tier.subtitle}
                                </div>

                                <div className="flex items-baseline gap-2 mb-4 md:mb-8">
                                    <span className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "'Orbitron', monospace" }}>
                                        {tier.price}
                                    </span>
                                    <span className="text-xs md:text-sm font-mono text-emerald-400 font-bold mb-1 md:mb-2 tracking-widest">
                                        {tier.duration}
                                    </span>
                                </div>

                                <div className="h-px w-full bg-white/10 mb-4 md:mb-8" />

                                <ul className="space-y-2 md:space-y-4 mb-5 md:mb-10">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2 md:gap-3">
                                            <svg className={`w-4 h-4 md:w-5 md:h-5 ${tier.accent} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-xs md:text-sm font-mono text-white/70 leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={tier.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <button
                                        className={`w-full py-3 md:py-4 rounded bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono tracking-[0.15em] md:tracking-[0.2em] text-white uppercase transition-all duration-300 group-hover:bg-white/10 hover:border-white/30`}
                                    >
                                        {tier.buttonText}
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom footnote */}
                <div className="mt-8 md:mt-16 text-center">
                    <p className="text-[10px] md:text-xs font-mono text-white/30 tracking-widest max-w-xl mx-auto uppercase leading-relaxed">
                        Prices and availability are subject to change. <br className="md:hidden" />
                        Please book early as slots are limited.
                    </p>
                </div>
            </div>
        </section>
    );
}
