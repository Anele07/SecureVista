import React, { useState } from 'react';
import { Mail, Phone, Lock, Send, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div id="contact" className="relative bg-background pt-32 pb-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-[40px] border border-white/10 shadow-2xl overflow-hidden">
           
           <div className="p-10 md:p-16">
              <div className="text-center mb-16">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                   <span className="text-[10px] font-bold text-white tracking-widest uppercase">Contact</span>
                 </div>
                 <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Initiate Consultation</h2>
                 <p className="text-slate-400">Our security architects are ready to audit your infrastructure.</p>
              </div>

              {submitted ? (
                 <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 border border-brand-accent/20">
                       <Terminal className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Transmission Received</h3>
                    <p className="text-slate-400 max-w-sm">We will establish a secure line of communication shortly.</p>
                 </div>
              ) : (
                 <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Identity</label>
                          <input
                             type="text"
                             name="name"
                             required
                             className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:outline-none transition-all placeholder-slate-700 text-sm"
                             placeholder="Your Name"
                             value={formData.name}
                             onChange={handleChange}
                          />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Organization</label>
                          <input
                             type="text"
                             name="company"
                             className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:outline-none transition-all placeholder-slate-700 text-sm"
                             placeholder="Company Name"
                             value={formData.company}
                             onChange={handleChange}
                          />
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                       <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:outline-none transition-all placeholder-slate-700 text-sm"
                          placeholder="secure@domain.com"
                          value={formData.email}
                          onChange={handleChange}
                       />
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Briefing</label>
                       <textarea
                          name="message"
                          rows={4}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:outline-none transition-all placeholder-slate-700 text-sm resize-none"
                          placeholder="Describe your objectives..."
                          value={formData.message}
                          onChange={handleChange}
                       ></textarea>
                    </div>

                    <button
                       type="submit"
                       className="w-full py-5 rounded-full bg-white text-black font-bold tracking-widest uppercase text-xs transition-all hover:bg-brand-accent hover:text-white flex items-center justify-center gap-3"
                    >
                       <Send className="w-4 h-4" />
                       Transmit Request
                    </button>
                 </form>
              )}

              <div className="mt-12 flex justify-center gap-10 text-[10px] text-slate-500 font-bold tracking-widest uppercase border-t border-white/5 pt-10">
                 <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-brand-accent" />
                    <span>+27 12 345 6789</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-brand-accent" />
                    <span>Encrypted Comms</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;