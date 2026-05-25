import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, CheckCircle, Activity, Info, ArrowRight } from 'lucide-react';
import Button from './Button';

const ComplianceSimulator = () => {
  const [matrixMode, setMatrixMode] = useState('potabilidade'); // 'potabilidade' | 'efluente'

  // Parameter states
  const [ph, setPh] = useState(7.2);
  const [lead, setLead] = useState(0.005); // mg/L
  const [dqo, setDqo] = useState(85); // mg/L

  // Constants for thresholds
  const LIMITS = {
    potabilidade: {
      phMin: 6.0,
      phMax: 9.0,
      leadMax: 0.01, // 10 ug/L or 0.01 mg/L (Portaria 888)
    },
    efluente: {
      phMin: 5.0,
      phMax: 9.0,
      dqoMax: 120, // CONAMA 430 typical DBO/DQO limits depending on body
    }
  };

  // Compliance calculations
  const isPhCompliant = matrixMode === 'potabilidade' 
    ? (ph >= LIMITS.potabilidade.phMin && ph <= LIMITS.potabilidade.phMax)
    : (ph >= LIMITS.efluente.phMin && ph <= LIMITS.efluente.phMax);

  const isSecondParamCompliant = matrixMode === 'potabilidade'
    ? lead <= LIMITS.potabilidade.leadMax
    : dqo <= LIMITS.efluente.dqoMax;

  const isAllCompliant = isPhCompliant && isSecondParamCompliant;

  return (
    <section id="simulador" className="bg-brand-navy-deep py-24 md:py-32 relative overflow-hidden select-none">
      {/* Imagem de Fundo Científica Estática com Opacidade de 85% (Igual ao Hero) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.85] z-0"
        style={{ backgroundImage: `url('https://i.imgur.com/4VnIr7J.jpeg')` }}
      />

      {/* Overlay de Gradiente Horizontal Igual ao do Hero (from-[#001977]/85 via-[#001977]/65 to-[#05B874]/20) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001977]/85 via-[#001977]/65 to-[#05B874]/20 z-0 pointer-events-none" />
      {/* Transição de Degradê Vertical na Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy-deep/20 to-brand-navy-deep z-0 pointer-events-none" />

      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-green-vibrant/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-green-vibrant/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Technical Dot Matrix Grid Overlay (Pontinhos Brilhantes Científicos) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(5,184,116,0.12)_1.8px,transparent_1.8px)] [background-size:24px_24px] pointer-events-none opacity-80 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1.2px,transparent_1.2px)] [background-size:12px_12px] pointer-events-none opacity-50 z-10" />

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none z-10" />

      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold">
            Simulador de conformidade em tempo real
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-6 leading-tight">
            Seus parâmetros estão dentro dos limites legais?
          </h2>
          <p className="text-base text-brand-snow/70 mt-6 leading-relaxed">
            Interaja com as métricas químicas de potabilidade da água ou descarte de efluentes industriais abaixo para entender os limites de fiscalização sanitária.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Side (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-brand-gray-med p-8 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-between select-none">
            <div>
              {/* Tab Selector */}
              <div className="flex gap-4 mb-10 border-b border-brand-gray-med pb-6">
                <button
                  onClick={() => setMatrixMode('potabilidade')}
                  className={`flex-1 py-3 px-4 uppercase tracking-wider font-mono text-[10px] font-bold border transition-all duration-300 rounded-full cursor-pointer ${
                    matrixMode === 'potabilidade'
                      ? 'bg-gradient-to-r from-brand-navy to-brand-green-vibrant text-brand-snow border-transparent shadow-lg shadow-brand-navy/15 hover:scale-[1.02]'
                      : 'bg-brand-gray-light text-brand-navy/60 border-brand-gray-med hover:bg-brand-gray-med/50'
                  }`}
                >
                  Água Potável (Portaria 888)
                </button>
                <button
                  onClick={() => setMatrixMode('efluente')}
                  className={`flex-1 py-3 px-4 uppercase tracking-wider font-mono text-[10px] font-bold border transition-all duration-300 rounded-full cursor-pointer ${
                    matrixMode === 'efluente'
                      ? 'bg-gradient-to-r from-brand-navy to-brand-green-vibrant text-brand-snow border-transparent shadow-lg shadow-brand-navy/15 hover:scale-[1.02]'
                      : 'bg-brand-gray-light text-brand-navy/60 border-brand-gray-med hover:bg-brand-gray-med/50'
                  }`}
                >
                  Efluente Industrial (CONAMA 430)
                </button>
              </div>

              {/* Parameter 1: pH (Shared by both) */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase font-mono tracking-widest text-brand-navy-deep/80 flex items-center gap-2">
                    <Activity size={14} className="text-brand-navy" />
                    Potencial Hidrogeniônico (pH)
                  </label>
                  <span className={`font-mono text-sm font-bold px-3 py-1.5 rounded-xl ${
                    isPhCompliant ? 'bg-brand-green-vibrant/10 text-brand-green-vibrant' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {ph.toFixed(1)} pH
                  </span>
                </div>
                
                <input
                  type="range"
                  min="3.0"
                  max="11.0"
                  step="0.1"
                  value={ph}
                  onChange={(e) => setPh(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-brand-gray-med rounded-full appearance-none cursor-pointer accent-brand-green-vibrant"
                />
                
                <div className="flex justify-between text-[9px] font-mono text-brand-navy-deep/40 uppercase">
                  <span>Ácido Crítico</span>
                  <span>Neutro (7.0)</span>
                  <span>Alcalino Crítico</span>
                </div>
              </div>

              {/* Parameter 2: Lead (Potabilidade) or DQO (Efluente) */}
              <AnimatePresence mode="wait">
                {matrixMode === 'potabilidade' ? (
                  <motion.div
                    key="potabilidade"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <label className="text-xs uppercase font-mono tracking-widest text-brand-navy-deep/80 flex items-center gap-2">
                        <Info size={14} className="text-brand-navy" />
                        Teor de Chumbo Pesado (Pb)
                      </label>
                      <span className={`font-mono text-sm font-bold px-3 py-1.5 rounded-xl ${
                        isSecondParamCompliant ? 'bg-brand-green-vibrant/10 text-brand-green-vibrant' : 'bg-red-500/10 text-red-500'
                      }`}>
                        {lead.toFixed(3)} mg/L
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0.000"
                      max="0.025"
                      step="0.001"
                      value={lead}
                      onChange={(e) => setLead(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-brand-gray-med rounded-full appearance-none cursor-pointer accent-brand-green-vibrant"
                    />

                    <div className="flex justify-between text-[9px] font-mono text-brand-navy-deep/40 uppercase">
                      <span>Livre de Metais (0.000)</span>
                      <span>Limite Legal (0.010 mg/L)</span>
                      <span>Crítico (0.025)</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="efluente"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <label className="text-xs uppercase font-mono tracking-widest text-brand-navy-deep/80 flex items-center gap-2">
                        <Info size={14} className="text-brand-navy" />
                        Demanda Química de Oxigênio (DQO)
                      </label>
                      <span className={`font-mono text-sm font-bold px-3 py-1.5 rounded-xl ${
                        isSecondParamCompliant ? 'bg-brand-green-vibrant/10 text-brand-green-vibrant' : 'bg-red-500/10 text-red-500'
                      }`}>
                        {dqo} mg/L
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="5"
                      value={dqo}
                      onChange={(e) => setDqo(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-brand-gray-med rounded-full appearance-none cursor-pointer accent-brand-green-vibrant"
                    />

                    <div className="flex justify-between text-[9px] font-mono text-brand-navy-deep/40 uppercase">
                      <span>Baixa Matéria Orgânica</span>
                      <span>Limite CONAMA (120 mg/L)</span>
                      <span>Alta Poluição (200)</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Note on Accreditation */}
            <div className="mt-10 border-t border-brand-gray-med pt-6 flex items-center gap-3">
              <ShieldCheck size={18} className="text-brand-green-vibrant shrink-0" />
              <p className="text-[10px] text-brand-navy-deep/50 leading-relaxed font-mono uppercase tracking-wider">
                Parâmetros e limites simulados com base nas normas federais ativas e na acreditação INMETRO ISO 17025.
              </p>
            </div>
          </div>

          {/* Diagnosis Side (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Status Panel */}
            <div className="bg-white border border-brand-gray-med p-8 md:p-10 shadow-2xl rounded-[2.5rem] flex-1 flex flex-col justify-between select-none">
              
              <div>
                {/* Visual Status Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl border ${
                    isAllCompliant 
                      ? 'bg-brand-green-vibrant/10 text-brand-green-vibrant border-brand-green-vibrant/20 shadow-lg shadow-brand-green-vibrant/10'
                      : 'bg-red-500/10 text-red-500 border-red-500/20 shadow-lg shadow-red-500/10'
                  }`}>
                    {isAllCompliant ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-extrabold block ${
                      isAllCompliant ? 'text-brand-green-vibrant' : 'text-red-500'
                    }`}>
                      {isAllCompliant ? 'Status: Operação Regular' : 'Aviso: Não Conformidade Detectada'}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-extrabold text-brand-navy leading-snug">
                      {isAllCompliant ? 'Laudo Emitido Aprovado' : 'Risco de Sanções Fiscais'}
                    </h3>
                  </div>
                </div>

                {/* Technical Diagnostic Text */}
                <div className="bg-brand-gray-light border border-brand-gray-med p-6 rounded-[2rem] font-sans text-xs text-brand-gray-dark/85 leading-relaxed space-y-4 mb-8">
                  {matrixMode === 'potabilidade' ? (
                    <>
                      <p>
                        <strong>pH ({ph.toFixed(1)}):</strong> {isPhCompliant 
                          ? 'O pH da amostra atende aos critérios da Portaria 888/2021 (entre 6.0 e 9.0), ideal para o consumo humano e proteção das redes de distribuição contra corrosão ou incrustações.'
                          : 'pH crítico fora da Portaria 888. Valores extremos podem causar irritações sensoriais, ineficácia da desinfecção por cloro ou corrosão metálica das tubulações.'}
                      </p>
                      <p>
                        <strong>Chumbo ({lead.toFixed(3)} mg/L):</strong> {isSecondParamCompliant
                          ? 'Concentração segura de metal pesado. Amostra atende ao limite federal de potabilidade (máx. 0.01 mg/L).'
                          : 'Chumbo acima do Limite de 0.01 mg/L. Metais pesados apresentam alto risco de bioacumulação e toxicidade severa para a saúde pública.'}
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>pH ({ph.toFixed(1)}):</strong> {isPhCompliant
                          ? 'O pH está em conformidade com as diretrizes da Resolução CONAMA 430/2011 (limites 5.0 a 9.0) para descarte regular de efluentes em rios.'
                          : 'pH incompatível com o CONAMA 430. O descarte de água ácida ou excessivamente alcalina altera severamente o ecossistema aquático local.'}
                      </p>
                      <p>
                        <strong>DQO ({dqo} mg/L):</strong> {isSecondParamCompliant
                          ? 'Carga orgânica controlada. O efluente possui DQO dentro do limite seguro para descarte direto (máx. 120 mg/L).'
                          : 'DQO superior ao padrão recomendado de 120 mg/L. Carga orgânica elevada reduz drasticamente o oxigênio dissolvido da água, causando mortandade da fauna.'}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Dynamic CTA */}
              <div className="border-t border-brand-gray-med pt-6 mt-auto">
                <a href="#contato" className="w-full block">
                  <Button 
                    variant="gradient" 
                    className="w-full text-center justify-center"
                    icon={<ArrowRight size={14} />}
                  >
                    {isAllCompliant ? 'Garantir Precisão dos Laudos' : 'Falar com Engenheiro Químico'}
                  </Button>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComplianceSimulator;
