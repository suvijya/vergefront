import { useState, useRef, useEffect } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import axios from 'axios';

// Cloudinary images replace the local ones.

interface CrewMember {
    id: string;
    name: string;
    initials: string;
    designation: string;
    department: string;
    deptColor: string;
    status: 'ACTIVE' | 'ON MISSION';
    image?: string;
    linkedin?: string;
    instagram?: string;
}

const STUDENT_CATEGORIES = [
    { id: 'ORGANIZERS', label: 'Organizers' },
    { id: 'CORE TEAM', label: 'Core Team' },
    { id: 'EVENT COORDINATORS', label: 'Event Coordinators' },
    { id: 'SOCIAL MEDIA', label: 'Social Media' },
    { id: 'DEVELOPERS', label: 'Developers' },
];

const departments = ['Students', 'Faculty'];

function CrewCard({ member, index }: { member: CrewMember; index: number }) {
    const [hovered, setHovered] = useState(false);


    return (
        <div
            className={`relative group h-full cursor-pointer transition-all duration-700 ${hovered ? 'scale-[1.02] -translate-y-2' : ''}`}
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

                    {/* Conditional render: If member has an image, render full card image layout. Otherwise, render default HUD layout. */}
                    {member.image ? (
                        <div className="relative flex flex-col h-full w-full">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/5] shrink-0 rounded overflow-hidden mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
                                />
                                {/* Bottom gradient for text readability (if any text were to overlap) */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />

                                {/* Hover Overlay with Icons */}
                                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hover:text-[#0077B5] transform hover:scale-110 active:scale-95"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Linkedin size={24} />
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hover:text-[#E1306C] transform hover:scale-110 active:scale-95"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Instagram size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Info Container */}
                            <div className="flex flex-col flex-grow text-left px-1 md:px-2 pb-1">
                                <h3 className="text-base md:text-xl font-bold text-white tracking-[0.1em] mb-0.5 uppercase" style={{ fontFamily: "'Orbitron', monospace" }}>
                                    {member.name}
                                </h3>
                                <p className="text-[10px] md:text-xs font-mono text-white/40 tracking-[0.2em] uppercase">
                                    {member.designation}
                                </p>
                                <div className="mt-auto w-full">
                                    <div className="h-px w-full bg-white/10 my-2 relative overflow-hidden mt-2 md:mt-3 mb-2 md:mb-3">
                                        <div className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out`} style={{ width: hovered ? '100%' : '20%', backgroundColor: member.deptColor }} />
                                    </div>
                                    <div className="flex justify-between items-center mt-1">
                                        <div className="flex items-center gap-2 border border-white/10 px-1.5 md:px-2 py-0.5 md:py-1 bg-black/50 rounded ml-auto">
                                            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726', boxShadow: `0 0 10px ${member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726'}` }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
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
                                        className="absolute inset-[1px] flex items-center justify-center bg-[#0a0a0a] transition-all duration-500 overflow-hidden"
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
                    )}

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

export default function HumansSection() {
    const [activeDept, setActiveDept] = useState('Students');
    const containerRef = useRef<HTMLDivElement>(null);
    const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);

    useEffect(() => {
        const ROLE_MAP: Record<string, { department: string; deptColor: string; designation: string }> = {
            'organizer': { department: 'ORGANIZERS', deptColor: '#e0e0e0', designation: 'Organizer' },
            'organizers': { department: 'ORGANIZERS', deptColor: '#e0e0e0', designation: 'Organizer' },
            'core team': { department: 'CORE TEAM', deptColor: '#00ffb4', designation: 'Core Member' },
            'manager': { department: 'EVENT COORDINATORS', deptColor: '#ff6b9d', designation: 'Event Coordinator' },
            'managers': { department: 'EVENT COORDINATORS', deptColor: '#ff6b9d', designation: 'Event Coordinator' },
            'manger': { department: 'EVENT COORDINATORS', deptColor: '#ff6b9d', designation: 'Event Coordinator' },
            'event coordinator': { department: 'EVENT COORDINATORS', deptColor: '#ff6b9d', designation: 'Event Coordinator' },
            'event coordinators': { department: 'EVENT COORDINATORS', deptColor: '#ff6b9d', designation: 'Event Coordinator' },
            'social media': { department: 'SOCIAL MEDIA', deptColor: '#ffa726', designation: 'Social Media' },
            'developers': { department: 'DEVELOPERS', deptColor: '#00d4ff', designation: 'Developer' },
            'developer': { department: 'DEVELOPERS', deptColor: '#00d4ff', designation: 'Developer' },
            'faculty': { department: 'FACULTY', deptColor: '#ff00ff', designation: 'Faculty' },
        };

        const fetchTeamData = async () => {
            try {
                const response = await axios.get('https://verge-2026-codebase-production.up.railway.app/api/team');
                const raw = response.data.data || response.data;
                const mapped: CrewMember[] = (Array.isArray(raw) ? raw : []).map((item: any, i: number) => {
                    const roleKey = (item.role || '').toLowerCase();
                    const roleInfo = ROLE_MAP[roleKey] || { department: roleKey.toUpperCase(), deptColor: '#888', designation: item.role || 'Member' };
                    const nameParts = (item.name || '').trim().split(/\s+/);
                    const initials = nameParts.length >= 2
                        ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
                        : (item.name || 'XX').substring(0, 2).toUpperCase();

                    return {
                        id: item._id || `CM-${i + 100}`,
                        name: (item.name || '').toUpperCase(),
                        initials,
                        designation: roleInfo.designation,
                        department: roleInfo.department,
                        deptColor: roleInfo.deptColor,
                        status: 'ACTIVE' as const,
                        image: item.photo || undefined,
                        linkedin: item.linkedin || undefined,
                        instagram: item.instagram || undefined,
                    };
                });
                setCrewMembers(mapped);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };
        fetchTeamData();
    }, []);

    const facultyCrew = crewMembers.filter((m) => m.department === 'FACULTY');
    const studentCrew = crewMembers.filter((m) => m.department !== 'FACULTY');

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
            <div className="mb-20 max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-4 w-1 bg-cyan-400" />
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em]"
                        style={{ fontFamily: "'Orbitron', monospace" }}>
                        {title}
                    </h3>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                <div className="relative w-full group overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-6"
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setIsHovered(false)}
                        style={{ scrollBehavior: 'auto' }}
                    >
                        <div className="flex items-stretch w-max gap-4 md:gap-8 pr-12">
                            {marqueeMembers.map((member, i) => (
                                <div key={`${member.id}-${i}`} className="w-[220px] md:w-[280px] flex-shrink-0" onClick={(e) => { if (isDragging) e.preventDefault(); }}>
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
            className="relative min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-0"
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

            {/* Department Filter Tabs - Absolute at top, scrolls with page */}
            <div className="absolute top-[110px] left-1/2 -translate-x-1/2 z-[60] flex justify-center px-4 w-full max-w-xl pointer-events-none">
                <div className="flex overflow-x-auto no-scrollbar items-center p-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl pointer-events-auto">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveDept(dept)}
                            className={`px-6 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-mono tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${activeDept === dept
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                                : 'text-white/50 hover:text-white border border-transparent hover:bg-white/5'
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full relative z-10 pt-28">

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
                        {STUDENT_CATEGORIES.map((category) => {
                            const members = studentCrew.filter(m => m.department === category.id);
                            if (members.length === 0) return null;

                            if (category.id === 'ORGANIZERS') {
                                return (
                                    <CrewCategoryRow
                                        key={category.id}
                                        title={category.label}
                                        members={members}
                                    />
                                );
                            }

                            return (
                                <div key={category.id} className="mb-20 max-w-7xl mx-auto px-6">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="h-4 w-1 bg-cyan-400" />
                                        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em]"
                                            style={{ fontFamily: "'Orbitron', monospace" }}>
                                            {category.label}
                                        </h3>
                                        <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                                        {members.map((member, i) => (
                                            <div key={member.id} className="aspect-[3.2/5]">
                                                <CrewCard member={member} index={i} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
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

            </div> {/* End Content Area */}
        </section>
    );
}
