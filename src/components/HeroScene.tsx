import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Blob({ light, dark, reducedMotion }: { light: string; dark: string; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g || reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    const tx = state.pointer.y * 0.35;
    const ty = state.pointer.x * 0.5;
    g.rotation.x += (tx - g.rotation.x) * (1 - Math.exp(-3 * dt));
    g.rotation.y += (ty + state.clock.elapsedTime * 0.15 - g.rotation.y) * (1 - Math.exp(-3 * dt));
  });
  return (
    <group ref={group}>
      <Float speed={reducedMotion ? 0 : 1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.25, 64]} />
          <MeshDistortMaterial color={light} metalness={1} roughness={0.12} distort={0.38} speed={reducedMotion ? 0 : 1.6} />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 2} rotationIntensity={1.5} floatIntensity={0.8}>
        <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
          <torusGeometry args={[2.1, 0.03, 32, 200]} />
          <meshStandardMaterial color={light} metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh rotation={[Math.PI / 1.7, -0.5, 0.4]}>
          <torusGeometry args={[2.5, 0.012, 16, 200]} />
          <meshStandardMaterial color={dark} metalness={1} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 3} floatIntensity={2}>
        <mesh position={[1.9, 1.1, 0.6]}>
          <sphereGeometry args={[0.18, 48, 48]} />
          <MeshTransmissionMaterial thickness={0.4} roughness={0.05} chromaticAberration={0.2} samples={4} resolution={256} />
        </mesh>
        <mesh position={[-1.8, -1.2, 0.4]}>
          <octahedronGeometry args={[0.22]} />
          <meshStandardMaterial color={light} metalness={1} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene({ darkMode }: { darkMode: boolean }) {
  const [colors, setColors] = useState<{ light: string; dark: string } | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    setColors({ light: css.getPropertyValue('--scene-light').trim(), dark: css.getPropertyValue('--scene-dark').trim() });
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [darkMode]);
  if (!colors) return null;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.domElement.parentElement?.setAttribute('data-scene-ready', '')}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 5, 3]} intensity={1.5} />
      <Blob light={colors.light} dark={colors.dark} reducedMotion={reducedMotion} />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 5, -2]} scale={[10, 3, 1]} />
        <Lightformer intensity={2} color={colors.light} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1.5, 1]} />
        <Lightformer intensity={1.5} position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[20, 1, 1]} />
        <Lightformer intensity={1} color={colors.light} position={[0, -4, 2]} rotation-x={-Math.PI / 2} scale={[10, 10, 1]} />
      </Environment>
    </Canvas>
  );
}
