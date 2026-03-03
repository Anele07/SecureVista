import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          <div className="space-y-8 max-w-sm">
             <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="h-6 w-6 text-brand-accent" />
              <span className="font-bold text-xl tracking-tight">SecureVista</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering South African SMEs with affordable, practical compliance and cybersecurity solutions.
            </p>
          </div>

          <div className="flex gap-20">
              <div>
                <h3 className="text-[10px] font-bold text-white tracking-widest uppercase mb-6">Platform</h3>
                <ul className="flex gap-8">
                  <li><Link to="/#about" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">About</Link></li>
                  <li><Link to="/services" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">Services</Link></li>
                  <li><Link to="/#consulting" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">Consulting</Link></li>
                  <li><Link to="/#blog" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">Blog</Link></li>
                  <li><Link to="/#careers" className="text-sm text-slate-500 hover:text-brand-accent transition-colors">Careers</Link></li>
                </ul>
              </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} SecureVista Consulting (Pty) Ltd.
          </p>
          <p className="text-[10px] font-bold text-slate-700 tracking-widest uppercase">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;