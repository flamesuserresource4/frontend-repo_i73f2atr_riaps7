import React from 'react';
import { Wand2, Shapes, Video, Timer } from 'lucide-react';

const items = [
  {
    icon: Wand2,
    title: 'Art Direction',
    desc: 'Concepting, mood, and visual systems that guide the motion language.'
  },
  {
    icon: Shapes,
    title: '3D Design',
    desc: 'Modeling, shading, lighting, and simulation for product and abstract work.'
  },
  {
    icon: Video,
    title: 'Animation',
    desc: 'Cinematic movement, timing, and transitions built for impact.'
  },
  {
    icon: Timer,
    title: 'Editing & Delivery',
    desc: 'Finish, sound, and exports tailored for web, social, and broadcast.'
  }
];

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 text-white">
      <p className="text-xs uppercase tracking-widest text-white/50">Capabilities</p>
      <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Services</h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
