import React from 'react';
import Hero from './components/Hero';
import Industries from './components/Industries';
import About from './components/About';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Industries />
      <About />
      <CTA />
      <footer className="border-t border-slate-200 py-8">
        <div className="container mx-auto px-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} LeadTech SoftwareSolutions. All rights reserved.</p>
          <nav className="flex gap-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#industries">Industries</a>
            <a className="hover:text-slate-900" href="#about">About</a>
            <a className="hover:text-slate-900" href="#">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
