import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — I\'ll get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20 text-white">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Let\'s collaborate</h2>
        <p className="mt-2 text-sm text-white/70">
          Tell me about your project — timelines, scope, and goals.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-white/20 placeholder:text-white/40 focus:ring-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-white/20 placeholder:text-white/40 focus:ring-2" placeholder="you@studio.com" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea required rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-white/20 placeholder:text-white/40 focus:ring-2" placeholder="What are we making?" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
            <Send className="h-4 w-4" />
            Send request
          </button>
          {status && <p className="pt-2 text-sm text-emerald-400">{status}</p>}
        </form>
      </div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Motion by You. All rights reserved.</p>
    </section>
  );
};

export default Contact;
