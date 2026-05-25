import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Waves, Microscope, Trash2, Mountain, Compass } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const servicesList = [
    {
      title: "Análise de Potabilidade",
      subtitle: "Água Tratada / Consumo",
      description: "Caracterização completa de parâmetros físicos, químicos e microbiológicos em atendimento ao padrão de potabilidade para o consumo humano.",
      icon: Droplet,
      parameters: ["pH", "Turbidez", "Cloro residual", "Cor aparente", "Fluoreto"],
      regulation: "Portaria GM/MS 888/2021"
    },
    {
      title: "Monitoramento de Efluentes",
      subtitle: "Descarte de Efluentes",
      description: "Análises avançadas para o controle de efluentes industriais e domésticos, visando o descarte seguro e regular em corpos hídricos receptores.",
      icon: Waves,
      parameters: ["DBO / DQO", "Sólidos totais", "Óleos & Graxas", "Surfactantes", "Fósforo"],
      regulation: "Resoluções CONAMA 357 e 430/2011"
    },
    {
      title: "Microbiologia Ambiental",
      subtitle: "Indicadores Sanitários",
      description: "Detecção e contagem de microrganismos e patógenos específicos em matrizes de água, alimentos, resíduos e superfícies analíticas.",
      icon: Microscope,
      parameters: ["Escherichia coli", "Coliformes Totais", "Pseudomonas", "Legionella"],
      regulation: "Standard Methods (APHA)"
    },
    {
      title: "Classificação de Resíduos",
      subtitle: "Caracterização Sólida",
      description: "Caracterização de resíduos industriais sólidos para fins de destinação final correta, reciclagem ou co-processamento no aterro.",
      icon: Trash2,
      parameters: ["Lixiviação", "Solubilização", "Inflamabilidade", "Corrosividade"],
      regulation: "ABNT NBR 10004"
    },
    {
      title: "Solos & Sedimentos",
      subtitle: "Áreas Contaminadas",
      description: "Análise físico-química de solos agrícolas, industriais e sedimentos de rios para mapeamento de fertilidade ou investigação de contaminação.",
      icon: Mountain,
      parameters: ["Metais pesados", "Pesticidas", "Compostos orgânicos", "Granulometria"],
      regulation: "Resolução CONAMA 420/2009"
    },
    {
      title: "Coleta Técnica Especializada",
      subtitle: "Cadeia de Custódia",
      description: "Amostragem em campo com equipes técnicas de engenharia especializadas, equipamentos calibrados, controle térmico e lacres rastreáveis.",
      icon: Compass,
      parameters: ["Amostragem ativa", "Preservação química", "Lacre de segurança", "Registro de campo"],
      regulation: "Guia Nacional de Coleta (CETESB)"
    }
  ];

  const maxIndex = isDesktop ? servicesList.length - 2 : servicesList.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const translationOffset = isDesktop 
    ? `calc(-${currentIndex} * (50% + 12px))` 
    : `calc(-${currentIndex} * (100% + 24px))`;

  return (
    <section id="solucoes" className="bg-brand-gray-light py-20 md:py-28 select-none">
      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 30% width (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold inline-block mb-6">
              Escopo analítico completo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-display font-extrabold text-brand-navy leading-tight">
              Soluções integradas em análises ambientais de alta precisão
            </h2>
            <p className="text-sm md:text-base text-brand-gray-dark/75 mt-6 leading-relaxed font-sans max-w-md">
              Com um portfólio robusto composto por mais de 300 parâmetros monitorados, atendemos todas as exigências das maiores agências de vigilância ambiental e sanitária do país.
            </p>

            {/* Navigation Buttons and Indicators */}
            <div className="flex items-center lg:items-start flex-row lg:flex-col gap-6 mt-10 w-full justify-between lg:justify-start">
              
              {/* Pagination Dots & Progress Bar */}
              <div className="flex items-center gap-4">
                {/* Fractional Page Indicator */}
                <span className="text-xs font-mono font-bold text-brand-navy/60">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
                </span>
                
                {/* Premium Horizontal Progress Line */}
                <div className="h-[2px] bg-brand-gray-med w-24 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute top-0 left-0 bottom-0 bg-brand-green-vibrant"
                    animate={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-brand-gray-med bg-white text-brand-navy flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-brand-navy hover:text-white hover:border-transparent hover:scale-105 active:scale-95 shadow-md shadow-brand-navy/5"
                  aria-label="Voltar slide"
                >
                  <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-brand-gray-med bg-white text-brand-navy flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-brand-navy hover:text-white hover:border-transparent hover:scale-105 active:scale-95 shadow-md shadow-brand-navy/5"
                  aria-label="Avançar slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: 70% width (lg:col-span-8) */}
          <div className="lg:col-span-8 w-full overflow-hidden py-4 px-1">
            <div className="relative w-full">
              <motion.div
                animate={{ x: translationOffset }}
                transition={{ type: 'spring', stiffness: 100, damping: 16 }}
                className="flex gap-6"
              >
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className="w-[290px] sm:w-[340px] md:w-[380px] lg:w-[calc(50%-12px)] flex-shrink-0 h-auto"
                  >
                    <ServiceCard {...service} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
