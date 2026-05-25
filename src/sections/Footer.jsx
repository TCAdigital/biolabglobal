import { ShieldCheck, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-brand-snow/80 py-16 md:py-24 relative select-none font-sans border-t border-white/10 overflow-hidden">
      {/* Visual background atmospheric glows */}
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-brand-green-vibrant/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-brand-green-vibrant/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="w-[90%] max-w-[90%] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-biolab-global.webp" 
                alt="Biolab Global" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-brand-snow/75 leading-relaxed">
              Desde 2009, somos parceiros analíticos de excelência para indústrias, saneamento básico e agronegócio em todo o território nacional.
            </p>
            
            {/* Accreditation Code - Premium Pill */}
            <div className="self-start inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors duration-300">
              <ShieldCheck size={14} className="text-brand-green-vibrant" />
              <span className="text-[10px] font-mono uppercase text-white font-bold tracking-wider">
                Acreditação CRL-0842
              </span>
            </div>
          </div>

          {/* Column 2: Contatos */}
          <div>
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-brand-green-vibrant pl-3.5">
              Suporte Analítico
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover:border-brand-green-vibrant/30 group-hover:bg-white/10 transition-all duration-300">
                  <Mail size={14} className="text-brand-green-vibrant" />
                </div>
                <a href="mailto:comercial@biolabglobal.com.br" className="hover:text-brand-green-vibrant transition-colors duration-300">
                  comercial@biolabglobal.com.br
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover:border-brand-green-vibrant/30 group-hover:bg-white/10 transition-all duration-300">
                  <Phone size={14} className="text-brand-green-vibrant" />
                </div>
                <a href="tel:+5511933334444" className="hover:text-brand-green-vibrant transition-colors duration-300">
                  (11) 93333-4444 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 mt-0.5">
                  <MapPin size={14} className="text-brand-green-vibrant" />
                </div>
                <span className="text-brand-snow/75 leading-relaxed">
                  Rua das Análises, 500 — Bloco A<br />
                  São Paulo — SP — CEP 04000-000
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Links Úteis */}
          <div>
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-brand-green-vibrant pl-3.5">
              Navegação Técnica
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#solucoes", label: "Escopo de Análises" },
                { href: "#acreditacao", label: "INMETRO ISO 17025" },
                { href: "#setores", label: "Segmentos Atendidos" },
                { href: "#esg", label: "Relatório ESG 2026" },
                { href: "#faq", label: "Central de Suporte FAQ" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-brand-green-vibrant transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Conformidade Legal */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white mb-1 border-l-2 border-brand-green-vibrant pl-3.5">
              Privacidade & LGPD
            </h4>
            <p className="text-sm text-brand-snow/75 leading-relaxed">
              Garantia absoluta de sigilo analítico. Tratamos todos os dados cadastrais, técnicos e de monitoramento em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            
            {/* Live Security Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-brand-navy-deep/60 border border-brand-green-vibrant/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-vibrant opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-vibrant"></span>
              </span>
              <span className="text-[10px] font-mono text-brand-green-vibrant font-extrabold uppercase tracking-wider">
                Custódia Criptografada Ativa
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-wider text-brand-snow/40">
          <div className="text-center lg:text-left leading-relaxed">
            © {currentYear} BIOLAB GLOBAL ANALISES CIENTIFICAS LTDA. <br className="md:hidden" /> CNPJ 12.345.678/0001-90
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-brand-green-vibrant transition-colors duration-300">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-green-vibrant transition-colors duration-300">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-green-vibrant transition-colors duration-300">Código de Ética</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
