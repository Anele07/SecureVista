import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="h-8 w-8 text-brand-400" />
              <span className="font-bold text-xl tracking-tight">SecureVista</span>
            </div>
            <p className="text-slate-400 text-base">
              Affordable, practical compliance and cybersecurity solutions for South African SMEs.
            </p>
            <div className="flex space-x-6">
              {/* Social placeholders */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#services" className="text-base text-slate-400 hover:text-white">POPIA Compliance</a></li>
                  <li><a href="#services" className="text-base text-slate-400 hover:text-white">Cybersecurity Health Checks</a></li>
                  <li><a href="#services" className="text-base text-slate-400 hover:text-white">Monthly Support</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#about" className="text-base text-slate-400 hover:text-white">About Us</a></li>
                  <li><a href="#contact" className="text-base text-slate-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} SecureVista Consulting (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;