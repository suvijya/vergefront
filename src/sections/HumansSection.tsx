import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface CrewMember {
    id: string;
    name: string;
    initials: string;
    designation: string;
    department: string;
    deptColor: string;
    status: 'ACTIVE' | 'ON MISSION';
}

const crew: CrewMember[] = [
    { id: 'CM-001', name: 'ARJUN PATEL', initials: 'AP', designation: 'General Secretary', department: 'ORGANIZERS', deptColor: '#e0e0e0', status: 'ACTIVE' },
    { id: 'CM-002', name: 'SNEHA RAO', initials: 'SR', designation: 'Event Head', department: 'ORGANIZERS', deptColor: '#e0e0e0', status: 'ACTIVE' },
    { id: 'CM-003', name: 'VIVEK KUMAR', initials: 'VK', designation: 'Operations Lead', department: 'CORE TEAM', deptColor: '#00ffb4', status: 'ACTIVE' },
    { id: 'CM-015', name: 'KAVYA REDDY', initials: 'KR', designation: 'Finance Lead', department: 'CORE TEAM', deptColor: '#00ffb4', status: 'ACTIVE' },
    { id: 'CM-007', name: 'ZARA KHAN', initials: 'ZK', designation: 'Publicity Manager', department: 'MANAGERS', deptColor: '#ff6b9d', status: 'ACTIVE' },
    { id: 'CM-008', name: 'DEV SHARMA', initials: 'DS', designation: 'Sponsorship Manager', department: 'MANAGERS', deptColor: '#ff6b9d', status: 'ACTIVE' },
    { id: 'CM-009', name: 'TARA NAIR', initials: 'TN', designation: 'Logistics Manager', department: 'MANAGERS', deptColor: '#ff6b9d', status: 'ON MISSION' },
    { id: 'CM-010', name: 'KABIR MEHTA', initials: 'KM', designation: 'Social Media Lead', department: 'SOCIAL MEDIA', deptColor: '#ffa726', status: 'ACTIVE' },
    { id: 'CM-011', name: 'RIYA GUPTA', initials: 'RG', designation: 'Content Creator', department: 'SOCIAL MEDIA', deptColor: '#ffa726', status: 'ACTIVE' },
    { id: 'CM-012', name: 'AMIT VERMA', initials: 'AV', designation: 'Video Editor', department: 'SOCIAL MEDIA', deptColor: '#ffa726', status: 'ACTIVE' },
    { id: 'CM-004', name: 'ANIKA SINGH', initials: 'AS', designation: 'Lead Engineer', department: 'DEVELOPERS', deptColor: '#00d4ff', status: 'ACTIVE' },
    { id: 'CM-005', name: 'ROHAN DAS', initials: 'RD', designation: 'Backend Architect', department: 'DEVELOPERS', deptColor: '#00d4ff', status: 'ACTIVE' },
    { id: 'CM-006', name: 'MEERA IYER', initials: 'MI', designation: 'Frontend Engineer', department: 'DEVELOPERS', deptColor: '#00d4ff', status: 'ON MISSION' },
    { id: 'CM-013', name: 'DR. S. KUMAR', initials: 'SK', designation: 'Head of Department', department: 'FACULTY', deptColor: '#ffffff', status: 'ACTIVE' },
    { id: 'CM-014', name: 'PROF. R. DEVI', initials: 'RD', designation: 'Faculty coordinator', department: 'FACULTY', deptColor: '#ffffff', status: 'ACTIVE' },
];

const STUDENT_CATEGORIES = [
    { id: 'ORGANIZERS', label: 'Organizers' },
    { id: 'CORE TEAM', label: 'Core Team' },
    { id: 'MANAGERS', label: 'Managers' },
    { id: 'SOCIAL MEDIA', label: 'Social Media' },
    { id: 'DEVELOPERS', label: 'Developers' },
];

const departments = ['Students', 'Faculty'];

function CrewCard({ member, index }: { member: CrewMember; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative group cursor-pointer transition-all duration-700 ${hovered ? 'scale-[1.02] -translate-y-2' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {/* Holographic glowing orb behind the card on hover */}
            <div
                className={`absolute -inset-0.5 rounded-lg blur-xl opacity-0 transition-opacity duration-700 ${hovered ? 'opacity-100' : ''}`}
                style={{ background: `linear-gradient(45deg, ${member.deptColor}80, transparent, ${member.deptColor}80)` }}
            />

            <div
                className="relative h-full p-1 bg-[#050505] rounded-lg border border-white/10 overflow-hidden"
                style={{
                    borderColor: hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.08)',
                }}
            >
                {/* Inner glass layer */}
                <div className="relative h-full w-full bg-gradient-to-b from-white/[0.03] to-transparent p-5 rounded-md flex flex-col">
                    {/* Scan line */}
                    {hovered && (
                        <div
                            className="absolute inset-0 pointer-events-none opacity-50 z-0"
                            style={{
                                background: `linear-gradient(transparent 50%, ${member.deptColor}15 50%)`,
                                backgroundSize: '100% 4px',
                            }}
                        />
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                        {/* Top bar */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex flex-col">
                                <span className="text-[7px] font-mono text-white/30 tracking-[0.3em] mb-1">ID // NO.</span>
                                <span className="text-[10px] font-mono text-white/80 tracking-widest">{member.id}</span>
                            </div>
                            <div className="flex items-center gap-2 border border-white/10 px-2 py-1 bg-black/50">
                                <span className="text-[7px] font-mono tracking-[0.2em] uppercase" style={{ color: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726' }}>
                                    {member.status}
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726', boxShadow: `0 0 10px ${member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726'}` }} />
                            </div>
                        </div>

                        {/* Hexagon Avatar */}
                        <div className="flex justify-center mb-6 relative">
                            {/* Spinning ring around avatar on hover */}
                            <div className={`absolute inset-0 -mx-4 -my-4 border border-dashed rounded-full transition-all duration-1000 ${hovered ? 'animate-[spin_10s_linear_infinite] opacity-100' : 'opacity-0'}`} style={{ borderColor: `${member.deptColor}50` }} />

                            <div className="relative w-20 h-20 md:w-24 md:h-24 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
                                {/* Outer Hexagon (Border) */}
                                <div
                                    className="absolute inset-0 transition-colors duration-500"
                                    style={{
                                        clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                                        backgroundColor: hovered ? member.deptColor : 'rgba(255,255,255,0.15)'
                                    }}
                                />
                                {/* Inner Hexagon */}
                                <div
                                    className="absolute inset-[1px] flex items-center justify-center bg-[#0a0a0a] transition-all duration-500"
                                    style={{
                                        clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                                        boxShadow: hovered ? `inset 0 0 20px ${member.deptColor}50` : 'none',
                                    }}
                                >
                                    <div className="absolute inset-0 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${member.deptColor}20, transparent)`, opacity: hovered ? 1 : 0.5 }} />
                                    <span className="text-2xl md:text-3xl font-bold tracking-wider relative z-10 transition-all duration-500"
                                        style={{ fontFamily: "'Orbitron', monospace", color: hovered ? '#fff' : 'rgba(255,255,255,0.6)', textShadow: hovered ? `0 0 15px ${member.deptColor}` : 'none' }}>
                                        {member.initials}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Name & Designation */}
                        <div className="text-center mt-auto">
                            <h3 className="text-base md:text-lg font-bold text-white tracking-[0.15em] mb-1 uppercase drop-shadow-md" style={{ fontFamily: "'Orbitron', monospace" }}>
                                {member.name}
                            </h3>
                            <p className="text-[9px] md:text-[10px] font-mono text-white/40 tracking-widest uppercase mb-5">
                                {member.designation}
                            </p>
                        </div>

                        {/* Divider line */}
                        <div className="w-full h-px bg-white/10 mb-4 relative overflow-hidden">
                            <div className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out`} style={{ width: hovered ? '100%' : '20%', backgroundColor: member.deptColor }} />
                        </div>

                        {/* Department Tag */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1.5">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-1.5 h-3 skew-x-[-20deg] transition-all duration-300" style={{ backgroundColor: hovered ? `${member.deptColor}${i * 30 + 10}` : 'rgba(255,255,255,0.1)' }} />
                                ))}
                            </div>
                            <span className="text-[8px] md:text-[9px] font-mono tracking-[0.3em] uppercase bg-white/[0.03] backdrop-blur-md px-3 py-1.5 border transition-all duration-500"
                                style={{ color: hovered ? '#fff' : `${member.deptColor}90`, borderColor: hovered ? member.deptColor : `${member.deptColor}30`, textShadow: hovered ? `0 0 10px ${member.deptColor}` : 'none' }}>
                                {member.department}
                            </span>
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-colors duration-500" style={{ borderColor: hovered ? member.deptColor : 'transparent' }} />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-colors duration-500" style={{ borderColor: hovered ? member.deptColor : 'transparent' }} />
                </div>
            </div>
        </div>
    );
}

function FacultyCard({ member, index }: { member: CrewMember; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative group cursor-pointer transition-all duration-700 w-full ${hovered ? 'scale-[1.01] -translate-y-1' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div
                className={`absolute -inset-0.5 rounded-xl blur-2xl opacity-0 transition-opacity duration-700 ${hovered ? 'opacity-100' : ''}`}
                style={{ background: `linear-gradient(90deg, ${member.deptColor}40, transparent, ${member.deptColor}40)` }}
            />

            <div
                className="relative flex flex-col md:flex-row bg-[#030303] rounded-xl border border-white/10 overflow-hidden"
                style={{
                    borderColor: hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.08)',
                }}
            >
                {/* Background accent */}
                <div className="absolute inset-0 opacity-20 transition-opacity duration-700" style={{ background: `radial-gradient(circle at right, ${hovered ? member.deptColor : 'transparent'}, transparent 70%)` }} />

                {/* Scan line */}
                {hovered && (
                    <div
                        className="absolute inset-0 pointer-events-none opacity-40 z-10"
                        style={{
                            background: `linear-gradient(transparent 50%, ${member.deptColor}10 50%)`,
                            backgroundSize: '100% 4px',
                        }}
                    />
                )}

                <div className="p-6 md:p-10 flex items-center justify-center bg-black/60 border-b md:border-b-0 md:border-r border-white/10 relative z-20 overflow-hidden">
                    {/* Background grid in avatar section */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                    {/* Spinning ring around avatar on hover */}
                    <div className={`absolute inset-0 m-2 border-2 border-dashed rounded-full transition-all duration-1000 ${hovered ? 'animate-[spin_15s_linear_infinite] opacity-30' : 'opacity-0'}`} style={{ borderColor: member.deptColor }} />

                    {/* Hexagon Avatar */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                        {/* Outer Hexagon (Border) */}
                        <div
                            className="absolute inset-0 transition-colors duration-500"
                            style={{
                                clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                                backgroundColor: hovered ? member.deptColor : 'rgba(255,255,255,0.15)'
                            }}
                        />
                        <div
                            className="absolute inset-[2px] md:inset-[3px] flex items-center justify-center bg-[#0a0a0a]"
                            style={{
                                clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                            }}
                        >
                            <div className="absolute inset-0 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${member.deptColor}30, transparent)`, opacity: hovered ? 1 : 0.5 }} />
                            <span className="text-3xl md:text-5xl font-bold tracking-wider relative z-10 transition-all duration-500"
                                style={{ fontFamily: "'Orbitron', monospace", color: hovered ? '#fff' : 'rgba(255,255,255,0.6)', textShadow: hovered ? `0 0 20px ${member.deptColor}` : 'none' }}>
                                {member.initials}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow p-6 md:p-10 flex flex-col justify-center relative z-20">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase px-3 py-1.5 bg-white/5 border backdrop-blur-sm" style={{ borderColor: `${member.deptColor}40`, color: member.deptColor }}>
                                    {member.department}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border border-white/10 px-3 py-1 bg-black/50">
                            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/50">STATUS</span>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726', boxShadow: `0 0 10px ${member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726'}` }} />
                                <span className="text-[10px] font-mono tracking-[0.2em] font-bold" style={{ color: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726' }}>{member.status}</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-[0.1em] mb-3 uppercase" style={{ fontFamily: "'Orbitron', monospace", textShadow: hovered ? `0 0 30px ${member.deptColor}60` : 'none' }}>
                        {member.name}
                    </h3>

                    <div className="flex items-center gap-6 mt-2">
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-2 h-4 skew-x-[-20deg] transition-all duration-300" style={{ backgroundColor: hovered ? `${member.deptColor}${i * 20 + 10}` : 'rgba(255,255,255,0.1)' }} />
                            ))}
                        </div>
                        <div className="h-px bg-white/10 flex-grow relative overflow-hidden">
                            <div className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out`} style={{ width: hovered ? '100%' : '10%', backgroundColor: member.deptColor }} />
                        </div>
                        <p className="text-sm md:text-base font-mono text-white/70 tracking-widest uppercase whitespace-nowrap bg-black/50 px-3 py-1 rounded">
                            {member.designation}
                        </p>
                    </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] transition-colors duration-500 z-30" style={{ borderColor: hovered ? member.deptColor : 'transparent' }} />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] transition-colors duration-500 z-30" style={{ borderColor: hovered ? member.deptColor : 'transparent' }} />

                {/* Top right / bottom left subtle accents */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20 tracking-widest uppercase z-30 hidden md:block">
                    {member.id}
                </div>
            </div>
        </div>
    );
}

export default function HumansSection({ onBack }: { onBack?: () => void }) {
    const [activeDept, setActiveDept] = useState('Students');
    const containerRef = useRef<HTMLDivElement>(null);

    const facultyCrew = crew.filter((m) => m.department === 'FACULTY');
    const studentCrew = crew.filter((m) => m.department !== 'FACULTY');

    // Animation handlers for back button (same as AboutSection)
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
    };

    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
    };

    function CrewCategoryRow({ title, members }: { title: string; members: CrewMember[] }) {
        const scrollContainerRef = useRef<HTMLDivElement>(null);
        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [scrollLeft, setScrollLeft] = useState(0);
        const [isHovered, setIsHovered] = useState(false);
        const posRef = useRef(0);

        // Duplicate members to create enough length for an infinite scroll effect
        const marqueeMembers = [...members, ...members, ...members, ...members];

        useEffect(() => {
            const container = scrollContainerRef.current;
            if (!container) return;

            let animationFrameId: number;

            const scroll = () => {
                if (!isDragging && !isHovered) {
                    posRef.current += 0.5; // Adjust speed as needed
                    const setWidth = container.scrollWidth / 4;
                    if (posRef.current >= setWidth * 2) {
                        posRef.current -= setWidth;
                    }
                    container.scrollLeft = posRef.current;
                } else {
                    posRef.current = container.scrollLeft;
                }
                animationFrameId = requestAnimationFrame(scroll);
            };

            animationFrameId = requestAnimationFrame(scroll);
            return () => cancelAnimationFrame(animationFrameId);
        }, [isDragging, isHovered]);

        const onMouseDown = (e: React.MouseEvent) => {
            if (!scrollContainerRef.current) return;
            setIsDragging(true);
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
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
            const walk = (x - startX) * 2;
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        };

        if (members.length === 0) return null;

        return (
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8 px-4 md:px-0 max-w-6xl mx-auto">
                    <div className="h-4 w-1 bg-cyan-400" />
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em]"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        {title}
                    </h3>
                    <div className="h-px w-32 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                <div className="relative w-full group">
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-6 px-4 md:px-[15vw]"
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        style={{ scrollBehavior: 'auto' }}
                    >
                        <div className="flex w-max gap-4 md:gap-8">
                            {marqueeMembers.map((member, i) => (
                                <div key={`${member.id}-${i}`} className="w-[280px] md:w-[320px] flex-shrink-0" onClick={(e) => { if (isDragging) e.preventDefault(); }}>
                                    <CrewCard member={member} index={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section
            id="humans"
            ref={containerRef}
            data-lenis-prevent
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto overflow-x-hidden py-10 overscroll-contain"
            style={{ overscrollBehavior: 'contain' }}
        >
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* Background grid accent */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 255, 180, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 180, 0.5) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-10 md:mt-16 relative flex flex-col items-center justify-center min-h-[80px]">
                {/* Back Button positioned absolute on desktop, relative on mobile */}
                {onBack && (
                    <div className="mb-8 md:mb-0 md:absolute md:left-4 lg:left-8 z-20 w-fit self-center md:self-start md:top-1/2 md:-translate-y-1/2">
                        <button
                            onClick={onBack}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                            className="group flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white/50 hover:text-cyan-400 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="font-mono text-[10px] md:text-sm tracking-[0.25em] uppercase md:mt-1">Return</span>
                        </button>
                    </div>
                )}

                <div className="flex flex-col items-center justify-center z-10 w-full text-center md:px-32">
                    <span className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.4em] mb-3 uppercase">Manifest</span>
                    <h2
                        className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] leading-tight"
                        style={{ fontFamily: "'Orbitron', monospace" }}
                    >
                        PEOPLE AND THE<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">IDEAS BEHIND</span>
                    </h2>
                </div>
            </div>

            {/* Department Filter Tabs - Pill Style */}
            <div className="flex justify-center mb-8 md:mb-16 px-4 md:px-0">
                <div className="flex overflow-x-auto no-scrollbar max-w-full items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveDept(dept)}
                            className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-mono tracking-wider transition-all duration-300 whitespace-nowrap ${activeDept === dept
                                ? 'bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
            </div>

            {/* Faculty List (Visible only when Faculty tab is active) */}
            {activeDept === 'Faculty' && (
                <div className="max-w-6xl mx-auto flex flex-col gap-6 mb-16">
                    {facultyCrew.map((member, i) => (
                        <FacultyCard key={member.id} member={member} index={i} />
                    ))}
                </div>
            )}

            {/* Student Horizontal Lists */}
            {activeDept === 'Students' && (
                <div className="w-full">
                    {STUDENT_CATEGORIES.map((category) => (
                        <CrewCategoryRow
                            key={category.id}
                            title={category.label}
                            members={studentCrew.filter(m => m.department === category.id)}
                        />
                    ))}
                </div>
            )}

            {/* Join the crew CTA */}
            <div className="text-center mt-20 pb-16">
                <p className="text-white/40 font-mono text-sm mb-6">WANT TO BE PART OF THE LEGACY?</p>
                <a
                    href="mailto:team@verge2026.com"
                    className="inline-block px-8 py-3 border border-white/20 text-white/80 font-mono text-xs tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-full"
                >
                    [ JOIN THE CREW ]
                </a>
            </div>
        </section>
    );
}
