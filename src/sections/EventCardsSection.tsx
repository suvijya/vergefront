import { useState, useRef, useEffect } from 'react';

// Import planet images
import mercury from '../../asset/mercury.webp';
import venus from '../../asset/venus.webp';
import mars from '../../asset/mars.webp';
import jupiter from '../../asset/jupiter.webp';
import saturn from '../../asset/saturn.webp';
import uranus from '../../asset/uranus.webp';
import neptune from '../../asset/neptune.webp';
import pluto from '../../asset/pluto.webp';
import moon from '../../asset/moon.webp';
import sun from '../../asset/sun.webp';
import dathomir from '../../asset/dathomir.webp';
import kashyk from '../../asset/kashyk.webp';
import genosis from '../../asset/genosis.webp';
import naboo from '../../asset/naboo.webp';
import corell from '../../asset/corell.webp';
import tatoon from '../../asset/tatoon.webp';
import chandrila from '../../asset/chandrila.webp';
import ryloth from '../../asset/ryloth.webp';
import earth from '../../asset/earth.png';

interface EventCard {
    id: string;
    category: string;
    title: string;
    subtitle: string;
    prize: string;
    bgColor: string;
    planetImage: string;
    registerUrl: string;
}

const events: EventCard[] = [
    {
        id: 'srmbuilds',
        category: 'HACKATHON',
        title: 'SRM BUILDS 7.0',
        subtitle: '48-Hour Innovation Sprint',
        prize: '₹1,00,000',
        bgColor: '#1e293b',
        planetImage: mercury,
        registerUrl: 'https://unstop.com/hackathon/srm-builds-70',
    },
    {
        id: 'mark1',
        category: 'ROBOTICS',
        title: 'MARK-1',
        subtitle: 'Premier Robotics Challenge',
        prize: '₹75,000',
        bgColor: '#431407',
        planetImage: mars,
        registerUrl: 'https://unstop.com/competition/mark-1',
    },
    {
        id: 'radctf',
        category: 'CYBERSECURITY',
        title: 'RAD CTF 2.0',
        subtitle: 'Capture Flag Challenge',
        prize: '₹50,000',
        bgColor: '#164e63',
        planetImage: neptune,
        registerUrl: 'https://unstop.com/competition/rad-ctf-20',
    },
    {
        id: 'velocity',
        category: 'SPEED',
        title: 'VELOCITY',
        subtitle: 'Speed Coding Showcase',
        prize: 'FREE',
        bgColor: '#064e3b',
        planetImage: venus,
        registerUrl: 'https://unstop.com/competition/velocity',
    },
    {
        id: 'revvd',
        category: 'AUTOMOTIVE',
        title: 'REVVD',
        subtitle: 'The Ultimate Dev Showdown',
        prize: '₹25,000',
        bgColor: '#3b0764',
        planetImage: jupiter,
        registerUrl: 'https://unstop.com/competition/revvd',
    },
    {
        id: 'roboliga',
        category: 'ROBOTICS',
        title: 'ROBOLIGA',
        subtitle: 'Robotics Tournament',
        prize: '₹15,000',
        bgColor: '#4c0519',
        planetImage: saturn,
        registerUrl: 'https://unstop.com/competition/roboliga',
    },
    {
        id: 'innowave',
        category: 'INNOVATION',
        title: 'INNOWAVE',
        subtitle: 'Showcase Your Innovation',
        prize: '₹30,000',
        bgColor: '#1a1a2e',
        planetImage: uranus,
        registerUrl: 'https://unstop.com/competition/innowave',
    },
    {
        id: 'bugbounty',
        category: 'CYBERSECURITY',
        title: 'BUG BOUNTY',
        subtitle: 'Security Research Challenge',
        prize: '₹40,000',
        bgColor: '#0f3460',
        planetImage: pluto,
        registerUrl: 'https://unstop.com/competition/bug-bounty',
    },
    {
        id: 'snapsyntax',
        category: 'CODING',
        title: 'SNAP SYNTAX',
        subtitle: 'Rapid Scripting Contest',
        prize: '₹10,000',
        bgColor: '#2d3a4f',
        planetImage: moon,
        registerUrl: 'https://unstop.com/competition/snap-syntax',
    },
    {
        id: 'codeblitz',
        category: 'CODING',
        title: 'CODE BLITZ',
        subtitle: 'Speed Coding Challenge',
        prize: '₹20,000',
        bgColor: '#4a1942',
        planetImage: sun,
        registerUrl: 'https://unstop.com/competition/code-blitz',
    },
    {
        id: 'artisticaura',
        category: 'DESIGN',
        title: 'ARTISTIC AURA',
        subtitle: 'Creative Design Challenge',
        prize: '₹35,000',
        bgColor: '#1b4332',
        planetImage: dathomir,
        registerUrl: 'https://unstop.com/competition/artistic-aura',
    },
    {
        id: 'murdermystery',
        category: 'FUN',
        title: 'MURDER MYSTERY*',
        subtitle: 'Late Night Mystery Solving',
        prize: '₹45,000',
        bgColor: '#2d1b4e',
        planetImage: kashyk,
        registerUrl: 'https://unstop.com/competition/murder-mystery',
    },
    {
        id: 'astrophotography',
        category: 'PHOTOGRAPHY',
        title: 'ASTROPHOTOGRAPHY*',
        subtitle: 'Night Sky Photography Session',
        prize: '₹50,000',
        bgColor: '#1e3a5f',
        planetImage: genosis,
        registerUrl: 'https://unstop.com/competition/astrophotography',
    },
    {
        id: 'tracert',
        category: 'NETWORKING',
        title: 'TRACERT',
        subtitle: 'Networking & Security Challenge',
        prize: '₹60,000',
        bgColor: '#3d2645',
        planetImage: naboo,
        registerUrl: 'https://unstop.com/competition/tracert',
    },
    {
        id: 'bridgeomania',
        category: 'ENGINEERING',
        title: 'BRIDGE O MANIA',
        subtitle: 'Bridge Building Simulation',
        prize: '₹25,000',
        bgColor: '#4a3728',
        planetImage: corell,
        registerUrl: 'https://unstop.com/competition/bridge-o-mania',
    },
    {
        id: 'biddingwars',
        category: 'STRATEGY',
        title: 'BIDDING WARS*',
        subtitle: 'Auction Strategy Challenge',
        prize: '₹30,000',
        bgColor: '#2b2d42',
        planetImage: tatoon,
        registerUrl: 'https://unstop.com/competition/bidding-wars',
    },
    {
        id: 'memeocracy',
        category: 'CREATIVE',
        title: 'MEMEOCRACY*',
        subtitle: 'Meme Making Competition',
        prize: '₹15,000',
        bgColor: '#1a3c40',
        planetImage: chandrila,
        registerUrl: 'https://unstop.com/competition/memeocracy',
    },
    {
        id: 'designatee',
        category: 'DESIGN',
        title: 'DESIGN-A-TEE*',
        subtitle: 'T-Shirt Design Challenge',
        prize: '₹20,000',
        bgColor: '#3d348b',
        planetImage: ryloth,
        registerUrl: 'https://unstop.com/competition/design-a-tee',
    },
    {
        id: 'kurukshetra',
        category: 'ROBOTICS',
        title: 'KURUKSHETRA*',
        subtitle: 'Robo Tug-of-War Battle',
        prize: '₹10,000',
        bgColor: '#1a1a2e',
        planetImage: earth,
        registerUrl: 'https://unstop.com/competition/kurukshetra',
    },
];

export default function EventCardsSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const posRef = useRef(0);
    const marqueeEvents = [...events, ...events, ...events];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (!isDragging && !isHovered) {
                // Update our tracked position with sub-pixel precision
                posRef.current += 0.7; // Speed (Reduced for smoother flow)

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
        <section id="events" className="min-h-screen w-full bg-black py-24 relative overflow-hidden">
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Section Header */}
            <div className="text-center mb-16 px-8 select-none z-30">
                <div className="text-[9px] md:text-[10px] font-mono text-white/40 tracking-[0.3em] mb-4">
                    EXPLORE MISSIONS
                </div>
                <h2 className="text-2xl md:text-4xl font-mono text-white tracking-wider uppercase">
                    Event Catalog
                </h2>
            </div>

            {/* Continuous Scroll Container */}
            <div className="relative w-full group">
                {/* Gradient Fades for edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

                {/* The actual scrollable container - Adjusted pt to match planet offset */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pt-24 md:pt-32 pb-12"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    style={{ scrollBehavior: 'auto' }}
                >
                    <div className="flex w-max px-4 md:px-[25vw]">
                        {marqueeEvents.map((event, index) => (
                            <div
                                key={`${event.id}-${index}`}
                                className="relative px-2 md:px-4 w-[220px] md:w-[380px] flex-shrink-0"
                                onMouseEnter={() => setHoveredCard(`${event.id}-${index}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Floating Planet Image - Top Center */}
                                <div className={`absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 -translate-y-1/4 z-40 transition-transform duration-500 ${hoveredCard === `${event.id}-${index}` ? '-translate-y-4 scale-110' : ''
                                    }`}>
                                    <img
                                        src={event.planetImage}
                                        alt="Planet"
                                        className="w-24 h-24 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                    />
                                </div>

                                {/* Card */}
                                <div
                                    className={`relative aspect-[3/4.2] border border-white overflow-hidden transition-all duration-500 rounded-lg ${hoveredCard === `${event.id}-${index}` ? 'border-white/100 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-[1.03]' : ''
                                        }`}
                                    style={{
                                        backgroundColor: event.bgColor,
                                        background: `linear-gradient(135deg, ${event.bgColor}, #000000)`
                                    }}
                                >
                                    {/* Content */}
                                    <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-between">
                                        <div className="flex justify-between items-start mt-4 md:mt-0">
                                            <span className="text-[8px] md:text-[10px] font-mono text-white/50 tracking-wide md:tracking-widest uppercase">
                                                {event.category}
                                            </span>
                                            <div className="w-1 h-1 rounded-full bg-white/30" />
                                        </div>

                                        <div>
                                            <h3 className="text-base md:text-2xl font-bold text-white mb-2 uppercase tracking-tight leading-tight">
                                                {event.title}
                                            </h3>
                                            <p className="text-[9px] md:text-xs font-mono text-white/50 mb-4 h-10 md:h-12 overflow-hidden leading-relaxed">
                                                {event.subtitle}
                                            </p>

                                            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/5 border border-white/10 mb-3 md:mb-4 rounded-md">
                                                <span className="text-[8px] md:text-[10px] font-mono text-amber-200 uppercase tracking-widest">
                                                    PRIZE: {event.prize}
                                                </span>
                                            </div>

                                            <a
                                                href={event.registerUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full py-2 md:py-3 bg-white text-black text-center text-[8px] md:text-[10px] font-bold font-mono tracking-widest hover:bg-white/80 transition-all uppercase rounded-md shadow-[0_4px_0_rgb(200,200,200)] active:translate-y-[2px] active:shadow-none"
                                            >
                                                Secure Access →
                                            </a>
                                        </div>
                                    </div>

                                    {/* Background decorative elements */}
                                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12 select-none">
                <button className="px-6 py-3 md:px-10 md:py-4 border border-white/20 text-white/60 font-mono text-[9px] md:text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase">
                    [ Access Collective Catalog ]
                </button>
            </div>
        </section>
    );
}
