import { useState, useRef, useEffect } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
// import axios from 'axios';

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

interface FacultyMember {
    _id: string;
    name: string;
    photo: string;
    linkedin: string;
    role: string;
    quote: string;
}

const STUDENT_CATEGORIES = [
    { id: 'ORGANIZERS', label: 'Organizers' },
    { id: 'CORE TEAM', label: 'Core Team' },
    { id: 'DEVELOPERS', label: 'Developers' },
    { id: 'EVENT COORDINATORS', label: 'Event Coordinators' },
    { id: 'SOCIAL MEDIA', label: 'Social Media' },
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

function FacultyCard({ member, index }: { member: FacultyMember; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative group cursor-pointer transition-all duration-700 w-full mb-8"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div
                className="relative h-full p-1 bg-[#050505] rounded-xl border border-white/10 overflow-hidden"
                style={{
                    borderColor: hovered ? 'rgba(16, 185, 129, 0.6)' : 'rgba(255,255,255,0.08)',
                }}
            >
                {/* Inner glass layer */}
                <div className="relative h-full w-full bg-gradient-to-b from-white/[0.03] to-transparent p-4 md:p-6 rounded-lg flex flex-col md:flex-row gap-6">
                    {/* Scan line */}
                    {hovered && (
                        <div
                            className="absolute inset-0 pointer-events-none opacity-30 z-0"
                            style={{
                                background: `linear-gradient(transparent 50%, rgba(16, 185, 129, 0.05) 50%)`,
                                backgroundSize: '100% 4px',
                            }}
                        />
                    )}

                    {/* Image Section */}
                    <div className="relative w-full md:w-[180px] aspect-square md:aspect-[1/1] shrink-0 rounded-lg overflow-hidden border border-white/10">
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-100"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col flex-grow text-left py-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-[0.1em] mb-1 uppercase" style={{ fontFamily: "'Orbitron', monospace" }}>
                                    {member.name}
                                </h3>
                                <p className="text-xs md:text-sm font-mono text-[#10b981] tracking-[0.2em] uppercase">
                                    {member.role || 'FACULTY'}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 border border-white/10 px-3 py-1 bg-black/50 rounded-sm self-start md:self-auto">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00ffb4] shadow-[0_0_10px_#00ffb4]" />
                                <span className="text-[10px] font-mono text-[#00ffb4] tracking-widest uppercase font-bold">ACTIVE</span>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="relative mb-4 flex-grow">
                            <div className="absolute -left-4 -top-2 text-3xl text-white/5 font-serif pointer-events-none select-none">"</div>
                            <p className="text-sm text-white/60 italic leading-snug tracking-wide">
                                {member.quote || "Dedicated to mentoring students and pushing the boundaries of engineering excellence."}
                            </p>
                        </div>

                        {/* Decoration & Design Consistency */}
                        <div className="mt-auto w-full">
                            <div className="h-px w-full bg-white/10 my-4 relative overflow-hidden">
                                <div className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out`} style={{ width: hovered ? '100%' : '15%', backgroundColor: '#10b981' }} />
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-1.5 h-3 skew-x-[-20deg] transition-all duration-300" style={{ backgroundColor: hovered ? `rgba(16, 185, 129, ${i * 0.3})` : 'rgba(255,255,255,0.05)' }} />
                                        ))}
                                    </div>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 border border-white/10 px-3 py-1.5 bg-black/50 rounded-full transition-all duration-300 relative z-20 text-white/40 ${hovered ? 'border-[#0077B5]/40 text-white/80 [text-shadow:0_0_10px_#0077B5]' : ''} hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] hover:shadow-[0_0_20px_#0077B5]`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {/* <span className="text-[10px] font-mono tracking-widest uppercase font-bold">LinkedIn</span> */}
                                            <Linkedin size={14} className={hovered ? 'drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : ''} />
                                        </a>
                                    )}
                                </div>
                                <span className="text-[8px] font-mono text-white/20 tracking-[0.4em] uppercase">FACULTY // 00{index + 1}</span>
                            </div>
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-colors duration-500" style={{ borderColor: hovered ? 'rgba(16, 185, 129, 0.4)' : 'transparent' }} />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-colors duration-500" style={{ borderColor: hovered ? 'rgba(16, 185, 129, 0.4)' : 'transparent' }} />
                </div>
            </div>
        </div>
    );
}

export default function HumansSection() {
    const [activeDept, setActiveDept] = useState('Students');
    const containerRef = useRef<HTMLDivElement>(null);
    const [crewMembers, setCrewMembers] = useState<CrewMember[]>([]);
    const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);

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
            'faculty': { department: 'FACULTY', deptColor: '#10b981', designation: 'Faculty' },
        };

        // --- STATIC DATA REPLACEMENT ---
        const students = [
            {"_id":{"$oid":"6997e77a9a604cd620cb5b21"},"name":"Suvijya Arya","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273118/ddf7irhe5ehsvimqse7h.jpg","linkedin":"https://www.linkedin.com/in/suvijya-arya-564404325","instagram":"https://www.instagram.com/suvijyaarya","email":"tech.suvijyaarya@gmail.com","contact":"+91 82873 35130"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b1d"},"name":"SHIVAM JAISWAL","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1773170714/tmyf0ma7kytauwfpsink.jpg","linkedin":"https://www.linkedin.com/in/shivv-jaiswal/","instagram":"https://www.instagram.com/shivv_jaiswal/","email":"contact.shivamj@gmail.com","contact":"+91 75420 52390"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b2a"},"name":"Vanshika Jain","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273125/ulqfb0qxdajawrlirrew.jpg","linkedin":"https://www.linkedin.com/in/vanshika-jain-2105vj/","instagram":"https://www.instagram.com/alwaysvanshikaaa","email":"21vanshikajain2005@gmail.com","contact":"+91 97112 80104"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b1b"},"name":"Ashish Kumar","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273128/e4d2407kjdi0pwhlpk8z.jpg","linkedin":"https://www.linkedin.com/in/ashish-kumar-8059b5302","instagram":"https://www.instagram.com/ashish_chaurasiya27","email":"rishukumarchaurasiya44@gmail.com","contact":"+91 99311 90218"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b1c"},"name":"Agrim Sangotra","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1771583465/xgrv2sextfeqyccpj2io.jpg","linkedin":"https://www.linkedin.com/in/agrim-sangotra/","instagram":"https://www.instagram.com/agrxim","email":"sagrim510@gmail.com","contact":"+91 97972 40270"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b24"},"name":"Saksham Malik","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273131/zosr4zhijinlmozlkrqx.jpg","linkedin":"https://www.linkedin.com/in/maliksaksham/","instagram":"https://www.instagram.com/_sakshammalik_","email":"maliksak34@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b2e"},"name":"Mishka Gupta","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273134/h86hllvykoxut5xyfngx.jpg","linkedin":"https://www.linkedin.com/in/mishka-gupta-a56332314","instagram":"https://www.instagram.com/msk_gpt_","email":"mskgpt2006@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b2c"},"name":"Shreyambika Narayanan","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273137/sog29qcf5vjbfura9el3.jpg","linkedin":null,"instagram":"https://www.instagram.com/Shreyambika_narayanan","email":"shreyambika6040@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b2d"},"name":"Sanskar Bhadani","role":"developers","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273141/wedmdo8bix4qonqu9z3h.jpg","linkedin":"https://www.linkedin.com/in/sanskar-bhadani-1a4810290","instagram":"https://www.instagram.com/sanskarbhadani08","email":"sanskarbhadani08@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b2f"},"name":"Vritti Garg","role":"manager","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273144/pljqokx2d72xy6ydvqoy.jpg","linkedin":"https://www.linkedin.com/in/vrittigarg","instagram":"https://www.instagram.com/vritti.garg","email":"vritti4th@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b22"},"name":"Divyanka Kirola","role":"manager","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273147/fueh0ofuhlerr6fevang.jpg","linkedin":"https://www.linkedin.com/in/divyanka-kirola-b70236293","instagram":"https://www.instagram.com/divyankakirola_03","email":"divyankakirola03@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b23"},"name":"Yug Kukreja","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273150/ov3bagbww7hpaiwi2edp.jpg","linkedin":"https://www.linkedin.com/in/yug-kukreja-646170329/","instagram":"https://www.instagram.com/yug_kukreja","email":"yugkukreja808@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b28"},"name":"Yash Goyal","role":"developers","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273153/ne64yyxnsnnz0jurghcd.jpg","linkedin":"https://www.linkedin.com/in/yash-4152466de","instagram":"https://www.instagram.com/techie_yash/","email":"goyalyash144@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b25"},"name":"Anshul Yadav","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273157/biwtfxn119bpu01a38xn.jpg","linkedin":"https://www.linkedin.com/in/anshul-yadav-3a7b4b293/","instagram":"https://www.instagram.com/iam.anshulyadav/","email":"42223210018@stu.srmuniversity.ac.in"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b29"},"name":"Harsith Chandrasekaran","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273160/cycutmo1q7er5gn9pndy.jpg","linkedin":"https://www.linkedin.com/in/harsith-chandrasekaran-492a66298","instagram":"https://www.instagram.com/hari_cnd","email":"harsithchandrasekar24@gmail.com","contact":"+91 75581 12196"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b2b"},"name":"Satyam Patel","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273164/wbg4bf9mi5o4iwszj20q.jpg","linkedin":"https://www.linkedin.com/in/satyam-patel-024671351?utm_source=share_via&utm_content=profile&utm_medium=member_ios","instagram":"https://www.instagram.com/_whyyysamm_","email":"satyampatel62005@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b1e"},"name":"Nivedita Tiwari","role":"social media","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273167/manidyszfjurtumgpbkt.jpg","linkedin":null,"instagram":"https://www.instagram.com/nivedita7tiwari","email":"nivedita7tiwari@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b20"},"name":"Anmol Sinha","role":"developers","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1771666022/u9vqs2mxfrrqnaq15f5n.jpg","linkedin":"https://www.linkedin.com/in/anmolsinha21/","instagram":"https://www.instagram.com/anmolsinha21","email":"anmolsinha345@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b26"},"name":"Bhumani R. M.","role":"social media","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273170/epntuyfyeukirblhfmck.jpg","linkedin":"https://www.linkedin.com/in/bhumani-muduli-4637b7297","instagram":"https://www.instagram.com/bhumanirmuduli","email":"bhumanirmuduli@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b27"},"name":"Rishav Prasad","role":"manager","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273173/lhohxkixq8lbgf8mputn.webp","linkedin":"https://www.linkedin.com/in/rishav-prasad154","instagram":null,"email":"rishav15045@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b30"},"name":"Harsh Vardhan Sharma","role":"developers","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273177/ywrsnjzsq3ebnoyi1jsd.jpg","linkedin":"https://www.linkedin.com/harsheez","instagram":"https://www.instagram.com/nothersheyz","email":"harsh.vsharma1515@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b1f"},"name":"PRANJAL SHARMA","role":"social media","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273181/cumdp3chkbcgpseujcyi.jpg","linkedin":"https://www.linkedin.com/in/pranjal-sharma-81b27b326","instagram":"https://www.instagram.com/pranjal.3895","email":"pranjal.3895@gmail.com"},
            {"_id":{"$oid":"6997e77a9a604cd620cb5b31"},"name":"Deepanshi Kaushik","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772273184/n0xhronihsmsh1ek3gp1.jpg","linkedin":"https://www.linkedin.com/in/deepanshi-kaushik-935a89282","instagram":"https://www.instagram.com/deepu04._","email":"11823210012@stu.srmuniversity.ac.in"},
            {"_id":{"$oid":"69a522f81f1186528829a132"},"name":"Karuna","role":"organizer","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772430699/qdozkazekujtymjimwlt.jpg","linkedin":"https://www.linkedin.com/in/karunaleekha/","instagram":"https://www.instagram.com/karuna_leekha/","email":"karunaleekha18@gmail.com","contact":"+91 8860128014"},
            {"_id":{"$oid":"69aa538bb51d9c55f476dbcf"},"name":"Abhimanyu","role":"social media","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772769830/viwoptudl431jxgtrb97.jpg","linkedin":"https://www.linkedin.com/in/abhimanyu-saini-358573387/","instagram":"https://www.instagram.com/abhimxnyyuu_","email":"sainiabhimanyu155@gmail.com"},
            {"_id":{"$oid":"69abd178e6b3302cbcdb78d2"},"name":"Shaurya Ujjwal","role":"core team","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772868070/g51zo83g5mznhranqb6q.png","linkedin":"https://www.linkedin.com/in/shaurya-ujjwal-3b493930b/","instagram":"https://www.instagram.com/shaurya_ujjwal","email":"shauryaujjwal07@gmail.com"},
            {"_id":{"$oid":"69ac6ba0e6b3302cbcdb78d3"},"name":"Akul Singh Bisht","role":"developers","photo":"https://res.cloudinary.com/dkidiafve/image/upload/v1772907303/ptmdbp9aezsi1zfcvprn.jpg","linkedin":"https://www.linkedin.com/in/akul-singh-bisht-46207b398","instagram":"https://www.instagram.com/wzz.akul/","email":"guestguest1251@gmail.com"}
        ];

        const faculty = [
            {
                "_id": { "$oid": "69ac81cd64c56e8a2038a1d4" },
                "name": "Dr. M. Mohan",
                "photo": "https://res.cloudinary.com/dkidiafve/image/upload/v1772913990/tloyfhuwkjvrgij8nild.png",
                "linkedin": "https://www.linkedin.com/in/dr-m-mohan-51534a220/",
                "role": "faculty coordinator",
                "quote": "A great engineering college isn’t built by its labs or buildings, but by faculty who turn curiosity into capability and students into problem-solvers."
            },
            {
                "_id": { "$oid": "69ac81cd64c56e8a2038a1d5" },
                "name": "(Prof.) Dr. Ajay Sharma",
                "photo": "https://res.cloudinary.com/dkidiafve/image/upload/v1772913708/ajay-sir_r3nfqk.jpg",
                "linkedin": "https://www.linkedin.com/in/dr-ajay-sharma-3619021b/",
                "role": "convener",
                "quote": "Engineering faculty don’t just teach formulas and theories—they shape the mindset that builds bridges, powers cities, and solves tomorrow’s problems."
            }
        ];

        // Map Team Data (Students)
        const mappedTeam: CrewMember[] = (Array.isArray(students) ? students : [])
            .map((item: any, i: number) => {
                const roleKey = (item.role || '').toLowerCase();
                const roleInfo = ROLE_MAP[roleKey] || { department: roleKey.toUpperCase(), deptColor: '#888', designation: item.role || 'Member' };
                const nameParts = (item.name || '').trim().split(/\s+/);
                const initials = nameParts.length >= 2
                    ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
                    : (item.name || 'XX').substring(0, 2).toUpperCase();

                return {
                    id: item._id?.$oid || item._id || `CM-${i + 100}`,
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
            })
            .filter(m => m.department !== 'FACULTY')
            // Sort so that DEVELOPERS comes after CORE TEAM and before others, matching STUDENT_CATEGORIES order
            .sort((a, b) => {
                const order = (dept: string) => {
                    if (dept === 'ORGANIZERS') return 1;
                    if (dept === 'CORE TEAM') return 2;
                    if (dept === 'DEVELOPERS') return 3;
                    if (dept === 'EVENT COORDINATORS') return 4;
                    if (dept === 'SOCIAL MEDIA') return 5;
                    return 99;
                };
                const deptOrder = order(a.department) - order(b.department);
                if (deptOrder !== 0) return deptOrder;
                // If both are developers, put Anmol Sinha first
                if (a.department === 'DEVELOPERS' && b.department === 'DEVELOPERS') {
                    if (a.name === 'ANMOL SINHA') return -1;
                    if (b.name === 'ANMOL SINHA') return 1;
                }
                return 0;
            });

        // Map & Sort Faculty Data
        let mappedFaculty: FacultyMember[] = Array.isArray(faculty)
            ? faculty.map((f: any, i: number) => ({
                _id: typeof f._id === 'string' ? f._id : (f._id?.$oid || `FM-${i + 1}`),
                name: f.name,
                photo: f.photo,
                linkedin: f.linkedin,
                role: f.role,
                quote: f.quote,
            }))
            : [];

        // Custom sorting: faculty coordinator > convener > all co-convener
        const roleOrder: Record<string, number> = {
            'faculty coordinator': 1,
            'convener': 2,
            'co-convener': 3,
            'co convener': 3
        };

        mappedFaculty = [...mappedFaculty].sort((a, b) => {
            const orderA = roleOrder[(a.role || '').toLowerCase()] || 99;
            const orderB = roleOrder[(b.role || '').toLowerCase()] || 99;
            return orderA - orderB;
        });

        setCrewMembers(mappedTeam);
        setFacultyMembers(mappedFaculty);
    }, []);

    const studentCrew = crewMembers;
    const facultyCrew = facultyMembers;

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
                    <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8 mb-16">
                        {facultyCrew.map((member, i) => (
                            <FacultyCard key={member._id} member={member} index={i} />
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
                {/* <div className="text-center mt-20 pb-16">
                    <p className="text-white/40 font-mono text-sm mb-6">WANT TO BE PART OF THE LEGACY?</p>
                    <a
                        href="mailto:team@verge2026.com"
                        className="inline-block px-8 py-3 border border-white/20 text-white/80 font-mono text-xs tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-full"
                    >
                        [ JOIN THE CREW ]
                    </a>
                </div> */}

            </div> {/* End Content Area */}
        </section>
    );
}
