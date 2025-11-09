import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-2xl bg-slate-900 text-white">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="text-2xl font-semibold">Have an idea or a challenge?</h3>
              <p className="mt-2 text-white/80">Let’s co-create your next product or accelerate your roadmap. We’ll respond within one business day.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-slate-900 font-medium shadow hover:shadow-md transition">
                <Mail className="h-4 w-4" /> Contact us
              </a>
              <a href="#book" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20 backdrop-blur transition">
                <Calendar className="h-4 w-4" /> Book a discovery call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;