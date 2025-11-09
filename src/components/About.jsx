import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About LeadTech SoftwareSolutions</h2>
            <p className="mt-4 text-slate-600">
              Founded in 2022, LeadTech SoftwareSolutions has been at the forefront of software innovation, delivering tailored solutions that drive business success. Our passionate team of engineers, designers, and strategists work closely with clients to transform ideas into reality. We believe in continuous learning and building long-term partnerships. Our commitment to quality and innovation has earned us recognition as a trusted technology partner worldwide.
            </p>
          </div>
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-500">Founded</dt>
                  <dd className="text-2xl font-semibold">2022</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-500">Global Clients</dt>
                  <dd className="text-2xl font-semibold">40+ </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-500">Projects Delivered</dt>
                  <dd className="text-2xl font-semibold">100+ </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-500">Avg. NPS</dt>
                  <dd className="text-2xl font-semibold">72</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-slate-600">
                We specialize in modern web, mobile, AI, and cloud solutions — built with security, performance, and long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;