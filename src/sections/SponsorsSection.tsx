import { useState } from 'react';

interface Sponsor {
    name: string;
    tagline: string;
    tier: 'title' | 'platinum' | 'gold' | 'silver';
}

const sponsors: Sponsor[] = [
    { name: 'NEXUS CORP', tagline: 'Powering the Future', tier: 'title' },
    { name: 'STELLAR DYNAMICS', tagline: 'Beyond Boundaries', tier: 'platinum' },
    { name: 'QUANTUM LABS', tagline: 'Innovation Redefined', tier: 'platinum' },
    { name: 'VOIDTECH', tagline: 'Deep Space Solutions', tier: 'platinum' },
    { name: 'AETHER SYSTEMS', tagline: 'Cloud Infrastructure', tier: 'gold' },
    { name: 'NOVA NETWORKS', tagline: 'Connected Everywhere', tier: 'gold' },
    { name: 'ORBITAL AI', tagline: 'Intelligence Amplified', tier: 'gold' },
    { name: 'PULSE ENERGY', tagline: 'Sustainable Power', tier: 'gold' },
    { name: 'DARKSTAR FINANCE', tagline: 'Funding Innovation', tier: 'silver' },
    { name: 'HELIX BIOTECH', tagline: 'Life Sciences', tier: 'silver' },
    { name: 'PRISM MEDIA', tagline: 'Digital Storytelling', tier: 'silver' },
    { name: 'ZENITH MOTORS', tagline: 'Electric Mobility', tier: 'silver' },
    { name: 'CORTEX SECURITY', tagline: 'Cyber Defense', tier: 'silver' },
    { name: 'FLUX STUDIOS', tagline: 'Creative Technology', tier: 'silver' },
];

const tierConfig = {
    title: { label: 'TITLE SPONSOR', color: '#ffd700', glow: 'rgba(255, 215, 0, 0.3)', borderColor: 'border-yellow-500/40' },
    platinum: { label: 'PLATINUM', color: '#e5e4e2', glow: 'rgba(229, 228, 226, 0.2)', borderColor: 'border-white/30' },
    gold: { label: 'GOLD', color: '#c9a84c', glow: 'rgba(201, 168, 76, 0.15)', borderColor: 'border-yellow-700/30' },
    silver: { label: 'SILVER', color: '#8a8a8a', glow: 'rgba(138, 138, 138, 0.1)', borderColor: 'border-white/15' },
};

function SponsorCard({ sponsor, index }: { sponsor: Sponsor; index: number }) {
    const [hovered, setHovered] = useState(false);
    const config = tierConfig[sponsor.tier];
    const isTitle = sponsor.tier === 'title';

    return (
        <div
            className={`relative group transition-all duration-500 ${isTitle ? 'col-span-full' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div
                className={`relative p-6 ${isTitle ? 'p-10' : 'p-6'} bg-white/[0.03] backdrop-blur-sm border ${config.borderColor} transition-all duration-500 overflow-hidden`}
                style={{
                    boxShadow: hovered ? `0 0 40px ${config.glow}, inset 0 0 40px ${config.glow}` : 'none',
                }}
            >
                {/* Scan line effect on hover */}
                {hovered && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(transparent 50%, ${config.glow} 50%)`,
                            backgroundSize: '100% 4px',
                            opacity: 0.05,
                        }}
                    />
                )}

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l transition-colors duration-500"
                    style={{ borderColor: hovered ? config.color : 'rgba(255,255,255,0.1)' }} />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r transition-colors duration-500"
                    style={{ borderColor: hovered ? config.color : 'rgba(255,255,255,0.1)' }} />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l transition-colors duration-500"
                    style={{ borderColor: hovered ? config.color : 'rgba(255,255,255,0.1)' }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-colors duration-500"
                    style={{ borderColor: hovered ? config.color : 'rgba(255,255,255,0.1)' }} />

                {/* Tier badge */}
                <div className="flex items-center gap-2 mb-4">
                    <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: config.color, boxShadow: `0 0 8px ${config.color}` }}
                    />
                    <span className="text-[9px] font-mono tracking-[0.3em]" style={{ color: config.color }}>
                        {config.label}
                    </span>
                </div>

                {/* Logo placeholder */}
                <div className={`flex items-center justify-center ${isTitle ? 'h-32' : 'h-20'} mb-4`}>
                    <span
                        className={`${isTitle ? 'text-4xl' : 'text-xl'} font-bold tracking-[0.2em] transition-colors duration-300`}
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            color: hovered ? config.color : 'rgba(255,255,255,0.7)',
                            textShadow: hovered ? `0 0 20px ${config.glow}` : 'none',
                        }}
                    >
                        {sponsor.name}
                    </span>
                </div>

                {/* Tagline */}
                <p className="text-[10px] font-mono text-white/40 tracking-wider text-center">
                    {sponsor.tagline}
                </p>

                {/* Status indicator */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-[8px] font-mono text-white/20 tracking-widest">PARTNER</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
            </div>
        </div>
    );
}

export default function SponsorsSection() {
    const titleSponsors = sponsors.filter((s) => s.tier === 'title');
    const platinumSponsors = sponsors.filter((s) => s.tier === 'platinum');
    const goldSponsors = sponsors.filter((s) => s.tier === 'gold');
    const silverSponsors = sponsors.filter((s) => s.tier === 'silver');

    return (
        <section id="sponsors" className="min-h-screen w-full bg-black py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background orbital dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white/10"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Section Header */}
            <div className="text-center mb-20 relative">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">
                        ALLIED FORCES
                    </span>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                </div>
                <h2
                    className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-white mb-3"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        textShadow: '0 0 40px rgba(255, 215, 0, 0.1)',
                    }}
                >
                    MISSION PARTNERS
                </h2>
                <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.3em]">
                        {sponsors.length} ORGANIZATIONS
                    </span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
                </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Title Sponsors */}
                {titleSponsors.length > 0 && (
                    <div className="grid grid-cols-1 gap-6">
                        {titleSponsors.map((s, i) => (
                            <SponsorCard key={s.name} sponsor={s} index={i} />
                        ))}
                    </div>
                )}

                {/* Tier Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-[8px] font-mono text-white/20 tracking-[0.5em]">◆</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Platinum Sponsors */}
                {platinumSponsors.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {platinumSponsors.map((s, i) => (
                            <SponsorCard key={s.name} sponsor={s} index={i} />
                        ))}
                    </div>
                )}

                {/* Tier Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-[8px] font-mono text-white/20 tracking-[0.5em]">◆</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Gold Sponsors */}
                {goldSponsors.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {goldSponsors.map((s, i) => (
                            <SponsorCard key={s.name} sponsor={s} index={i} />
                        ))}
                    </div>
                )}

                {/* Tier Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-[8px] font-mono text-white/20 tracking-[0.5em]">◆</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Silver Sponsors */}
                {silverSponsors.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {silverSponsors.map((s, i) => (
                            <SponsorCard key={s.name} sponsor={s} index={i} />
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20">
                <a
                    href="mailto:sponsors@verge2026.com"
                    className="inline-block px-8 py-3 border border-yellow-600/30 text-yellow-500/70 font-mono text-xs tracking-[0.3em] hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all duration-300"
                >
                    [ BECOME A PARTNER ]
                </a>
            </div>
        </section>
    );
}
