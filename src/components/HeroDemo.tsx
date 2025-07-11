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
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5"></div>
      
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
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
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

          {/* Feature Boxes */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:gap-8 justify-center items-stretch max-w-6xl mx-auto pb-20">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[220px] max-w-[320px] bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-start justify-start backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/20 group"
              >
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                  <feature.icon size={28} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="font-bold text-lg md:text-xl text-white mb-2">{feature.title}</div>
                <div className="text-sm md:text-base text-white/80">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo; 