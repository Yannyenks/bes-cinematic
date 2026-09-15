"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const COUNT = 500;

function DriftingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const cyan = new THREE.Color("#2fa8e0");
    const magenta = new THREE.Color("#e5007d");

    for (let i = 0; i < COUNT; i++) {
      const radius = 2.4 + Math.random() * 3.2;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 6;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.4;

      const c = cyan.clone().lerp(magenta, Math.random());
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.035;

    const { pointer } = state;
    const targetX = (pointer.x * viewport.width) / 24;
    const targetY = (pointer.y * viewport.height) / 24;
    pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.02;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function ParticleField({ className }: { className?: string }) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true }}
    >
      <DriftingParticles />
    </Canvas>
  );
}
