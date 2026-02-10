import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import earthImg from '../assets/earth.png';

interface EventStats {
  coding: number;
  robotics: number;
  gaming: number;
  workshops: number;
}

export default function DataDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const [prizePool, setPrizePool] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [stats, setStats] = useState<EventStats>({
    coding: 0,
    robotics: 0,
    gaming: 0,
    workshops: 0,
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Main scroll timeline
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=70%',
        pin: true,
        scrub: 1,
      },
    });

    // Animate debris count and year
    scrollTl.to(
      {},
      {
        duration: 1,
        onUpdate: function () {
          const progress = this.progress();
          const newPrize = Math.floor(progress * 500000);
          const newParticipants = Math.floor(progress * 5000);

          setPrizePool(newPrize);
          setParticipants(newParticipants);
          setAnimationProgress(progress);

          setStats({
            coding: Math.min(45, Math.floor(progress * 45)),
            robotics: Math.min(25, Math.floor(progress * 25)),
            gaming: Math.min(20, Math.floor(progress * 20)),
            workshops: Math.min(10, Math.floor(progress * 10)),
          });
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const formatCurrency = (num: number) => {
    return '₹ ' + num.toLocaleString('en-IN');
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* Earth with debris */}
      <div
        ref={earthRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <DebrisEarth debrisCount={Math.floor(animationProgress * 123001210)} />
      </div>

      {/* Top info panels */}
      <div className="absolute top-24 left-6 right-6 flex justify-between">
        {/* Left panel - Key Events */}
        <div className="w-64">
          <div className="text-[10px] font-mono text-white/40 mb-2 tracking-wider">
            MISSION TIMELINE
          </div>
          <div className="h-px bg-white/20 mb-4" />

          {/* Event timeline */}
          <div className="space-y-4">
            {participants >= 500 && (
              <div className="animate-fadeIn">
                <div className="text-[9px] font-mono text-white/40 mb-1">PHASE 1: INITIATION</div>
                <div className="text-[10px] font-mono text-white/70">
                  REGISTRATION OPENS
                </div>
                <div className="text-[9px] font-mono text-white/50 mt-1 leading-relaxed">
                  OCTOBER 15, 2025 - TEAMS BEGIN FORMING FOR THE ULTIMATE TECH SHOWDOWN.
                </div>
              </div>
            )}

            {participants >= 2500 && (
              <div className="animate-fadeIn mt-4">
                <div className="text-[9px] font-mono text-white/40 mb-1">PHASE 2: DEPLOYMENT</div>
                <div className="text-[10px] font-mono text-white/70">
                  HACKATHON ROUNDS
                </div>
                <div className="text-[9px] font-mono text-white/50 mt-1 leading-relaxed">
                  NOVEMBER 20, 2025 - 48-HOUR CODING MARATHON BEGINS.
                </div>
              </div>
            )}

            {participants >= 4000 && (
              <div className="animate-fadeIn mt-4">
                <div className="text-[9px] font-mono text-white/40 mb-1">PHASE 3: LAUNCH</div>
                <div className="text-[10px] font-mono text-white/70">
                  GRAND FINALE
                </div>
                <div className="text-[9px] font-mono text-white/50 mt-1 leading-relaxed">
                  DECEMBER 05, 2025 - WINNERS ANNOUNCED, PRIZES DISTRIBUTED.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right panel - Types of Debris */}
        <div ref={statsRef} className="w-72">
          <div className="text-[10px] font-mono text-white/40 mb-2 tracking-wider">
            EVENT CATEGORIES
          </div>
          <div className="h-px bg-white/20 mb-4" />

          <div className="space-y-2 text-[10px] font-mono">
            <div className="flex justify-between">
              <span className="text-white/50">CODING EVENTS:</span>
              <span className="text-white/80">{stats.coding}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">ROBOTICS:</span>
              <span className="text-white/80">{stats.robotics}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">GAMING:</span>
              <span className="text-white/80">{stats.gaming}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">WORKSHOPS:</span>
              <span className="text-white/80">{stats.workshops}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom counter and timeline */}
      <div className="absolute bottom-20 left-6 right-6">
        <div className="flex items-end gap-8">
          {/* Debris counter */}
          <div ref={counterRef}>
            <div className="text-[10px] font-mono text-white/40 mb-1">
              TOTAL PRIZE POOL:
            </div>
            <div className="text-4xl md:text-5xl font-mono text-white/90 tracking-wider counter-animate">
              {formatCurrency(prizePool)}
            </div>
          </div>

          {/* Year and waveform */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-mono text-white/40">PARTICIPANTS:</span>
              <span className="text-2xl font-mono text-white/80">{participants.toLocaleString()}</span>
            </div>

            {/* Waveform graph */}
            <div className="h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
                {/* Grid */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 20}
                    x2="400"
                    y2={i * 20}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Waveform line */}
                <path
                  d={`M 0,30 ${Array.from({ length: 100 }, (_, i) => {
                    const x = (i / 99) * 400;
                    const progress = i / 99;
                    const y = 30 + Math.sin(progress * Math.PI * 4) * 20 * Math.sin(progress * Math.PI);
                    return `L ${x},${y}`;
                  }).join(' ')}`}
                  fill="none"
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="1"
                />

                {/* Current position indicator */}
                <circle
                  cx={(prizePool / 500000) * 400}
                  cy={30}
                  r="3"
                  fill="#ef4444"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

// Earth with debris particles
function DebrisEarth({ debrisCount }: { debrisCount: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    z: number;
    orbitRadius: number;
    orbitSpeed: number;
    orbitAngle: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles based on debris count
    const targetParticles = Math.min(500, Math.floor(debrisCount / 246000));

    if (particlesRef.current.length < targetParticles) {
      for (let i = particlesRef.current.length; i < targetParticles; i++) {
        const orbitRadius = 200 + Math.random() * 300;
        particlesRef.current.push({
          x: 0,
          y: 0,
          z: 0,
          orbitRadius,
          orbitSpeed: 0.001 + Math.random() * 0.002,
          orbitAngle: Math.random() * Math.PI * 2,
          size: 1 + Math.random() * 2,
        });
      }
    }

    // Load Earth image
    const image = new Image();
    image.src = earthImg;

    let animationId: number;
    let rotation = 0;

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const earthRadius = 350; // Larger Earth for better visibility

      // Draw Earth Image
      if (image.complete) {
        // Calculate proper dimensions to preserve aspect ratio
        const imgWidth = image.naturalWidth;
        const imgHeight = image.naturalHeight;
        const imgAspect = imgWidth / imgHeight;

        // Draw centered, fitting in earthRadius * 2 while preserving aspect ratio
        let drawWidth, drawHeight;
        if (imgAspect >= 1) {
          // Image is wider than tall
          drawWidth = earthRadius * 2;
          drawHeight = drawWidth / imgAspect;
        } else {
          // Image is taller than wide
          drawHeight = earthRadius * 2;
          drawWidth = drawHeight * imgAspect;
        }

        ctx.drawImage(
          image,
          centerX - drawWidth / 2,
          centerY - drawHeight / 2,
          drawWidth,
          drawHeight
        );

        // Subtle outer glow behind earth (transparent)
        const outerGlow = ctx.createRadialGradient(
          centerX, centerY, Math.min(drawWidth, drawHeight) / 2 * 0.95,
          centerX, centerY, Math.min(drawWidth, drawHeight) / 2 * 1.15
        );
        outerGlow.addColorStop(0, 'rgba(74, 144, 217, 0.15)');
        outerGlow.addColorStop(1, 'rgba(74, 144, 217, 0)');

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, Math.min(drawWidth, drawHeight) / 2 * 1.15, 0, Math.PI * 2);
        ctx.fill();

      } else {
        // Fallback or loading state (drawing circle temporarily)
        const earthGradient = ctx.createRadialGradient(
          centerX - 50, centerY - 50, 0,
          centerX, centerY, earthRadius
        );
        earthGradient.addColorStop(0, '#4a90d9');
        earthGradient.addColorStop(1, '#1a3a5c');
        ctx.beginPath();
        ctx.arc(centerX, centerY, earthRadius, 0, Math.PI * 2);
        ctx.fillStyle = earthGradient;
        ctx.fill();
      }

      // Draw debris particles

      particlesRef.current.forEach((particle) => {
        particle.orbitAngle += particle.orbitSpeed;

        const x = centerX + Math.cos(particle.orbitAngle) * particle.orbitRadius;
        const y = centerY + Math.sin(particle.orbitAngle) * particle.orbitRadius * 0.4;
        const z = Math.sin(particle.orbitAngle);

        const scale = 0.5 + (z + 1) * 0.5;
        const alpha = 0.3 + (z + 1) * 0.35;

        ctx.beginPath();
        ctx.arc(x, y, particle.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      // Draw orbital paths
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.lineWidth = 1;

      [250, 320, 400].forEach((radius, i) => {
        ctx.beginPath();
        ctx.ellipse(
          centerX, centerY,
          radius, radius * 0.4,
          rotation * (i % 2 === 0 ? 1 : -1) * 0.5,
          0, Math.PI * 2
        );
        ctx.stroke();
      });

      rotation += 0.002;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [debrisCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
