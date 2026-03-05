import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ankitImg from '../../asset/ankit_cropped_.png';

gsap.registerPlugin(ScrollTrigger);

export default function PrismaConcertSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [showModal, setShowModal] = useState(false);

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
                <button
                    onClick={(e) => { e.preventDefault(); setShowModal(true); }}
                    className="block w-[200px] md:w-[250px] py-3 md:py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 text-center text-xs md:text-sm font-bold font-mono tracking-widest hover:bg-white/20 hover:border-white/40 transition-all uppercase rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] active:translate-y-[2px]"
                >
                    Get Tickets →
                </button>
            </div>

            {/* Ticket Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative w-full max-w-4xl lg:max-w-5xl h-[85vh] md:h-[600px] bg-[#0a0a0c] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 animate-in fade-in zoom-in duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/30"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Left Side: Danny (Day 2) */}
                        <div className="relative flex-1 flex flex-col justify-end p-8 md:p-12 overflow-hidden group">
                            {/* Background Image Setup */}
                            <div className="absolute inset-0 z-0">
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                                    style={{ backgroundImage: `url(${ankitImg})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0845]/90 via-[#2a0845]/60 to-[#2a0845]/10 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#140026] via-[#140026]/80 to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                    <span className="text-[10px] md:text-[11px] font-mono font-bold text-white/70 tracking-[0.2em]">DAY 2</span>
                                </div>
                                <h3
                                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-1 mt-1 leading-none"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                >
                                    DANNY
                                </h3>
                                <p className="text-[9px] md:text-[10px] font-mono text-purple-200/50 tracking-[0.3em] uppercase mb-8 md:mb-10 font-bold">
                                    BOLLYWOOD NIGHT
                                </p>
                                <button className="px-6 py-2.5 bg-gradient-to-r from-purple-800/20 to-purple-900/20 hover:from-purple-600/30 hover:to-purple-800/30 border border-purple-500/40 hover:border-purple-400 rounded text-[10px] md:text-xs font-mono font-bold text-purple-200 tracking-[0.2em] transition-all flex items-center gap-3">
                                    GET TICKETS <span>→</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Sunanda Sharma (Day 1) */}
                        <div className="relative flex-1 flex flex-col justify-end p-8 md:p-12 overflow-hidden group border-t md:border-t-0 md:border-l border-white/5">
                            {/* Background Image Setup */}
                            <div className="absolute inset-0 z-0">
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 grayscale"
                                    style={{ backgroundImage: `url(${ankitImg})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                    <span className="text-[10px] md:text-[11px] font-mono font-bold text-white/70 tracking-[0.2em]">DAY 1</span>
                                </div>
                                <h3
                                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-1 mt-1 leading-[0.9]"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                >
                                    SUNANDA<br />SHARMA
                                </h3>
                                <p className="text-[9px] md:text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase mb-8 md:mb-10 font-bold">
                                    LOVE NIGHT
                                </p>
                                <button className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded text-[10px] md:text-xs font-mono font-bold text-white/70 hover:text-white tracking-[0.2em] transition-all flex items-center gap-3">
                                    GET TICKETS <span>→</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
