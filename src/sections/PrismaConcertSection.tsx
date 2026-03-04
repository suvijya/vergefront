import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';

import ankitImg from '../../asset/ankit_cropped_.png';

gsap.registerPlugin(ScrollTrigger);

const artists = [
    {
        name: 'Sunanda\u00a0Sharma',
        subtitle: 'Love Night',
        day: 'Day 1',
        hoverClass: 'group-hover:from-cyan-950/90',
        borderHover: 'hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]',
        dotColor: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]',
        textColor: 'text-cyan-400',
        img: ankitImg,
    },
    {
        name: 'Danny',
        subtitle: 'Bollywood Night',
        day: 'Day 2',
        hoverClass: 'group-hover:from-purple-950/90',
        borderHover: 'hover:border-purple-400/60 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
        dotColor: 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
        textColor: 'text-purple-400',
        img: ankitImg,
    },
];

export default function PrismaConcertSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const touchStartX = useRef<number>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".prisma-content",
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
                }
            );
            gsap.fromTo(
                ".prisma-bg",
                { scale: 1.1 },
                {
                    scale: 1, duration: 2, ease: "power2.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 100%", scrub: 1 }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const toggleModal = () => { setIsModalOpen(!isModalOpen); setActiveSlide(0); };

    const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            if (delta > 0) setActiveSlide(s => Math.min(s + 1, artists.length - 1));
            else setActiveSlide(s => Math.max(s - 1, 0));
        }
    };

    return (
        <section ref={sectionRef} id="prisma-concert"
            className="w-full relative min-h-[80vh] md:min-h-[100vh] flex flex-col justify-between pt-24 md:pt-32 pb-20 px-8 md:px-16 overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <div className="prisma-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ankitImg})` }} />
                <div className="absolute inset-0 bg-black/10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-20" />
            </div>

            <div ref={contentRef} className="prisma-content relative z-30 w-full flex flex-col items-start text-left">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4 uppercase"
                    style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}>
                    PRISMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NIGHT</span>
                </h2>
                <p className="text-xs md:text-sm font-mono text-white/80 max-w-xl leading-relaxed mb-8 md:mb-10 lg:text-base">
                    Experience the ultimate musical extravaganza at Verge Techfest.
                    Join us for an unforgettable night of electrifying beats and pure energy!
                </p>
            </div>

            <div className="relative z-30 w-full flex justify-center mt-auto pt-10">
                <button onClick={toggleModal}
                    className="block w-[200px] md:w-[250px] py-3 md:py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 text-center text-xs md:text-sm font-bold font-mono tracking-widest hover:bg-white/20 hover:border-white/40 transition-all uppercase rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] active:translate-y-[2px]">
                    Get Tickets →
                </button>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                        onClick={toggleModal}>
                        <motion.div
                            initial={{ scale: 0.95, y: 10, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 10, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-2xl bg-black border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                            onClick={(e) => e.stopPropagation()}>

                            {/* Close */}
                            <button onClick={toggleModal}
                                className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono">✕</button>

                            {/* ── MOBILE: Swipeable Carousel ── */}
                            <div className="md:hidden relative overflow-hidden"
                                onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                                <div className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                                    {artists.map((artist, i) => (
                                        <div key={i} className="w-full flex-shrink-0 relative overflow-hidden flex items-end p-6 min-h-[440px]">
                                            <div className="absolute inset-0 bg-cover bg-center opacity-70"
                                                style={{ backgroundImage: `url(${artist.img})` }} />
                                            <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent`} />
                                            <div className="relative z-10 w-full">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${artist.dotColor} animate-pulse`} />
                                                    <span className={`text-[10px] font-mono tracking-widest ${artist.textColor} uppercase`}>{artist.day}</span>
                                                </div>
                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                                    {artist.name}
                                                </h3>
                                                <p className="text-white/60 font-mono text-xs tracking-[0.2em] uppercase mb-5">{artist.subtitle}</p>
                                                <button className={`w-[140px] py-2.5 bg-white/10 text-white backdrop-blur-md border border-white/20 text-[10px] font-bold font-mono tracking-widest ${artist.borderHover} transition-all uppercase rounded-md`}>
                                                    Get Tickets →
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrows */}
                                <button onClick={() => setActiveSlide(s => Math.max(s - 1, 0))}
                                    disabled={activeSlide === 0}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white text-xl disabled:opacity-20 transition-all">‹</button>
                                <button onClick={() => setActiveSlide(s => Math.min(s + 1, artists.length - 1))}
                                    disabled={activeSlide === artists.length - 1}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white text-xl disabled:opacity-20 transition-all">›</button>

                                {/* Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {artists.map((_, i) => (
                                        <button key={i} onClick={() => setActiveSlide(i)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-white scale-125' : 'bg-white/30'}`} />
                                    ))}
                                </div>
                            </div>

                            {/* ── DESKTOP: Side-by-side ── */}
                            <div className="hidden md:flex flex-row">
                                <div className="flex-1 relative group cursor-pointer overflow-hidden border-r border-white/10 flex items-end p-10 min-h-[500px]">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                                        style={{ backgroundImage: `url(${ankitImg})` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent transition-opacity duration-500 group-hover:from-cyan-950/90" />
                                    <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                                            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">Day 1</span>
                                        </div>
                                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>Sunanda<br />Sharma</h3>
                                        <p className="text-white/60 font-mono text-xs tracking-[0.2em] uppercase mb-6">Love Night</p>
                                        <button className="w-[160px] py-2.5 bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs font-bold font-mono tracking-widest hover:bg-white/20 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all uppercase rounded-md">Get Tickets →</button>
                                    </div>
                                </div>
                                <div className="flex-1 relative group cursor-pointer overflow-hidden flex items-end p-10 min-h-[500px]">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                                        style={{ backgroundImage: `url(${ankitImg})` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent transition-opacity duration-500 group-hover:from-purple-950/90" />
                                    <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse" />
                                            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">Day 2</span>
                                        </div>
                                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>Danny</h3>
                                        <p className="text-white/60 font-mono text-xs tracking-[0.2em] uppercase mb-6">Bollywood Night</p>
                                        <button className="w-[160px] py-2.5 bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs font-bold font-mono tracking-widest hover:bg-white/20 hover:border-purple-400/60 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all uppercase rounded-md">Get Tickets →</button>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}