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

    const accommodations = [
        {
            title: "STANDARD QUARTERS",
            subtitle: "Hostel Accommodation",
            price: "₹500",
            duration: "/ NIGHT",
            color: "from-cyan-500/20 to-blue-500/5",
            borderColor: "border-cyan-500/30",
            glowColor: "rgba(6, 182, 212, 0.15)",
            accent: "text-cyan-400",
            features: [
                "Shared Accommodation",
                "Basic Amenities Provided",
                "Proximity to Event Venues",
                "24/7 Campus Security",
                "Complimentary Meals (Mess)"
            ],
            buttonText: "BOOK STANDARD"
        },
        {
            title: "STELLAR SUITES",
            subtitle: "Premium Hotel Stay",
            price: "₹1500",
            duration: "/ NIGHT",
            color: "from-amber-500/20 to-orange-500/5",
            borderColor: "border-amber-500/30",
            glowColor: "rgba(245, 158, 11, 0.15)",
            accent: "text-amber-400",
            features: [
                "Private Air-Conditioned Rooms",
                "Premium Toiletries & Linens",
                "High-Speed Wi-Fi Included",
                "Pick & Drop Facility",
                "Exclusive Breakfast Buffet"
            ],
            buttonText: "BOOK PREMIUM"
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="accommodation"
            className="w-full relative bg-black py-20 px-6 overflow-hidden md:py-32"
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
                <div className="accom-header text-center mb-16 md:mb-24 relative select-none">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500/20" />
                        <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                            REST & RECOVER
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500/20" />
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-[0.12em] text-white"
                        style={{ fontFamily: "'Orbitron', monospace", textShadow: '0 0 30px rgba(16, 185, 129, 0.1)' }}
                    >
                        ACCOMMODATION
                    </h2>

                    <p className="mt-6 text-sm md:text-base font-mono text-white/40 max-w-2xl mx-auto leading-relaxed">
                        Recharge your core systems after a long day of innovation. We offer comfortable stays for all outstation participants.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div
                    ref={cardsRef}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
                >
                    {accommodations.map((tier, index) => (
                        <div
                            key={index}
                            className={`accom-card relative w-full max-w-sm group rounded-2xl border ${tier.borderColor} bg-gradient-to-b ${tier.color} backdrop-blur-md p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2`}
                            style={{
                                boxShadow: `0 10px 40px -10px ${tier.glowColor}, inset 0 0 20px -10px ${tier.glowColor}`
                            }}
                        >
                            {/* Card Hover Glow */}
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Card Content */}
                            <div className="relative z-10">
                                <h3 className={`text-xl font-bold tracking-widest ${tier.accent} mb-1`} style={{ fontFamily: "'Orbitron', monospace" }}>
                                    {tier.title}
                                </h3>
                                <div className="text-xs font-mono text-white/50 tracking-wider mb-8 uppercase">
                                    {tier.subtitle}
                                </div>

                                <div className="flex items-end gap-1 mb-8">
                                    <span className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Orbitron', monospace" }}>
                                        {tier.price}
                                    </span>
                                    <span className="text-xs font-mono text-white/40 mb-2 tracking-widest">
                                        {tier.duration}
                                    </span>
                                </div>

                                <div className="h-px w-full bg-white/10 mb-8" />

                                <ul className="space-y-4 mb-10">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <svg className={`w-5 h-5 ${tier.accent} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm font-mono text-white/70 leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 rounded bg-white/5 border border-white/10 text-xs font-mono tracking-[0.2em] text-white uppercase transition-all duration-300 group-hover:bg-white/10 hover:border-white/30`}
                                >
                                    {tier.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom footnote */}
                <div className="mt-16 text-center">
                    <p className="text-[10px] md:text-xs font-mono text-white/30 tracking-widest max-w-xl mx-auto uppercase leading-relaxed">
                        Prices and availability are subject to change. <br className="md:hidden" />
                        Please book early as slots are limited.
                    </p>
                </div>
            </div>
        </section>
    );
}
