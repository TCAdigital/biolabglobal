import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Users, Shield, Target, Award, ArrowRight } from 'lucide-react';
import Button from './Button';

const EsgSection = () => {
  const [activeTab, setActiveTab] = useState('environmental');

  const esgData = {
    environmental: {
      title: 'Compromisso Ambiental (E)',
      icon: Leaf,
      badge: 'Preservação Ativa',
      description: 'Nossa operação laboratorial é regida pelos mais rígidos padrões de redução de impacto ambiental. Não apenas analisamos a natureza, nós a protegemos em cada processo.',
      milestones: [
        { label: 'Descarte 100% Responsável', desc: 'Neutralização completa e rastreabilidade total de todos os reagentes e resíduos químicos laboratoriais.' },
        { label: 'Eficiência Hídrica', desc: 'Redução de 30% no consumo interno de água através de sistemas inteligentes de recirculação e resfriamento.' },
        { label: 'Energia Limpa', desc: 'Uso de fontes 100% renováveis em nosso complexo analítico e programa ativo de neutralização de carbono.' }
      ],
      color: 'text-brand-green-vibrant border-brand-green-vibrant/20 bg-brand-green-vibrant/5'
    },
    social: {
      title: 'Responsabilidade Social (S)',
      icon: Users,
      badge: 'Cidadania & Educação',
      description: 'Acreditamos que a ciência deve servir ao bem-estar coletivo. Promovemos o avanço social por meio de programas contínuos de educação e apoio comunitário.',
      milestones: [
        { label: 'Análises Comunitárias Gratuitas', desc: 'Programas periódicos de análise e monitoramento de poços e nascentes em comunidades vulneráveis sem acesso a água tratada.' },
        { label: 'Educação Ambiental nas Escolas', desc: 'Treinamentos e palestras científicas presenciais para alunos da rede pública de ensino sobre saneamento e higiene.' },
        { label: 'Capacitação Científica', desc: 'Programas contínuos de desenvolvimento técnico interno e bolsas de pesquisa científica aplicada.' }
      ],
      color: 'text-brand-green-vibrant border-brand-green-vibrant/20 bg-brand-green-vibrant/5'
    },
    governance: {
      title: 'Governança Corporativa (G)',
      icon: Shield,
      badge: 'Ética e Conformidade',
      description: 'Regemos nossas operações sob total transparência regulatória. Nossa acreditação ISO 17025 representa a conformidade absoluta que garante a segurança técnica e jurídica dos laudos.',
      milestones: [
        { label: 'Acreditação ISO/IEC 17025', desc: 'Garantia incontestável de competência analítica internacional chancelada pelo INMETRO.' },
        { label: 'Ética nos Processos', desc: 'Auditorias internas semanais com rastreabilidade criptográfica e cadeia de custódia eletrônica blindada.' },
        { label: 'Conformidade de Dados (LGPD)', desc: 'Garantia absoluta de confidencialidade analítica de dados sensíveis dos clientes de todos os segmentos.' }
      ],
      color: 'text-brand-navy border-brand-navy/20 bg-brand-navy/5'
    },
    ods: {
      title: 'Agenda 2030 das Nações Unidas',
      icon: Target,
      badge: '6 ODS Impactados',
      description: 'Nossas operações analíticas diárias contribuem ativamente de forma quantificável para o cumprimento de 6 Objetivos de Desenvolvimento Sustentável (ODS) da ONU.',
      milestones: [
        { label: 'ODS 6: Água Potável e Saneamento', desc: 'Vigilância diária da potabilidade e controle de efluentes industriais para evitar a contaminação hídrica.' },
        { label: 'ODS 3: Saúde e Bem-Estar', desc: 'Prevenção de doenças bacteriológicas e contaminação por metais pesados ou defensivos agrícolas.' },
        { label: 'ODS 12: Consumo e Produção Responsáveis', desc: 'Apoio à destinação de resíduos sólidos industriais sob a norma ABNT NBR 10004.' }
      ],
      color: 'text-brand-navy border-brand-navy/20 bg-brand-navy/5'
    }
  };

  const tabs = [
    { id: 'environmental', label: 'E - Ambiental', icon: Leaf },
    { id: 'social', label: 'S - Social', icon: Users },
    { id: 'governance', label: 'G - Governança', icon: Shield },
    { id: 'ods', label: 'ODS - ONU 2030', icon: Target }
  ];

  return (
    <div id="esg" className="tech-grid py-20 md:py-28 select-none bg-brand-snow border-y border-brand-gray-med">
      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold">
            Governança ESG & sustentabilidade
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-navy mt-6 leading-tight">
            Uma empresa construída sobre ciência, ética e confiança
          </h2>
          <p className="text-base text-brand-gray-dark/75 mt-6 leading-relaxed">
            O compromisso da Biolab Global vai além das análises ambientais. Sustentabilidade e transparência absoluta são os pilares da nossa operação analítica de ponta.
          </p>
        </div>

        {/* Dynamic Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tab selectors (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-3">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 uppercase tracking-wider font-display font-bold text-xs border transition-all duration-500 flex items-center justify-between cursor-pointer rounded-2xl ${
                    isActive 
                      ? 'bg-brand-navy text-brand-snow border-brand-navy shadow-xl shadow-brand-navy/20' 
                      : 'bg-white text-brand-navy border-brand-gray-med hover:bg-brand-gray-light hover:border-brand-gray-med'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <TabIcon size={18} className="text-brand-green-vibrant" />
                    {tab.label}
                  </span>
                  <ArrowRight size={14} className={`opacity-60 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </button>
              );
            })}
            
            <a href="#contato" className="mt-4 block">
              <div className="p-8 border border-brand-gray-med bg-white/70 backdrop-blur-md rounded-[2rem] flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-500">
                <div className="flex items-center gap-2 mb-3 text-brand-green-vibrant">
                  <Award size={18} />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Garantia Científica</span>
                </div>
                <p className="text-xs text-brand-gray-dark/70 leading-relaxed mb-6">
                  Acesse nossas certificações e o Relatório ESG completo indexado diretamente em nosso portal digital.
                </p>
                <Button variant="outline" className="w-full text-center">Baixar Relatório ESG</Button>
              </div>
            </a>
          </div>

          {/* Active Tab Panel Content */}
          <div className="lg:col-span-8 bg-white border border-brand-gray-med p-8 md:p-14 relative flex flex-col justify-between shadow-2xl shadow-brand-navy/5 rounded-[2.5rem] overflow-hidden">
            
            <AnimatePresence mode="wait">
              {Object.keys(esgData).map((key) => {
                if (key !== activeTab) return null;
                const data = esgData[key];
                const TabIcon = data.icon;
                
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Badge and Title */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 rounded-2xl border ${data.color}`}>
                          <TabIcon size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green-vibrant font-bold block">
                            {data.badge}
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-extrabold text-brand-navy leading-tight mt-0.5">
                            {data.title}
                          </h3>
                        </div>
                      </div>

                      {/* Main Paragraph */}
                      <p className="text-sm text-brand-gray-dark/80 leading-relaxed mb-10 border-l-3 border-brand-green-vibrant pl-5 py-1">
                        {data.description}
                      </p>

                      {/* Milestones / Checkpoints */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.milestones.map((milestone, idx) => (
                          <div key={idx} className="p-6 bg-brand-gray-light/40 border border-brand-gray-med rounded-2xl hover:border-brand-navy/20 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-navy font-extrabold block mb-2">
                              {idx + 1}. {milestone.label}
                            </span>
                            <p className="text-xs text-brand-gray-dark/70 leading-relaxed">
                              {milestone.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EsgSection;
