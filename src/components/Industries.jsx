import React from 'react';
import { Rocket, Building2, Landmark, Lightbulb, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    key: 'startups',
    title: 'Startups',
    icon: Rocket,
    blurb: 'From MVP to product-market fit, we move fast with you — lean roadmaps, rapid prototyping, and scalable architectures.',
    bullets: ['MVP design & build', 'Funding-ready demos', 'Scalable cloud infra'],
  },
  {
    key: 'enterprises',
    title: 'Corporate & Enterprise',
    icon: Building2,
    blurb: 'Secure, compliant, and future-proof systems that integrate with your stack and deliver measurable ROI.',
    bullets: ['System integration', 'Data platforms & AI', 'Security & compliance'],
  },
  {
    key: 'government',
    title: 'Public Sector',
    icon: Landmark,
    blurb: 'Digital services for citizens and operations — resilient, accessible, and transparent by design.',
    bullets: ['Gov service portals', 'Process automation', 'Accessibility-first UX'],
  },
  {
    key: 'individuals',
    title: 'Individuals & Founders',
    icon: Lightbulb,
    blurb: 'Have an idea? We turn napkin sketches into polished products with clear runway and launch plans.',
    bullets: ['Idea validation', 'Prototypes & pilots', 'Launch & growth playbooks'],
  },
];

const Industries = () => {
  return (
    <section id="industries" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Industries we serve</h2>
          <p className="mt-3 text-slate-600">Flexible engagement models for every stage — from early ideas to enterprise transformation.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ key, title, icon: Icon, blurb, bullets }) => (
            <div key={key} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-900 p-2 text-white"><Icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{blurb}</p>
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;