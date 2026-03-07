import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
import astroIcon from '../assets/logos/astro.webp';
import radCtfIcon from '../assets/logos/root.webp';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
    time: string;
    title: string;
    description: string;
    venue: string;
    logo?: string;
}

interface DaySchedule {
    date: string;
    events: TimelineEvent[];
}

const scheduleData: DaySchedule[] = [
    {
        date: 'DAY 0 - 12TH MAR',
        events: [
            { time: '6:30 PM - 12:00 AM', title: 'Astrophotography & Campus Exploration', description: 'Includes Funzone & Campus Exploration', venue: 'Open Ground / Terrace Area', logo: astroIcon },
        ],
    },
    {
        date: 'DAY 1 - 13TH MAR',
        events: [
            { time: 'Till 10:00 AM', title: 'Participant Registration & Check-in', description: '', venue: 'Main Gate' },
            { time: '8:30 AM - 11:00 AM', title: 'Hardware Setup & ATP Exploration', description: '', venue: 'New Hostel Ground' },
            { time: '9:00 AM - 11:00 AM', title: 'Safeguard Your Tower (Part 1)', description: '', venue: 'New EB Tracert Vacant Area' },
            { time: '10:00 AM - 11:00 AM', title: 'Inauguration Ceremony', description: '', venue: 'Sarveshwar Auditorium' },
            { time: 'Till 12:00 PM', title: 'Hackathon Verification & Room Allocation', description: 'Last Entry at 12 PM', venue: 'New EB Main Gate' },
            { time: '12:00 PM Onwards', title: 'Commencement of Hackathon (24 Hours)', description: '', venue: 'Allocated Classrooms - New EB', logo: srmbuildsIcon },
            { time: '12:00 PM - 2:00 PM', title: 'Roboliga (Robo Soccer)', description: '', venue: 'Open Arena Hostel ground', logo: roboligaIcon },
            { time: '12:30 PM - 2:00 PM', title: 'Bridge-O-Mania', description: '', venue: 'Electrical Lab', logo: bridgeomaniaIcon },
            { time: '12:30 PM - 4:30 PM', title: 'Innowave', description: '', venue: 'Seminar Hall / Assigned Room/New EB', logo: innowaveIcon },
            { time: '12:30 PM - 4:30 PM', title: 'Bidding Wars (Round 1)', description: 'Continues to Day 2', venue: '5th Floor Lab - New EB', logo: biddingIcon },
            { time: '1:30 PM - 2:30 PM', title: 'Lunch Break', description: 'Only for Hackathon & Accommodation Participants', venue: 'Food Court / Mess Area' },
            { time: '2:30 PM - 3:30 PM', title: 'Tracert (Line Following Robot)', description: '', venue: 'Tracert Area - Near Escalator, New EB', logo: tracertIcon },
            { time: '2:30 PM - 4:30 PM', title: 'Memocracy', description: '', venue: '5th Floor Lab', logo: memocracyIcon },
            { time: '2:30 PM - 4:30 PM', title: 'Bug Bounty', description: '', venue: '5th Floor Lab', logo: bugbountyIcon },
            { time: '4:30 PM Onwards', title: 'Award Ceremony (Day 1 Events)', description: '', venue: 'Auditorium' },
            { time: '5:00 PM - 5:30 PM', title: 'Hackathon Refreshments', description: '', venue: 'New EB Lobby' },
            { time: '5:15 PM', title: 'Transport Departure (Last)/IF', description: '', venue: 'Campus Exit Gate' },
            { time: '5:00 PM - 6:30 PM', title: 'Code Blitz', description: '', venue: 'New EB', logo: codeblitzIcon },
            { time: '8:00 PM - 9:30 PM', title: 'Dinner Break', description: '', venue: 'Food Court / Mess Area' },
            { time: 'Till 11:00 PM', title: 'Concert', description: '', venue: 'Open Stage Area' },
            { time: '1:30 AM', title: 'Jamming Session', description: '', venue: 'New EB' },
            { time: '1:30 AM - 4:30 AM', title: 'Murder Mystery (Treasure Hunt)', description: '', venue: 'Law Dept Room & Campus', logo: murdermysteryIcon },
        ],
    },
    {
        date: 'DAY 2 - 14TH MAR',
        events: [
            { time: '8:00 AM - 9:30 AM', title: 'Breakfast', description: '', venue: 'Food Court / Mess Area' },
            { time: '9:30 AM - 11:00 AM', title: 'Final Evaluation Round', description: '', venue: 'Allocated Evaluation Rooms' },
            { time: '10:30 AM - 3:30 PM', title: 'RAD', description: '', venue: 'Assigned Venue', logo: radCtfIcon },
            { time: '11:00 AM - 11:30 AM', title: 'Project Submission', description: '', venue: 'Hackathon Hall' },
            { time: '11:30 AM Onwards', title: 'Announcement of Finalists', description: '', venue: 'Hackathon Hall' },
            { time: '11:00 AM - 1:00 PM', title: 'Artistic Aura', description: '', venue: '5th Floor Lab', logo: artisticIcon },
            { time: '11:00 AM - 1:00 PM', title: 'MARK-1 (Robowar)', description: '', venue: 'Arena Ground Hostel', logo: mark1Icon },
            { time: '12:00 PM - 2:00 PM', title: 'Design A Tee', description: '', venue: '5th Floor Lab' },
            { time: '12:30 PM - 4:30 PM', title: 'Snap Syntax', description: '', venue: 'Computer Lab', logo: snapSyntaxIcon },
            { time: '1:00 PM - 2:00 PM', title: 'REVVD', description: '', venue: 'Mechanical Area Hostel', logo: revvdIcon },
            { time: '2:00 PM - 4:00 PM', title: 'Velocity', description: '', venue: 'Track Area' },
        ],
    },
];

export default function TimelineSection() {
    const [activeDay, setActiveDay] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const activeLineRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentDay = scheduleData[activeDay];

    // Flow Scroll: Dwell to unlock logic
    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setIsUnlocked(true);
        }, 500);
    };

    const handleMouseLeave = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsUnlocked(false);
        scrollContainerRef.current?.removeAttribute('data-lenis-prevent');
    };

    // Smart Scroll Handoff
    const handleWheel = (e: React.WheelEvent) => {
        const container = scrollContainerRef.current;
        if (!container || !isUnlocked) return;

        const { scrollTop, scrollHeight, clientHeight } = container;
        const atTop = scrollTop === 0;
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

        if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
            container.removeAttribute('data-lenis-prevent');
        } else {
            container.setAttribute('data-lenis-prevent', 'true');
        }
    };

    // Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const scrollContainer = scrollContainerRef.current;
            const content = contentRef.current;
            const activeLine = activeLineRef.current;

            if (!scrollContainer || !content || !activeLine) return;

            // Spine glow fill
            gsap.fromTo(activeLine,
                { height: '0%' },
                {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: content,
                        scroller: scrollContainer,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                }
            );

            // Cards slide in
            const cards = gsap.utils.toArray('.timeline-card');
            const nodes = gsap.utils.toArray('.timeline-node');
            const connectors = gsap.utils.toArray('.timeline-connector');

            cards.forEach((card: any, i: number) => {
                const isLeft = i % 2 === 0;
                gsap.fromTo(card,
                    { opacity: 0, x: isLeft ? -30 : 30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            scroller: scrollContainer,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Nodes pop in
            nodes.forEach((node: any) => {
                gsap.fromTo(node,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: 'back.out(2)',
                        scrollTrigger: {
                            trigger: node,
                            scroller: scrollContainer,
                            start: 'top 70%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Connector lines grow
            connectors.forEach((conn: any) => {
                gsap.fromTo(conn,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.4,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: conn,
                            scroller: scrollContainer,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

        }, scrollContainerRef);

        return () => ctx.revert();
    }, [activeDay]);

    return (
        <section id="schedule" className="relative min-h-screen w-full bg-black py-16 overflow-hidden flex flex-col items-center">

            {/* Unified Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
                style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Header */}
            <div className="relative z-10 text-center mb-12 px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-emerald-400 tracking-[0.2em] uppercase">
                        Mission Protocol
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
                    style={{
                        fontFamily: "'Orbitron', sans-serif",
                        textShadow: '0 0 40px rgba(16, 185, 129, 0.1)'
                    }}>
                    TIMELINE
                </h2>

                {/* Day Tabs */}
                <div className="flex justify-center gap-4 mt-8">
                    {scheduleData.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDay(index)}
                            className={`relative px-6 py-2 text-[10px] md:text-xs font-mono font-bold tracking-widest transition-all duration-300 border uppercase ${activeDay === index
                                ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                : 'bg-black/50 text-white/40 border-white/10 hover:border-emerald-500/50 hover:text-emerald-400'
                                }`}
                        >
                            {day.date}
                        </button>
                    ))}
                </div>
            </div>

            {/* Timeline Container */}
            <div
                ref={scrollContainerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onWheel={handleWheel}
                className={`relative w-full max-w-5xl h-[65vh] px-4 md:px-0 transition-colors duration-300
                    overflow-y-auto overflow-x-hidden md:${isUnlocked ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden'}
                    [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20
                `}
            >
                <div ref={contentRef} className="relative pb-24 pt-8">

                    {/* Central Spine */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
                        <div ref={activeLineRef} className="w-full h-0 relative bg-gradient-to-b from-cyan-400 via-emerald-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(56,189,248,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-16">
                        {currentDay.events.map((event, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Tech Node */}
                                    <div className="absolute left-6 md:left-1/2 z-20 md:-translate-x-1/2 timeline-node">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-black border border-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)] relative">
                                            <div className="absolute inset-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className={`hidden md:block absolute top-1/2 h-[1px] z-10 timeline-connector ${isLeft ? 'right-1/2 mr-[6px]' : 'left-1/2 ml-[6px]'}`}
                                        style={{
                                            width: '40px',
                                            background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, rgba(16,185,129,0.3), transparent)`,
                                            transformOrigin: isLeft ? 'right' : 'left',
                                        }}
                                    />

                                    {/* Spacer */}
                                    <div className="hidden md:block w-1/2"></div>

                                    {/* Event Card */}
                                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                        <div
                                            className="timeline-card relative group p-5 border border-white/5 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]"
                                        >
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-emerald-500/50 transition-colors"></div>
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-emerald-500/50 transition-colors"></div>

                                            <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                                {/* Logo */}
                                                {event.logo && (
                                                    <div className="hidden md:block flex-shrink-0 w-12 h-12 p-1 border border-white/5 bg-white/5 rounded-sm">
                                                        <img
                                                            src={event.logo}
                                                            alt={event.title}
                                                            className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                                                        />
                                                    </div>
                                                )}

                                                <div className={`flex flex-col flex-1 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>

                                                    {/* Time */}
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase">
                                                            {event.time}
                                                        </span>
                                                        <div className="h-[1px] w-8 bg-white/10"></div>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-50 transition-colors">
                                                        {event.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-xs text-white/40 font-mono leading-relaxed mb-3 max-w-xs">
                                                        {event.description}
                                                    </p>

                                                    {/* Venue Tag */}
                                                    <div className="inline-block border border-white/10 px-2 py-1 rounded bg-white/[0.02]">
                                                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                                            Loc: {event.venue}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

        </section>
    );
}
