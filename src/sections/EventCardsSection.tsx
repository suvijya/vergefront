import { useState, useRef } from 'react';

import AnimatedSection from '../components/AnimatedSection';

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
    isTeam?: boolean;
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
        registerUrl: 'https://unstop.com/p/srm-builds-70-verge-2026-srm-university-delhi-ncr-sonepat-1648620',
        poc: '-', contact: '-', venue: 'NEB', time: '12:00', day: 'D1', isTeam: true
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
        registerUrl: 'https://unstop.com/p/mark-1-robotwar-verge-2026-srm-university-delhi-ncr-sonepat-1648607',
        poc: '-', contact: '-', venue: 'Near Admin Block', time: '11:00-1:00', day: 'D2', isTeam: true
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
        registerUrl: 'https://unstop.com/p/rad-cyber-ctf-verge-2026-srm-university-delhi-ncr-sonepat-1647956',
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
        logo: revvdIcon,
        registerUrl: 'https://unstop.com/p/velocity-drone-race-verge-2026-srm-university-delhi-ncr-sonepat-1648638',
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
        registerUrl: 'https://unstop.com/p/revvd-rc-car-racing-verge-2026-srm-university-delhi-ncr-sonepat-1648636',
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
        registerUrl: 'https://unstop.com/p/roboliga-robo-soccer-verge-2026-srm-university-delhi-ncr-sonepat-1648596',
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
        registerUrl: 'https://unstop.com/p/innowave-verge-2026-srm-university-delhi-ncr-sonepat-1648577',
        poc: 'Khushi', contact: '7250810227', venue: 'NEB Room', time: '12:15-4:30', day: 'D1', isTeam: true
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
        registerUrl: 'https://unstop.com/p/bug-bounty-srm-university-delhi-ncr-sonepat-1647952',
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
        registerUrl: 'https://unstop.com/p/snap-syntax-verge-2026-srm-university-delhi-ncr-sonepat-1646246',
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
        registerUrl: 'https://unstop.com/p/code-blitz-verge-2026-srm-university-delhi-ncr-sonepat-1647917',
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
        registerUrl: 'https://unstop.com/p/artistic-aura-verge-2026-srm-university-delhi-ncr-sonepat-1648615',
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
        poc: '-', contact: '-', venue: 'EB + NEB', time: '1:00-3:00am', day: 'D2', isTeam: true
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
        registerUrl: 'https://unstop.com/p/astro-photography-verge-2026-srm-university-delhi-ncr-sonepat-1649867',
        poc: 'Shivam Jaiswal', contact: '7542052390', venue: 'Sports Ground', time: '6:00pm', day: 'D0'
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
        registerUrl: 'https://unstop.com/p/tracert-line-follower-verge-2026-srm-university-delhi-ncr-sonepat-1648631',
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
        registerUrl: 'https://unstop.com/p/bridge-o-mania-verge-2026-srm-university-delhi-ncr-sonepat-1647927',
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
        registerUrl: 'https://unstop.com/p/memocracy-verge-2026-srm-university-delhi-ncr-sonepat-1647981',
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
        logo: artisticIcon,
        registerUrl: 'https://unstop.com/p/design-a-tee-verge-2026-srm-university-delhi-ncr-sonepat-1649866',
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
    const [activeEvent, setActiveEvent] = useState<EventCard>(events[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [filterDay, setFilterDay] = useState<string>('ALL');
    const containerRef = useRef<HTMLDivElement>(null);

    const days = ['ALL', 'D1', 'D2'];
    const filteredEvents = filterDay === 'ALL' ? events : events.filter(e => e.day === filterDay);

    return (
        <section id="events" className="w-full bg-black pt-16 pb-2 md:pb-16 relative overflow-hidden">
            {/* Grid bg */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Header */}
            <AnimatedSection direction="up" delay={0} duration={0.7} className="text-center mb-10 px-8 select-none relative z-10">
                <div className="text-[9px] md:text-[10px] font-mono text-white/40 tracking-[0.3em] mb-3">EXPLORE MISSIONS</div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    EVENT CATALOG
                </h2>
            </AnimatedSection>

            {/* ─── GLOBAL VIEW: Split Panel Spotlight ─── */}
            <div className="block" ref={containerRef}>
                <AnimatedSection direction="up" delay={0.2} duration={0.8} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-[560px]">

                        {/* LEFT: Featured Panel */}
                        <div
                            className="relative md:w-[420px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700"
                            style={{ background: `linear-gradient(145deg, ${activeEvent.bgColor}cc 0%, #000000 80%)` }}
                        >
                            {/* Glow blob */}
                            <div
                                className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-30 transition-colors duration-700 pointer-events-none"
                                style={{ backgroundColor: activeEvent.bgColor }}
                            />

                            {/* Logo */}
                            <div className="hidden md:block absolute top-6 right-6 z-10">
                                {activeEvent.logo ? (
                                    <img
                                        key={activeEvent.id}
                                        src={activeEvent.logo}
                                        alt=""
                                        className="w-[8.4rem] md:w-48 h-[8.4rem] md:h-48 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    />
                                ) : (
                                    <img
                                        key={activeEvent.id}
                                        src={activeEvent.planetImage}
                                        alt=""
                                        className="w-[8.4rem] md:w-48 h-[8.4rem] md:h-48 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-[spin_60s_linear_infinite]"
                                    />
                                )}
                            </div>

                            {/* Watermark planet */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
                                <img src={activeEvent.planetImage} alt="" className="w-72 h-72 object-contain" />
                            </div>

                            {/* Cyan corner lines */}
                            <div className="absolute top-0 left-0 w-8 h-8">
                                <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-cyan-400/60 to-transparent" />
                                <div className="absolute top-0 left-0 h-[1px] w-6 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-8 h-8">
                                <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-cyan-400/40 to-transparent" />
                                <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-cyan-400/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                                <div className="mb-auto pt-4">
                                    <span className="inline-block text-[9px] font-mono text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded mb-3">
                                        {activeEvent.category}
                                    </span>
                                </div>

                                <div>
                                    <h3
                                        key={activeEvent.id + '-title'}
                                        className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none mb-2"
                                        style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 0 30px rgba(255,255,255,0.1)' }}
                                    >
                                        {activeEvent.title}
                                    </h3>

                                    {/* Mobile Logo Below Title */}
                                    <div className="md:hidden mt-3 mb-4 flex justify-center">
                                        {activeEvent.logo ? (
                                            <img
                                                key={activeEvent.id + '-mobile-logo'}
                                                src={activeEvent.logo}
                                                alt=""
                                                className="w-40 h-40 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                            />
                                        ) : (
                                            <img
                                                key={activeEvent.id + '-mobile-logo'}
                                                src={activeEvent.planetImage}
                                                alt=""
                                                className="w-40 h-40 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-[spin_60s_linear_infinite]"
                                            />
                                        )}
                                    </div>

                                    <p className="text-sm font-mono text-white/50 mb-4">{activeEvent.subtitle}</p>

                                    <p className="text-[11px] text-white/60 font-mono leading-relaxed mb-5 line-clamp-3">
                                        {activeEvent.description}
                                    </p>

                                    <div className="flex gap-3 mb-5">
                                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3">
                                            <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest mb-1">Prize</div>
                                            <div className="text-base font-mono text-amber-300">{activeEvent.prize}</div>
                                        </div>
                                        {activeEvent.time && activeEvent.time !== '-' && (
                                            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3">
                                                <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest mb-1">Time</div>
                                                <div className="text-[11px] font-mono text-cyan-300">{activeEvent.time}</div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <a
                                            href={activeEvent.registerUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2.5 bg-white text-black text-center text-[10px] font-bold font-mono tracking-widest uppercase rounded-lg hover:bg-white/90 transition-all"
                                        >
                                            Register →
                                        </a>
                                        <button
                                            onClick={() => setModalOpen(true)}
                                            className="px-4 py-2.5 bg-white/5 border border-white/20 text-white/60 text-[10px] font-mono tracking-widest uppercase rounded-lg hover:bg-white/10 hover:text-white transition-all"
                                        >
                                            Info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Event List */}
                        <div className="w-[80%] md:w-auto mx-auto flex-1 flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] h-[80vh] max-h-[800px] md:h-[560px] mb-2 md:mb-0">
                            {/* Day filter tabs */}
                            <div className="flex border-b border-white/5 flex-shrink-0">
                                {days.map(d => (
                                    <button
                                        key={d}
                                        onClick={() => setFilterDay(d)}
                                        className={`flex-1 py-3 text-[9px] font-mono tracking-widest uppercase transition-all duration-200 ${filterDay === d
                                            ? 'text-cyan-300 border-b-2 border-cyan-500 bg-cyan-500/5'
                                            : 'text-white/30 hover:text-white/60 border-b-2 border-transparent'
                                            }`}
                                    >
                                        {d === 'ALL' ? 'All Events' : d === 'D1' ? 'Day 1 · Feb 15' : 'Day 2 · Feb 16'}
                                    </button>
                                ))}
                            </div>

                            {/* Scrollable event list */}
                            <div data-lenis-prevent="true" className="flex-1 overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                                {filteredEvents.map((event) => {
                                    const isActive = activeEvent.id === event.id;
                                    return (
                                        <button
                                            key={event.id}
                                            onClick={() => {
                                                setActiveEvent(event);
                                                // Scroll to top of the events section so the info card is visible
                                                if (window.innerWidth < 768 && containerRef.current) {
                                                    const headerOffset = 100; // Adjust for sticky header
                                                    const elementPosition = containerRef.current.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }}
                                            className={`w-full flex items-center gap-4 px-4 py-3 text-left border-b border-white/5 transition-all duration-200 group ${isActive
                                                ? 'bg-white/[0.06] border-l-2 border-l-cyan-500'
                                                : 'hover:bg-white/[0.03] border-l-2 border-l-transparent'
                                                }`}
                                        >
                                            {/* Planet thumbnail */}
                                            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 relative">
                                                <img
                                                    src={event.planetImage}
                                                    alt=""
                                                    className={`w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                                                />
                                            </div>

                                            {/* Event info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className={`text-[8px] font-mono tracking-widest uppercase transition-colors ${isActive ? 'text-cyan-400' : 'text-white/30 group-hover:text-white/50'}`}>
                                                        {event.category}
                                                    </span>
                                                    {event.day && event.day !== '-' && (
                                                        <span className="text-[7px] font-mono text-white/20 tracking-widest">{event.day}</span>
                                                    )}
                                                </div>
                                                <div className={`text-sm font-bold tracking-tight uppercase transition-colors truncate ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                                                    {event.title}
                                                </div>
                                            </div>

                                            {/* Prize */}
                                            <div className="flex-shrink-0 text-right">
                                                <div className={`text-[9px] font-mono transition-colors ${isActive ? 'text-amber-300' : 'text-white/20 group-hover:text-amber-300/60'}`}>
                                                    {event.prize}
                                                </div>
                                            </div>

                                            {/* Active indicator */}
                                            {isActive && (
                                                <div className="flex-shrink-0 w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Footer count */}
                            <div className="flex-shrink-0 border-t border-white/5 px-4 py-2 flex items-center justify-between">
                                <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">
                                    {filteredEvents.length} events
                                </span>
                                <span className="text-[8px] font-mono text-cyan-500/40 tracking-widest uppercase">VERGE 2026</span>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* ─── MOBILE VIEW: Vertical Cards (Disabled, using PC view universally) ─── */}
            <div className="hidden w-full max-w-lg mx-auto px-4">
                {/* Day filter tabs for mobile */}
                <div className="flex border-b border-white/5 mb-6 sticky top-24 z-20 bg-black/80 backdrop-blur-md pb-2 pt-2 -mx-4 px-4 overflow-x-auto no-scrollbar">
                    {days.map(d => (
                        <button
                            key={'mobile-' + d}
                            onClick={() => setFilterDay(d)}
                            className={`flex-1 min-w-[80px] py-2.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-200 border border-white/5 rounded-lg mx-1 ${filterDay === d
                                ? 'text-cyan-400 border-cyan-500/50 bg-cyan-500/10'
                                : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                                }`}
                        >
                            {d === 'ALL' ? 'All' : d === 'D1' ? 'Day 1' : 'Day 2'}
                        </button>
                    ))}
                </div>

                {/* Mobile Cards List */}
                <div className="flex flex-col gap-4 mb-16 px-1">
                    {filteredEvents.map(event => (
                        <div key={'mobile-card-' + event.id} className="relative flex bg-[#0f0f13] border border-white/[0.08] rounded-2xl overflow-hidden shadow-lg min-h-[160px]">
                            {/* Background Logo Watermark */}
                            <div className="absolute top-0 right-0 pointer-events-none opacity-100 translate-x-4 -translate-y-4">
                                {event.logo ? (
                                    <img src={event.logo} alt="" className="w-[115px] h-[115px] object-contain" />
                                ) : (
                                    <img src={event.planetImage} alt="" className="w-[115px] h-[115px] object-contain animate-[spin_30s_linear_infinite]" />
                                )}
                            </div>

                            {/* Left Date Column */}
                            <div className="flex flex-col items-center justify-center p-3 border-r border-white/5 bg-white/[0.02] w-[64px] shrink-0 relative z-10">
                                <span className="text-xl font-black text-cyan-400 leading-none">
                                    {event.day === 'D1' ? '15' : event.day === 'D2' ? '16' : '15'}
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-white/80 uppercase mt-1">Feb</span>
                                <div className="w-4 h-[1px] bg-white/20 my-2" />
                                <span className="text-[8px] font-mono tracking-widest text-white/40">{event.day || 'D1'}</span>
                            </div>

                            {/* Right Detail Column */}
                            <div className="flex flex-col p-5 flex-1 min-w-0 relative z-10">
                                <div className="mb-1">
                                    <h3 className="text-0.5xl font-bold text-white tracking-tight leading-tight pr-8 uppercase">
                                        {event.title}
                                    </h3>
                                </div>
                                <div className="text-[10px] font-mono text-white/40 mb-4 lowercase italic truncate">
                                    {event.subtitle}
                                </div>

                                <div className="flex items-center gap-1.5 mb-2 opacity-100">
                                    <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-[11px] text-white/70 truncate">
                                        {event.venue !== '-' ? event.venue : 'TBA'}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider">{event.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span className="text-[10px] font-mono text-white/40 uppercase">{event.isTeam ? 'Team' : 'Solo'}</span>
                                </div>

                                <div className="mt-auto flex justify-between items-center pt-2">
                                    <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded">
                                        <span className="text-[9px] font-bold text-green-400">FREE</span>
                                    </div>
                                    <button
                                        onClick={() => { setActiveEvent(event); setModalOpen(true); }}
                                        className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-[12px] font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    >
                                        Details <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-center py-8 opacity-20">
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">{filteredEvents.length} Events Total</span>
                    </div>
                </div>
            </div>

            {/* ─── SHARED: Detail Modal ─── */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-black border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                        onClick={e => e.stopPropagation()}
                        style={{ background: `linear-gradient(135deg, ${activeEvent.bgColor}40, #000000)` }}
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                        >
                            ✕
                        </button>

                        {/* Mobile Modal Content */}
                        <div className="md:hidden p-5 flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                {activeEvent.logo ? (
                                    <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl p-1 flex items-center justify-center">
                                        <img src={activeEvent.logo} alt="" className="w-full h-full object-contain" />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl p-1 flex items-center justify-center">
                                        <img src={activeEvent.planetImage} alt="" className="w-full h-full object-contain" />
                                    </div>
                                )}
                                <div>
                                    <span className="text-[8px] font-mono text-cyan-400 tracking-widest uppercase">{activeEvent.category}</span>
                                    <h3 className="text-xl font-black text-white uppercase">{activeEvent.title}</h3>
                                    <p className="text-[10px] font-mono text-white/50">{activeEvent.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-white/70 font-mono leading-relaxed max-h-32 overflow-y-auto">
                                {activeEvent.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2 bg-white/5 border border-white/10 rounded-lg p-3">
                                <div><div className="text-[7px] font-mono text-white/30 uppercase tracking-widest mb-0.5">Prize</div><div className="text-sm font-mono text-amber-300">{activeEvent.prize}</div></div>
                                <div><div className="text-[7px] font-mono text-white/30 uppercase tracking-widest mb-0.5">Venue</div><div className="text-[10px] font-mono text-cyan-300">{activeEvent.venue !== '-' ? activeEvent.venue : 'TBA'}</div></div>
                                <div className="col-span-2 pt-2 border-t border-white/10">
                                    <div className="text-[7px] font-mono text-white/30 uppercase tracking-widest mb-0.5">Contact</div>
                                    <div className="text-[10px] font-mono text-white/80">
                                        {activeEvent.poc !== '-' ? `${activeEvent.poc} ${activeEvent.contact !== '-' ? `(${activeEvent.contact})` : ''}` : 'TBA'}
                                    </div>
                                </div>
                            </div>
                            <a href={activeEvent.registerUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white text-black text-center text-[10px] font-bold font-mono tracking-widest uppercase rounded-lg">
                                Register Now
                            </a>
                        </div>

                        {/* Desktop Modal Content */}
                        <div className="hidden md:flex p-8 gap-8">
                            <div className="flex-shrink-0 flex flex-col items-center gap-6 w-44">
                                <img src={activeEvent.planetImage} alt="" className="w-40 h-40 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
                                {activeEvent.logo && (
                                    <div className="w-32 h-32 bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-center">
                                        <img src={activeEvent.logo} alt="" className="w-full h-full object-contain" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <span className="inline-block text-[9px] font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded tracking-widest uppercase mb-3">{activeEvent.category}</span>
                                <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>{activeEvent.title}</h3>
                                <p className="text-sm font-mono text-white/50 mb-5">{activeEvent.subtitle}</p>
                                <p className="text-sm text-white/70 leading-relaxed mb-6">{activeEvent.description}</p>
                                <div className="grid grid-cols-2 gap-3 bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                                    <div><div className="text-[8px] font-mono text-white/30 uppercase tracking-widest mb-1">Prize Pool</div><div className="text-xl font-mono text-amber-300">{activeEvent.prize}</div></div>
                                    <div><div className="text-[8px] font-mono text-white/30 uppercase tracking-widest mb-1">Timing & Venue</div><div className="text-xs font-mono text-cyan-300">{activeEvent.time !== '-' ? activeEvent.time : 'TBA'}<br /><span className="text-white/50">{activeEvent.venue !== '-' ? activeEvent.venue : 'TBA'}</span></div></div>
                                    <div className="col-span-2 pt-3 border-t border-white/10"><div className="text-[8px] font-mono text-white/30 uppercase tracking-widest mb-1">Point of Contact</div><div className="text-sm font-mono text-white/80">{activeEvent.poc !== '-' ? activeEvent.poc : 'TBA'}{activeEvent.contact && activeEvent.contact !== '-' && <span className="text-white/40 ml-2">({activeEvent.contact})</span>}</div></div>
                                </div>
                                <a href={activeEvent.registerUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-white text-black text-center font-bold font-mono tracking-widest uppercase rounded-xl hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    Register Now →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
