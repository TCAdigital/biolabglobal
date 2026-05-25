import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Check, ArrowUpRight, Calculator } from 'lucide-react';

const slides = [
  {
    bgImage: 'https://demo.awaikenthemes.com/genlab/wp-content/uploads/2026/02/hero-bg.jpg',
    tagline: 'Ciência que Impulsiona o Progresso Real',
    titleLine1: 'Análises de precisão para',
    titleLine2: 'um futuro sustentável',
    description: 'Nosso laboratório é comprometido em impulsionar a pesquisa científica com inovação e biotecnologia de ponta. Por meio de análises precisas e metodologias certificadas, entregamos resultados confiáveis que garantem a segurança do seu negócio e a conformidade regulatória.',
    advantages: ['Ensaios Laboratoriais Avançados', 'Soluções Científicas de Ponta']
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000',
    tagline: 'Segurança e Conformidade Sanitária',
    titleLine1: 'Garantia de pureza para a',
    titleLine2: 'vida e saúde humana',
    description: 'Realizamos ensaios microbiológicos e físico-químicos exaustivos em águas de abastecimento, minerais e purificadas, operando em conformidade estrita com a Portaria 888 da Vigilância Sanitária.',
    advantages: ['Análise da Portaria 888', 'Laudos Rápidos e Certificados']
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000',
    tagline: 'Sustentabilidade e Gestão de Riscos',
    titleLine1: 'Monitoramento analítico para a',
    titleLine2: 'sua indústria verde',
    description: 'Soluções completas para controle de descarte de efluentes industriais e conformidade regulatória CONAMA. Auxiliamos sua corporação a estruturar laudos rigorosos para auditorias ambientais ESG.',
    advantages: ['Conformidade CONAMA 430', 'Laudos para Auditoria ESG']
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-brand-navy-deep text-brand-snow flex items-center pt-28 pb-20 overflow-hidden select-none">
      
      {/* Immersive premium laboratory background image slideshow */}
      {slides.map((slide, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 0.85 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-[75%_center] md:bg-right-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('${slide.bgImage}')` }}
        />
      ))}

      {/* Overlay gradient: De #001977 para #05B874 corporativo (mais fraco para destacar o fundo) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001977]/85 via-[#001977]/65 to-[#05B874]/20 z-0" />
      {/* Smooth transition gradient to the deep navy background of the section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy-deep/20 to-brand-navy-deep z-0" />
      
      {/* Immersive technical grid layout */}
      <div className="absolute inset-0 tech-grid-dark opacity-20 z-0 pointer-events-none" />

      {/* Decorative high-contrast abstract grid highlights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#05B874]/5 blur-[120px] rounded-full pointer-events-none" />



      {/* Hero Layout Container */}
      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Side: occupy 8 columns on desktop to leave space for the scientist */}
          <div className="lg:col-span-8 flex flex-col items-start text-left min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                className="w-full flex flex-col items-start"
              >
                {/* Tagline / Badge */}
                <div className="inline-flex items-center gap-2 bg-[#0B0F19]/45 border border-white/10 px-4 py-2 mb-6 text-white font-mono text-[10px] uppercase tracking-widest rounded-full backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green-vibrant animate-pulse" />
                  <span>{slides[currentSlide].tagline}</span>
                </div>

                {/* Title: Sans-serif unificada com destaque em verde */}
                <h1 className="text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] font-display font-extrabold tracking-tight leading-[1.08] text-white">
                  {slides[currentSlide].titleLine1} <br />
                  <span className="text-brand-green-vibrant">
                    {slides[currentSlide].titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-brand-snow/80 mt-6 leading-relaxed max-w-xl font-sans min-h-[72px]">
                  {slides[currentSlide].description}
                </p>

                {/* Key Advantages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-xl">
                  {slides[currentSlide].advantages.map((advantage, advIndex) => (
                    <div key={advIndex} className="flex items-center gap-3 text-white/90">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green-vibrant/10 border border-brand-green-vibrant/20 flex items-center justify-center text-brand-green-vibrant">
                        <Check size={14} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium tracking-wide">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Subtle Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full max-w-xl h-[1px] bg-white my-8"
            />

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.5 }}
              className="flex flex-wrap items-center gap-8 mt-2"
            >
              {/* Primary Pill Button with internal arrow in circle (gradient) */}
              <a 
                href="#contato" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-brand-navy to-brand-green-vibrant text-white font-bold text-sm pl-6 pr-2 py-2 rounded-full hover:opacity-95 transition-all duration-300 shadow-lg shadow-brand-navy/10 hover:scale-[1.02]"
              >
                <span>Solicitar Proposta</span>
                <span className="w-8 h-8 rounded-full bg-white text-brand-navy flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight size={16} className="stroke-[3]" />
                </span>
              </a>

              {/* Secondary Calculator Button for Simulator */}
              <a 
                href="#simulador" 
                className="group inline-flex items-center gap-3 text-white font-bold text-sm transition-all duration-300 hover:text-brand-green-vibrant"
              >
                <span className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-navy to-brand-green-vibrant flex items-center justify-center text-white transition-all duration-300 shadow-lg shadow-brand-navy/20 group-hover:scale-110">
                  <Calculator size={16} className="text-white" />
                </span>
                <span>Simulador Técnico</span>
              </a>
            </motion.div>
          </div>

          {/* Spacer to keep right side clean for the scientist in the background image */}
          <div className="hidden lg:block lg:col-span-4 relative h-[380px] z-10 pointer-events-none select-none" />

        </div>

        {/* Premium Apple Style Vertical Navigation Dots */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer"
              aria-label={`Ir para slide ${index + 1}`}
            >
              {/* Hover label indicator */}
              <span className="absolute right-8 text-[9px] font-mono font-bold tracking-widest text-brand-snow/0 group-hover:text-brand-snow/80 transition-all duration-300 uppercase select-none pointer-events-none pr-1">
                {index === 0 ? "Ciência" : index === 1 ? "Água" : "Efluentes"}
              </span>
              
              {/* Outer ring */}
              <span className={`absolute inset-0 rounded-full border border-white/20 transition-all duration-500 scale-50 group-hover:scale-100 ${
                index === currentSlide ? 'border-brand-green-vibrant/80 scale-100 bg-white/5' : ''
              }`} />
              
              {/* Inner dot */}
              <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-brand-green-vibrant w-2.5 h-2.5 shadow-[0_0_8px_#05B874]' : 'bg-white/40 group-hover:bg-white/80'
              }`} />
            </button>
          ))}
        </div>

      </div>

      {/* Technical bottom indicator - aligned perfectly to the base of the entire hero section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-snow/45 text-[9.5px] font-mono uppercase tracking-widest pointer-events-none z-20">
        <span>Rolar para Explorar</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-brand-green-vibrant" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
