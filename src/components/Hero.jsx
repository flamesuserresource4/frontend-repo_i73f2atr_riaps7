import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle vignette and gradient overlays that won't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_200px_rgba(0,0,0,0.5)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Rocket className="h-4 w-4 text-white/80" />
          <span className="text-xs uppercase tracking-widest text-white/70">
            Motion Designer • 3D • Direction
          </span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Immersive Motion for Modern Brands
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-white/70 sm:text-base">
          I craft cinematic product reveals, bold brand films, and quietly mesmerizing
          loops. Designed to move audiences and elevate stories.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Play className="h-4 w-4 transition group-hover:scale-110" />
            View Reel
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
