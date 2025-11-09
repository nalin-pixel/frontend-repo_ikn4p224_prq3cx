import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-xs tracking-wide uppercase">LeadTech SoftwareSolutions</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Building software that powers ideas and industries
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
              We partner with startups, enterprises, governments, and visionary individuals to design, build, and scale world-class digital products.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#industries"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:shadow-md transition"
              >
                <Rocket className="h-4 w-4" /> Explore Industries
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;