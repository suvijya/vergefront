import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ankitImg from '../../asset/ankit_cropped_.png';

gsap.registerPlugin(ScrollTrigger);

export default function PrismaConcertSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".prisma-content",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(
                ".prisma-bg",
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 100%",
                        scrub: 1
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="prisma-concert"
            className="w-full relative min-h-[80vh] md:min-h-[100vh] flex flex-col justify-between pt-24 md:pt-32 pb-20 px-8 md:px-16 overflow-hidden"
        >
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <div
                    className="prisma-bg absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ankitImg})` }}
                />
                {/* Gradient Overlays for readability and blending */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-20" />
            </div>

            {/* Content Container */}
            <div
                ref={contentRef}
                className="prisma-content relative z-30 w-full flex flex-col items-start text-left"
            >
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                    <span className="text-xs md:text-sm font-mono text-purple-300 tracking-widest uppercase">
                        Main Event • Day 2
                    </span>
                </div>

                <h2
                    className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-4 uppercase"
                    style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}
                >
                    PRISMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NIGHT</span>
                </h2>

                <p className="text-xs md:text-sm font-mono text-white/80 max-w-xl leading-relaxed mb-8 md:mb-10 lg:text-base">
                    Experience the ultimate musical extravaganza at Verge Techfest.
                    Join us for an unforgettable night of electrifying beats and pure energy!
                </p>
            </div>

            {/* Button Container */}
            <div className="relative z-30 w-full flex justify-center mt-auto pt-10">
                <a
                    href="#accommodation"
                    className="group relative inline-flex items-center justify-center"
                >
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur transition duration-500 group-hover:opacity-100" />
                    <button className="relative px-8 py-4 md:px-12 md:py-5 bg-black rounded-lg border border-white/10 text-white font-mono text-sm md:text-base tracking-[0.2em] hover:bg-black/80 transition-colors uppercase font-bold">
                        Book Passes Now
                    </button>
                </a>
            </div>
        </section>
    );
}
