"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Procedurally generated 'Data Nodes' scene
function DataNodesScene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate node positions and connections
  const { positions, linePositions } = useMemo(() => {
    const nodeCount = 600;
    const posArray = new Float32Array(nodeCount * 3);
    const nodes: THREE.Vector3[] = [];

    // Distribute nodes mostly along Z axis
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = Math.random() * -300 + 10; // Z from 10 to -290

      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;

      nodes.push(new THREE.Vector3(x, y, z));
    }

    // Connect nearby nodes
    const lines: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 6) { // connection radius
          lines.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }

    return { 
      positions: posArray, 
      linePositions: new Float32Array(lines) 
    };
  }, []);

  useGSAP(() => {
    if (!cameraRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom", // sync full page scroll
        scrub: 1,
      },
    });

    // Animate camera flying through the nodes
    tl.to(cameraRef.current.position, {
      z: -280, // travel deep into the Z axis
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 15]} />
      <color attach="background" args={["#0B0814"]} />
      <fog attach="fog" args={["#0B0814", 10, 80]} />

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.15} 
          color="#00e5ff" 
          transparent 
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#818cf8" transparent opacity={0.15} />
      </lineSegments>
      
      <ambientLight intensity={0.5} />
    </>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] h-screen w-screen">
      <Canvas>
        <Suspense fallback={null}>
          <DataNodesScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
