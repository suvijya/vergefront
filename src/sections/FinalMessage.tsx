import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FinalMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const message = messageRef.current;

    if (!section || !message) return;


    // Message reveal
    gsap.fromTo(
      message,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: message,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative md:min-h-screen w-full bg-black overflow-hidden py-10 md:py-20"
    >
      {/* Background starfield */}
      <Starfield />

      {/* Main message */}
      <div
        ref={messageRef}
        className="hidden md:flex h-screen items-center justify-center px-6"
      >
        <div className="text-center">
          <div className="text-[8vw] md:text-[6vw] font-bold text-white/90 leading-tight tracking-tight">
            JOIN US AT VERGE 2026
            <br />
            FOR AN ASTRONOMICAL
            <br />
            EXPERIENCE
          </div>
        </div>
      </div>
    </section>
  );
}

// Starfield background component
function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Generate stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.01 + 0.005,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += Math.sin(Date.now() * star.speed) * 0.005;
        star.opacity = Math.max(0.05, Math.min(0.7, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
