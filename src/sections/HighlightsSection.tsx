import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import revvd from '../assets/logos/revvd.webp';
import roboliga from '../assets/logos/roboliga.webp';
import root from '../assets/logos/root.webp';
import srmbuilds from '../assets/logos/srmbuilds.webp';
import codeblitz from '../assets/logos/codeblitz.webp';
import bugbounty from '../assets/logos/bugbounty.webp';
import tracert from '../assets/logos/tracert.webp';

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Placeholder images for past events. User can replace these with actual event pictures.
    const highlightImages = [
        srmbuilds,
        revvd,
        roboliga,
        root,
        codeblitz,
        bugbounty,
        tracert,
    ];

    // Duplicate the array to create a seamless infinite scroll effect
    const duplicatedImages = [...highlightImages, ...highlightImages];

    return (
        <section
            ref={sectionRef}
            id="highlights"
            className="w-full relative bg-black pt-20 pb-10 overflow-hidden md:pt-32"
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 60%)',
                        filter: 'blur(50px)'
                    }}
                />
            </div>

            <div className="max-w-[100vw] mx-auto relative z-10">
                {/* Header */}
                <div className="highlights-header text-center mb-12 md:mb-20 px-6 select-none relative z-20">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/20" />
                        <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                            FLASHBACKS
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/20" />
                    </div>

                    <h2
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
                        style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 40px rgba(0, 200, 255, 0.1)' }}
                    >
                        2025 HIGHLIGHTS
                    </h2>

                    <p className="mt-4 text-[10px] md:text-xs font-mono text-white/40 tracking-wider max-w-2xl mx-auto uppercase">
                        Glimpses from our previous chapter
                    </p>
                </div>

                {/* Infinite Scrolling Marquee Container */}
                <div className="relative w-full overflow-hidden py-10">
                    {/* Shadow fades on edges for seamless look */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-40 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-40 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                    <div
                        className="flex items-center w-maxHighlights flex-nowrap gap-4 md:gap-10 hover:pause-animation"
                        style={{
                            display: 'flex',
                            width: 'max-content',
                            animation: 'infiniteScroll 25s linear infinite'
                        }}
                    >
                        {duplicatedImages.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="group relative w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-xl md:rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 transition-transform duration-500 hover:scale-[1.03] backdrop-blur-sm cursor-pointer"
                            >
                                {/* Glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                                {/* Image Fill */}
                                <img
                                    src={imgSrc}
                                    alt="Verge 2025 Highlight"
                                    className="w-full h-full object-cover md:object-contain p-6 md:p-12 opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 scale-95 group-hover:scale-100"
                                />

                                {/* Label corner */}
                                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-cyan-300 tracking-widest rounded uppercase">
                                        MEMORY
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes infiniteScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .hover\\:pause-animation:hover {
                        animation-play-state: paused !important;
                    }
                `}</style>

            </div>
        </section>
    );
}
