import React from 'react';
import { ArrowRight, Shield, Database, Lock, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      
      {/* Atmospheric Background */}
      <div className="absolute inset-0 w-full h-full bg-atmospheric opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-12 animate-float">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></div>
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">Available for Consultation</span>
        </div>

        <h1 className="heading-huge text-white mb-8">
          Structured Security <br/>
          <span className="text-brand-accent text-glow-orange">
            For Scalable Growth
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
          Supercharge your compliance workflow with automated cybersecurity solutions tailored for South African SMEs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a
            href="#services"
            className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs tracking-widest uppercase transition-all hover:bg-white/10"
          >
            See our services
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase transition-all hover:bg-brand-accent hover:text-white"
          >
            Get in touch
          </a>
        </div>

        {/* Feature Grid (Mini Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
           <div className="glass-panel p-6 rounded-2xl text-left flex items-center gap-4 group hover:border-brand-accent/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent">
                 <Shield className="w-5 h-5" />
              </div>
              <div>
                 <h3 className="text-white font-bold text-sm">POPIA Compliance</h3>
                 <p className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">100% Audit Ready</p>
              </div>
           </div>
           <div className="glass-panel p-6 rounded-2xl text-left flex items-center gap-4 group hover:border-brand-accent/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent">
                 <Lock className="w-5 h-5" />
              </div>
              <div>
                 <h3 className="text-white font-bold text-sm">Cyber Defense</h3>
                 <p className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Enterprise Grade</p>
              </div>
           </div>
           <div className="glass-panel p-6 rounded-2xl text-left flex items-center gap-4 group hover:border-brand-accent/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent">
                 <Globe className="w-5 h-5" />
              </div>
              <div>
                 <h3 className="text-white font-bold text-sm">Risk Analysis</h3>
                 <p className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Real-time Monitoring</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;