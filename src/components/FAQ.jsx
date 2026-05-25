import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, FileText, ShieldAlert } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qual é a importância da acreditação ISO/IEC 17025 do INMETRO?",
      answer: "A ISO/IEC 17025 é o padrão internacional máximo que atesta a competência técnica, imparcialidade e operação consistente de laboratórios de calibração e ensaio. Ao contrário de uma certificação de gestão genérica (como a ISO 9001), a acreditação ISO 17025 comprova cientificamente que o laboratório executa os ensaios com precisão e confiabilidade. Laudos emitidos por laboratórios acreditados pela ISO 17025 possuem validade legal indiscutível perante órgãos reguladores (como ANVISA, IBAMA, CETESB e secretarias estaduais), tribunais e licitações públicas.",
      tag: "Regulatório",
      norma: "ISO/IEC 17025"
    },
    {
      question: "Quais são as principais exigências da Portaria GM/MS 888/2021 para potabilidade da água?",
      answer: "A Portaria GM/MS 888/2021 do Ministério da Saúde estabelece os procedimentos de controle e de vigilância da qualidade da água para consumo humano e seu padrão de potabilidade. Ela exige monitoramentos rigorosos com frequências diárias, semanais e mensais para parâmetros microbiológicos (coliformes totais, Escherichia coli), físico-químicos (turbidez, cor, pH, cloro residual livre) e inorgânicos/orgânicos (metais pesados, pesticidas, desinfetantes). A Biolab Global realiza a caracterização completa exigida por esta norma, emitindo relatórios técnicos prontos para integração no Sisagua.",
      tag: "Qualidade da Água",
      norma: "Portaria 888/2021"
    },
    {
      question: "Como o monitoramento de efluentes industriais deve atender às Resoluções CONAMA?",
      answer: "O descarte de efluentes industriais e domésticos em corpos hídricos deve obedecer rigidamente aos parâmetros estabelecidos nas Resoluções CONAMA 357/2005 e CONAMA 430/2011. Estas normas estabelecem limites estritos de concentração para Demanda Bioquímica de Oxigênio (DBO), Demanda Química de Oxigênio (DQO), Óleos e Graxas, Sólidos Sedimentáveis, Metais Pesados (como chumbo, cromo, cádmio) e temperatura. O descumprimento destas normas sujeita a empresa a severas sanções civis, criminais e administrativas sob a Lei de Crimes Ambientais.",
      tag: "Efluentes",
      norma: "CONAMA 430/2011"
    },
    {
      question: "Como funciona a cadeia de custódia e rastreabilidade na coleta técnica de campo?",
      answer: "Toda amostragem ambiental realizada pela Biolab Global segue um rígido protocolo científico de cadeia de custódia de acordo com o Standard Methods (APHA). Desde o momento da coleta por nossos técnicos equipados com coletores calibrados, cada amostra recebe um código identificador único, é preservada quimicamente conforme a matriz analítica e selada com lacre inviolável numerado. O transporte ocorre em caixas térmicas com temperatura monitorada por termômetros digitais rastreáveis, garantindo que o laboratório analise a amostra com sua integridade química e microbiológica 100% preservada.",
      tag: "Operacional",
      norma: "Standard Methods (APHA)"
    },
    {
      question: "Quais tecnologias são utilizadas para análise multielementar de metais pesados?",
      answer: "Utilizamos a tecnologia de Espectrometria de Emissão Óptica com Plasma Acoplado Indutivamente (ICP-OES), que representa o padrão-ouro internacional em análises inorgânicas de alta performance. O ICP-OES ioniza a amostra a temperaturas de até 10.000 Kelvin, permitindo a detecção simultânea de dezenas de metais e metaloides (como arsênio, mercúrio, chumbo, cromo, cobre, zinco e ferro) em níveis de partes por bilhão (ppb). Isso garante máxima precisão analítica e limites de detecção extremamente baixos.",
      tag: "Tecnologia",
      norma: "ICP-OES / EPA"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-brand-gray-light py-20 md:py-28 select-none border-t border-brand-gray-med">
      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold">
            Central de suporte científico
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-navy mt-6 leading-tight">
            Respostas técnicas & regulatórias
          </h2>
          <p className="text-base text-brand-gray-dark/75 mt-6 leading-relaxed">
            Esclareça suas principais dúvidas sobre metodologias laboratoriais, prazos, coleta técnica de campo e as rigorosas legislações que regem sua operação industrial ou pública.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx}
                className="bg-white border border-brand-gray-med overflow-hidden hover:shadow-lg transition-all duration-500 rounded-[2rem] hover:border-brand-green-vibrant/20"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-4 justify-between cursor-pointer group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-gray-light text-brand-green-vibrant rounded-2xl group-hover:bg-brand-green-vibrant group-hover:text-white transition-all duration-500 border border-brand-gray-med group-hover:border-transparent flex-shrink-0 mt-0.5">
                      <HelpCircle size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green-vibrant font-bold block mb-2">
                        {faq.tag}
                      </span>
                      <h3 className="text-base md:text-lg font-display font-extrabold text-brand-navy group-hover:text-brand-green-vibrant transition-colors duration-500 pr-4 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <motion.div 
                    className="text-brand-gray-dark/40 group-hover:text-brand-green-vibrant transition-colors duration-500 mt-1 flex-shrink-0 p-1.5 rounded-full hover:bg-brand-gray-light"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Accordion Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 ml-0 md:ml-16 border-t border-brand-gray-med pt-5">
                        <p className="text-sm text-brand-gray-dark/80 leading-relaxed mb-6">
                          {faq.answer}
                        </p>
                        
                        {/* Technical Metadata Footer for IA Indexing / GEO */}
                        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-brand-navy/60 font-semibold border-t border-brand-gray-med pt-4">
                          <span className="flex items-center gap-1.5">
                            <FileText size={12} className="text-brand-green-vibrant" />
                            Norma: {faq.norma}
                          </span>
                          <span className="text-brand-gray-med">|</span>
                          <span className="flex items-center gap-1.5">
                            <ShieldAlert size={12} className="text-brand-green-vibrant" />
                            Garantia: Conformidade Rastreável
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
