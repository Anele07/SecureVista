import React from 'react';
import { Shield, Lock, Activity, ArrowRight, FileText, Server, Users } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'popia',
    title: 'Compliance Core',
    description: 'POPIA readiness assessments and gap analysis documentation.',
    features: ['Readiness Audit', 'Legal Mapping', 'Staff Protocols'],
    priceRange: 'R5k – R25k',
    icon: 'shield'
  },
  {
    id: 'cyber',
    title: 'Cyber Defense',
    description: 'Vulnerability scanning for endpoints, firewalls, and access control.',
    features: ['Pen-testing Lite', 'Firewall Config', 'Risk Report'],
    priceRange: 'R3k – R15k',
    icon: 'lock'
  },
  {
    id: 'support',
    title: 'Active Overwatch',
    description: 'Monthly subscription for ongoing monitoring and policy updates.',
    features: ['24/7 Monitoring', 'Policy Patching', 'Priority Ops'],
    priceRange: 'From R1k/mo',
    icon: 'refresh'
  }
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
             <span className="text-[10px] font-bold text-white tracking-widest uppercase">Our Services</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">AI Solutions For <br/><span className="text-brand-accent">Scalable Growth</span></h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">Supercharge your workflow with AI automation and compliance protocols.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div key={service.id} className="group relative glass-panel rounded-3xl p-8 hover:border-brand-accent/30 transition-all duration-500 overflow-hidden">
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      {service.icon === 'shield' && <Shield className="w-6 h-6" />}
                      {service.icon === 'lock' && <Lock className="w-6 h-6" />}
                      {service.icon === 'refresh' && <Activity className="w-6 h-6" />}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Performance</p>
                    <p className="text-sm font-bold text-brand-accent uppercase tracking-tighter">
                      {idx === 0 ? '2X Compliance Speed' : idx === 1 ? '99% Threat Detection' : '24/7 Active Guard'}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">{service.description}</p>

                <div className="space-y-3 mb-10">
                  {service.features.map((f, i) => (
                     <div key={i} className="flex items-center gap-3 text-xs text-slate-300">
                        <div className="w-1 h-1 rounded-full bg-brand-accent"></div>
                        {f}
                     </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-mono mb-1">Investment</p>
                      <p className="text-xl font-bold text-white">{service.priceRange}</p>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
                      <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="/services" 
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs hover:bg-brand-accent hover:border-brand-accent transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;