import { useState } from 'react';

// Import planet images
import mercury from '../../asset/mercury.png';
import venus from '../../asset/venus.png';
import mars from '../../asset/mars.png';
import jupiter from '../../asset/jupiter.png';
import saturn from '../../asset/saturn.png';
import uranus from '../../asset/uranus.png';
import neptune from '../../asset/neptune.png';
import pluto from '../../asset/pluto.png';
import moon from '../../asset/moon.png';
import sun from '../../asset/sun.png';
import dathomir from '../../asset/dathomir.png';
import kashyk from '../../asset/kashyk.png';
import genosis from '../../asset/genosis.png';
import naboo from '../../asset/naboo.png';
import corell from '../../asset/corell.png';
import tatoon from '../../asset/tatoon.png';
import chandrila from '../../asset/chandrila.png';
import ryloth from '../../asset/ryloth.png';
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
        id: 'hackathon',
        category: 'HACKATHON',
        title: 'CODE QUEST',
        subtitle: '48-Hour Innovation Sprint',
        prize: '₹1,00,000',
        bgColor: '#1e293b',
        planetImage: mercury,
        registerUrl: 'https://unstop.com/hackathon/code-quest',
    },
    {
        id: 'robotics',
        category: 'ROBOTICS',
        title: 'ROBO WARS',
        subtitle: 'Battle of the Machines',
        prize: '₹75,000',
        bgColor: '#431407',
        planetImage: mars,
        registerUrl: 'https://unstop.com/competition/robo-wars',
    },
    {
        id: 'gaming',
        category: 'ESPORTS',
        title: 'ARENA CLASH',
        subtitle: 'Valorant & FIFA Championship',
        prize: '₹50,000',
        bgColor: '#164e63',
        planetImage: neptune,
        registerUrl: 'https://unstop.com/competition/arena-clash',
    },
    {
        id: 'workshop',
        category: 'WORKSHOP',
        title: 'AI FORGE',
        subtitle: 'Machine Learning Bootcamp',
        prize: 'FREE',
        bgColor: '#064e3b',
        planetImage: venus,
        registerUrl: 'https://unstop.com/workshop/ai-forge',
    },
    {
        id: 'pitching',
        category: 'STARTUP',
        title: 'HUSTLE DECK',
        subtitle: 'Pitch Your Next Big Idea',
        prize: '₹25,000',
        bgColor: '#3b0764',
        planetImage: jupiter,
        registerUrl: 'https://unstop.com/competition/hustle-deck',
    },
    {
        id: 'debate',
        category: 'DEBATE',
        title: 'TECH VIVAD',
        subtitle: 'Courtroom Tech Debate',
        prize: '₹15,000',
        bgColor: '#4c0519',
        planetImage: saturn,
        registerUrl: 'https://unstop.com/competition/tech-vivad',
    },
    {
        id: 'ctf',
        category: 'CYBERSECURITY',
        title: 'CAPTURE FLAG',
        subtitle: 'Hack Your Way to Victory',
        prize: '₹30,000',
        bgColor: '#1a1a2e',
        planetImage: uranus,
        registerUrl: 'https://unstop.com/competition/capture-flag',
    },
    {
        id: 'drone',
        category: 'AERIAL',
        title: 'DRONE RACING',
        subtitle: 'High-Speed Aerial Combat',
        prize: '₹40,000',
        bgColor: '#0f3460',
        planetImage: pluto,
        registerUrl: 'https://unstop.com/competition/drone-racing',
    },
    {
        id: 'quiz',
        category: 'QUIZ',
        title: 'TECH TRIVIA',
        subtitle: 'Test Your Knowledge',
        prize: '₹10,000',
        bgColor: '#2d3a4f',
        planetImage: moon,
        registerUrl: 'https://unstop.com/quiz/tech-trivia',
    },
    {
        id: 'design',
        category: 'DESIGN',
        title: 'PIXEL PERFECT',
        subtitle: 'UI/UX Design Challenge',
        prize: '₹20,000',
        bgColor: '#4a1942',
        planetImage: sun,
        registerUrl: 'https://unstop.com/competition/pixel-perfect',
    },
    {
        id: 'iot',
        category: 'IOT',
        title: 'SMART BUILD',
        subtitle: 'IoT Innovation Challenge',
        prize: '₹35,000',
        bgColor: '#1b4332',
        planetImage: dathomir,
        registerUrl: 'https://unstop.com/competition/smart-build',
    },
    {
        id: 'blockchain',
        category: 'BLOCKCHAIN',
        title: 'CHAIN CRAFT',
        subtitle: 'Web3 Development Sprint',
        prize: '₹45,000',
        bgColor: '#2d1b4e',
        planetImage: kashyk,
        registerUrl: 'https://unstop.com/competition/chain-craft',
    },
    {
        id: 'app',
        category: 'MOBILE',
        title: 'APP STORM',
        subtitle: 'Mobile App Development',
        prize: '₹50,000',
        bgColor: '#1e3a5f',
        planetImage: genosis,
        registerUrl: 'https://unstop.com/competition/app-storm',
    },
    {
        id: 'ml',
        category: 'ML',
        title: 'DATA FORGE',
        subtitle: 'Machine Learning Competition',
        prize: '₹60,000',
        bgColor: '#3d2645',
        planetImage: naboo,
        registerUrl: 'https://unstop.com/competition/data-forge',
    },
    {
        id: 'hardware',
        category: 'HARDWARE',
        title: 'CIRCUIT RUSH',
        subtitle: 'Electronics Design Challenge',
        prize: '₹25,000',
        bgColor: '#4a3728',
        planetImage: corell,
        registerUrl: 'https://unstop.com/competition/circuit-rush',
    },
    {
        id: 'gaming2',
        category: 'GAMING',
        title: 'BGMI BATTLE',
        subtitle: 'Mobile Gaming Tournament',
        prize: '₹30,000',
        bgColor: '#2b2d42',
        planetImage: tatoon,
        registerUrl: 'https://unstop.com/competition/bgmi-battle',
    },
    {
        id: 'photography',
        category: 'CREATIVE',
        title: 'LENS CRAFTERS',
        subtitle: 'Tech Photography Contest',
        prize: '₹15,000',
        bgColor: '#1a3c40',
        planetImage: chandrila,
        registerUrl: 'https://unstop.com/competition/lens-crafters',
    },
    {
        id: 'presentation',
        category: 'PRESENTATION',
        title: 'IDEA SPARK',
        subtitle: 'Paper Presentation',
        prize: '₹20,000',
        bgColor: '#3d348b',
        planetImage: ryloth,
        registerUrl: 'https://unstop.com/competition/idea-spark',
    },
    {
        id: 'treasure',
        category: 'FUN',
        title: 'COSMIC HUNT',
        subtitle: 'Tech Treasure Hunt',
        prize: '₹10,000',
        bgColor: '#1a1a2e',
        planetImage: earth,
        registerUrl: 'https://unstop.com/competition/cosmic-hunt',
    },
];

export default function EventCardsSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(events.length / cardsPerPage);

    const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
    const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

    const startIndex = currentPage * cardsPerPage;
    const visibleEvents = events.slice(startIndex, startIndex + cardsPerPage);

    return (
        <section className="min-h-screen w-full bg-black py-24 px-8 relative">
            {/* Slide Animation CSS */}
            <style>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>

            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="text-[10px] font-mono text-white/40 tracking-[0.3em] mb-4">
                    EXPLORE MISSIONS
                </div>
                <h2 className="text-4xl font-mono text-white tracking-wider">
                    EVENT CATALOG
                </h2>
                <div className="text-xs font-mono text-white/30 mt-2">
                    {currentPage + 1} / {totalPages}
                </div>
            </div>

            {/* Cards Container */}
            <div className="max-w-5xl mx-auto relative">
                {/* Navigation Arrows */}
                <button
                    onClick={prevPage}
                    className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                >
                    <span className="text-white/60 text-2xl">‹</span>
                </button>

                <button
                    onClick={nextPage}
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                >
                    <span className="text-white/60 text-2xl">›</span>
                </button>

                {/* Cards Grid with Slide Animation */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{
                        animation: 'slideIn 0.2s ease-out'
                    }}
                    key={currentPage}
                >
                    {visibleEvents.map((event) => (
                        <div
                            key={event.id}
                            className="relative pt-12"
                            onMouseEnter={() => setHoveredCard(event.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Floating Planet Image - Top Center */}
                            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 ${hoveredCard === event.id ? '-translate-y-3' : ''
                                }`}>
                                <img
                                    src={event.planetImage}
                                    alt="Planet"
                                    className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                />
                            </div>

                            {/* Card */}
                            <div
                                className={`relative aspect-[3/4] border border-white/10 overflow-hidden transition-all duration-300 ${hoveredCard === event.id ? 'border-white/30 scale-[1.02]' : ''
                                    }`}
                                style={{ backgroundColor: event.bgColor }}
                            >
                                {/* Content */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                    {/* Category */}
                                    <span className="text-[9px] font-mono text-white/50 tracking-widest">
                                        {event.category}
                                    </span>

                                    {/* Title & Subtitle */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {event.title}
                                        </h3>
                                        <p className="text-xs font-mono text-white/60 mb-4">
                                            {event.subtitle}
                                        </p>

                                        {/* Prize */}
                                        <div className="inline-block px-4 py-1.5 bg-amber-900/60 border border-amber-700/50 mb-3">
                                            <span className="text-[10px] font-mono text-amber-200">
                                                PRIZE: {event.prize}
                                            </span>
                                        </div>

                                        {/* Register Button */}
                                        <a
                                            href={event.registerUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-2 bg-white/10 border border-white/20 text-center text-xs font-mono text-white tracking-wider hover:bg-white/20 hover:border-white/40 transition-all"
                                        >
                                            REGISTER →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`h-1 rounded transition-all ${currentPage === i ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
                <button className="px-8 py-3 border border-white/30 text-white/70 font-mono text-sm tracking-wider hover:bg-white/10 transition-colors">
                    [ VIEW ALL EVENTS ]
                </button>
            </div>
        </section>
    );
}
