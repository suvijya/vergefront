import { useEffect, useRef, useState } from 'react';

interface BootSequenceProps {
  progress: number;
}

interface SystemStatus {
  name: string;
  progress: number;
  status: 'PENDING' | 'ACTIVE';
}

export default function BootSequence({ progress }: BootSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [systemStatuses, setSystemStatuses] = useState<SystemStatus[]>([
    { name: 'QUALITY ASSESSMENT APP', progress: 0, status: 'PENDING' },
    { name: 'ORBIT ANALYSIS', progress: 0, status: 'PENDING' },
    { name: 'X TRAJECTORY SIMULATION', progress: 0, status: 'PENDING' },
    { name: 'Y TRAJECTORY SIMULATION', progress: 0, status: 'PENDING' },
    { name: 'Z TRAJECTORY SIMULATION', progress: 0, status: 'PENDING' },
    { name: 'RISK ASSESSMENT', progress: 0, status: 'PENDING' },
    { name: 'COMMUNICATION CHECK', progress: 0, status: 'PENDING' },
    { name: 'FINAL VALIDATION', progress: 0, status: 'PENDING' },
    { name: 'REPORT GENERATION', progress: 0, status: 'PENDING' },
  ]);

  // Animate wireframe globe
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let rotation = 0;
    let animationId: number;

    const drawGlobe = () => {
      // Clear with slight fade for trail effect if desired, or solid clear
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Responsive radius calculation
      const isMobile = window.innerWidth < 768;
      const scaleFactor = isMobile ? 0.35 : 0.25;
      const radius = Math.min(canvas.width, canvas.height) * scaleFactor;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;

      // Draw latitude lines
      for (let i = -2; i <= 2; i++) {
        const y = centerY + (i * radius * 0.4);
        const r = Math.sqrt(radius * radius - (y - centerY) * (y - centerY));

        ctx.beginPath();
        ctx.ellipse(centerX, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines (rotating)
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI / 3) + rotation;
        const x = centerX + Math.cos(angle) * radius;

        ctx.beginPath();
        ctx.ellipse(centerX + (x - centerX) * 0.5, centerY, radius * 0.3, radius, angle, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw main circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw axis labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';

      const labels = ['Z', 'P', 'R', 'N', 'V', 'K', 'S', 'B'];
      labels.forEach((label, i) => {
        const angle = (i * Math.PI / 4) + rotation;
        const x = centerX + Math.cos(angle) * (radius + 20);
        const y = centerY + Math.sin(angle) * (radius + 20);
        ctx.fillText(label, x, y);
      });

      rotation += 0.005;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Update system statuses based on progress
  useEffect(() => {
    const newStatuses = [...systemStatuses];

    if (progress > 10) {
      newStatuses[0].progress = Math.min(100, (progress - 10) * 2);
      newStatuses[0].status = newStatuses[0].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 20) {
      newStatuses[1].progress = Math.min(100, (progress - 20) * 2);
      newStatuses[1].status = newStatuses[1].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 30) {
      newStatuses[2].progress = Math.min(100, (progress - 30) * 2);
      newStatuses[2].status = newStatuses[2].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 35) {
      newStatuses[3].progress = Math.min(100, (progress - 35) * 2);
      newStatuses[3].status = newStatuses[3].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 40) {
      newStatuses[4].progress = Math.min(100, (progress - 40) * 2);
      newStatuses[4].status = newStatuses[4].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 50) {
      newStatuses[5].progress = Math.min(100, (progress - 50) * 2);
      newStatuses[5].status = newStatuses[5].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 60) {
      newStatuses[6].progress = Math.min(100, (progress - 60) * 2);
      newStatuses[6].status = newStatuses[6].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 70) {
      newStatuses[7].progress = Math.min(100, (progress - 70) * 2);
      newStatuses[7].status = newStatuses[7].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }
    if (progress > 80) {
      newStatuses[8].progress = Math.min(100, (progress - 80) * 2);
      newStatuses[8].status = newStatuses[8].progress >= 100 ? 'ACTIVE' : 'PENDING';
    }

    setSystemStatuses(newStatuses);
  }, [progress]);

  // Fade to terminal view when progress is high
  const showTerminal = progress > 95;

  return (
    <div className="fixed inset-0 z-40 bg-black">
      {/* Wireframe Globe Canvas */}
      {!showTerminal && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      )}

      {/* Orbital paths overlay - REMOVED red rings per user request */}

      {/* Loading progress bar */}
      {!showTerminal && (
        <div className="absolute bottom-10 md:bottom-20 left-6 right-6 flex justify-center">
          <div className="w-full max-w-2xl flex flex-col gap-2">
            <div className="flex items-end justify-between text-[#00ffb4] font-bold tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-sm md:text-base animate-pulse">VERGE LOADING</span>
              <span className="text-xs md:text-sm">{Math.round(progress)}%</span>
            </div>

            <div className="h-2 bg-white/5 rounded-full relative">
              {/* Glow background */}
              <div
                className="absolute inset-y-0 left-0 bg-[#00ffb4] opacity-20 blur-sm rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
              {/* Main progress filling */}
              <div
                className="h-full bg-[#00ffb4] rounded-full shadow-[0_0_15px_rgba(0,255,180,0.6)] relative z-10"
                style={{ width: `${progress}%` }}
              />
              {/* Shimmer effect */}
              <div
                className="absolute inset-0 shimmer opacity-10 rounded-full z-20"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Terminal View */}
      {showTerminal && (
        <div className="absolute inset-0 pt-20 pb-16 px-6 overflow-hidden">
          <div className="h-full border border-white/20 bg-black/50 p-4 overflow-y-auto font-mono text-[11px]">
            {/* Line numbers and system statuses */}
            {systemStatuses.map((status, index) => (
              <div
                key={status.name}
                className="flex items-center gap-4 py-1 opacity-0"
                style={{
                  animation: `fadeIn 0.3s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="text-white/30 w-6 text-right">{index + 1}</span>
                <span className="text-white/60 flex-1">{status.name}:</span>
                <span className="text-white/80 w-12 text-right">{Math.round(status.progress)}%</span>
                <span className={`w-16 text-right ${status.status === 'ACTIVE' ? 'text-[#00ffb4]' : 'text-white/40'}`}>
                  {status.status}
                  {status.status === 'ACTIVE' && (
                    <span className="inline-block w-2 h-2 bg-[#00ffb4] ml-1 animate-pulse" />
                  )}
                </span>
              </div>
            ))}

            {/* Empty lines for terminal effect */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={`empty-${i}`} className="flex items-center gap-4 py-1">
                <span className="text-white/30 w-6 text-right">{systemStatuses.length + i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Z-AXIS and X-24 indicators */}
      {!showTerminal && (
        <div className="absolute bottom-32 left-6 text-[10px] font-mono text-white/40">
          <div className="flex gap-8">
            <span>Z-AXIS: 0°</span>
            <span>X-24°</span>
          </div>
        </div>
      )}

      {/* Graph at bottom */}
      {!showTerminal && (
        <div className="absolute bottom-32 right-6 left-1/3 h-16">
          <svg className="w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 1, 2].map((i) => (
              <line
                key={i}
                x1="0"
                y1={20 + i * 20}
                x2="400"
                y2={20 + i * 20}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
              />
            ))}

            {/* Waveform */}
            <path
              d={`M 0,30 ${Array.from({ length: 50 }, (_, i) => {
                const x = (i / 49) * 400;
                const y = 30 + Math.sin(i * 0.5 + progress * 0.1) * 15 * (i / 50);
                return `L ${x},${y}`;
              }).join(' ')}`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="1"
            />
          </svg>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] text-white/30 font-mono -ml-6">
            <span>10M</span>
            <span>1M</span>
            <span>500K</span>
            <span>0</span>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[8px] text-white/30 font-mono -mb-4">
            {['1810', '1830', '1850', '1870', '1890', '1910', '1930', '1950', '1970', '1980', '2000', '2020', '2040', '2060', '2080', '2100'].map((year) => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
