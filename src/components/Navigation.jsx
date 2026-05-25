import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Button from './Button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Quem Somos',
      href: '#acreditacao',
      children: [
        { label: 'Nossa História', href: '#acreditacao' },
        { label: 'Missão, Visão e Valores', href: '#acreditacao' },
        { label: 'Nossa Equipe', href: '#acreditacao' },
        { label: 'Infraestrutura', href: '#acreditacao' }
      ]
    },
    {
      label: 'Soluções',
      href: '#solucoes',
      children: [
        { label: 'Visão Geral', href: '#solucoes' },
        { label: 'Análises Laboratoriais', href: '#solucoes' },
        { label: 'Coleta e Monitoramento', href: '#solucoes' },
        { label: 'Consultoria Ambiental', href: '#solucoes' },
        { label: 'Compliance Ambiental', href: '#simulador' }
      ]
    },
    {
      label: 'Análises',
      href: '#solucoes',
      children: [
        { label: 'Análises Microbiológicas', href: '#solucoes' },
        { label: 'Análises Físico-Químicas', href: '#solucoes' },
        { label: 'Potabilidade da Água', href: '#solucoes' },
        { label: 'Análise de Efluentes', href: '#solucoes' },
        { label: 'Análise de Solo', href: '#solucoes' },
        { label: 'Análise de Resíduos', href: '#solucoes' },
        { label: 'Monitoramento Ambiental', href: '#solucoes' }
      ]
    },
    {
      label: 'Coleta',
      href: '#solucoes',
      children: [
        { label: 'Coleta de Água', href: '#solucoes' },
        { label: 'Coleta de Solo', href: '#solucoes' },
        { label: 'Monitoramento de Efluentes', href: '#solucoes' },
        { label: 'Monitoramento Contínuo', href: '#solucoes' },
        { label: 'Laudos Técnicos', href: '#solucoes' }
      ]
    },
    {
      label: 'Segmentos',
      href: '#setores',
      children: [
        { label: 'Saneamento Básico', href: '#setores' },
        { label: 'Indústrias', href: '#setores' },
        { label: 'Construtoras', href: '#setores' },
        { label: 'Agronegócio', href: '#setores' },
        { label: 'Empresas Ambientais', href: '#setores' },
        { label: 'Órgãos Públicos', href: '#setores' }
      ]
    },
    { label: 'Certificações', href: '#acreditacao' },
    { label: 'ESG', href: '#esg' },
    {
      label: 'Blog Técnico',
      href: '#faq',
      children: [
        { label: 'Artigos Técnicos', href: '#faq' },
        { label: 'Normas e Regulações', href: '#faq' },
        { label: 'Cases e Estudos', href: '#faq' }
      ]
    },
    { label: 'Contato', href: '#contato' }
  ];

  const handleLinkClick = (e, href) => {
    if (href === '/') {
      e.preventDefault();
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const hash = href.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setMobileMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleMobileItem = (index) => {
    setExpandedMobileItem(expandedMobileItem === index ? null : index);
  };

  return (
    <>
      {/* Top Banner - Acreditação INMETRO (Relative, scrolls out of screen naturally) */}
      <div
        className="w-[90%] max-w-[90%] mx-auto mt-4 bg-brand-green-vibrant text-brand-snow text-[10px] tracking-widest uppercase py-2.5 px-6 rounded-t-2xl border-t border-x border-brand-green-vibrant/30 flex justify-between items-center shadow-md font-mono select-none pointer-events-auto relative z-50"
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={12} className="text-white animate-pulse" />
          <span>Acreditação INMETRO ISO/IEC 17025</span>
        </div>
        
        {/* Social Icons & Technical signals combined */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-2 border-r border-white/20">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-vibrant text-white transition-colors duration-300" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-vibrant text-white transition-colors duration-300" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-[9px]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green-vibrant animate-ping" />
              Vigilância Sanitária Portaria 888
            </span>
            <span>•</span>
            <span>Plantão Técnico: 24h/7d</span>
          </div>
        </div>
      </div>

      {/* Main White Header (Fixed, slides from top-[52px] to top-4) */}
      <header 
        className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[90%] z-40 bg-brand-snow/95 backdrop-blur-md border-x border-b border-brand-gray-med/50 transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'top-4 rounded-2xl border py-3 shadow-lg' 
            : 'top-[52px] rounded-b-2xl py-4 border-t-0'
        }`}
      >
        <div className="w-full mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Image */}
          <a href="#" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-2 group flex-shrink-0">
            <img 
              src="/logo-biolab-global.webp" 
              alt="Biolab Global" 
              className="h-10 lg:h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-3 flex-wrap flex-grow mx-6">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => item.children && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-display text-[11px] xl:text-[12.5px] font-bold uppercase tracking-wider text-brand-navy-dark hover:text-brand-green-vibrant transition-all duration-300 flex items-center gap-0.5 xl:gap-1 px-1 py-1"
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-brand-green-vibrant' : 'text-brand-navy-dark/40'}`} />
                  )}
                </a>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 18 }}
                        className={`absolute left-1/2 -translate-x-1/2 top-full w-56 z-50 pointer-events-auto ${
                          isScrolled ? 'pt-[16px]' : 'pt-[20px]'
                        }`}
                      >
                        <div className="bg-white/95 backdrop-blur-md rounded-b-xl shadow-xl border-x border-b border-brand-gray-med/50 overflow-hidden py-2.5">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={(e) => handleLinkClick(e, child.href)}
                              className="block px-4 py-2 font-display text-[12px] font-semibold tracking-wide text-brand-navy-dark hover:text-brand-green-vibrant hover:bg-brand-green-vibrant/5 transition-all duration-200 border-l-2 border-transparent hover:border-brand-green-vibrant"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Social Media & CTA Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 xl:gap-4 flex-shrink-0">
            <a href="#contato" onClick={(e) => handleLinkClick(e, '#contato')} className="hidden sm:inline-block pointer-events-auto">
              <button className="inline-flex items-center gap-2 font-display font-bold text-[11px] uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer bg-gradient-to-r from-brand-navy to-brand-green-vibrant text-brand-snow hover:opacity-95 shadow-md shadow-brand-navy/10 hover:scale-[1.02]">
                Solicitar Proposta
                <svg className="w-3.5 h-3.5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-navy-dark focus:outline-none rounded-xl border border-brand-gray-med hover:bg-brand-gray-light transition-all cursor-pointer pointer-events-auto"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Nested inside white header for perfect stacking) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full bg-brand-snow border-t border-brand-gray-med/50 shadow-lg py-6 px-6 lg:hidden flex flex-col gap-4 overflow-y-auto max-h-[75vh] pointer-events-auto"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <div key={item.label} className="border-b border-brand-gray-light py-1.5">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleMobileItem(index)}
                          className="w-full flex items-center justify-between font-display text-[13px] font-bold uppercase tracking-wider text-brand-navy-dark py-2 text-left cursor-pointer"
                        >
                          <span>{item.label}</span>
                          <ChevronDown size={14} className={`transition-transform duration-300 ${expandedMobileItem === index ? 'rotate-180 text-brand-green-vibrant' : 'text-brand-navy-dark/40'}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {expandedMobileItem === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden bg-brand-gray-light/40 rounded-xl px-4 py-2 mt-1.5 flex flex-col gap-2.5"
                            >
                              {item.children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={(e) => handleLinkClick(e, child.href)}
                                  className="font-display text-[12px] font-medium tracking-wide text-brand-navy hover:text-brand-green-vibrant py-1 transition-colors duration-200"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="block font-display text-[13px] font-bold uppercase tracking-wider text-brand-navy-dark py-2 hover:text-brand-green-vibrant transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile Drawer Socials and CTA */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3 justify-center py-2 border-y border-brand-gray-light">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-brand-gray-light flex items-center justify-center text-brand-navy-dark hover:bg-brand-green-vibrant hover:text-white transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-brand-gray-light flex items-center justify-center text-brand-navy-dark hover:bg-brand-green-vibrant hover:text-white transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                
                <a href="#contato" onClick={(e) => handleLinkClick(e, '#contato')} className="block w-full">
                  <Button variant="secondary" className="w-full flex items-center justify-center gap-2" icon={<ArrowRight size={12} />}>
                    Solicitar Proposta
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navigation;
