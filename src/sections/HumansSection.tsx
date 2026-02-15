import { useState, useRef } from 'react';
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
    { id: 'CM-001', name: 'ARJUN PATEL', initials: 'AP', designation: 'Mission Commander', department: 'CORE', deptColor: '#00ffb4', status: 'ACTIVE' },
    { id: 'CM-002', name: 'SNEHA RAO', initials: 'SR', designation: 'Vice Commander', department: 'CORE', deptColor: '#00ffb4', status: 'ACTIVE' },
    { id: 'CM-003', name: 'VIVEK KUMAR', initials: 'VK', designation: 'Operations Lead', department: 'CORE', deptColor: '#00ffb4', status: 'ACTIVE' },
    { id: 'CM-004', name: 'ANIKA SINGH', initials: 'AS', designation: 'Lead Engineer', department: 'TECH', deptColor: '#00d4ff', status: 'ACTIVE' },
    { id: 'CM-005', name: 'ROHAN DAS', initials: 'RD', designation: 'Backend Architect', department: 'TECH', deptColor: '#00d4ff', status: 'ACTIVE' },
    { id: 'CM-006', name: 'MEERA IYER', initials: 'MI', designation: 'Frontend Engineer', department: 'TECH', deptColor: '#00d4ff', status: 'ON MISSION' },
    { id: 'CM-007', name: 'ZARA KHAN', initials: 'ZK', designation: 'Creative Director', department: 'DESIGN', deptColor: '#ff6b9d', status: 'ACTIVE' },
    { id: 'CM-008', name: 'DEV SHARMA', initials: 'DS', designation: 'UI/UX Lead', department: 'DESIGN', deptColor: '#ff6b9d', status: 'ACTIVE' },
    { id: 'CM-009', name: 'TARA NAIR', initials: 'TN', designation: 'Visual Designer', department: 'DESIGN', deptColor: '#ff6b9d', status: 'ON MISSION' },
    { id: 'CM-010', name: 'KABIR MEHTA', initials: 'KM', designation: 'Marketing Lead', department: 'OUTREACH', deptColor: '#ffa726', status: 'ACTIVE' },
    { id: 'CM-011', name: 'RIYA GUPTA', initials: 'RG', designation: 'PR Specialist', department: 'OUTREACH', deptColor: '#ffa726', status: 'ACTIVE' },
    { id: 'CM-012', name: 'AMIT VERMA', initials: 'AV', designation: 'Social Media Lead', department: 'OUTREACH', deptColor: '#ffa726', status: 'ACTIVE' },
    { id: 'CM-013', name: 'DR. S. KUMAR', initials: 'SK', designation: 'Head of Department', department: 'FACULTY', deptColor: '#ffffff', status: 'ACTIVE' },
    { id: 'CM-014', name: 'PROF. R. DEVI', initials: 'RD', designation: 'Faculty coordinator', department: 'FACULTY', deptColor: '#ffffff', status: 'ACTIVE' },
];

const departments = ['Students', 'Faculty'];

function CrewCard({ member, index }: { member: CrewMember; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div
                className={`relative p-3 md:p-5 bg-white/[0.02] backdrop-blur-sm border border-white/8 transition-all duration-500 overflow-hidden ${hovered ? 'translate-y-[-4px]' : ''
                    }`}
                style={{
                    borderColor: hovered ? `${member.deptColor}40` : 'rgba(255,255,255,0.08)',
                    boxShadow: hovered
                        ? `0 0 25px ${member.deptColor}15, inset 0 0 25px ${member.deptColor}05`
                        : 'none',
                }}
            >
                {/* Scan line */}
                {hovered && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(transparent 50%, ${member.deptColor}08 50%)`,
                            backgroundSize: '100% 4px',
                        }}
                    />
                )}

                {/* Top row: ID + Status */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[8px] font-mono text-white/20 tracking-[0.2em]">
                        {member.id}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <div
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{
                                backgroundColor: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726',
                                boxShadow: `0 0 6px ${member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726'}`,
                            }}
                        />
                        <span
                            className="text-[7px] font-mono tracking-[0.2em]"
                            style={{ color: member.status === 'ACTIVE' ? '#00ffb480' : '#ffa72680' }}
                        >
                            {member.status}
                        </span>
                    </div>
                </div>

                {/* Avatar */}
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <div
                            className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500`}
                            style={{
                                background: `linear-gradient(135deg, ${member.deptColor}20, ${member.deptColor}05)`,
                                border: `2px solid ${hovered ? `${member.deptColor}60` : 'rgba(255,255,255,0.08)'}`,
                                boxShadow: hovered ? `0 0 15px ${member.deptColor}20` : 'none',
                            }}
                        >
                            <span
                                className="text-lg font-bold tracking-wider transition-colors duration-300"
                                style={{
                                    fontFamily: "'Orbitron', monospace",
                                    color: hovered ? member.deptColor : 'rgba(255,255,255,0.4)',
                                }}
                            >
                                {member.initials}
                            </span>
                        </div>
                        {/* Thin ring */}
                        <div
                            className="absolute -inset-0.5 rounded-full border transition-colors duration-500"
                            style={{ borderColor: hovered ? `${member.deptColor}30` : 'transparent' }}
                        />
                    </div>
                </div>

                {/* Name */}
                <h3
                    className="text-sm font-bold text-white text-center tracking-[0.1em] mb-1"
                    style={{ fontFamily: "'Orbitron', monospace" }}
                >
                    {member.name}
                </h3>

                {/* Designation */}
                <p className="text-[10px] font-mono text-white/40 text-center tracking-wider mb-3">
                    {member.designation}
                </p>

                {/* Department tag */}
                <div className="flex justify-center">
                    <div
                        className="px-3 py-1 border text-[8px] font-mono tracking-[0.3em] text-center"
                        style={{
                            borderColor: `${member.deptColor}30`,
                            color: `${member.deptColor}90`,
                            backgroundColor: `${member.deptColor}08`,
                        }}
                    >
                        {member.department}
                    </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l transition-colors duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}40` : 'rgba(255,255,255,0.05)' }} />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r transition-colors duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}40` : 'rgba(255,255,255,0.05)' }} />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l transition-colors duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}40` : 'rgba(255,255,255,0.05)' }} />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r transition-colors duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}40` : 'rgba(255,255,255,0.05)' }} />
            </div>
        </div>
    );
}

function FacultyCard({ member, index }: { member: CrewMember; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative group w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div
                className={`relative w-full p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-white/[0.03] backdrop-blur-md border border-white/10 transition-all duration-500 overflow-hidden ${hovered ? 'translate-y-[-4px]' : ''
                    }`}
                style={{
                    borderColor: hovered ? `${member.deptColor}60` : 'rgba(255,255,255,0.1)',
                    boxShadow: hovered
                        ? `0 20px 50px -10px ${member.deptColor}20, inset 0 0 30px ${member.deptColor}05`
                        : 'none',
                }}
            >
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 transition-all duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.1)' }} />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-all duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.1)' }} />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 transition-all duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.1)' }} />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 transition-all duration-500"
                    style={{ borderColor: hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.1)' }} />

                {/* Avatar (Left side) */}
                <div className="relative flex-shrink-0">
                    <div
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-500`}
                        style={{
                            background: `linear-gradient(135deg, ${member.deptColor}20, ${member.deptColor}05)`,
                            border: `3px solid ${hovered ? `${member.deptColor}80` : 'rgba(255,255,255,0.1)'}`,
                            boxShadow: hovered ? `0 0 30px ${member.deptColor}30` : 'none',
                        }}
                    >
                        <span
                            className="text-3xl md:text-4xl font-bold tracking-wider transition-colors duration-300"
                            style={{
                                fontFamily: "'Orbitron', monospace",
                                color: hovered ? member.deptColor : 'rgba(255,255,255,0.5)',
                            }}
                        >
                            {member.initials}
                        </span>
                    </div>
                </div>

                {/* Info (Right side expansion) */}
                <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left pt-2">
                    {/* Name */}
                    <h3
                        className="text-2xl md:text-4xl font-bold text-white tracking-[0.1em] mb-3"
                        style={{ fontFamily: "'Orbitron', monospace" }}
                    >
                        {member.name}
                    </h3>

                    {/* Designation Badge */}
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: member.deptColor }} />
                        <p className="text-sm font-mono text-white/80 tracking-wider uppercase">
                            {member.designation}
                        </p>
                    </div>

                    {/* Status (Bottom aligned in desktop view) */}
                    <div className="mt-auto md:w-full flex justify-center md:justify-start">
                        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-white/40">
                            <span>STATUS:</span>
                            <span style={{ color: member.status === 'ACTIVE' ? '#00ffb4' : '#ffa726' }}>
                                {member.status}
                            </span>
                        </div>
                    </div>
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

    // deptColorMap removed as it is no longer used for the tabs styled with Tailwind classes

    // Animation handlers for back button (same as AboutSection)
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
    };

    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.2 });
    };

    return (
        <section
            id="humans"
            ref={containerRef}
            data-lenis-prevent
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto overflow-x-hidden py-10 px-6 md:px-12 overscroll-contain"
            style={{ overscrollBehavior: 'contain' }}
        >
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
            <div className="text-center mb-12 relative">
                {/* Back Button positioned absolutely for desktop, relatively for mobile */}
                {onBack && (
                    <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-8 md:mb-0 flex justify-center md:block">
                        <button
                            onClick={onBack}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                            className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                        >
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="font-mono text-xs tracking-widest hidden md:inline">RETURN</span>
                        </button>
                    </div>
                )}

                <h2
                    className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 inline-block"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                    }}
                >
                    PEOPLE AND THE IDEAS BEHIND
                </h2>
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

            {/* Student Grid (Visible always, or filterable if we add more tabs later) */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {studentCrew.map((member, i) => (
                    <CrewCard key={member.id} member={member} index={i} />
                ))}
            </div>

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
