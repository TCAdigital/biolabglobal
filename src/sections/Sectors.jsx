import { motion } from 'framer-motion';
import { Building, Waves, Tractor, Briefcase, Fuel, ShieldCheck } from 'lucide-react';

const Sectors = () => {
  const sectorsList = [
    {
      title: "Indústrias Químicas & Manufatura",
      desc: "Suporte completo para licenciamento ambiental, descarte regular de efluentes industriais e cumprimento das exigências dos órgãos de licenciamento estaduais.",
      icon: Building,
      analyses: ["CONAMA 430", "Toxicidade aguda", "Metais pesados", "DBO/DQO"],
      legalTarget: "Licença Operacional (LO)"
    },
    {
      title: "Saneamento & Distribuição",
      desc: "Parceiro analítico para monitoramento de ETAs e ETEs, vigilância em planos amostrais municipais e conformidade integral com as normas de saúde.",
      icon: Waves,
      analyses: ["Portaria 888", "Cianobactérias", "Coliformes", "Turbidez contínua"],
      legalTarget: "Sisagua / Ministério da Saúde"
    },
    {
      title: "Agronegócio & Cooperativas",
      desc: "Soluções integradas para fertilidade do solo, qualidade da água de irrigação, caracterização de fertilizantes e monitoramento do escoamento hídrico.",
      icon: Tractor,
      analyses: ["Água de irrigação", "Resíduos de pesticidas", "Fertilidade", "Micronutrientes"],
      legalTarget: "Legislação MAPA"
    },
    {
      title: "Consultorias Ambientais",
      desc: "Subcontratação ágil com SLA garantido, laudos digitais instantâneos e integração com sistemas de inteligência ambiental para auditorias e laudos complexos.",
      icon: Briefcase,
      analyses: ["Investigação de solos", "EIA/RIMA", "Monitoramento de obras", "PRAD"],
      legalTarget: "Auditoria Ambiental"
    },
    {
      title: "Postos de Combustíveis & Aterros",
      desc: "Prevenção e detecção de plumas de contaminação por hidrocarbonetos, monitoramento de lençol freático e enquadramento de resíduos perigosos.",
      icon: Fuel,
      analyses: ["BTEX / HPA", "Metais solúveis", "Lixiviação", "Enquadramento NBR 10004"],
      legalTarget: "Investigação de Passivo"
    },
    {
      title: "Órgãos Públicos & Autarquias",
      desc: "Atendimento pleno a exigências licitatórias, garantindo validade jurídica e idoneidade técnica para monitoramento de mananciais municipais e controle social.",
      icon: ShieldCheck,
      analyses: ["Plano amostral municipal", "Mananciais protegidos", "Metais", "Coliformes totais"],
      legalTarget: "Lei de Licitações 14.133"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="setores" className="bg-gradient-to-r from-brand-navy to-brand-green-vibrant py-24 md:py-32 relative select-none overflow-hidden">
      {/* Decorative blurred circles for visual depth (Sem Roxo/Ouro - Teal & Green glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green-vibrant/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green-vibrant/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Technical Dot Matrix Grid Overlay (Pontinhos Brilhantes Científicos) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(5,184,116,0.12)_1.8px,transparent_1.8px)] [background-size:24px_24px] pointer-events-none opacity-80 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1.2px,transparent_1.2px)] [background-size:12px_12px] pointer-events-none opacity-50 z-0" />

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 tech-grid-dark opacity-60 pointer-events-none" />

      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold inline-block">
            Setores da economia atendidos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-6 leading-tight">
            Soluções customizadas para as demandas analíticas do seu segmento
          </h2>
          <p className="text-base text-brand-snow/70 mt-6 leading-relaxed font-sans max-w-2xl">
            A Biolab Global atende mais de 300 clientes ativos com programas analíticos desenhados especificamente para a conformidade legal e a sustentabilidade operacional de cada setor.
          </p>
        </div>

        {/* Swiss Brutalist Typographic Grid overhauled to Premium Translucent Rounded Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sectorsList.map((sector, idx) => {
            const Icon = sector.icon;
            
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="azucon-card-dark p-8 md:p-10 flex flex-col justify-between group relative select-none hover:shadow-2xl hover:shadow-brand-green-vibrant/10 border border-white/10 hover:border-brand-green-vibrant/35 transition-colors duration-500 overflow-hidden bg-brand-navy-dark/45"
              >
                {/* Immersive glow background effect on card hover */}
                <div className="absolute inset-0 bg-radial-gradient from-brand-green-vibrant/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Top Corner Technical Glow Dot */}
                <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-brand-green-vibrant/0 group-hover:bg-brand-green-vibrant shadow-lg shadow-brand-green-vibrant transition-all duration-500" />

                <div>
                  {/* Top sector header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3.5 bg-white/5 text-brand-green-vibrant rounded-2xl border border-white/10 group-hover:bg-brand-green-vibrant group-hover:text-brand-navy-deep group-hover:shadow-lg group-hover:shadow-brand-green-vibrant/20 transition-all duration-500">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green-vibrant font-bold block">
                        {sector.legalTarget}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-display font-extrabold text-white mb-4 group-hover:text-brand-green-vibrant transition-colors duration-500 leading-snug">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-brand-snow/70 leading-relaxed mb-8 font-sans">
                    {sector.desc}
                  </p>
                </div>

                {/* Analytical Requirements (GEO/SEO rich keyword tag list) */}
                <div className="border-t border-white/10 group-hover:border-brand-green-vibrant/20 pt-6 mt-auto transition-colors duration-500">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand-snow/40 block mb-3.5 font-bold">
                    Demandas Analíticas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sector.analyses.map((item, id) => (
                      <span 
                        key={id}
                        className="text-[9px] font-mono uppercase bg-white/5 border border-white/10 px-3 py-1.5 text-brand-snow/80 rounded-full font-medium group-hover:bg-white/10 transition-colors duration-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Sectors;
