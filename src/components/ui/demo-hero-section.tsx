// ==========================================
// FIXED: components/ui/hero-section.tsx
// ==========================================
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

const Box: React.FC<BoxProps> = ({ position, rotation }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Simpler, more reliable geometry
  const geometry = new THREE.RoundedBoxGeometry(2, 2, 0.5, 4, 0.2);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={position}
      rotation={rotation}
    >
      {/* Simplified but effective material */}
      <meshStandardMaterial 
        color="#2a2a2a"
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const AnimatedBoxes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  // Fewer boxes for better performance
  const boxes = Array.from({ length: 40 }, (_, index) => ({
    position: [
      (index - 20) * 3,
      Math.sin(index * 0.3) * 2,
      Math.cos(index * 0.2) * 4
    ] as [number, number, number],
    rotation: [
      (index - 20) * 0.1,
      Math.PI / 4 + index * 0.05,
      index * 0.02
    ] as [number, number, number],
    id: index
  }));

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box
          key={box.id}
          position={box.position}
          rotation={box.rotation}
        />
      ))}
    </group>
  );
};

export const Scene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ 
          position: [0, 0, 25], 
          fov: 50
        }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Better lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
        />
        <pointLight 
          position={[0, 0, 10]} 
          intensity={0.8} 
          color="#4f46e5"
        />
        
        <AnimatedBoxes />
      </Canvas>
    </div>
  );
};

// ==========================================
// FIXED: HeroDemo.tsx (Fixed title display)
// ==========================================
import React from 'react';
import { Scene } from "./ui/hero-section";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Ultra-fast data processing in every situation.",
  },
  {
    icon: ShieldCheck,
    title: "Security", 
    description: "Advanced protection for complete peace of mind.",
  },
  {
    icon: Layers,
    title: "Modularity",
    description: "Easy integration with existing architecture.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Instant response to every command.",
  },
];

const HeroDemo = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Full-screen 3D Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          width: '100vw', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      >
        <Scene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col items-center text-center space-y-8 pt-20">
            <Badge 
              variant="secondary" 
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-full text-sm font-medium shadow-lg"
            >
              ✨ Next Generation Tools
            </Badge>
            
            <div className="space-y-8 flex items-center justify-center flex-col max-w-5xl">
              {/* FIXED: Better title styling without gradient issues */}
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  zIndex: 50,
                  position: 'relative'
                }}
              >
                Discover minimalism and power in one place
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
                Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and intuitive design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
                <Button 
                  size="lg"
                  className="text-base px-10 py-4 rounded-2xl bg-white text-black border-0 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="text-base px-10 py-4 rounded-2xl bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pb-20">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 h-52 md:h-60 flex flex-col justify-start items-start space-y-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                  <feature.icon size={24} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;

// ==========================================
// ALTERNATIVE: If RoundedBoxGeometry doesn't work, 
// use this simpler Box version:
// ==========================================

/*
const Box: React.FC<BoxProps> = ({ position, rotation }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
    >
      <boxGeometry args={[2, 2, 0.5]} />
      <meshStandardMaterial 
        color="#333333"
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  );
};
*/