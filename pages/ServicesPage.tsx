import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  RefreshCcw, 
  ShieldAlert, 
  Database, 
  Server, 
  ClipboardCheck, 
  Mail, 
  Smartphone, 
  Activity,
  Plus,
  Minus,
  ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiChat from '../components/AiChat';

const services = [
  {
    title: "Network Solutions",
    description: "Secure your network infrastructure with fast, reliable, and scalable routing and switching for seamless performance and strong protection.",
    icon: Network
  },
  {
    title: "Penetration Testing",
    description: "Test your critical systems and digital infrastructure for potential weak points by simulating cyber attacks. Ethical hacking reveals security vulnerabilities, allowing you to fix them promptly and strengthen defenses before malicious actors can exploit them for harm, data breaches, or compliance failures.",
    icon: Search
  },
  {
    title: "Maintenance Contracts",
    description: "Keep your systems stable and secure with maintenance contracts offering regular scheduled updates and proactive real-time monitoring. Gain responsive technical support when needed, ensuring reliable operation, performance optimization, and protection against potential vulnerabilities and incident prevention.",
    icon: RefreshCcw
  },
  {
    title: "Firewall Solutions",
    description: "Protect digital assets with real-time firewall defenses that detect threats and prevent intrusions with intelligent filtering rules.",
    icon: ShieldAlert
  },
  {
    title: "DLP",
    description: "Prevent data leaks with AI-driven monitoring tools that track, detect, and block unauthorized access to your sensitive information.",
    icon: Database
  },
  {
    title: "Server Solutions",
    description: "Build reliable, secure, and scalable server setups expertly configured and customized to your organization's performance and capacity requirements. Our expert configuration ensures your infrastructure provides the stability, protection, resilience, and flexibility to support your demands.",
    icon: Server
  },
  {
    title: "Cybersecurity Audits",
    description: "Conduct in-depth security audits to effectively uncover hidden threats and ensure essential security compliance. These audits are tailored specifically to your system's unique risk areas and relevant industry standards, providing clear visibility into vulnerabilities and compliance status to strengthen your security posture.",
    icon: ClipboardCheck
  },
  {
    title: "Email Security",
    description: "Shield your email channels from spam, phishing, and breaches with advanced filtering, encryption, authentication tools, and continuous monitoring.",
    icon: Mail
  },
  {
    title: "Device Security",
    description: "Safeguard devices across your network with real-time monitoring, threat detection, malware defense, and secure access enforcement.",
    icon: Smartphone
  },
  {
    title: "SIEM Integration",
    description: "Centralize your security monitoring efforts with advanced real-time log analysis and intelligent event correlation. Implement automated alerts to efficiently detect potential threats and suspicious activities across your entire network infrastructure, providing comprehensive visibility and enabling faster incident response capabilities.",
    icon: Activity
  }
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including finance, healthcare, retail, and technology, providing tailored cybersecurity solutions for each."
  },
  {
    question: "How do I get started with a service?",
    answer: "You can start by booking a free consultation through our contact form. Our team will then reach out to discuss your specific needs."
  },
  {
    question: "Are your solutions scalable for growing businesses?",
    answer: "Yes, all our solutions are designed with scalability in mind, ensuring they grow alongside your business infrastructure."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Absolutely. We offer various maintenance contracts and ongoing support packages to ensure your systems remain secure."
  },
  {
    question: "Can you customize services for specific needs?",
    answer: "Yes, we pride ourselves on delivering bespoke security strategies that address the unique challenges of your organization."
  }
];

const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-slate-300">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">What We Offer</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We offer strategic, technical, and responsive cybersecurity services tailored to your unique needs.
          </p>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative glass-panel rounded-[32px] p-10 hover:border-brand-accent/30 transition-all duration-500 overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
          <h2 className="text-5xl font-bold text-white text-center mb-20 tracking-tight">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-panel rounded-3xl overflow-hidden border border-white/5"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold text-white">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                    {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`px-8 transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-40 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass-panel rounded-[48px] p-16 md:p-24 overflow-hidden text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Stay Ahead of Cyber <br /> Threats
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Partner with CyberShade to protect your business from modern cyber threats. Our experts are ready to guide you.
              </p>
              <button className="px-12 py-5 rounded-full bg-white text-black font-bold tracking-widest uppercase text-xs hover:bg-brand-accent hover:text-white transition-all shadow-2xl shadow-white/10">
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AiChat />
    </div>
  );
};

export default ServicesPage;
