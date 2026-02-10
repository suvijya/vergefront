import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface Earth3DProps {
    scrollProgress: number;
}

// Custom shader for bright atmospheric rim
const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.75 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
    vec3 atmosphere = vec3(0.4, 0.7, 1.0) * intensity * 1.5;
    gl_FragColor = vec4(atmosphere, intensity);
  }
`;

// Camera controller that zooms out from close-up
function CameraController({ scrollProgress }: { scrollProgress: number }) {
    const { camera } = useThree();

    useFrame(() => {
        // Start very close (extreme close-up of horizon), zoom out as scroll progresses
        // Start at distance 4 (very close), end at distance 12 (full view)
        const startDistance = 4;
        const endDistance = 12;
        const distance = THREE.MathUtils.lerp(startDistance, endDistance, scrollProgress);

        // Camera starts looking at horizon edge, gradually centers on Earth
        const startY = -2;
        const endY = 0;
        const lookY = THREE.MathUtils.lerp(startY, endY, scrollProgress);

        // Position camera
        camera.position.set(0, lookY, distance);
        camera.lookAt(2, lookY * 0.5, 0);
    });

    return null;
}

function EarthMesh({ scrollProgress }: Earth3DProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const atmosphereRef = useRef<THREE.Mesh>(null);

    const dayTexture = useTexture(
        'https://unpkg.com/three-globe@2.24.13/example/img/earth-blue-marble.jpg'
    );

    useFrame(() => {
        if (meshRef.current) {
            // Very slow rotation for cinematic effect
            meshRef.current.rotation.y += 0.0005;

            // Subtle tilt to show curvature
            meshRef.current.rotation.x = -0.15;
            meshRef.current.rotation.z = 0.1;
        }

        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.copy(meshRef.current!.rotation);
        }
    });

    const atmosphereMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true,
        });
    }, []);

    return (
        <group position={[2, -1.5, 0]}>
            {/* Earth sphere - large scale for close-up effect */}
            <mesh ref={meshRef} scale={4}>
                <sphereGeometry args={[1, 128, 128]} />
                <meshStandardMaterial
                    map={dayTexture}
                    metalness={0.05}
                    roughness={0.8}
                />
            </mesh>

            {/* Bright blue atmospheric rim */}
            <mesh ref={atmosphereRef} scale={4.15}>
                <sphereGeometry args={[1, 64, 64]} />
                <primitive object={atmosphereMaterial} attach="material" />
            </mesh>
        </group>
    );
}

function Lighting() {
    return (
        <>
            {/* Main sun light from right side - creates dramatic terminator */}
            <directionalLight
                position={[10, 2, 3]}
                intensity={2.5}
                color="#fff5e0"
            />
            {/* Very subtle ambient - keeps dark side almost black */}
            <ambientLight intensity={0.02} />
            {/* Subtle blue rim fill light */}
            <pointLight position={[-5, 0, 5]} intensity={0.3} color="#4488ff" />
        </>
    );
}

interface Earth3DSceneProps {
    scrollProgress: number;
    visible: boolean;
}

export default function Earth3DScene({ scrollProgress, visible }: Earth3DSceneProps) {
    if (!visible) return null;

    // Stars fade in gradually after 40% scroll
    const starsOpacity = Math.max(0, (scrollProgress - 0.4) * 2.5);

    return (
        <div
            className="absolute inset-0 z-10"
            style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.8s ease',
            }}
        >
            <Canvas
                camera={{ position: [0, -2, 4], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'black' }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {/* Starfield - fades in later */}
                    <group visible={starsOpacity > 0}>
                        <Stars
                            radius={150}
                            depth={60}
                            count={2000}
                            factor={3}
                            saturation={0}
                            fade
                            speed={0.2}
                        />
                    </group>

                    <CameraController scrollProgress={scrollProgress} />
                    <Lighting />
                    <EarthMesh scrollProgress={scrollProgress} />
                </Suspense>
            </Canvas>

            {/* Vignette effect for cinematic look */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)',
                }}
            />

            {/* HUD Overlay */}
            <HUDOverlay scrollProgress={scrollProgress} />
        </div>
    );
}

interface HUDOverlayProps {
    scrollProgress: number;
}

function HUDOverlay({ scrollProgress }: HUDOverlayProps) {
    const debrisCount = Math.floor(scrollProgress * 36500).toString().padStart(9, '0');
    const formattedDebris = `${debrisCount.slice(0, 3)}.${debrisCount.slice(3, 6)}.${debrisCount.slice(6, 9)}`;
    const year = Math.floor(1950 + scrollProgress * 74);

    const rocketFragments = Math.floor(scrollProgress * 12);
    const upperStage = Math.floor(scrollProgress * 17);
    const decommissioned = Math.floor(scrollProgress * 28);
    const otherFragments = Math.floor(scrollProgress * 43);

    // HUD fades in after zoom out begins
    const hudOpacity = Math.min(1, (scrollProgress - 0.4) * 2.5);

    if (hudOpacity <= 0) return null;

    return (
        <div
            className="absolute inset-0 pointer-events-none font-mono text-white z-20"
            style={{ opacity: hudOpacity }}
        >
            {/* Bottom Left - Debris Counter */}
            <div className="absolute bottom-20 left-8">
                <div className="text-[10px] text-white/50 tracking-widest mb-1">SPACE DEBRIS OBJECTS</div>
                <div className="text-4xl font-light tracking-wider text-white/90">{formattedDebris}</div>
            </div>

            {/* Bottom Center - Time Reference */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
                <div className="text-[10px] text-white/50 tracking-widest mb-1">TIME REFERENCE</div>
                <div className="text-2xl font-light tracking-wider text-white/90">{year}</div>
                <div className="mt-2 w-64 h-8 flex items-center justify-center gap-[2px]">
                    {Array.from({ length: 74 }).map((_, i) => {
                        const isActive = i <= (year - 1950);
                        const height = Math.sin(i * 0.3) * 10 + 12;
                        return (
                            <div
                                key={i}
                                className={`w-[2px] ${isActive ? 'bg-cyan-400' : 'bg-white/20'}`}
                                style={{ height: `${height}px` }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Top Right - Data Fields */}
            <div className="absolute top-20 right-8 text-right space-y-2">
                <DataField label="ROCKET FRAGMENTS" value={`${rocketFragments}%`} />
                <DataField label="UPPER STAGE PARTS" value={`${upperStage}%`} />
                <DataField label="DECOMMISSIONED SATELLITES" value={`${decommissioned}%`} />
                <DataField label="OTHER FRAGMENTS" value={`${otherFragments}%`} />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-16 left-8">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/30">
                    <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>
            <div className="absolute top-16 right-8">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/30">
                    <path d="M40 20 L40 0 L20 0" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>
        </div>
    );
}

function DataField({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center gap-4 justify-end">
            <span className="text-[10px] text-white/50 tracking-wider">{label}</span>
            <span className="text-sm text-cyan-400 min-w-[40px]">{value}</span>
        </div>
    );
}
