import React from 'react';
import { UserCheck, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
               <span className="text-white font-bold text-[10px] uppercase tracking-widest">Mission Control</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Security is a Process,<br /> <span className="text-brand-accent">Not a Product.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              SecureVista Consulting disrupts the traditional, expensive consultancy model. We leverage specialized security architects to deliver lean, effective solutions for South African SMEs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-12">
               <div className="p-8 glass-panel rounded-3xl hover:border-brand-accent/30 transition-all">
                  <UserCheck className="w-8 h-8 text-brand-accent mb-6" />
                  <h4 className="text-white font-bold mb-2">Human-Led</h4>
                  <p className="text-xs text-slate-500">Expert consultants, not bots.</p>
               </div>
               <div className="p-8 glass-panel rounded-3xl hover:border-brand-accent/30 transition-all">
                  <ShieldCheck className="w-8 h-8 text-brand-accent mb-6" />
                  <h4 className="text-white font-bold mb-2">Tech-Enabled</h4>
                  <p className="text-xs text-slate-500">Automation for speed.</p>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="space-y-8 relative z-10">
                <div className="flex gap-8 group">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg font-bold text-slate-600 group-hover:text-brand-accent group-hover:border-brand-accent/50 transition-all">01</div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Vulnerability Assessment</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">We scan your digital perimeter and audit your data handling practices against POPIA standards.</p>
                   </div>
                </div>

                <div className="flex gap-8 group">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg font-bold text-slate-600 group-hover:text-brand-accent group-hover:border-brand-accent/50 transition-all">02</div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Strategic Remediation</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">We deploy policies, secure configurations, and staff training modules to plug the gaps.</p>
                   </div>
                </div>

                <div className="flex gap-8 group">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg font-bold text-slate-600 group-hover:text-brand-accent group-hover:border-brand-accent/50 transition-all">03</div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Continuous Overwatch</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">Monthly health checks and regulatory updates keep you compliant as laws change.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;