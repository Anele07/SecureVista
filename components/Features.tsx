import React from 'react';
import { Target, Shield, Zap, Database, BarChart3, Lock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
             <span className="text-[10px] font-bold text-white tracking-widest uppercase">Intelligence Dashboard</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Data-Driven <span className="text-brand-accent">Consulting</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
           
           {/* Main Feature - Strategic Mapping */}
           <div className="md:col-span-8 glass-panel rounded-[32px] p-10 relative overflow-hidden group hover:border-brand-accent/30 transition-all duration-500">
              <div className="relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent mb-8 border border-white/10">
                    <Target className="w-6 h-6" />
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-6">Strategic Compliance Mapping</h3>
                 <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
                    We map your data flows against legal frameworks to create a dynamic defense strategy that evolves with your business.
                 </p>
                 <div className="flex gap-3">
                    <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-brand-accent uppercase tracking-widest">Live Analysis</div>
                    <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">Risk Scoring</div>
                 </div>
              </div>
           </div>

           {/* Stat Card 1 */}
           <div className="md:col-span-4 glass-panel rounded-[32px] p-10 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500">
              <div className="flex justify-between items-start">
                 <BarChart3 className="w-8 h-8 text-brand-accent" />
                 <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Efficiency</span>
              </div>
              <div>
                 <div className="text-6xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">3x</div>
                 <p className="text-sm text-slate-400 leading-relaxed">Faster compliance implementation than industry average.</p>
              </div>
           </div>

           {/* Stat Card 2 */}
           <div className="md:col-span-4 glass-panel rounded-[32px] p-10 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500">
              <div className="flex justify-between items-start">
                 <Shield className="w-8 h-8 text-brand-accent" />
                 <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Coverage</span>
              </div>
              <div>
                 <div className="text-6xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">100%</div>
                 <p className="text-sm text-slate-400 leading-relaxed">Detailed gap analysis for every client.</p>
              </div>
           </div>

           {/* Secondary Feature - Cyber Defense */}
           <div className="md:col-span-8 glass-panel rounded-[32px] p-10 relative overflow-hidden group hover:border-brand-accent/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                   <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent mb-8 border border-white/10">
                         <Lock className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6">Threat Intelligence</h3>
                      <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                         Identify vulnerabilities before they become breaches with our enterprise-grade scanning tools.
                      </p>
                   </div>
                   {/* Abstract UI representation */}
                   <div className="w-full md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden">
                      <div className="space-y-4 font-mono text-[10px]">
                         <div className="flex justify-between text-slate-500"><span>SCANNING PORTS...</span><span className="text-brand-accent">COMPLETE</span></div>
                         <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-full bg-brand-accent"></div></div>
                         <div className="flex justify-between text-slate-500"><span>FIREWALL</span><span className="text-brand-accent">ACTIVE</span></div>
                         <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-brand-accent"></div></div>
                         <div className="flex justify-between text-slate-500"><span>ENCRYPTION</span><span className="text-brand-accent">AES-256</span></div>
                         <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-5/6 bg-brand-accent"></div></div>
                      </div>
                   </div>
                </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Features;