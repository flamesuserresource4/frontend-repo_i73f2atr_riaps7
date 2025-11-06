import React from 'react';
import { Film, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Chromatic Flow',
    tag: 'Brand Film',
    thumb:
      'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Iridescent Shapes',
    tag: '3D Loop',
    thumb:
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Liquid Chrome',
    tag: 'Product Reveal',
    thumb:
      'https://images.unsplash.com/photo-1527443224154-c4f2a9d982fe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nocturne',
    tag: 'Title Sequence',
    thumb:
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
  },
];

const ProjectCard = ({ title, tag, thumb }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
    <img
      src={thumb}
      alt={title}
      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-4">
      <div className="flex items-center gap-2 text-xs text-white/60">
        <Film className="h-3.5 w-3.5" />
        {tag}
      </div>
      <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
    </div>
  </div>
);

const ProjectGrid = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">Selected Work</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Projects</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
          <Sparkles className="h-4 w-4" />
          New inquiries
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
