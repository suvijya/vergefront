import { useRef, useEffect } from 'react';
import earthImg from '../assets/earth.png';

export default function DataDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const prizePool = 1500000;
  const participants = 5000;
  const footfall = 10000;

  const formatCurrency = (num: number) => {
    return '₹ ' + num.toLocaleString('en-IN');
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-end py-24 md:py-32 pb-8 md:pb-12"
    >
      {/* Earth with debris - Background */}
      <div
        ref={earthRef}
        className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none pt-32 md:pt-0"
      >
        <DebrisEarth debrisCount={123000000} />

        {/* HUD Labels are now rendered inside DebrisEarth */}
      </div>



      {/* Bottom counter and timeline */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mt-0 md:mt-0 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-4 text-center md:text-left w-full">

          {/* Left: Participants */}
          <div className="pointer-events-auto flex flex-col items-center md:items-start flex-1">
            <div className="text-3xl md:text-5xl font-bold text-white tracking-wider" style={{ fontFamily: "'Orbitron', monospace", textShadow: '0 0 10px rgba(255,255,255,0.3)', maskImage: 'linear-gradient(to right, transparent 0%, black 50%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%)' }}>
              {participants.toLocaleString()}+
            </div>
            <div className="text-[10px] font-mono text-white/40 mt-1 tracking-[0.2em] uppercase">
              Total Participants
            </div>
          </div>

          {/* Center: Prize Pool */}
          <div ref={counterRef} className="pointer-events-auto flex flex-col items-center flex-1">
            <div className="text-4xl md:text-7xl font-bold text-white tracking-wider text-center whitespace-nowrap" style={{ fontFamily: "'Orbitron', monospace", textShadow: '0 0 30px rgba(0,255,180,0.5)' }}>
              {formatCurrency(prizePool)}
            </div>
            <div className="text-xs md:text-sm font-bold font-mono text-emerald-400/80 mt-2 tracking-[0.3em] uppercase">
              Total Prize Pool
            </div>
          </div>

          {/* Right: Footfall */}
          <div className="hidden md:flex pointer-events-auto flex-col items-center md:items-end md:text-right flex-1">
            <div className="text-3xl md:text-5xl font-bold text-white tracking-wider" style={{ fontFamily: "'Orbitron', monospace", textShadow: '0 0 10px rgba(255,255,255,0.3)', maskImage: 'linear-gradient(to left, transparent 0%, black 50%)', WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 7%)' }}>
              {footfall.toLocaleString()}+
            </div>
            <div className="text-[10px] font-mono text-white/40 mt-1 tracking-[0.2em] uppercase">
              Total Footfall
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// HUD Label Component - Now purely presentation, positioning handled by parent
function HUDLabel({ event, labelRef }: { event: { name: string; prize: string; desc: string }; labelRef: (el: HTMLDivElement | null) => void }) {
  return (
    <div
      ref={labelRef}
      className="absolute pointer-events-none z-20 flex items-center justify-center will-change-transform group" // Added 'group'
      style={{
        left: 0,
        top: 0,
        // Initial hide until positioned
        opacity: 0,
      }}
    >
      <div
        className="relative px-2 py-1 md:px-4 md:py-2 border border-emerald-500/80 bg-black/80 backdrop-blur-md text-emerald-400 font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest whitespace-nowrap rounded-xl transition-all duration-300 group-hover:bg-emerald-900/90 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] pointer-events-auto cursor-pointer"
        style={{
          boxShadow: '0 0 15px rgba(16, 185, 129, 0.3), inset 0 0 10px rgba(16, 185, 129, 0.1)',
          textShadow: '0 0 5px rgba(16, 185, 129, 0.8)',
        }}
      >
        {event.name}
        {/* Corner accents - simplified for new shape */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-400 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-400 rounded-bl-lg" />

        {/* Scanline effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent opacity-30 pointer-events-none rounded-xl" />

        {/* HOVER DETAILS */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 md:w-48 bg-black/95 border border-emerald-500/50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 shadow-[0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="text-[9px] md:text-[10px] text-emerald-500/70 mb-1">PRIZE POOL</div>
          <div className="text-base md:text-lg text-white font-bold mb-2 shadow-emerald-500/50 drop-shadow-sm">{event.prize}</div>
          <div className="h-px w-full bg-emerald-500/30 mb-2"></div>
          <div className="text-[10px] text-emerald-300 leading-tight normal-case font-sans tracking-normal text-wrap">
            {event.desc}
          </div>
        </div>
      </div>

      {/* Connecting line to debris - MOVED OUTSIDE THE CLIPPED BOX and positioned ABSOLUTELY */}
      <div
        className="absolute left-1/2 top-full w-0.5 h-6 md:h-12 bg-gradient-to-b from-emerald-500 to-emerald-500/50 origin-top"
        style={{ transform: 'translateX(-50%)' }}
      >
        {/* Terminal dot at the end of the line */}
        <div className="absolute bottom-0 left-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          style={{ transform: 'translate(-50%, 50%)' }} />
      </div>
    </div>
  );
}

// Earth with debris particles
function DebrisEarth({ debrisCount }: { debrisCount: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Refs for managing label DOM elements
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events = [
    { name: "SRM Builds 7.0", prize: "₹ 5,00,000", desc: "The ultimate 24h hackathon event." },
    { name: "MARK1", prize: "₹ 3,00,000", desc: "High-octane combat robotics arena." },
    { name: "RAD CTF", prize: "₹ 2,00,000", desc: "Capture The Flag cybersecurity challenge." },
    { name: "VELOCITY", prize: "₹ 2,50,000", desc: "Pro-level FPV drone racing tournament." },
    { name: "Startup Expo", prize: "₹ 2,50,000", desc: "Showcase for next-gen innovation." }
  ];

  // Track specific "label particles" separately to ensure they exist and orbit nicely
  const labelParticlesRef = useRef<Array<{
    orbitRadius: number;
    orbitSpeed: number;
    orbitAngle: number;
    yOffset: number;
  }>>([]);

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
    if (!ctx) {
      console.error('Canvas context not available');
      return;
    }

    // Responsive radius state
    let earthRadius = 350;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Adjust radius based on screen width
      // Adjust radius based on screen width - ULTRA COMPACT FOR MOBILE
      earthRadius = window.innerWidth < 768 ? 100 : 350;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize regular debris - INCREASED DENSITY FOR PC (Balanced)
    const targetParticles = Math.min(1200, Math.floor(debrisCount / 50000)); // Reduced cap from 2000 to 1200
    if (particlesRef.current.length < targetParticles) {
      for (let i = particlesRef.current.length; i < targetParticles; i++) {
        // Tuned: Start from 360 (just outside 350 radius) to 650
        const orbitRadius = 360 + Math.random() * 300;
        particlesRef.current.push({
          x: 0,
          y: 0,
          z: 0,
          orbitRadius,
          orbitSpeed: 0.0005 + Math.random() * 0.0015, // Slightly slower for elegance
          orbitAngle: Math.random() * Math.PI * 2,
          size: 0.5 + Math.random() * 1.0, // Tuned: Smaller meteors (0.5 to 1.5)
        });
      }
    }

    // Force re-initialize label particles to ensure fresh speeds
    // This cleans up any stale refs from HMR or previous renders
    labelParticlesRef.current = [];

    // Constant speed for all labels to ensure they move in sync and never overlap
    // Increased to 0.001 to ensure legal movement is visible
    const CONSTANT_SPEED = 0.001;

    // Hardcoded positions to Guarantee NO OVERLAP and perfect composition
    // Optimized "Crown" layout for mobile: High arc to avoid bottom text, staggered radii to avoid label collisions
    // Radii ~450-550 ensure labels orbit just outside/near the small locations of the Earth surface
    const isMobile = window.innerWidth < 768;
    const fixedPositions = [
      // Tuned: All radii > 350 to ensure they orbit AROUND (outside) the Earth
      // Mobile radii reduced to ~200-280 so labels stay on-screen
      { radius: isMobile ? 220 : 380, angle: isMobile ? 3.0 : 0, yOffset: isMobile ? -20 : 40 },     // Left
      { radius: isMobile ? 260 : 420, angle: isMobile ? 3.8 : 1.25, yOffset: isMobile ? -10 : -50 }, // Top-Left
      { radius: isMobile ? 200 : 450, angle: isMobile ? 4.7 : 2.5, yOffset: isMobile ? 0 : 30 },     // Top
      { radius: isMobile ? 280 : 420, angle: isMobile ? 5.6 : 3.8, yOffset: isMobile ? -10 : -40 },  // Top-Right
      { radius: isMobile ? 240 : 380, angle: isMobile ? 0.2 : 5.0, yOffset: isMobile ? -20 : 60 }    // Right
    ];

    events.forEach((_, i) => {
      const pos = fixedPositions[i % fixedPositions.length];

      labelParticlesRef.current.push({
        orbitRadius: pos.radius,
        orbitSpeed: CONSTANT_SPEED, // ALL SAME SPEED locked
        orbitAngle: pos.angle,
        yOffset: pos.yOffset,
      });
    });

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

      // --- BACK RINGS (Behind Earth) ---
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)'; // Slightly dimmer for depth
      ctx.lineWidth = 1.0;
      const ringScale = earthRadius / 350;
      // Defines fixed rotation angles for stable orbits
      const fixedAngles = [-0.2, 0, 0.2]; // -11deg, 0deg, +11deg approx

      [380, 520, 660].forEach((radius, i) => {
        ctx.beginPath();
        // Draw the top half (PI to 2PI) which is visually "behind"
        ctx.ellipse(
          centerX, centerY,
          radius * ringScale, radius * 0.35 * ringScale,
          fixedAngles[i],
          Math.PI, Math.PI * 2
        );
        ctx.stroke();
      });

      // Draw Earth (Back Layer) logic...
      // (Simplified: Just drawing image)
      if (image.complete) {
        // Calculate proper dimensions to preserve aspect ratio
        const imgWidth = image.naturalWidth;
        const imgHeight = image.naturalHeight;
        const imgAspect = imgWidth / imgHeight;

        // Draw centered, fitting in earthRadius * 2 while preserving aspect ratio
        let drawWidth, drawHeight;
        if (imgAspect >= 1) {
          drawWidth = earthRadius * 2;
          drawHeight = drawWidth / imgAspect;
        } else {
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

        // ...Glow logic omitted for brevity, keeping existing look if possible or assuming simple draw
      } else {
        // Fallback blue circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, earthRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#1a3a5c';
        ctx.fill();
      }

      // Update and Draw Label Particles (and update DOM)
      // Simple per-frame collision-avoidance for mobile labels to prevent visual overlap removed
      // labelParticlesRef.current.forEach
      labelParticlesRef.current.forEach((p, i) => {
        p.orbitAngle += p.orbitSpeed;

        const scaleFactor = earthRadius / 350;
        const r = p.orbitRadius * scaleFactor;

        // Meteor Position (The target point)
        const mx = centerX + Math.cos(p.orbitAngle) * r;
        // Elliptical Y (tilted view)
        const my = centerY + Math.sin(p.orbitAngle) * (r * 0.4) + (p.yOffset * scaleFactor * 0.5);
        const mz = Math.sin(p.orbitAngle); // -1 (back) to 1 (front)

        // Update DOM element position
        const el = labelRefs.current[i];
        if (el) {
          const rawScale = 0.8 + (mz + 1) * 0.2; // 0.8 to 1.2 scale
          // Ensure it doesn't get too tiny on mobile
          const scale = isMobile ? Math.max(0.65, rawScale * (earthRadius / 350) * 1.25) : rawScale;

          // Calculate Label Position: Shift UP from meteor so line connects
          const yOffset = 48 * scale;

          const lx = mx;
          const ly = my - yOffset;

          const opacity = mz < -0.5 ? 0.3 : 1; // Fade when behind
          const zIndex = mz < 0 ? 5 : 25; // Simple Z-layering

          el.style.transform = `translate(${lx}px, ${ly}px) translate(-50%, -100%) scale(${scale})`;
          el.style.opacity = opacity.toString();
          el.style.zIndex = zIndex.toString();
        }

        // Draw the "Target Meteor" on canvas
        // Always draw this specific particle so the label has something to point to
        const alpha = 0.6 + (mz + 1) * 0.2; // Brighter when close
        const baseSize = (2 + Math.random() * 1.5) * (0.5 + (mz + 1) * 0.5);
        const size = isMobile ? baseSize * 0.5 : baseSize; // Scale down further for mobile (50%)

        ctx.beginPath();
        ctx.arc(mx, my, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Optional: Glow for the target meteor
        if (mz > -0.2) {
          const glow = ctx.createRadialGradient(mx, my, size, mx, my, size * 4);
          glow.addColorStop(0, 'rgba(16, 185, 129, 0.8)'); // Emerald core
          glow.addColorStop(1, 'rgba(16, 185, 129, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(mx, my, size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw connecting dot at contact point (optional, forces the visual connection)
        if (mz > -0.5) {
          ctx.beginPath();
          ctx.arc(mx, my, 2 * scaleFactor, 0, Math.PI * 2);
          ctx.fillStyle = '#10b981'; // Emerald dot at the meteor locations
          ctx.fill();
        }
      });


      // Draw regular debris
      particlesRef.current.forEach((particle, i) => {
        particle.orbitAngle += particle.orbitSpeed;

        const scaleFactor = earthRadius / 350;
        const currentOrbitRadius = particle.orbitRadius * scaleFactor;

        // Dynamic mobile check inside loop
        const isMobileFrame = window.innerWidth < 768;

        const x = centerX + Math.cos(particle.orbitAngle) * currentOrbitRadius;
        const y = centerY + Math.sin(particle.orbitAngle) * currentOrbitRadius * 0.4;
        const z = Math.sin(particle.orbitAngle);

        const scale = 0.5 + (z + 1) * 0.5;
        const baseAlpha = 0.3 + (z + 1) * 0.35;

        // Scale down debris size further on mobile and REDUCE COUNT VISUALLY
        // STABLE CULLING: use index to filter instead of Random (prevents flickering)
        if (isMobileFrame && i % 5 !== 0) return;

        // On PC, slightly boost size for visibility (1.0x baseline)
        // On Mobile, strict reduction but BRIGHTER
        const sizeMultiplier = isMobileFrame ? 0.4 : 1.0;

        const finalSize = particle.size * scale * sizeMultiplier;
        const alpha = isMobileFrame ? baseAlpha * 1.5 : baseAlpha; // Brighter on mobile (1.5x vs previous 0.6x)

        // Skip drawing if strictly behind earth (simple occlusion)
        // if (z < -0.2 && Math.abs(x - centerX) < earthRadius * 0.8) return;

        ctx.beginPath();
        ctx.arc(x, y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      // --- FRONT RINGS (In Front of Earth) ---
      // Draw orbital paths - High visibility Red Rings
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)'; // Bright Red
      ctx.lineWidth = 1.5;
      // Reuse ringScale and fixedAngles from above scope if possible, or redefine
      // (Redefine locally to be safe if scope is tricky with previous edit)
      const ringScaleFront = earthRadius / 350;
      const fixedAnglesFront = [-0.2, 0, 0.2];

      [380, 520, 660].forEach((radius, i) => {
        ctx.beginPath();
        // Draw the bottom half (0 to PI) which is visually "in front"
        ctx.ellipse(
          centerX, centerY,
          radius * ringScaleFront, radius * 0.35 * ringScaleFront,
          fixedAnglesFront[i],
          0, Math.PI
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
    <div className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {events.map((event, i) => (
        <HUDLabel
          key={i}
          event={event}
          labelRef={(el) => labelRefs.current[i] = el}
        />
      ))}
    </div>
  );
}
