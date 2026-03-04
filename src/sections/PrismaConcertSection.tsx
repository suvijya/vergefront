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
                <div className="absolute inset-0 bg-black/10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-20" />
            </div>

            {/* Content Container */}
            <div
                ref={contentRef}
                className="prisma-content relative z-30 w-full flex flex-col items-start text-left"
            >
                <h2
                    className="text-3xl md:text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4 uppercase"
                    style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}
                >
                    PRISMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NIGHT</span>
                </h2>

                <p className="text-xs md:text-sm font-mono text-white/80 max-w-xl leading-relaxed mb-8 md:mb-10 lg:text-base">
                    Experience the ultimate musical extravaganza at Verge Techfest.
                    Join us for an unforgettable night of electrifying beats and pure energy!
                </p>
            </div>

            <div className="relative z-30 w-full flex justify-center mt-auto pt-10">
                <a
                    href="#accommodation"
                    className="block w-[200px] md:w-[250px] py-3 md:py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 text-center text-xs md:text-sm font-bold font-mono tracking-widest hover:bg-white/20 hover:border-white/40 transition-all uppercase rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] active:translate-y-[2px]"
                >
                    Get Tickets →
                </a>
            </div>
        </section>
    );
}
