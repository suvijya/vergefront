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
// import earth from '../../asset/earth.png';

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
// import kurukshetraIcon from '../assets/logos/kurukshetra.webp';
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
        registerUrl: 'https://unstop.com/p/srm-builds-70-verge-2026-srm-university-delhi-ncr-sonepat-1648620',
        poc: 'Ashish', contact: '9931190218', venue: 'NEB', time: '12:00', day: 'D1'
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
        poc: 'Manas', contact: '9555155720', venue: 'Near Admin Block', time: '11:00-1:00', day: 'D2'
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
        poc: 'Kanishk', contact: '9811564912', venue: 'Assigned Venue', time: '10:30-3:30pm', day: 'D2'
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
        registerUrl: 'https://unstop.com/p/velocity-drone-race-verge-2026-srm-university-delhi-ncr-sonepat-1648638',
        poc: 'Aakash', contact: '8950197304', venue: 'Sports Ground', time: '2:00-4:00pm', day: 'D2'
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
        poc: 'Sanchit', contact: '9896404757', venue: 'Sports Ground', time: '1:00-2:00pm', day: 'D2'
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
        poc: 'Manas', contact: '9555155720', venue: 'Open Arena Hostel ground', time: '12:00-2:00', day: 'D1'
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
        poc: 'Khushi', contact: '7250810227', venue: 'Seminar Hall / Assigned Room/New EB', time: '12:30-4:30', day: 'D1'
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
        poc: 'Vritti', contact: '9315606580', venue: '5th Floor Lab', time: '2:30-4:30pm', day: 'D1'
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
        poc: 'Rashi', contact: '9729216244', venue: 'Computer Lab', time: '12:30-4:30pm', day: 'D2'
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
        poc: 'Aryan', contact: '9306882773', venue: 'New EB', time: '5:00-6:30pm', day: 'D1'
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
        registerUrl: 'https://unstop.com/competitions/murder-mystery-verge-2026-srm-university-delhi-ncr-sonepat-1651115',
        poc: 'Kanika', contact: '8130477306', venue: 'Law Dept Room & Campus', time: '1:30-4:30am', day: 'D2'
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
        poc: 'Shivam Jaiswal', contact: '7542052390', venue: 'Open Ground / Terrace Area', time: '6:30pm-12:00am', day: 'D0'
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
        poc: 'Vasundhara', contact: '9548760182', venue: 'Tracert Area - Near Escalator, New EB', time: '2:30-3:30', day: 'D1'
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
        poc: 'Yatin', contact: '9034871027', venue: 'Electrical Lab', time: '12:30-2:00', day: 'D1'
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
        registerUrl: 'https://unstop.com/competitions/biddin-war-verge-2026-srm-university-delhi-ncr-sonepat-1649019',
        poc: 'Shaurya', contact: '8447643031', venue: '5th Floor Lab - New EB', time: '12:30-4:30pm', day: 'D1'
    },
    {
        id: 'memeocracy',
        category: 'CREATIVE',
        title: 'MEMEOCRACY*',
        subtitle: 'Meme Making Competition',
        description: 'Memeocracy is a creative competition where students create memes based on given themes or topics. Participants showcase humor, creativity, and communication skills through digital content creation.',
        prize: '₹2,000',
        bgColor: '#1a3c40',
        planetImage: chandrila,
        logo: memocracyIcon,
        registerUrl: 'https://unstop.com/p/memocracy-verge-2026-srm-university-delhi-ncr-sonepat-1647981',
        poc: 'Hriday', contact: '9818650375', venue: '5th Floor Lab', time: '2:30-4:30pm', day: 'D1'
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
        registerUrl: 'https://unstop.com/p/design-a-tee-verge-2026-srm-university-delhi-ncr-sonepat-1649866',
        poc: 'Vanshika Jain', contact: '9711280104', venue: 'Lab', time: '12:00-2:00', day: 'D2'
    },
    // {
    //     id: 'kurukshetra',
    //     category: 'ROBOTICS',
    //     title: 'KURUKSHETRA*',
    //     subtitle: 'Robo Tug-of-War Battle',
    //     description: 'Kurukshetra is a robotics competition where robots compete in a tug-of-war battle. Students design powerful robots capable of pulling their opponent across a line. The event tests robot strength, traction, and mechanical design.',
    //     prize: '₹5,000',
    //     bgColor: '#1a1a2e',
    //     planetImage: earth,
    //     logo: kurukshetraIcon,
    //     registerUrl: 'https://unstop.com/competition/kurukshetra',
    //     poc: '-', contact: '-', venue: 'Near Admin Block', time: '-', day: '-'
    // },
];

export default function EventCardsSection() {
    // Default to Velocity event if it exists, otherwise the first event
    const defaultEvent = events.find(e => e.id === 'velocity') || events[0];
    const [selectedEvent, setSelectedEvent] = useState<EventCard>(defaultEvent);
    const [activeTab, setActiveTab] = useState<'ALL' | 'D1' | 'D2'>('ALL');
    const listRef = useRef<HTMLDivElement>(null);

    const filteredEvents = events.filter(event => {
        if (activeTab === 'ALL') return true;
        return event.day === activeTab;
    });

    // Trap wheel/trackpad scroll inside the event list so the page doesn't scroll
    useEffect(() => {
        const listEl = listRef.current;
        if (!listEl) return;

        const handleWheel = (e: WheelEvent) => {
            const { scrollTop, scrollHeight, clientHeight } = listEl;
            const isScrollable = scrollHeight > clientHeight;

            if (!isScrollable) return;

            const atTop = scrollTop <= 0 && e.deltaY < 0;
            const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;

            // Prevent the page from scrolling when we're inside the list
            if (!atTop && !atBottom) {
                e.preventDefault();
                e.stopPropagation();
                listEl.scrollTop += e.deltaY;
            }
        };

        listEl.addEventListener('wheel', handleWheel, { passive: false });
        return () => listEl.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <section id="events" className="min-h-screen w-full bg-black py-20 px-4 md:px-8 lg:px-16 flex flex-col lg:items-center lg:justify-center font-sans relative z-10">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>

            {/* Header for mobile - optional, but let's keep it clean as per screenshot */}

            <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-4 lg:gap-8 lg:h-[80vh] lg:min-h-[650px] lg:max-h-[850px]">

                {/* Left Panel - Event Details */}
                <div
                    className="relative flex flex-col min-h-[600px] lg:min-h-0 rounded-[0.5rem] overflow-hidden border border-white/10 transition-all duration-700 lg:h-full bg-black"
                >
                    {/* Background Planet Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[65%] md:w-[60%] opacity-[0.2] pointer-events-none mix-blend-screen transition-all duration-1000 grayscale">
                        <img src={selectedEvent.planetImage} alt="" className="w-full h-full object-contain drop-shadow-2xl" />
                    </div>

                    <div
                        className="relative z-10 p-5 md:p-8 flex flex-col h-full bg-gradient-to-b from-transparent to-black/80 overflow-hidden"
                    >
                        {/* Top Bar: Category & Logo */}
                        <div className="flex justify-between items-start shrink-0">
                            <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest text-[#23b5d3] border border-[#23b5d3]/30 rounded-sm uppercase bg-[#23b5d3]/10 backdrop-blur-sm">
                                {selectedEvent.category}
                            </span>
                            {selectedEvent.logo && (
                                <img src={selectedEvent.logo} alt="Logo" className="w-16 md:w-24 object-contain filter drop-shadow-lg" />
                            )}
                        </div>

                        {/* Title Section */}
                        <div className="mt-8 mb-3 shrink-0">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl lg:text-[3.25rem] font-black text-white italic tracking-tighter uppercase mb-2 drop-shadow-xl"
                                style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '-0.02em', lineHeight: '1.1' }}
                            >
                                {selectedEvent.title}
                            </h2>
                            <p className="text-[10px] md:text-xs text-white/50 font-mono tracking-widest">
                                {selectedEvent.subtitle}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed font-mono mb-6 max-w-lg mt-2 shrink-0">
                            {selectedEvent.description}
                        </p>

                        {/* Info Boxes */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 mt-auto shrink-0">
                            <div className="bg-black border border-white/5 rounded-xl p-3 md:p-4 shadow-inner">
                                <div className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-widest uppercase mb-1.5">PRIZE</div>
                                <div className="text-lg md:text-xl font-bold text-amber-300 font-mono tracking-tight">{selectedEvent.prize}</div>
                            </div>
                            <div className="bg-black border border-white/5 rounded-xl p-3 md:p-4 shadow-inner">
                                <div className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-widest uppercase mb-1.5">TIME</div>
                                <div className="text-sm md:text-base font-bold text-[#23b5d3] font-mono">
                                    {selectedEvent.time !== '-' ? selectedEvent.time : 'TBA'}
                                </div>
                            </div>
                            {selectedEvent.poc && selectedEvent.poc !== '-' && (
                                <div className="bg-black border border-white/5 rounded-xl p-2 md:p-3 shadow-inner col-span-2 flex justify-between items-center">
                                    <div className="px-2">
                                        <div className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-widest uppercase mb-1">POC</div>
                                        <div className="text-xs md:text-sm font-bold text-white font-mono">{selectedEvent.poc}</div>
                                    </div>
                                    {selectedEvent.contact && selectedEvent.contact !== '-' && (
                                        <div className="text-right px-2">
                                            <div className="text-[8px] md:text-[9px] font-mono text-white/30 tracking-widest uppercase mb-1">CONTACT</div>
                                            <a href={`tel:${selectedEvent.contact}`} className="text-xs md:text-sm font-bold text-[#23b5d3] hover:text-white transition-colors font-mono">{selectedEvent.contact}</a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-auto shrink-0">
                            <a
                                href={selectedEvent.registerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-white text-black text-center py-3 md:py-4 rounded-lg font-bold text-[10px] md:text-[11px] font-mono tracking-widest uppercase hover:bg-white/90 transition-colors flex justify-between items-center px-5 md:px-6 shadow-lg active:scale-[0.98]"
                            >
                                <span>REGISTER</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Event List */}
                <div className="flex flex-col h-[500px] lg:h-full min-h-0 overflow-hidden bg-black rounded-[0.5rem] border border-white/10 relative shadow-xl">
                    <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                    {/* Tabs */}
                    <div className="flex justify-between border-b border-white/10 px-2 md:px-6 relative z-10 bg-black">
                        <button
                            onClick={() => setActiveTab('ALL')}
                            className={`py-5 md:py-6 px-2 md:px-4 text-[9px] md:text-[10px] font-mono tracking-widest uppercase relative outline-none transition-colors ${activeTab === 'ALL' ? 'text-[#23b5d3] font-bold' : 'text-white/30 hover:text-white/60'}`}
                        >
                            <span className="relative z-10">ALL EVENTS</span>
                            {activeTab === 'ALL' && (
                                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#23b5d3] shadow-[0_0_10px_rgba(35,181,211,0.3)]" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('D1')}
                            className={`py-5 md:py-6 px-2 md:px-4 text-[9px] md:text-[10px] font-mono tracking-widest uppercase relative outline-none transition-colors ${activeTab === 'D1' ? 'text-[#23b5d3] font-bold' : 'text-white/30 hover:text-white/60'}`}
                        >
                            <span className="relative z-10 flex gap-1 md:gap-2">DAY 1 <span className="text-white/10 hidden md:inline">· MAR 13</span></span>
                            {activeTab === 'D1' && (
                                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#23b5d3] shadow-[0_0_10px_rgba(35,181,211,0.3)]" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('D2')}
                            className={`py-5 md:py-6 px-2 md:px-4 text-[9px] md:text-[10px] font-mono tracking-widest uppercase relative outline-none transition-colors ${activeTab === 'D2' ? 'text-[#23b5d3] font-bold' : 'text-white/30 hover:text-white/60'}`}
                        >
                            <span className="relative z-10 flex gap-1 md:gap-2">DAY 2 <span className="text-white/10 hidden md:inline">· MAR 14</span></span>
                            {activeTab === 'D2' && (
                                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#23b5d3] shadow-[0_0_10px_rgba(35,181,211,0.3)]" />
                            )}
                        </button>
                    </div>

                    {/* List */}
                    <div
                        ref={listRef}
                        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden touch-pan-y overscroll-contain custom-scrollbar p-2 md:p-6 pb-0 relative z-10"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {filteredEvents.map((event) => {
                            const isSelected = selectedEvent.id === event.id;

                            // Calculate a virtual index for display like "01", "02"
                            const categoryEvents = events.filter(e => e.category === event.category);
                            const catIndex = categoryEvents.findIndex(e => e.id === event.id) + 1;
                            const displayIndex = catIndex.toString().padStart(2, '0');

                            return (
                                <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`w-full text-left flex items-center p-3 md:p-3.5 border-b border-white/5 transition-all duration-300 group relative overflow-hidden z-10 ${isSelected ? 'bg-gradient-to-r from-[#23b5d3]/10 to-transparent' : 'bg-transparent hover:bg-white/[0.02]'}`}
                                >
                                    {/* Selected Active Border (Left) */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#23b5d3] transition-opacity duration-300 ${isSelected ? 'opacity-100 shadow-[0_0_10px_rgba(35,181,211,0.5)]' : 'opacity-0'}`} />

                                    {/* Planet Icon */}
                                    <div className="w-7 h-7 md:w-9 md:h-9 flex-shrink-0 mr-4 md:mr-5">
                                        <img src={event.planetImage} alt="" className={`w-full h-full object-contain ${!isSelected && 'opacity-60'} group-hover:opacity-100 transition-all duration-500`} />
                                    </div>

                                    {/* Text Info */}
                                    <div className="flex-1 flex flex-col justify-center min-w-0 pr-2">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className={`text-[8px] md:text-[9px] font-mono tracking-widest uppercase ${isSelected ? 'text-[#23b5d3]' : 'text-white/30'} transition-colors`}>
                                                {event.category} <span className="opacity-40 ml-1">{displayIndex}</span>
                                            </span>
                                        </div>
                                        <div className={`text-[11px] md:text-sm font-bold tracking-wider uppercase truncate ${isSelected ? 'text-white' : 'text-white/60'} group-hover:text-white transition-colors`} style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                            {event.title}
                                        </div>
                                    </div>

                                    {/* Prize & Active Dot */}
                                    <div className="text-right flex items-center justify-end gap-3 md:gap-5 w-20 md:w-28 flex-shrink-0">
                                        <span className={`text-[9px] md:text-[10px] font-mono font-bold tracking-widest ${isSelected ? 'text-amber-400' : 'text-white/20'} transition-colors`}>
                                            {event.prize}
                                        </span>
                                        <div className="w-[3px] h-[3px] md:w-1 md:h-1 flex-shrink-0 rounded-full bg-[#23b5d3] shadow-[0_0_8px_rgba(35,181,211,0.8)]" style={{ opacity: isSelected ? 1 : 0 }} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Footer Stats Line */}
                    <div className="border-t border-white/5 px-6 md:px-8 py-4 flex justify-between items-center bg-[#0a0a0c] z-10 text-[8px] md:text-[9px] font-mono text-white/20 tracking-widest uppercase relative shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                        <span className="opacity-60">{filteredEvents.length} EVENTS</span>
                        <span className="text-[#23b5d3]/40">VERGE 2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
