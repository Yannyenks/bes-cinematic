"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const LABELS = [
  "L'étincelle",
  "Le déclic",
  "La mission",
  "Le protocole",
  "L'impact",
];
const COLORS = ["#2FA8E0", "#E5007D", "#2FA8E0", "#E5007D", "#2FA8E0"];

function useSectionProgress(sectionId: string) {
  const progressRef = useRef(0);
  useFrame(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const total = rect.height + vh * 0.5;
    const passed = vh * 0.85 - rect.top;
    const p = Math.min(1, Math.max(0, passed / total));
    progressRef.current = Math.max(progressRef.current, p);
  });
  return progressRef;
}

function Node({
  position,
  index,
  color,
  progressRef,
  hovered,
  setHovered,
  selected,
  onSelect,
}: {
  position: [number, number, number];
  index: number;
  color: string;
  progressRef: React.MutableRefObject<number>;
  hovered: number | null;
  setHovered: (i: number | null) => void;
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const isHover = hovered === index;
  const isSelected = selected === index;

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const unlockThreshold = index / LABELS.length;
    const unlocked = progressRef.current >= unlockThreshold;
    const t = state.clock.elapsedTime;

    const targetScale = unlocked ? (isHover || isSelected ? 1.4 : 1) : 0.5;
    mesh.scale.setScalar(
      THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.09),
    );
    mesh.rotation.y = t * 0.35 + index;
    mesh.rotation.x = Math.sin(t * 0.3 + index) * 0.3;

    const mat = mesh.material as THREE.MeshStandardMaterial;
    const targetIntensity = unlocked ? (isHover || isSelected ? 2.6 : 1) : 0.05;
    mat.emissiveIntensity = THREE.MathUtils.lerp(
      mat.emissiveIntensity,
      targetIntensity,
      0.1,
    );
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(index);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(null);
        document.body.style.cursor = "auto";
      }}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onSelect(index);
      }}
    >
      <icosahedronGeometry args={[0.46, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.05}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(220 * 3);
    for (let i = 0; i < 220; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#5c7cff"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({
  onSelect,
  selected,
}: {
  onSelect: (i: number) => void;
  selected: number | null;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const progressRef = useSectionProgress("agence");

  const points = useMemo(
    () =>
      LABELS.map((_, i) => {
        const t = i / (LABELS.length - 1);
        const x = (t - 0.5) * 7.4;
        const y = Math.sin(t * Math.PI * 1.5) * 1.35;
        const z = Math.cos(t * Math.PI * 1.8) * 0.9;
        return new THREE.Vector3(x, y, z);
      }),
    [],
  );

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={45} color="#2FA8E0" />
      <pointLight position={[-4, -2, -3]} intensity={35} color="#E5007D" />

      <Dust />

      <Line
        points={points}
        color="#3a4a7a"
        lineWidth={1.3}
        transparent
        opacity={0.55}
      />

      {points.map((p, i) => (
        <Node
          key={i}
          position={[p.x, p.y, p.z]}
          index={i}
          color={COLORS[i % COLORS.length]}
          progressRef={progressRef}
          hovered={hovered}
          setHovered={setHovered}
          selected={selected}
          onSelect={onSelect}
        />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2 - 0.45}
        maxPolarAngle={Math.PI / 2 + 0.45}
        autoRotate
        autoRotateSpeed={0.55}
        rotateSpeed={0.45}
      />
    </>
  );
}

export function MissionMap3D({
  onSelect,
  selected,
}: {
  onSelect: (i: number) => void;
  selected: number | null;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene onSelect={onSelect} selected={selected} />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.3}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
