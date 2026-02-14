import React from 'react';
import { Users, Briefcase, TrendingUp, BookOpen } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      name: 'Affordable & Transparent',
      description: 'Pricing designed specifically for SMEs with fixed-price packages and no hidden costs.',
      icon: TrendingUp,
    },
    {
      name: 'Practical Approach',
      description: 'We skip the jargon. Simple, non-technical explanations and actionable steps.',
      icon: BookOpen,
    },
    {
      name: 'Locally Relevant',
      description: 'Deep understanding of POPIA and the specific challenges South African businesses face.',
      icon: Briefcase,
    },
    {
      name: 'Scalable Support',
      description: 'From one-off assessments to ongoing monthly support as your business grows.',
      icon: Users,
    },
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Why Choose SecureVista</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Better Way to Manage Compliance
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Most SMEs can't afford full-time compliance officers. We bridge the gap with expert, on-demand services.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-slate-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;