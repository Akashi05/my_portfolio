import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

// A closed, thick Möbius ribbon: one continuous silhouette, no satellite objects.
function makeRibbon() {
  const points = 240;
  const cross = 12;
  const vertices: number[] = [];
  const indices: number[] = [];
  for (let i = 0; i <= points; i++) {
    const t = i / points * Math.PI * 2;
    for (let j = 0; j <= cross; j++) {
      const a = j / cross * Math.PI * 2;
      const width = Math.cos(a) * 0.53;
      const depth = Math.sin(a) * 0.065;
      const radial = 1.48 + width * Math.cos(t / 2) - depth * Math.sin(t / 2);
      vertices.push(radial * Math.cos(t), radial * Math.sin(t), width * Math.sin(t / 2) + depth * Math.cos(t / 2));
      if (i < points && j < cross) {
        const k = i * (cross + 1) + j;
        indices.push(k, k + cross + 1, k + 1, k + 1, k + cross + 1, k + cross + 2);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function Ribbon({ color, reducedMotion }: { color: string; reducedMotion: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const geometry = useMemo(makeRibbon, []);
  const phase = useRef(0);
  const ready = useRef(false);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame((state, delta) => {
    if (!ready.current) {
      state.gl.domElement.parentElement?.setAttribute('data-scene-ready', '');
      ready.current = true;
    }
    if (!mesh.current || reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    phase.current += dt * 0.14;
    const follow = 1 - Math.exp(-2.5 * dt);
    mesh.current.rotation.x += (0.65 + state.pointer.y * 0.18 - mesh.current.rotation.x) * follow;
    mesh.current.rotation.y += (-0.4 + Math.sin(phase.current) * 0.45 + state.pointer.x * 0.25 - mesh.current.rotation.y) * follow;
    mesh.current.rotation.z = -0.48 + Math.sin(phase.current * 0.7) * 0.16;
    mesh.current.position.y = Math.sin(phase.current * 1.7) * 0.09;
  });
  return <mesh ref={mesh} geometry={geometry} rotation={[0.65, -0.4, -0.48]}>
    <meshStandardMaterial color={color} metalness={0.32} roughness={0.38} side={THREE.DoubleSide} />
  </mesh>;
}

export default function HeroScene({ darkMode }: { darkMode: boolean }) {
  const [color, setColor] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    setColor(css.getPropertyValue(darkMode ? '--scene-light' : '--scene-dark').trim());
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [darkMode]);
  if (!color) return null;
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.7], fov: 36 }} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.65} />
    <directionalLight color={color} position={[3, 5, 4]} intensity={2.4} />
    <Ribbon color={color} reducedMotion={reducedMotion} />
    <Environment resolution={128}>
      <Lightformer intensity={3} position={[0, 5, 2]} scale={[8, 3, 1]} />
      <Lightformer intensity={2} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} />
      <Lightformer intensity={1.5} position={[5, -2, 1]} rotation-y={-Math.PI / 2} scale={[5, 2, 1]} />
    </Environment>
  </Canvas>;
}
