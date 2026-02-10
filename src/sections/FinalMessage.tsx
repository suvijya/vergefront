import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FinalMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const counter = counterRef.current;
    const message = messageRef.current;

    if (!section || !counter || !message) return;

    // Counter zoom animation
    const counterTl = gsap.timeline({
      scrollTrigger: {
        trigger: counter,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    counterTl
      .fromTo(
        counter,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'power2.out' }
      )
      .to(counter, {
        scale: 3,
        opacity: 0,
        ease: 'power2.in',
      });

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

    // Info panels stagger reveal
    const panels = section.querySelectorAll('.info-panel');
    gsap.fromTo(
      panels,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: panels[0],
          start: 'top 85%',
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
      className="relative min-h-screen w-full bg-black overflow-hidden py-20"
    >
      {/* Background starfield */}
      <Starfield />

      {/* Large counter zoom */}
      <div
        ref={counterRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <div className="text-[15vw] md:text-[12vw] font-mono text-white/10 tracking-wider">
            123.001.210
          </div>
        </div>
      </div>

      {/* Red counter variant */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-[15vw] md:text-[12vw] font-mono text-cosmic-red/80 tracking-wider text-glow-red">
            123.001.210
          </div>
        </div>
      </div>

      {/* Info panels */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Growing Hazard */}
          <div className="info-panel border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-white/60 mb-4 tracking-wider">
              GROWING HAZARD
            </h3>
            <ul className="space-y-3 text-[11px] font-mono text-white/50 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cosmic-blue">•</span>
                THE ACCUMULATION OF SPACE DEBRIS HAS BECOME A SIGNIFICANT THREAT TO CURRENT AND FUTURE SPACE OPERATIONS.
              </li>
              <li className="flex gap-2">
                <span className="text-cosmic-blue">•</span>
                BOTH NATURAL (E.G., MICROMETEOROIDS) AND ARTIFICIAL DEBRIS (E.G., DEFUNCT SATELLITES, ROCKET FRAGMENTS) CONTRIBUTE TO THE PROBLEM.
              </li>
            </ul>
          </div>

          {/* Collision Risks */}
          <div className="info-panel border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-white/60 mb-4 tracking-wider">
              COLLISION RISKS
            </h3>
            <ul className="space-y-3 text-[11px] font-mono text-white/50 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cosmic-red">•</span>
                SPACE DEBRIS TRAVELS AT SPEEDS OF UP TO 28,000 KM/H, MEANING EVEN TINY FRAGMENTS CAN CAUSE CATASTROPHIC DAMAGE.
              </li>
              <li className="flex gap-2">
                <span className="text-cosmic-red">•</span>
                ACTIVE SATELLITES, THE INTERNATIONAL SPACE STATION (ISS), AND CREWED MISSIONS ARE PARTICULARLY VULNERABLE.
              </li>
              <li className="flex gap-2">
                <span className="text-cosmic-red">•</span>
                COLLISION EVENTS NOT ONLY DAMAGE INFRASTRUCTURE BUT ALSO GENERATE MORE DEBRIS, EXACERBATING THE ISSUE.
              </li>
            </ul>
          </div>

          {/* Kessler Syndrome */}
          <div className="info-panel border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-white/60 mb-4 tracking-wider">
              KESSLER SYNDROME
            </h3>
            <ul className="space-y-3 text-[11px] font-mono text-white/50 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cosmic-purple">•</span>
                A POTENTIAL CASCADE EFFECT WHERE COLLISIONS CREATE MORE DEBRIS, LEADING TO MORE COLLISIONS.
              </li>
              <li className="flex gap-2">
                <span className="text-cosmic-purple">•</span>
                SUCH A SCENARIO COULD RENDER SOME ORBITAL ZONES COMPLETELY UNUSABLE FOR DECADES.
              </li>
            </ul>
          </div>

          {/* Mitigation Strategies */}
          <div className="info-panel border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-white/60 mb-4 tracking-wider">
              MITIGATION STRATEGIES
            </h3>
            <ul className="space-y-3 text-[11px] font-mono text-white/50 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cosmic-green">•</span>
                ACTIVE DEBRIS REMOVAL (ADR): TESTING TECHNOLOGIES TO CAPTURE AND DEORBIT LARGE DEBRIS OBJECTS.
              </li>
              <li className="flex gap-2">
                <span className="text-cosmic-green">•</span>
                PREVENTION MEASURES: DESIGNING SATELLITES TO REDUCE FRAGMENTATION AND ENSURING ROCKET STAGES DO NOT REMAIN IN ORBIT.
              </li>
            </ul>
          </div>

          {/* Future Outlook */}
          <div className="info-panel border border-white/10 p-6 bg-white/5 backdrop-blur-sm md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-mono text-white/60 mb-4 tracking-wider">
              FUTURE OUTLOOK
            </h3>
            <ul className="space-y-3 text-[11px] font-mono text-white/50 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cosmic-amber">•</span>
                WITHOUT EFFECTIVE INTERVENTION, THE RISK TO SATELLITES AND CREWED MISSIONS WILL CONTINUE TO RISE.
              </li>
              <li className="flex gap-2">
                <span className="text-cosmic-amber">•</span>
                ONGOING INITIATIVES LIKE CLEARSPACE-1 AND INTERNATIONAL COLLABORATION AIM TO ADDRESS THE CHALLENGE.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main message */}
      <div
        ref={messageRef}
        className="h-screen flex items-center justify-center px-6"
      >
        <div className="text-center">
          <div className="text-[8vw] md:text-[6vw] font-bold text-white/90 leading-tight tracking-tight">
            ENVIRONMENTAL
            <br />
            HARM CAN BE
            <br />
            STOPPED
          </div>

          <div className="mt-12 text-sm font-mono text-white/40 tracking-wider">
            NASA TAKES STEPS.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          {/* Made with love */}
          <div className="text-sm font-mono text-white/60 tracking-wider">
            Made with <span className="text-red-500">❤️</span> by Suvijya Arya
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <div className="text-[10px] font-mono text-white/40">
              VERGE 2026 • WHERE INNOVATION DEFIES GRAVITY
            </div>

            <div className="flex items-center gap-8 text-[10px] font-mono text-white/40">
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">CONTACT</a>
            </div>

            <div className="text-[10px] font-mono text-white/40">
              © 2026 VERGE. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
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
