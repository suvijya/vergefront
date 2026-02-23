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

// Import Logos
import srmbuildsIcon from '../assets/logos/srmbuilds.webp';
import innowaveIcon from '../assets/logos/innowave.webp';
import roboligaIcon from '../assets/logos/roboliga.webp';
import artisticIcon from '../assets/logos/artistic.webp';
import codeblitzIcon from '../assets/logos/codeblitz.webp';
import snapSyntaxIcon from '../assets/logos/graphic change.webp';
import bugbountyIcon from '../assets/logos/bugbounty.webp';
import murdermysteryIcon from '../assets/logos/murdermystery.webp';
import revvdIcon from '../assets/logos/revvd.webp';
import biddingIcon from '../assets/logos/biddinng.webp';
import mark1Icon from '../assets/logos/mark1.webp';
import tracertIcon from '../assets/logos/tracert.webp';
import bridgeomaniaIcon from '../assets/logos/bridgeomania.webp';
import memocracyIcon from '../assets/logos/memocracy.webp';
import kurukshetraIcon from '../assets/logos/kurukshetra.webp';
import astroIcon from '../assets/logos/astro.webp';
import radCtfIcon from '../assets/logos/root.webp';

interface EventCard {
    id: string;
    category: string;
    title: string;
    subtitle: string;
    prize: string;
    bgColor: string;
    planetImage: string;
    logo?: string;
    registerUrl: string;
    description: string;
    poc?: string;
    contact?: string;
    venue?: string;
    time?: string;
    day?: string;
}

const events: EventCard[] = [
    {
        id: 'srmbuilds',
        category: 'HACKATHON',
        title: 'SRM BUILDS 7.0',
        subtitle: '48-Hour Innovation Sprint',
        description: 'SRM Builds 7.0 is the flagship hackathon where students collaborate in teams to develop innovative solutions during an intense 30+ hour build sprint. Participants brainstorm ideas, build working prototypes, and present their projects to judges. This event provides hands-on experience in development, teamwork, and problem-solving under real-world conditions.',
        prize: '₹1,00,000',
        bgColor: '#1e293b',
        planetImage: mercury,
        logo: srmbuildsIcon,
        registerUrl: 'https://unstop.com/hackathon/srm-builds-70',
        poc: '-', contact: '-', venue: 'NEB', time: '12:00', day: 'D1'
    },
    {
        id: 'mark1',
        category: 'ROBOTICS',
        title: 'MARK-1',
        subtitle: 'Premier Robotics Challenge',
        description: 'Mark-1 is a robotics combat competition where students design and build battle-ready robots to compete in an arena. Participants must focus on robot durability, weapon mechanisms, and control systems to defeat opponents. The event challenges creativity, engineering skills, and strategic thinking.',
        prize: '₹75,000',
        bgColor: '#431407',
        planetImage: mars,
        logo: mark1Icon,
        registerUrl: 'https://unstop.com/competition/mark-1',
        poc: '-', contact: '-', venue: 'Near Admin Block', time: '11:00-1:00', day: 'D2'
    },
    {
        id: 'radctf',
        category: 'CYBERSECURITY',
        title: 'RAD CTF 2.0',
        subtitle: 'Capture Flag Challenge',
        description: 'RAD CTF 2.0 is a cybersecurity competition where students solve challenges in ethical hacking, cryptography, and digital forensics. Participants analyze systems, find vulnerabilities, and solve technical problems. This event strengthens cybersecurity skills and logical thinking.',
        prize: '₹30,000',
        bgColor: '#164e63',
        planetImage: neptune,
        logo: radCtfIcon,
        registerUrl: 'https://unstop.com/competition/rad-ctf-20',
        poc: 'Kanishk', contact: '9811564912', venue: 'Lab', time: '10:00-3:30pm', day: 'D2'
    },
    {
        id: 'velocity',
        category: 'SPEED',
        title: 'VELOCITY',
        subtitle: 'Speed Coding Showcase',
        description: 'Velocity is a drone racing competition where participants navigate drones through challenging obstacle courses. Students must demonstrate piloting precision, control, and quick decision-making. This event showcases drone technology and real-time control skills.',
        prize: '₹15,000',
        bgColor: '#064e3b',
        planetImage: venus,
        logo: revvdIcon, // Fallback to Revvd style for driving/racing
        registerUrl: 'https://unstop.com/competition/velocity',
        poc: '-', contact: '-', venue: 'Sports Ground', time: '2:00-4:00pm', day: 'D2'
    },
    {
        id: 'revvd',
        category: 'AUTOMOTIVE',
        title: 'REVVD',
        subtitle: 'The Ultimate Dev Showdown',
        description: 'Revvd is an RC car racing event where students compete using remote-controlled vehicles on specially designed tracks. Participants must manage speed, control, and racing strategy to complete the course successfully. The event highlights vehicle dynamics and control systems.',
        prize: '₹10,000',
        bgColor: '#3b0764',
        planetImage: jupiter,
        logo: revvdIcon,
        registerUrl: 'https://unstop.com/competition/revvd',
        poc: '-', contact: '-', venue: 'Sports Ground', time: '1:00-2:00pm', day: 'D2'
    },
    {
        id: 'roboliga',
        category: 'ROBOTICS',
        title: 'ROBOLIGA',
        subtitle: 'Robotics Tournament',
        description: 'RoboLiga is a robotic soccer competition where students build robots and compete in team matches. Participants design robots capable of movement, control, and coordination to score goals. This event combines robotics, programming, and teamwork.',
        prize: '₹10,000',
        bgColor: '#4c0519',
        planetImage: saturn,
        logo: roboligaIcon,
        registerUrl: 'https://unstop.com/competition/roboliga',
        poc: '-', contact: '-', venue: 'Near Admin Block', time: '12:30-2:00', day: 'D1'
    },
    {
        id: 'innowave',
        category: 'INNOVATION',
        title: 'INNOWAVE',
        subtitle: 'Showcase Your Innovation',
        description: 'Innowave is an ideathon where students brainstorm and present innovative solutions to real-world problems. Participants develop ideas, prepare presentations, and pitch their concepts. This event encourages creativity, innovation, and entrepreneurial thinking.',
        prize: '₹25,000',
        bgColor: '#1a1a2e',
        planetImage: uranus,
        logo: innowaveIcon,
        registerUrl: 'https://unstop.com/competition/innowave',
        poc: 'Khushi', contact: '7250810227', venue: 'NEB Room', time: '12:15-4:30', day: 'D1'
    },
    {
        id: 'bugbounty',
        category: 'CYBERSECURITY',
        title: 'BUG BOUNTY',
        subtitle: 'Security Research Challenge',
        description: 'Bug Bounty is a debugging competition where students analyze programs to find bugs, errors, and vulnerabilities. Participants must carefully examine code and identify issues. This event improves debugging skills and programming accuracy.',
        prize: '₹5,000',
        bgColor: '#0f3460',
        planetImage: pluto,
        logo: bugbountyIcon,
        registerUrl: 'https://unstop.com/competition/bug-bounty',
        poc: 'Vritti', contact: '9315606580', venue: 'Lab', time: '2:00-4:30pm', day: 'D1'
    },
    {
        id: 'snapsyntax',
        category: 'CODING',
        title: 'SNAP SYNTAX',
        subtitle: 'Rapid Scripting Contest',
        description: 'Snap Syntax is a front-end development challenge where students recreate a given interface after briefly viewing it. Participants rely on memory, design skills, and coding ability. This event tests attention to detail and web development skills.',
        prize: '₹5,000',
        bgColor: '#2d3a4f',
        planetImage: moon,
        logo: snapSyntaxIcon,
        registerUrl: 'https://unstop.com/competition/snap-syntax',
        poc: 'Rashi', contact: '9729216244', venue: 'Lab', time: '4:45-6:00pm', day: 'D1'
    },
    {
        id: 'codeblitz',
        category: 'CODING',
        title: 'CODE BLITZ',
        subtitle: 'Speed Coding Challenge',
        description: 'Code Blitz is a competitive programming event where students solve coding problems under time constraints. Participants compete to write efficient and correct solutions quickly. This event strengthens logical thinking and programming speed.',
        prize: '₹5,000',
        bgColor: '#4a1942',
        planetImage: sun,
        logo: codeblitzIcon,
        registerUrl: 'https://unstop.com/competition/code-blitz',
        poc: 'Aryan', contact: '9306882773', venue: 'Lab', time: '10:00-11:30pm', day: 'D1'
    },
    {
        id: 'artisticaura',
        category: 'DESIGN',
        title: 'ARTISTIC AURA',
        subtitle: 'Creative Design Challenge',
        description: 'Artistic Aura is a digital design competition where students create original artwork, graphics, and visual designs. Participants showcase their creativity and design skills using digital tools. This event encourages artistic expression and creativity.',
        prize: '₹7,500',
        bgColor: '#1b4332',
        planetImage: dathomir,
        logo: artisticIcon,
        registerUrl: 'https://unstop.com/competition/artistic-aura',
        poc: 'Himanshu', contact: '9310103146', venue: 'Lab', time: '11:00-1:00pm', day: 'D2'
    },
    {
        id: 'murdermystery',
        category: 'FUN',
        title: 'MURDER MYSTERY*',
        subtitle: 'Late Night Mystery Solving',
        description: 'Murder Mystery is an interactive problem-solving event where students analyze clues, evidence, and scenarios to solve a fictional crime. Participants must think critically, collaborate, and use logical reasoning to identify the culprit.',
        prize: '₹5,000',
        bgColor: '#2d1b4e',
        planetImage: kashyk,
        logo: murdermysteryIcon,
        registerUrl: 'https://unstop.com/competition/murder-mystery',
        poc: '-', contact: '-', venue: 'EB + NEB', time: '1:00-3:00am', day: 'D2'
    },
    {
        id: 'astrophotography',
        category: 'PHOTOGRAPHY',
        title: 'ASTROPHOTOGRAPHY*',
        subtitle: 'Night Sky Photography Session',
        description: 'AstroPhotography is a photography competition focused on capturing celestial objects and night sky scenes. Students showcase their photography skills by capturing stars, planets, or astronomical events. This event promotes creativity and interest in space.',
        prize: '₹5,000',
        bgColor: '#1e3a5f',
        planetImage: genosis,
        logo: astroIcon,
        registerUrl: 'https://unstop.com/competition/astrophotography',
        poc: 'Shivam Jaiswal', contact: '7542052390', venue: 'Sports Ground', time: '6:00pm.. 10:00-2:00', day: 'D0'
    },
    {
        id: 'tracert',
        category: 'NETWORKING',
        title: 'TRACERT',
        subtitle: 'Networking & Security Challenge',
        description: 'Tracert is an autonomous robotics competition where students build robots that navigate tracks independently. Participants integrate sensors, programming, and mechanical systems to ensure accurate movement. This event focuses on automation and robotics intelligence.',
        prize: '₹7,500',
        bgColor: '#3d2645',
        planetImage: naboo,
        logo: tracertIcon,
        registerUrl: 'https://unstop.com/competition/tracert',
        poc: '-', contact: '-', venue: 'Near Escalators', time: '2:00-3:00', day: 'D1'
    },
    {
        id: 'bridgeomania',
        category: 'ENGINEERING',
        title: 'BRIDGE O MANIA',
        subtitle: 'Bridge Building Simulation',
        description: 'Bridge-O-Mania is an engineering challenge where students design and construct model bridges. Participants test their bridges for strength and structural efficiency. This event helps students understand real-world structural engineering concepts.',
        prize: '₹5,000',
        bgColor: '#4a3728',
        planetImage: corell,
        logo: bridgeomaniaIcon,
        registerUrl: 'https://unstop.com/competition/bridge-o-mania',
        poc: '-', contact: '-', venue: 'Electrical Lab', time: '12:45-2:00', day: 'D1'
    },
    {
        id: 'biddingwars',
        category: 'STRATEGY',
        title: 'BIDDING WARS*',
        subtitle: 'Auction Strategy Challenge',
        description: 'Bidding Wars is a strategic competition where students participate in simulated auctions and bidding scenarios. Participants must manage resources, make calculated decisions, and outbid competitors. This event develops strategic thinking and decision-making skills.',
        prize: '₹7,500',
        bgColor: '#2b2d42',
        planetImage: tatoon,
        logo: biddingIcon,
        registerUrl: 'https://unstop.com/competition/bidding-wars',
        poc: 'Shaurya', contact: '8447643031', venue: 'Lab', time: '10:00-4:00pm', day: 'D2'
    },
    {
        id: 'memeocracy',
        category: 'CREATIVE',
        title: 'MEMEOCRACY*',
        subtitle: 'Meme Making Competition',
        description: 'Memeocracy is a creative competition where students create memes based on given themes or topics. Participants showcase humor, creativity, and communication skills through digital content creation.',
        prize: '₹2,500',
        bgColor: '#1a3c40',
        planetImage: chandrila,
        logo: memocracyIcon,
        registerUrl: 'https://unstop.com/competition/memeocracy',
        poc: 'Hriday', contact: '9818650375', venue: 'Lab', time: '12:00-2:00pm', day: 'D1'
    },
    {
        id: 'designatee',
        category: 'DESIGN',
        title: 'DESIGN-A-TEE*',
        subtitle: 'T-Shirt Design Challenge',
        description: 'Design-a-Tee is a creative design competition where students create original designs for T-shirts. Participants use graphic design skills to develop visually appealing and meaningful designs. This event encourages creativity and artistic innovation.',
        prize: '₹5,000',
        bgColor: '#3d348b',
        planetImage: ryloth,
        logo: artisticIcon, // Reusing artistic/design logo
        registerUrl: 'https://unstop.com/competition/design-a-tee',
        poc: 'Vanshika Jain', contact: '9711280104', venue: 'Lab', time: '12:00-2:00', day: 'D2'
    },
    {
        id: 'kurukshetra',
        category: 'ROBOTICS',
        title: 'KURUKSHETRA*',
        subtitle: 'Robo Tug-of-War Battle',
        description: 'Kurukshetra is a robotics competition where robots compete in a tug-of-war battle. Students design powerful robots capable of pulling their opponent across a line. The event tests robot strength, traction, and mechanical design.',
        prize: '₹5,000',
        bgColor: '#1a1a2e',
        planetImage: earth,
        logo: kurukshetraIcon,
        registerUrl: 'https://unstop.com/competition/kurukshetra',
        poc: '-', contact: '-', venue: 'Near Admin Block', time: '-', day: '-'
    },
];

export default function EventCardsSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<EventCard | null>(null);
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
                    className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pt-16 md:pt-32 pb-8 md:pb-12"
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
                                id={`${event.id}-${index}`}
                                key={`${event.id}-${index}`}
                                className="relative px-1.5 md:px-4 w-[220px] md:w-[380px] flex-shrink-0 cursor-pointer"
                                onMouseEnter={() => setHoveredCard(`${event.id}-${index}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => !isDragging && setSelectedEvent(event)}
                            >
                                {/* Floating Planet Image - Top Center */}
                                <div className={`absolute -top-10 md:-top-8 left-1/2 -translate-x-1/2 md:-translate-y-1/4 z-40 transition-transform duration-500 ${hoveredCard === `${event.id}-${index}` ? '-translate-y-4 scale-110' : ''
                                    }`}>
                                    <img
                                        src={event.planetImage}
                                        alt="Planet"
                                        className="w-20 h-20 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                    />
                                </div>

                                {/* Card */}
                                <div
                                    className={`relative aspect-[3/3.6] md:aspect-[3/4.2] border border-white overflow-hidden transition-all duration-500 rounded-lg ${hoveredCard === `${event.id}-${index}` ? 'border-white/100 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-[1.03]' : ''
                                        }`}
                                    style={{
                                        backgroundColor: event.bgColor,
                                        background: `linear-gradient(135deg, ${event.bgColor}, #000000)`
                                    }}
                                >
                                    {/* Content */}
                                    <div className="absolute inset-0 p-2.5 md:p-6 flex flex-col justify-between z-10">
                                        <div className="flex justify-between items-start mt-4 md:mt-0">
                                            <span className="text-[8px] md:text-[10px] font-mono text-white/50 tracking-wide md:tracking-widest uppercase">
                                                {event.category}
                                            </span>
                                            <div className="w-1 h-1 rounded-full bg-white/30" />
                                        </div>

                                        {/* Large Centered Watermark Logo */}
                                        {event.logo && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[1] overflow-hidden">
                                                <img
                                                    src={event.logo}
                                                    alt=""
                                                    className="w-32 h-32 md:w-64 md:h-64 object-contain scale-125"
                                                />
                                            </div>
                                        )}

                                        <div className="mt-auto">



                                            <div className="flex items-center justify-between gap-3 mb-3 md:mb-4">
                                                <div className="flex-1 py-1.5 md:py-2 text-center bg-white/5 border border-white/10 rounded-md flex items-center justify-center overflow-hidden">
                                                    <span className="text-[8px] md:text-[10px] font-mono text-amber-200 uppercase tracking-widest truncate">
                                                        PRIZE: {event.prize}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (!isDragging) setSelectedEvent(event);
                                                    }}
                                                    className="flex-1 py-1.5 md:py-2 text-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors text-[8px] md:text-[10px] font-mono text-white uppercase tracking-widest backdrop-blur-sm flex items-center justify-center truncate"
                                                >
                                                    Learn More
                                                </button>
                                            </div>

                                            <a
                                                id={`register-${event.id}`}
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

            {/* Event Details Modal */}
            {selectedEvent && (
                <div
                    id="event-modal-overlay"
                    className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/60 backdrop-blur-md"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        id="event-modal"
                        className="relative w-full max-w-2xl bg-black border border-white/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] animate-in fade-in zoom-in duration-300"
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: `linear-gradient(135deg, ${selectedEvent.bgColor}40, #000000)`
                        }}
                    >
                        {/* Close Button */}
                        <button
                            id="close-modal"
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-1.5 md:p-2 text-white/60 hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* MOBILE LAYOUT: single column, ultra-compact */}
                        <div className="md:hidden p-3 flex flex-col gap-2">
                            {/* Top row: logo + title info */}
                            <div className="flex items-start gap-3">
                                {selectedEvent.logo && (
                                    <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-lg p-1 flex items-center justify-center">
                                        <img src={selectedEvent.logo} alt="Event Logo" className="w-full h-full object-contain" />
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block text-[8px] font-mono text-white/50 tracking-widest uppercase mb-0.5 border border-white/20 px-1.5 py-0.5 rounded">
                                        {selectedEvent.category}
                                    </span>
                                    <h3 className="text-base font-bold text-white uppercase tracking-tight leading-tight">
                                        {selectedEvent.title}
                                    </h3>
                                    <p className="text-[10px] font-mono text-white/50">
                                        {selectedEvent.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Description - truncated */}
                            <p className="text-[10px] text-white/70 leading-relaxed font-light line-clamp-4">
                                {selectedEvent.description}
                            </p>

                            {/* Info grid - compact */}
                            <div className="grid grid-cols-2 gap-2 border border-white/10 bg-white/5 p-2 rounded-lg">
                                <div>
                                    <h4 className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Prize</h4>
                                    <div className="text-sm font-mono text-amber-300">{selectedEvent.prize}</div>
                                </div>
                                <div>
                                    <h4 className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-0.5">When & Where</h4>
                                    <div className="text-[10px] font-mono text-cyan-300">
                                        {selectedEvent.day && selectedEvent.day !== '-' && `D${selectedEvent.day} • `}
                                        {selectedEvent.time !== '-' ? selectedEvent.time : 'TBA'}
                                        <br />
                                        <span className="text-white/60">{selectedEvent.venue !== '-' ? selectedEvent.venue : 'TBA'}</span>
                                    </div>
                                </div>
                                <div className="col-span-2 pt-1.5 border-t border-white/10">
                                    <h4 className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Contact</h4>
                                    <div className="text-[10px] font-mono text-white/90">
                                        {selectedEvent.poc !== '-' ? selectedEvent.poc : 'TBA'}
                                        {selectedEvent.contact && selectedEvent.contact !== '-' && (
                                            <span className="text-white/50 ml-1">({selectedEvent.contact})</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Register button */}
                            <a
                                id="modal-register-btn"
                                href={selectedEvent.registerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-2.5 bg-white text-black text-center text-[10px] font-bold font-mono tracking-widest uppercase rounded-md"
                            >
                                Register Now
                            </a>
                        </div>

                        {/* DESKTOP LAYOUT: unchanged side-by-side */}
                        <div className="hidden md:flex p-8 flex-row gap-8 max-h-[85vh] overflow-y-auto">
                            {/* Left Side: Image & Logo */}
                            <div className="flex-shrink-0 flex flex-col items-center justify-center gap-8 w-48">
                                <div className="relative">
                                    <img
                                        src={selectedEvent.planetImage}
                                        alt={selectedEvent.title}
                                        className="w-44 h-44 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] animate-pulse-slow relative z-10"
                                    />
                                    {selectedEvent.logo && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 blur-sm scale-150">
                                            <img src={selectedEvent.logo} alt="" className="w-full h-full object-contain grayscale" />
                                        </div>
                                    )}
                                </div>
                                {selectedEvent.logo && (
                                    <div className="w-44 h-44 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-2 flex items-center justify-center hover:border-white/30 transition-all">
                                        <img src={selectedEvent.logo} alt="Event Logo" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Content */}
                            <div className="flex-grow">
                                <span className="inline-block text-xs font-mono text-white/50 tracking-widest uppercase mb-2 border border-white/20 px-2 py-1 rounded">
                                    {selectedEvent.category}
                                </span>

                                <h3 className="text-4xl font-bold text-white mb-2 uppercase tracking-tight leading-tight">
                                    {selectedEvent.title}
                                </h3>

                                <p className="text-base font-mono text-white/60 mb-6">
                                    {selectedEvent.subtitle}
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div>
                                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Description</h4>
                                        <p className="text-base text-white/80 leading-relaxed font-light">
                                            {selectedEvent.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border border-white/10 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                                        <div>
                                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Prize Pool</h4>
                                            <div className="text-xl font-mono text-amber-300">
                                                {selectedEvent.prize}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Timing & Venue</h4>
                                            <div className="text-sm font-mono text-cyan-300">
                                                {selectedEvent.day && selectedEvent.day !== '-' && `Day ${selectedEvent.day} • `}
                                                {selectedEvent.time !== '-' ? selectedEvent.time : 'TBA'}
                                                <br />
                                                <span className="text-white/60">{selectedEvent.venue !== '-' ? selectedEvent.venue : 'TBA'}</span>
                                            </div>
                                        </div>
                                        <div className="col-span-2 mt-2 pt-2 border-t border-white/10">
                                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Point of Contact</h4>
                                            <div className="text-sm font-mono text-white/90">
                                                {selectedEvent.poc !== '-' ? selectedEvent.poc : 'TBA'}
                                                {selectedEvent.contact && selectedEvent.contact !== '-' && (
                                                    <span className="text-white/50 ml-2">({selectedEvent.contact})</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    id="modal-register-btn"
                                    href={selectedEvent.registerUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-white text-black text-center text-base font-bold font-mono tracking-widest hover:bg-white/90 hover:scale-[1.02] transition-all uppercase rounded-md shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
}
