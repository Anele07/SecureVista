import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div id="contact" className="relative bg-white py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-slate-500">
              Ready to secure your business? Book your <span className="font-bold text-brand-600">Free Initial Consultation</span> today.
            </p>
            <dl className="mt-8 text-base text-slate-500">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <Phone className="flex-shrink-0 h-6 w-6 text-slate-400" aria-hidden="true" />
                  <span className="ml-3">+27 12 345 6789</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <Mail className="flex-shrink-0 h-6 w-6 text-slate-400" aria-hidden="true" />
                  <span className="ml-3">info@securevista.co.za</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Location</dt>
                <dd className="flex">
                  <MapPin className="flex-shrink-0 h-6 w-6 text-slate-400" aria-hidden="true" />
                  <span className="ml-3">South Africa (Nationwide, Remote-First)</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            {submitted ? (
              <div className="rounded-md bg-green-50 p-4 border border-green-200">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-green-800">Request Sent!</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Thank you for your interest. A consultant will be in touch shortly to schedule your free consultation.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-slate-300 rounded-md border"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-slate-300 rounded-md border"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-slate-300 rounded-md border"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">How can we help?</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border border-slate-300 rounded-md"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'm interested in a POPIA readiness assessment..."
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
                  >
                    Request Consultation
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;