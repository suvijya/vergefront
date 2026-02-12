import { useState } from 'react';

interface Speaker {
    id: string;
    name: string;
    initials: string;
    role: string;
    affiliation: string;
    topic: string;
    topicTag: string;
}

const speakers: Speaker[] = [
    {
        id: 'SP-01',
        name: 'DR. ARIA CHEN',
        initials: 'AC',
        role: 'Chief AI Researcher',
        affiliation: 'QUANTUM LABS',
        topic: 'The Singularity Equation',
        topicTag: 'AI',
    },
    {
        id: 'SP-02',
        name: 'MARCUS WOLF',
        initials: 'MW',
        role: 'CTO',
        affiliation: 'STELLAR DYNAMICS',
        topic: 'Systems That Scale to a Billion',
        topicTag: 'ARCHITECTURE',
    },
    {
        id: 'SP-03',
        name: 'PRIYA SHARMA',
        initials: 'PS',
        role: 'Founder & CEO',
        affiliation: 'NOVA NETWORKS',
        topic: 'Zero to IPO: Startup Survival',
        topicTag: 'STARTUP',
    },
    {
        id: 'SP-04',
        name: 'KAI NAKAMURA',
        initials: 'KN',
        role: 'Security Lead',
        affiliation: 'CORTEX SECURITY',
        topic: 'Modern Offensive Security',
        topicTag: 'CYBER',
    },
    {
        id: 'SP-05',
        name: 'ELENA VOSS',
        initials: 'EV',
        role: 'VP of Engineering',
        affiliation: 'AETHER SYSTEMS',
        topic: 'Edge Computing & Beyond',
        topicTag: 'CLOUD',
    },
    {
        id: 'SP-06',
        name: 'RAJAN MEHTA',
        initials: 'RM',
        role: 'Robotics Director',
        affiliation: 'PULSE ENERGY',
        topic: 'Autonomy at Scale',
        topicTag: 'ROBOTICS',
    },
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={`relative px-4 py-4 bg-white/[0.02] border transition-all duration-400 ${hovered ? 'border-cyan-500/25 bg-white/[0.04]' : 'border-white/[0.06]'
                    }`}
            >
                {/* Row layout: avatar | info */}
                <div className="flex items-center gap-3">
                    {/* Compact avatar */}
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-400 ${hovered ? 'shadow-[0_0_12px_rgba(0,200,255,0.2)]' : ''
                            }`}
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,200,255,0.12), rgba(0,100,200,0.04))',
                            border: `1.5px solid ${hovered ? 'rgba(0,200,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                        }}
                    >
                        <span
                            className="text-[11px] font-bold tracking-wider"
                            style={{
                                fontFamily: "'Orbitron', monospace",
                                color: hovered ? 'rgba(0,220,255,0.9)' : 'rgba(255,255,255,0.4)',
                            }}
                        >
                            {speaker.initials}
                        </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                            <h3
                                className="text-xs font-bold text-white tracking-[0.08em] truncate"
                                style={{ fontFamily: "'Orbitron', monospace" }}
                            >
                                {speaker.name}
                            </h3>
                        </div>
                        <p className="text-[9px] font-mono text-white/35 tracking-wider truncate">
                            {speaker.role} · {speaker.affiliation}
                        </p>
                    </div>

                    {/* Tag */}
                    <div className="flex-shrink-0 px-2 py-0.5 border border-cyan-500/15 bg-cyan-500/[0.04]">
                        <span className="text-[7px] font-mono text-cyan-400/60 tracking-[0.2em]">
                            {speaker.topicTag}
                        </span>
                    </div>
                </div>

                {/* Topic — compact one-liner */}
                <div className="mt-2.5 pl-[52px]">
                    <p className="text-[10px] font-mono text-white/50 truncate">
                        "{speaker.topic}"
                    </p>
                </div>

                {/* Subtle corner accents */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-cyan-500/15" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-cyan-500/15" />
            </div>
        </div>
    );
}

export default function SpeakersSection() {
    return (
        <section id="speakers" className="w-full bg-black py-20 px-6 md:px-12 relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.05) 0%, transparent 50%)',
                }}
            />

            {/* Header */}
            <div className="text-center mb-12 relative">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.4em]">
                        KEYNOTES & TALKS
                    </span>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/20" />
                </div>
                <h2
                    className="text-3xl md:text-4xl font-bold tracking-[0.12em] text-white"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 30px rgba(0,200,255,0.08)',
                    }}
                >
                    SPEAKERS
                </h2>
                <p className="text-[9px] font-mono text-white/25 tracking-[0.3em] mt-2">
                    {speakers.length} CONFIRMED
                </p>
            </div>

            {/* 3-col grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {speakers.map((speaker) => (
                    <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}
            </div>

            {/* Bottom line */}
            <div className="flex items-center justify-center gap-3 mt-10">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/8" />
                <span className="text-[7px] font-mono text-white/15 tracking-[0.5em]">
                    MORE SPEAKERS COMING SOON
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/8" />
            </div>
        </section>
    );
}
