import { useState, useRef } from 'react';

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
      { time: '08:30', title: 'REGISTRATION & CHECK-IN', description: 'Participant Registration & Check-in', venue: 'MAIN ENTRANCE' },
      { time: '10:00', title: 'INAUGURAL CEREMONY', description: 'Inaugural Ceremony & Keynote Address', venue: 'MAIN AUDITORIUM' },
      { time: '11:00', title: 'ROOM ALLOCATION', description: 'Room Allocation for Participants', venue: 'RECEPTION' },
      { time: '12:00', title: 'SRM BUILDS 7.0', description: 'SRM Builds 7.0 Hackathon Begins - 23 hours', venue: 'HACKER SPACE' },
      { time: '12:15', title: 'DESIGN-A-TEE', description: 'Design Competition - 2 hours 15 mins', venue: 'DESIGN LAB' },
      { time: '12:30', title: 'INNOWAVE 2.0', description: 'Innovation Challenge - 4 hours 15 mins', venue: 'INNOVATION HUB' },
      { time: '12:45', title: 'ROBOLIGA', description: 'Robotics Competition - 1 hour 30 mins', venue: 'ARENA GROUND' },
      { time: '13:00', title: 'RAD 2.0', description: 'Rapid Application Development - 4 hours 30 mins', venue: 'LAB COMPLEX' },
      { time: '13:00', title: 'BRIDGE O MANIA', description: 'Bridge Building Competition - 1 hour 15 mins', venue: 'ENGINEERING HALL' },
      { time: '14:30', title: 'TRECERT', description: 'Technical Certification Event - 1 hour', venue: 'SEMINAR HALL' },
      { time: '14:30', title: 'MSME PANEL', description: 'MSME Industry Panel Discussion - 1 hour', venue: 'CONFERENCE ROOM' },
      { time: '15:45', title: 'REVVD', description: 'Automotive Event - 1 hour', venue: 'GROUND FLOOR' },
      { time: '16:00', title: 'SNAP SYNTAX', description: 'Coding Challenge - 1 hour 15 mins', venue: 'CS LAB' },
      { time: '17:00', title: 'RESULTS ANNOUNCEMENT', description: 'Results for Competitions Before 4 PM - 30 mins', venue: 'MAIN STAGE' },
      { time: '17:30', title: 'TRANSPORTATION', description: 'Transportation Services (Shuttle Services)', venue: 'PARKING LOT' },
      { time: '17:45', title: 'CODE BLITZ', description: 'Speed Coding Challenge - 1 hour 30 mins', venue: 'CS LAB' },
      { time: '18:30', title: 'BUG BOUNTY', description: 'Security Challenge - 2 hours 15 mins', venue: 'CYBER LAB' },
      { time: '21:15', title: 'ASTROPHOTOGRAPHY', description: 'Night Sky Photography Session - 1 hour', venue: 'ROOFTOP' },
      { time: '21:30', title: 'JAMMING SESSION', description: 'Music and Networking - 1 hour', venue: 'CENTRAL LAWN' },
    ],
  },
  {
    date: 'DAY 2 - 16TH FEB',
    events: [
      { time: '01:30', title: 'MURDER MYSTERY', description: 'Late Night Mystery Event - 2 hours', venue: 'MYSTERY HALL' },
      { time: '10:00', title: 'ARTISTIC AURA', description: 'Art Competition - 3 hours', venue: 'ART GALLERY' },
      { time: '10:00', title: 'VELOCITY', description: 'Speed Challenge - 3 hours', venue: 'RACING TRACK' },
      { time: '10:30', title: 'BIDDING WAR', description: 'Auction Strategy Game - 2 hours', venue: 'CONFERENCE HALL' },
      { time: '11:00', title: 'MEMOCRACY', description: 'Meme Making Competition - 1 hour 30 mins', venue: 'MEDIA LAB' },
      { time: '11:30', title: 'KURUKSHETRA', description: 'Strategy & Debate - 1 hour', venue: 'DEBATE HALL' },
      { time: '12:00', title: 'MARK I', description: 'Technical Event - 2 hours', venue: 'TECH HUB' },
      { time: '14:00', title: 'GUEST SPEAKER PANEL', description: 'Guest Speaker Panel Discussion - 3 hours', venue: 'MAIN AUDITORIUM' },
      { time: '17:00', title: 'AWARDS CEREMONY', description: 'Awards & Recognition Ceremony - 1 hour', venue: 'MAIN AUDITORIUM' },
      { time: '18:30', title: 'EVENT CONCLUSION', description: 'Event Conclusion & Transportation Services', venue: 'MAIN ENTRANCE' },
    ],
  },
];

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState(0);
  const [isScrollCaptured, setIsScrollCaptured] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dwellTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentDay = scheduleData[activeDay];

  const handleMouseEnter = () => {
    dwellTimerRef.current = setTimeout(() => {
      setIsScrollCaptured(true);
    }, 700); // 0.7 seconds dwell threshold
  };

  const handleMouseLeave = () => {
    if (dwellTimerRef.current) {
      clearTimeout(dwellTimerRef.current);
      dwellTimerRef.current = null;
    }
    setIsScrollCaptured(false);
  };

  return (
    <section className="h-screen w-full bg-black relative overflow-hidden flex flex-col">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center pt-24 pb-8 relative z-10">
        <div className="text-[10px] font-mono text-white/40 tracking-[0.3em] mb-4">
          EVENT SCHEDULE
        </div>
        <h2 className="text-3xl md:text-4xl font-mono text-white/90 tracking-wider">
          MISSION TIMELINE
        </h2>
      </div>

      {/* Day Tabs */}
      <div className="flex justify-center gap-6 pb-6 relative z-10">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`font-mono text-xs tracking-wider transition-all duration-300 ${activeDay === index
              ? 'text-cyan-400 border-b border-cyan-400'
              : 'text-white/40 hover:text-white/60'
              }`}
          >
            {day.date}
          </button>
        ))}
      </div>

      {/* Timeline Container - Scrollable Region */}
      <div
        className="flex-1 relative overflow-hidden mx-6 md:mx-12 lg:mx-24 mb-8"
        style={{ maxHeight: '60vh' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient fade top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

        {/* Gradient fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          {...(isScrollCaptured ? { 'data-lenis-prevent': true } : {})}
          className="h-full overflow-y-scroll px-4 transition-all duration-500"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: isScrollCaptured
              ? 'rgba(34, 211, 238, 0.5) transparent' // Cyan when captured
              : 'rgba(255, 255, 255, 0.1) transparent'
          }}
        >
          <div className="py-8 space-y-1">
            {currentDay.events.map((event, index) => (
              <div
                key={index}
                className="group relative flex items-stretch gap-6 py-4 border-b border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Time */}
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-2xl font-mono text-white/30 group-hover:text-cyan-400 transition-colors">
                    {event.time}
                  </span>
                </div>

                {/* Vertical Line & Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full border-2 border-white/30 group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all" />
                  {index < currentDay.events.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-2" />
                  )}
                </div>

                {/* Event Details */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-mono text-white/90 tracking-wider group-hover:text-white transition-colors">
                      {event.title}
                    </h3>
                    <span className="text-[9px] font-mono text-white/30 px-2 py-0.5 border border-white/20">
                      {event.venue}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-white/50 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
