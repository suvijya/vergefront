import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../asset/verge2025/DSC00476.webp';
import img2 from '../../asset/verge2025/DSC00491.webp';
import img3 from '../../asset/verge2025/DSC_0137.webp';
import img4 from '../../asset/verge2025/DSC_0934.webp';
import img5 from '../../asset/verge2025/DSC_0996.webp';
import img6 from '../../asset/verge2025/MSC03140.webp';
import img7 from '../../asset/verge2025/MSC03184.webp';

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".highlights-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".highlights-header",
                        start: "top 80%",
                    }
                }
            );

            // Parallax for Row 1
            gsap.to(row1Ref.current, {
                xPercent: -10, // Moves left as you scroll down
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 100%",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            // Parallax for Row 2
            gsap.to(row2Ref.current, {
                xPercent: 10, // Moves right as you scroll down
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 100%",
                    end: "bottom top",
                    scrub: 1,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Split into two sets for the two rows
    const row1Group = [img1, img2, img3, img4];
    const row2Group = [img5, img6, img7, img1];

    // Duplicate the array to create a seamless infinite scroll effect
    const duplicatedRow1 = [...row1Group, ...row1Group, ...row1Group, ...row1Group]; // Quadruple to ensure enough width
    const duplicatedRow2 = [...row2Group, ...row2Group, ...row2Group, ...row2Group];

    return (
        <section
            ref={sectionRef}
            id="highlights"
            className="w-full relative bg-black pt-20 pb-20 overflow-hidden md:pt-32"
        >
            {/* Background glowing elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(0, 255, 200, 0.05) 0%, transparent 60%)',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="w-full relative z-10">
                {/* Header */}
                <div className="highlights-header text-center mb-16 md:mb-24 px-6 select-none relative z-20">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
                        <span className="text-[10px] md:text-xs font-mono text-cyan-400 tracking-[0.5em] animate-pulse">
                            [ SYSTEM LOGS ]
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
                    </div>

                    {/* Glitch Headline */}
                    <div className="relative inline-block group">
                        <h2
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase relative z-10"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            2025 HIGHLIGHTS
                        </h2>
                        {/* Glitch pseudo-elements simulated with absolute positioning */}
                        <h2
                            className="absolute top-0 left-0 w-full text-4xl md:text-6xl lg:text-7xl font-black text-cyan-400 tracking-tighter uppercase opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 -translate-x-[2px] translate-y-[2px] z-0 mix-blend-screen"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            2025 HIGHLIGHTS
                        </h2>
                        <h2
                            className="absolute top-0 left-0 w-full text-4xl md:text-6xl lg:text-7xl font-black text-pink-500 tracking-tighter uppercase opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 translate-x-[2px] -translate-y-[2px] z-0 mix-blend-screen"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            2025 HIGHLIGHTS
                        </h2>
                    </div>

                    <p className="mt-6 text-[10px] md:text-xs font-mono text-white/50 tracking-[0.3em] max-w-2xl mx-auto uppercase">
                        Decrypted memories from the previous chapter
                    </p>
                </div>

                {/* 3D Cyberpunk Marquee Container */}
                <div className="relative w-full overflow-visible py-10" style={{ perspective: '1200px' }}>
                    {/* Shadow fades on edges to blend with background */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-64 z-30 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-64 z-30 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

                    {/* Rotated 3D Space */}
                    <div
                        className="w-[120vw] -ml-[10vw]"
                        style={{
                            transform: 'rotateX(20deg) rotateZ(-3deg)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* ROW 1 - Scrolling Left */}
                        <div ref={row1Ref} className="will-change-transform mb-6 md:mb-10 w-max">
                            <div className="flex items-center gap-6 md:gap-10 hover:pause-animation" style={{ animation: 'infiniteScrollLeft 30s linear infinite' }}>
                                {duplicatedRow1.map((imgSrc, index) => (
                                    <HighlightCard key={`row1-${index}`} imgSrc={imgSrc} index={index} direction="up" />
                                ))}
                            </div>
                        </div>

                        {/* ROW 2 - Scrolling Right */}
                        <div ref={row2Ref} className="will-change-transform w-max" style={{ transform: 'translateX(-20%)' }}>
                            <div className="flex items-center gap-6 md:gap-10 hover:pause-animation" style={{ animation: 'infiniteScrollRight 35s linear infinite' }}>
                                {duplicatedRow2.map((imgSrc, index) => (
                                    <HighlightCard key={`row2-${index}`} imgSrc={imgSrc} index={index} direction="down" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes infiniteScrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-25%); } /* Since we quadrupled the array */
                    }
                    @keyframes infiniteScrollRight {
                        0% { transform: translateX(-25%); }
                        100% { transform: translateX(0); }
                    }
                    .hover\\:pause-animation:hover {
                        animation-play-state: paused !important;
                    }

                    @keyframes glitch-1 {
                        0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 2px); }
                        20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -2px); }
                        40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
                        60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
                        80% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 2px); }
                        100% { clip-path: inset(30% 0 50% 0); transform: translate(2px, -2px); }
                    }

                    @keyframes glitch-2 {
                        0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -2px); }
                        20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
                        40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, -2px); }
                        60% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 2px); }
                        80% { clip-path: inset(20% 0 50% 0); transform: translate(2px, -2px); }
                        100% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 2px); }
                    }
                `}</style>
            </div>
        </section>
    );
}

// Child component for Individual Highlight Card
function HighlightCard({ imgSrc, index, direction }: { imgSrc: string, index: number, direction: 'up' | 'down' }) {
    return (
        <div
            className="group relative w-[220px] h-[160px] md:w-[400px] md:h-[260px] rounded-xl bg-black border border-white/10 flex-shrink-0 transition-all duration-500 hover:scale-[1.05] hover:z-50 cursor-pointer"
            style={{
                transform: `rotateZ(${index % 2 === 0 ? (direction === 'up' ? -2 : 2) : 0}deg)`,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.8)'
            }}
        >
            {/* Cyberpunk Glow Shadow underlying the card on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none translate-y-2" />

            <div className="absolute inset-[1px] rounded-xl overflow-hidden bg-black z-10">
                {/* Image in full color and brightness by default */}
                <img
                    src={imgSrc}
                    alt={`Verge 2025 Highlight ${index}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />

                {/* Scanline overlay */}
                <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 group-hover:opacity-10"
                    style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)', backgroundSize: '100% 4px' }}
                />

                {/* Glitch Overlay Effect on hover */}
                <div className="absolute inset-0 bg-cyan-400/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                {/* Labels */}
                <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="px-2 py-1 bg-black/80 backdrop-blur-md border border-cyan-500/50 text-[10px] font-mono text-cyan-400 tracking-widest rounded uppercase">
                        SYS.MEM.{index.toString().padStart(3, '0')}
                    </span>
                </div>

                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
                    <span className="text-[8px] font-mono text-white/70 tracking-widest uppercase">
                        RESTORED
                    </span>
                </div>
            </div>

            {/* Edge highlight */}
            <div className="absolute inset-0 border-[2px] border-cyan-400/0 group-hover:border-cyan-400/50 rounded-xl pointer-events-none z-20 transition-colors duration-300" />
        </div>
    );
}
