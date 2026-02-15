import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger (safety check, though App.tsx likely does it)
gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
    time: string;
    title: string;
    description: string;
    venue: string;
}

interface DaySchedule {
    date: string;
    events: TimelineEvent[];
}

const scheduleData: DaySchedule[] = [
    {
        date: 'DAY 1 - 15TH FEB',
        events: [
            { time: '08:30', title: 'REGISTRATION', description: 'Participant Check-in', venue: 'MAIN ENTRY' },
            { time: '10:00', title: 'INAUGURATION', description: 'Opening Ceremony & Keynote', venue: 'AUDITORIUM' },
            { time: '12:00', title: 'SRM BUILDS 7.0', description: '24-Hour Hackathon Kickoff', venue: 'HACKER SPACE' },
            { time: '12:15', title: 'DESIGN-A-TEE', description: 'T-Shirt Design Contest', venue: 'DESIGN LAB' },
            { time: '12:30', title: 'INNOWAVE 2.0', description: 'Innovation Challenge', venue: 'INNOVATION HUB' },
            { time: '13:00', title: 'ROBOLIGA', description: 'Robotics Showdown', venue: 'ARENA' },
            { time: '14:30', title: 'MSME PANEL', description: 'Industry Discussion', venue: 'CONF. ROOM' },
            { time: '16:00', title: 'SNAP SYNTAX', description: 'Speed Coding Challenge', venue: 'CS LAB' },
            { time: '17:00', title: 'RESULTS (PHASE 1)', description: 'Early Event Winners', venue: 'MAIN STAGE' },
            { time: '18:30', title: 'BUG BOUNTY', description: 'Cybersecurity Challenge', venue: 'CYBER LAB' },
            { time: '21:30', title: 'JAMMING SESSION', description: 'Music & Networking', venue: 'CENTRAL LAWN' },
        ],
    },
    {
        date: 'DAY 2 - 16TH FEB',
        events: [
            { time: '01:30', title: 'MURDER MYSTERY', description: 'Late Night Mystery', venue: 'MYSTERY HALL' },
            { time: '10:00', title: 'VELOCITY', description: 'RC Racing Tournament', venue: 'RACING TRACK' },
            { time: '10:30', title: 'BIDDING WAR', description: 'Strategic Auction Game', venue: 'CONF. HALL' },
            { time: '12:00', title: 'MARK I', description: 'Technical Showcase', venue: 'TECH HUB' },
            { time: '14:00', title: 'SPEAKER PANEL', description: 'Expert Tech Talks', venue: 'AUDITORIUM' },
            { time: '17:00', title: 'AWARDS', description: 'Closing Ceremony', venue: 'MAIN STAGE' },
        ],
    },
];

export default function TimelineSection() {
    const [activeDay, setActiveDay] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false); // Flow Scroll State
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const activeLineRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const currentDay = scheduleData[activeDay];

    // Flow Scroll: Dwell to unlock logic
    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setIsUnlocked(true);
        }, 500); // 0.5s dwell time
    };

    const handleMouseLeave = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsUnlocked(false);
        // When locked, remove Lenis prevention
        scrollContainerRef.current?.removeAttribute('data-lenis-prevent');
    };

    // Smart Scroll Handoff: Dynamically manage Lenis prevention
    const handleWheel = (e: React.WheelEvent) => {
        const container = scrollContainerRef.current;
        if (!container || !isUnlocked) return;

        const { scrollTop, scrollHeight, clientHeight } = container;
        const atTop = scrollTop === 0;
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

        if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
            // We are at the edge and trying to scroll out -> Let Lenis handle it (Page Scroll)
            container.removeAttribute('data-lenis-prevent');
        } else {
            // We are inside or scrolling away from edge -> Keep it internal
            container.setAttribute('data-lenis-prevent', 'true');
        }
    };

    // Reset animations when day changes
    useEffect(() => {
        const ctx = gsap.context(() => {
            const scrollContainer = scrollContainerRef.current;
            const content = contentRef.current;
            const activeLine = activeLineRef.current;

            if (!scrollContainer || !content || !activeLine) return;

            // 1. The Central Beam Fill Animation
            gsap.fromTo(activeLine,
                { height: '0%' },
                {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: content, // Trigger based on the content height
                        scroller: scrollContainer, // Important: Define the scroller
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                }
            );

            // 2. Event Cards & Nodes Animation
            const cards = gsap.utils.toArray('.timeline-card');
            const nodes = gsap.utils.toArray('.timeline-node');

            cards.forEach((card: any) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            scroller: scrollContainer, // Important: Define the scroller
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            nodes.forEach((node: any) => {
                gsap.fromTo(node,
                    { scale: 0, boxShadow: '0 0 0px rgba(34,211,238,0)' },
                    {
                        scale: 1,
                        boxShadow: '0 0 10px rgba(34,211,238,0.8)',
                        duration: 0.3,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: node,
                            scroller: scrollContainer, // Important: Define the scroller
                            start: 'top 60%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

        }, scrollContainerRef); // Scope to scrollContainer

        return () => ctx.revert();
    }, [activeDay]);

    return (
        <section id="schedule" className="relative min-h-screen w-full bg-black py-8 overflow-hidden">

            {/* Background Grid & Stars */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Header */}
            <div className="relative z-10 text-center mb-8 px-4">
                <div className="inline-block border border-cyan-500/30 bg-cyan-900/10 px-3 py-0.5 rounded-full mb-3 backdrop-blur-sm">
                    <span className="text-[9px] font-mono text-cyan-400 tracking-[0.3em]">MISSION TIMELINE</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider" style={{ fontFamily: "'Orbitron', monospace", textShadow: '0 0 20px rgba(34,211,238,0.4)' }}>
                    EVENT SCHEDULE
                </h2>

                {/* Day Tabs */}
                <div className="flex justify-center gap-4 mt-6">
                    {scheduleData.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDay(index)}
                            className={`px-4 py-2 font-mono text-xs md:text-sm tracking-widest border transition-all duration-300 ${activeDay === index
                                ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                                : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {day.date}
                        </button>
                    ))}
                </div>
            </div>

            {/* Timeline Container - Scrollable Viewport */}
            <div
                ref={scrollContainerRef}
                /* Flow Scroll Handlers */
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onWheel={handleWheel} // Smart Handoff

                className={`relative max-w-4xl mx-auto h-[60vh] md:h-[70vh] custom-scrollbar px-4 md:px-0 transition-colors duration-300
                    ${isUnlocked ? 'overflow-y-auto overflow-x-hidden border-cyan-500/30' : 'overflow-hidden border-transparent'}
                    [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-cyan-500/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-cyan-500/40
                `}
                style={{
                    borderRightWidth: isUnlocked ? '1px' : '0px',
                    borderLeftWidth: isUnlocked ? '1px' : '0px',
                }}
            >
                <div ref={contentRef} className="relative pb-16 pt-8">

                    {/* The Central Spine */}
                    {/* Desktop: Center, Mobile: Left */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
                        <div ref={activeLineRef} className="w-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] h-0"></div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-8">
                        {currentDay.events.map((event, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* 1. The Holographic Node (On the spine) */}
                                    <div className="absolute left-6 md:left-1/2 w-2.5 h-2.5 md:w-4 md:h-4 bg-black border border-cyan-500 rounded-full z-20 md:-translate-x-1/2 timeline-node shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                                        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
                                    </div>

                                    {/* 2. The Spacer (Half width) */}
                                    <div className="hidden md:block w-1/2"></div>

                                    {/* 3. The Event Card */}
                                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isLeft ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'}`}>
                                        <div className={`timeline-card relative group p-3 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]`}>

                                            {/* Connector Line (Desktop) */}
                                            <div className={`hidden md:block absolute top-1/2 w-6 h-[1px] bg-cyan-500/30 ${isLeft ? '-right-6' : '-left-6'}`}></div>

                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-500/50"></div>
                                            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-500/50"></div>

                                            <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                                                <span className="text-lg md:text-xl font-bold text-white mb-0 translate-y-[2px] tracking-widest group-hover:text-cyan-400 transition-colors" style={{ fontFamily: "'Orbitron', monospace" }}>
                                                    {event.time}
                                                </span>
                                                <h3 className="text-sm md:text-base text-cyan-100 font-bold mb-0.5 tracking-wide uppercase">
                                                    {event.title}
                                                </h3>
                                                <p className="text-[10px] text-white/50 font-mono mb-1.5 leading-tight">
                                                    {event.description}
                                                </p>
                                                <div className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                                                    <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse"></div>
                                                    <span className="text-[8px] font-mono text-cyan-300 uppercase tracking-wider">
                                                        {event.venue}
                                                    </span>
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
        </section>
    );
}
