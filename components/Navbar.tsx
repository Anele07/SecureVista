import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Intelligence', href: '/#features' },
    { name: 'Mission', href: '/#about' },
  ];

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 pt-6 px-4">
      <div 
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 ${
          scrolled || isOpen 
            ? 'bg-surface/80 backdrop-blur-2xl border border-white/10 shadow-2xl' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={handleLogoClick}>
             <ShieldCheck className="h-5 w-5 text-brand-accent" />
             <span className="font-bold text-base tracking-tight text-white">
               Secure<span className="text-brand-accent">Vista</span>
             </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all hover:bg-white/5"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-400 hover:text-white px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all hover:bg-white/5"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/#contact"
              className="bg-white text-black hover:bg-brand-accent hover:text-white px-6 py-2 rounded-full text-[11px] font-bold transition-all"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-6 rounded-b-[32px] bg-surface/95 backdrop-blur-2xl border-t border-white/5">
            <div className="pt-6 space-y-1">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 mt-4 bg-brand-accent text-white font-bold rounded-full"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
