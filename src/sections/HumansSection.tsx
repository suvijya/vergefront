import { useState } from 'react';

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
];

const departments = ['ALL', 'CORE', 'TECH', 'DESIGN', 'OUTREACH'];

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
                className={`relative p-5 bg-white/[0.02] backdrop-blur-sm border border-white/8 transition-all duration-500 overflow-hidden ${hovered ? 'translate-y-[-4px]' : ''
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
                            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500`}
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

export default function HumansSection() {
    const [activeDept, setActiveDept] = useState('ALL');

    const filteredCrew = activeDept === 'ALL' ? crew : crew.filter((m) => m.department === activeDept);

    const deptColorMap: Record<string, string> = {
        ALL: '#ffffff',
        CORE: '#00ffb4',
        TECH: '#00d4ff',
        DESIGN: '#ff6b9d',
        OUTREACH: '#ffa726',
    };

    return (
        <section id="humans" className="min-h-screen w-full bg-black py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background grid accent */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 255, 180, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 180, 0.5) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Section Header */}
            <div className="text-center mb-16 relative">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">
                        THE HUMANS BEHIND VERGE
                    </span>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <h2
                    className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-white mb-3"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 40px rgba(0, 255, 180, 0.1)',
                    }}
                >
                    CREW MANIFEST
                </h2>
                <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.3em]">
                        {crew.length} PERSONNEL
                    </span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/20" />
                </div>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
                {departments.map((dept) => (
                    <button
                        key={dept}
                        onClick={() => setActiveDept(dept)}
                        className={`px-4 py-2 text-[10px] font-mono tracking-[0.2em] border transition-all duration-300 ${activeDept === dept
                                ? 'bg-white/10 border-white/30'
                                : 'bg-transparent border-white/10 hover:bg-white/5'
                            }`}
                        style={{
                            color: activeDept === dept ? deptColorMap[dept] : 'rgba(255,255,255,0.4)',
                            borderColor: activeDept === dept ? `${deptColorMap[dept]}40` : undefined,
                        }}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            {/* Crew Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCrew.map((member, i) => (
                    <CrewCard key={member.id} member={member} index={i} />
                ))}
            </div>

            {/* Bottom stats bar */}
            <div className="max-w-3xl mx-auto mt-16 p-4 border border-white/5 bg-white/[0.02]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                        { label: 'CORE', count: crew.filter((c) => c.department === 'CORE').length, color: '#00ffb4' },
                        { label: 'TECH', count: crew.filter((c) => c.department === 'TECH').length, color: '#00d4ff' },
                        { label: 'DESIGN', count: crew.filter((c) => c.department === 'DESIGN').length, color: '#ff6b9d' },
                        { label: 'OUTREACH', count: crew.filter((c) => c.department === 'OUTREACH').length, color: '#ffa726' },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center gap-1">
                            <span
                                className="text-2xl font-bold"
                                style={{ fontFamily: "'Orbitron', monospace", color: stat.color }}
                            >
                                {stat.count}
                            </span>
                            <span className="text-[8px] font-mono text-white/30 tracking-[0.3em]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Join the crew CTA */}
            <div className="text-center mt-12">
                <a
                    href="mailto:team@verge2026.com"
                    className="inline-block px-8 py-3 border border-green-500/30 text-green-400/70 font-mono text-xs tracking-[0.3em] hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
                >
                    [ JOIN THE CREW ]
                </a>
            </div>
        </section>
    );
}
