import { useState, useRef, useEffect } from 'react';
import spaceback from '../assets/spaceback.png';
import chandan from '../assets/chandan_jha.png';
import { ExternalLink } from 'lucide-react';

interface Speaker {
    id: string;
    name: string;
    initials: string;
    role: string;
    affiliation: string;
    topic: string;
    topicTag: string;
    image?: string;
    linkedin?: string;
}

const speakers: Speaker[] = [
    {
        id: 'SP-01',
        name: 'DR. ARIA CHEN',
        initials: 'AC',
        role: 'Chief AI Researcher',
        affiliation: 'QUANTUM LABS',
        topic: 'The Singularity Equation',
        topicTag: 'AI',
    },
    {
        id: 'SP-02',
        name: 'MARCUS WOLF',
        initials: 'MW',
        role: 'CTO',
        affiliation: 'STELLAR DYNAMICS',
        topic: 'Systems That Scale to a Billion',
        topicTag: 'ARCHITECTURE',
    },
    {
        id: 'SP-03',
        name: 'PRIYA SHARMA',
        initials: 'PS',
        role: 'Founder & CEO',
        affiliation: 'NOVA NETWORKS',
        topic: 'Zero to IPO: Startup Survival',
        topicTag: 'STARTUP',
    },
    {
        id: 'SP-04',
        name: 'KAI NAKAMURA',
        initials: 'KN',
        role: 'Security Lead',
        affiliation: 'CORTEX SECURITY',
        topic: 'Modern Offensive Security',
        topicTag: 'CYBER',
    },
    {
        id: 'SP-05',
        name: 'ELENA VOSS',
        initials: 'EV',
        role: 'VP of Engineering',
        affiliation: 'AETHER SYSTEMS',
        topic: 'Edge Computing & Beyond',
        topicTag: 'CLOUD',
    },
    {
        id: 'SP-06',
        name: 'RAJAN MEHTA',
        initials: 'RM',
        role: 'Robotics Director',
        affiliation: 'PULSE ENERGY',
        topic: 'Autonomy at Scale',
        topicTag: 'ROBOTICS',
    },
    {
        id: 'SP-07',
        name: 'MR. CHANDAN JHA',
        initials: 'CJ',
        role: 'ASSOCIATE VP at GFG',
        affiliation: 'GFG',
        topic: 'Building at Scale',
        topicTag: 'TECH',
        image: chandan,
        linkedin: 'https://linkedin.com',
    },
];

export default function SpeakersSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const posRef = useRef(0);
    // Triple the speakers for infinite loop illusion
    const marqueeSpeakers = [...speakers, ...speakers, ...speakers];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (!isDragging && !isHovered) {
                // Update our tracked position with sub-pixel precision
                // Scrolling opposite direction (left) naturally
                posRef.current += 0.5;

                // Infinite loop logic
                const setWidth = container.scrollWidth / 3;
                if (posRef.current >= setWidth * 2) {
                    posRef.current -= setWidth;
                }

                // Sync the actual scrollLeft
                container.scrollLeft = posRef.current;
            } else {
                // Keep posRef in sync with manual scrolling
                posRef.current = container.scrollLeft;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging, isHovered]);

    // Drag handlers
    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        if (scrollContainerRef.current) {
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
        }
    };

    const onMouseLeave = () => {
        setIsDragging(false);
        setIsHovered(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="speakers" className="w-full bg-black py-24 relative overflow-hidden">
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.05) 0%, transparent 50%)',
                }}
            />

            {/* Header */}
            <div className="text-center mb-16 px-8 select-none relative z-30">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                        KEYNOTES & TALKS
                    </span>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/20" />
                </div>
                <h2
                    className="text-3xl md:text-4xl font-bold tracking-[0.12em] text-white"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 30px rgba(0,200,255,0.08)',
                    }}
                >
                    SPEAKERS
                </h2>
                <p className="text-[9px] font-mono text-white/25 tracking-[0.3em] mt-2">
                    {speakers.length} CONFIRMED
                </p>
            </div>

            {/* Continuous Scroll Container */}
            <div className="relative w-full group">
                {/* Gradient Fades for edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-12 pt-4"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    style={{ scrollBehavior: 'auto' }}
                >
                    <div className="flex w-max px-4 md:px-[25vw] gap-6 md:gap-8">
                        {marqueeSpeakers.map((speaker, index) => (
                            <div
                                key={`${speaker.id}-${index}`}
                                className="relative w-[220px] md:w-[320px] aspect-[3/4.2] md:aspect-auto md:h-[400px] flex-shrink-0"
                                onMouseEnter={() => setHoveredCard(`${speaker.id}-${index}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`relative group h-full overflow-hidden rounded-xl border border-white transition-all duration-500 ${hoveredCard === `${speaker.id}-${index}` ? 'scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)]' : ''
                                        }`}
                                >
                                    {/* Background Image - Spaceback */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${spaceback})` }}
                                    />

                                    {/* LinkedIn Redirect Icon - Top Right */}
                                    <a
                                        href={speaker.linkedin || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-4 right-4 z-30 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/70 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 pointer-events-auto"
                                    >
                                        <ExternalLink size={20} />
                                    </a>

                                    {/* Overlay Gradient for readability at bottom */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${hoveredCard === `${speaker.id}-${index}` ? 'opacity-80' : 'opacity-60'
                                        }`} />

                                    <div className="relative h-full flex flex-col justify-end items-start p-6 z-10">
                                        {/* Speaker Image - Maximized Size */}
                                        <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end pointer-events-none overflow-hidden">
                                            {speaker.image ? (
                                                <div className={`relative w-full h-full transition-transform duration-700 ${hoveredCard === `${speaker.id}-${index}` ? 'scale-105 translate-x-4' : 'scale-100 translate-x-0'
                                                    }`}>
                                                    <img
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        className="w-full h-full object-contain object-bottom drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                                                    />
                                                </div>
                                            ) : (
                                                // Minimal Fallback
                                                <div className="w-full h-full flex items-center justify-center opacity-10">
                                                    <span className="text-9xl font-bold text-white font-mono select-none">
                                                        {speaker.initials}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Info - Bottom Left */}
                                        <div className="relative z-20 transform transition-transform duration-500 translate-y-0 max-w-[80%]">
                                            <h3
                                                className="text-base md:text-2xl font-bold text-white tracking-[0.05em] mb-1 group-hover:text-cyan-100 transition-colors drop-shadow-md text-left"
                                                style={{ fontFamily: "'Orbitron', monospace" }}
                                            >
                                                {speaker.name}
                                            </h3>
                                            <p className="text-[9px] md:text-xs font-mono text-cyan-400 tracking-wider uppercase drop-shadow-sm text-left">
                                                {speaker.role}
                                            </p>
                                        </div>

                                        {/* Corner accents */}
                                        <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors duration-300 ${hoveredCard === `${speaker.id}-${index}` ? 'border-cyan-400' : 'border-white/20'
                                            }`} />
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-colors duration-300 ${hoveredCard === `${speaker.id}-${index}` ? 'border-cyan-400' : 'border-white/20'
                                            }`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="flex items-center justify-center gap-3 mt-10">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/8" />
                <span className="text-[7px] font-mono text-white/15 tracking-[0.5em]">
                    MORE SPEAKERS COMING SOON
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/8" />
            </div>
        </section>
    );
}
