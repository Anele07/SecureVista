import React from 'react';
import { Shield, Lock, Activity, Check } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'popia',
    title: 'POPIA Compliance Services',
    description: 'Comprehensive readiness assessments and documentation to ensure your business complies with the Protection of Personal Information Act.',
    features: [
      'POPIA readiness assessments',
      'Data mapping & risk identification',
      'Privacy policy & documentation',
      'Compliance checklists',
      'Staff awareness guidance'
    ],
    priceRange: 'R5,000 – R25,000',
    icon: 'shield'
  },
  {
    id: 'cyber',
    title: 'Cybersecurity Health Checks',
    description: 'Essential security reviews to identify vulnerabilities in your basic IT infrastructure and processes.',
    features: [
      'Password & access control review',
      'Antivirus, firewall & backup checks',
      'Email & endpoint security review',
      'Detailed risk summary report',
      'Actionable recommendations'
    ],
    priceRange: 'R3,000 – R15,000',
    icon: 'lock'
  },
  {
    id: 'support',
    title: 'Monthly Support',
    description: 'Ongoing subscription support to keep your compliance up to date and your security awareness sharp.',
    features: [
      'Monthly compliance check-ins',
      'Policy updates as regulations change',
      'Security reminders for staff',
      'Simple monthly status reports',
      'Priority email support'
    ],
    priceRange: 'R1,000 – R5,000 / month',
    icon: 'refresh'
  }
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tailored for South African SMEs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            We provide affordable, practical solutions without the enterprise-level complexity or cost.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {services.map((service) => (
            <div key={service.id} className="relative p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-xl">
                  {service.icon === 'shield' && <Shield className="h-8 w-8 text-brand-600" />}
                  {service.icon === 'lock' && <Lock className="h-8 w-8 text-brand-600" />}
                  {service.icon === 'refresh' && <Activity className="h-8 w-8 text-brand-600" />}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base text-slate-500 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-accent-light" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-sm text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-500">Starting from</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{service.priceRange}</p>
                <a
                  href="#contact"
                  className="mt-6 block w-full bg-slate-800 border border-transparent rounded-lg py-3 px-4 text-center font-medium text-white hover:bg-slate-700 transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;