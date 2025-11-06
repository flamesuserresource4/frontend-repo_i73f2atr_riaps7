import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide">motion.studio</a>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10">Start a project</a>
      </div>
    </header>
  );
};

export default Navbar;
