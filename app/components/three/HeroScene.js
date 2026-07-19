"use client";
import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function MouseTracker({ children }) {
  const { pointer } = useThree();
  const mouseRef = useRef({ current: [0, 0] });

  useEffect(() => {
    const updateMouse = () => {
      mouseRef.current.current = [pointer.x, pointer.y];
    };
    const interval = setInterval(updateMouse, 50);
    return () => clearInterval(interval);
  }, [pointer]);

  return <group>{children}</group>;
}

function Shapes() {
  const meshRef = useRef(null);
  const meshRef2 = useRef(null);
  const meshRef3 = useRef(null);
  const { pointer } = useThree();

  const particles = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = pointer.x;
    const my = pointer.y;

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1 + my * 0.5;
      meshRef.current.rotation.y = t * 0.15 + mx * 0.5;
      meshRef.current.position.y = Math.sin(t * 0.3) * 0.15;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -t * 0.08 + my * 0.3;
      meshRef2.current.rotation.y = t * 0.12 + mx * 0.3;
      meshRef2.current.position.x = Math.sin(t * 0.2 + 1) * 0.8;
      meshRef2.current.position.y = Math.cos(t * 0.25 + 1) * 0.8;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.z = t * 0.05;
      meshRef3.current.rotation.x = my * 0.2;
      meshRef3.current.position.x = Math.sin(t * 0.15 + 2) * 1.2;
      meshRef3.current.position.y = Math.cos(t * 0.2 + 2) * 1.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshPhysicalMaterial
          color="#6366f1"
          emissive="#818cf8"
          emissiveIntensity={0.15}
          wireframe
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh ref={meshRef2}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshPhysicalMaterial
          color="#a855f7"
          emissive="#c084fc"
          emissiveIntensity={0.1}
          wireframe
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={meshRef3}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshPhysicalMaterial
          color="#ec4899"
          emissive="#f472b6"
          emissiveIntensity={0.1}
          wireframe
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#6366f1" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#ec4899" />
      <Shapes />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
