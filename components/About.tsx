import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="bg-brand-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              SecureVista Consulting helps small and medium-sized enterprises (SMEs) in South Africa navigate the complexities of the Protection of Personal Information Act (POPIA) and improve their cybersecurity posture.
            </p>
            <p className="mt-4 text-lg text-slate-500">
              We operate on a lean model, leveraging partnerships and freelancers to minimize costs while delivering professional, high-quality services. We believe that security and compliance should be accessible to everyone, not just large enterprises.
            </p>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-slate-900">Who We Help</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['SMEs (5-50 employees)', 'Law Firms & Accountants', 'Medical Practices', 'Retail & E-commerce', 'NGOs'].map((item) => (
                  <li key={item} className="flex items-center text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <span className="h-2 w-2 bg-brand-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
             <div className="absolute top-0 -left-4 -right-4 bottom-0 bg-brand-200 rounded-3xl transform rotate-3 z-0"></div>
             <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">The SecureVista Approach</h3>
               <div className="space-y-6">
                 <div>
                   <h4 className="font-semibold text-brand-700">1. Assess</h4>
                   <p className="text-slate-600 text-sm mt-1">We identify your compliance gaps and security risks using proven checklists.</p>
                 </div>
                 <div>
                   <h4 className="font-semibold text-brand-700">2. Remediation</h4>
                   <p className="text-slate-600 text-sm mt-1">We provide templates, policies, and practical steps to fix issues.</p>
                 </div>
                 <div>
                   <h4 className="font-semibold text-brand-700">3. Maintenance</h4>
                   <p className="text-slate-600 text-sm mt-1">Monthly check-ins ensure you stay compliant as your business evolves.</p>
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