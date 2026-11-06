import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Blob() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    const tx = state.pointer.y * 0.35;
    const ty = state.pointer.x * 0.5;
    g.rotation.x += (tx - g.rotation.x) * (1 - Math.exp(-3 * dt));
    g.rotation.y += (ty + state.clock.elapsedTime * 0.15 - g.rotation.y) * (1 - Math.exp(-3 * dt));
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.25, 64]} />
          <MeshDistortMaterial color="#d6d3cd" metalness={1} roughness={0.12} distort={0.38} speed={1.6} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={0.8}>
        <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
          <torusGeometry args={[2.1, 0.03, 32, 200]} />
          <meshStandardMaterial color="#e8a25a" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh rotation={[Math.PI / 1.7, -0.5, 0.4]}>
          <torusGeometry args={[2.5, 0.012, 16, 200]} />
          <meshStandardMaterial color="#a1a1aa" metalness={1} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={3} floatIntensity={2}>
        <mesh position={[1.9, 1.1, 0.6]}>
          <sphereGeometry args={[0.18, 48, 48]} />
          <MeshTransmissionMaterial thickness={0.4} roughness={0.05} chromaticAberration={0.2} samples={4} resolution={256} />
        </mesh>
        <mesh position={[-1.8, -1.2, 0.4]}>
          <octahedronGeometry args={[0.22]} />
          <meshStandardMaterial color="#e8a25a" metalness={1} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.domElement.parentElement?.setAttribute('data-scene-ready', '')}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 5, 3]} intensity={1.5} />
      <Blob />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 5, -2]} scale={[10, 3, 1]} />
        <Lightformer intensity={2} color="#f2b46d" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1.5, 1]} />
        <Lightformer intensity={1.5} position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[20, 1, 1]} />
        <Lightformer intensity={1} color="#9aa4b2" position={[0, -4, 2]} rotation-x={-Math.PI / 2} scale={[10, 10, 1]} />
      </Environment>
    </Canvas>
  );
}
