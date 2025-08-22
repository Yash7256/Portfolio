import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Particles(props: any) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = React.useState(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 1000; i++) {
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function GeometricShapes() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Wireframe Torus */}
      <mesh position={[-3, 2, -5]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshBasicMaterial color="#c0c0c0" wireframe opacity={0.3} transparent />
      </mesh>
      
      {/* Wireframe Octahedron */}
      <mesh position={[3, -2, -3]} rotation={[0, Math.PI / 4, 0]}>
        <octahedronGeometry args={[1]} />
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.2} transparent />
      </mesh>
      
      {/* Wireframe Icosahedron */}
      <mesh position={[0, 3, -8]} rotation={[Math.PI / 6, 0, Math.PI / 3]}>
        <icosahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#8a8a8a" wireframe opacity={0.4} transparent />
      </mesh>
    </group>
  );
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 100 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
        <GeometricShapes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;