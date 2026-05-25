import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Building, ChevronDown, Check } from 'lucide-react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    setor: 'industria',
    matriz: 'agua-potavel',
    mensagem: '',
    normativas: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demandId] = useState(() => Math.floor(Math.random() * 90000) + 10000);

  const setores = [
    { value: 'industria', label: 'Indústria Geral / Química' },
    { value: 'saneamento', label: 'Saneamento / Concessionárias' },
    { value: 'agronegocio', label: 'Agronegócio / Fazendas' },
    { value: 'consultoria', label: 'Consultoria / Meio Ambiente' },
    { value: 'posto', label: 'Postos de Combustível' },
    { value: 'outro', label: 'Outros Segmentos' }
  ];

  const matrizes = [
    { value: 'agua-potavel', label: 'Água Potável (Portaria 888)' },
    { value: 'efluentes', label: 'Efluentes Industriais / CONAMA' },
    { value: 'solos', label: 'Solos & Sedimentos' },
    { value: 'residuos', label: 'Resíduos Sólidos (NBR 10004)' },
    { value: 'coleta', label: 'Coleta Técnica Especializada' }
  ];

  const normasExigidas = [
    { id: '17025', label: 'Acreditação ISO 17025 Obrigatória' },
    { id: '888', label: 'Atendimento Portaria 888 (Saúde)' },
    { id: '430', label: 'Atendimento CONAMA 430 (Descarte)' },
    { id: '10004', label: 'Classificação de Periculosidade NBR 10004' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNormaToggle = (normaId) => {
    setFormData(prev => {
      const currentNormas = prev.normativas;
      const index = currentNormas.indexOf(normaId);
      if (index === -1) {
        return { ...prev, normativas: [...currentNormas, normaId] };
      } else {
        return { ...prev, normativas: currentNormas.filter(id => id !== normaId) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate elite technical submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contato" className="tech-grid-dark bg-brand-navy-deep py-20 md:py-28 relative overflow-hidden select-none border-t border-brand-navy-dark">
      {/* Decorative gradient glowing orb behind */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-green-vibrant/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-28">
            <div>
              <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold inline-block">
                Cotação & consulta técnica
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-snow mt-6 leading-tight">
                Pronto para iniciar seu monitoramento científico?
              </h2>
              <p className="text-base text-brand-snow/70 mt-6 leading-relaxed">
                Nossa equipe de engenheiros sanitaristas e químicos especialistas está à disposição para estruturar seu programa de análises em estrita conformidade com as legislações vigentes.
              </p>

              {/* Rastreabilidade / Segurança trust indicator */}
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-[2rem] mt-10">
                <div className="flex items-center gap-2 mb-3 text-brand-green-vibrant">
                  <ShieldCheck size={18} />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Garantia Biolab Global</span>
                </div>
                <p className="text-xs text-brand-snow/60 leading-relaxed">
                  Todos os dados e resultados laboratoriais enviados são protegidos sob criptografia e confidenciais, conforme os requisitos da LGPD e as normas ISO 17025 de segurança da informação.
                </p>
              </div>

              {/* Technical Direct Contacts */}
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-brand-green-vibrant rounded-2xl">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-snow/40 block">E-mail Profissional</span>
                    <span className="text-sm font-display font-extrabold text-brand-snow">comercial@biolabglobal.com.br</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-brand-green-vibrant rounded-2xl">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-snow/40 block">Telefone Técnico</span>
                    <span className="text-sm font-display font-extrabold text-brand-snow">(11) 93333-4444</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 text-brand-green-vibrant rounded-2xl">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-snow/40 block">Laboratório Central</span>
                    <span className="text-sm font-display font-extrabold text-brand-snow">Rua das Análises, 500 — São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-gray-med p-8 md:p-12 shadow-2xl shadow-black/35 relative rounded-[2.5rem]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label htmlFor="nome" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 rounded-full"
                          placeholder="Ex: Dra. Ana Silva"
                        />
                      </div>

                      {/* Professional email */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                          E-mail Profissional
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 rounded-full"
                          placeholder="Ex: ana@suaempresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Telefone */}
                      <div className="flex flex-col">
                        <label htmlFor="telefone" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 rounded-full"
                          placeholder="Ex: (11) 99999-9999"
                        />
                      </div>

                      {/* Empresa */}
                      <div className="flex flex-col">
                        <label htmlFor="empresa" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                          Empresa / Organização
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          required
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 rounded-full"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Segmento Select */}
                      <div className="flex flex-col">
                        <label htmlFor="setor" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                          Segmento da Economia
                        </label>
                        <div className="relative">
                          <select
                            id="setor"
                            name="setor"
                            value={formData.setor}
                            onChange={handleInputChange}
                            className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 appearance-none pr-12 cursor-pointer rounded-full"
                          >
                            {setores.map(setor => (
                              <option key={setor.value} value={setor.value}>{setor.label}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy-deep/50 pointer-events-none" />
                        </div>
                      </div>

                      {/* Matriz Select */}
                      <div className="flex flex-col">
                        <label htmlFor="matriz" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                          Matriz Principal de Ensaio
                        </label>
                        <div className="relative">
                          <select
                            id="matriz"
                            name="matriz"
                            value={formData.matriz}
                            onChange={handleInputChange}
                            className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 appearance-none pr-12 cursor-pointer rounded-full"
                          >
                            {matrizes.map(matriz => (
                              <option key={matriz.value} value={matriz.value}>{matriz.label}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy-deep/50 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Normas Exigidas Checkboxes */}
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-3 font-extrabold block">
                        Exigências Regulatórias Específicas
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {normasExigidas.map(norma => {
                          const isChecked = formData.normativas.includes(norma.id);
                          return (
                            <button
                              key={norma.id}
                              type="button"
                              onClick={() => handleNormaToggle(norma.id)}
                              className={`p-4 border text-left flex items-center gap-3 transition-all duration-500 cursor-pointer rounded-2xl ${
                                isChecked 
                                  ? 'bg-brand-green-vibrant/5 border-brand-green-vibrant text-brand-navy-deep' 
                                  : 'bg-brand-snow border-brand-gray-med text-brand-gray-dark/70 hover:bg-brand-gray-light'
                              }`}
                            >
                              <div className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 transition-all duration-300 rounded-md ${
                                isChecked ? 'bg-brand-green-vibrant border-brand-green-vibrant text-brand-snow shadow-md shadow-brand-green-vibrant/25' : 'border-brand-gray-med bg-brand-gray-light'
                              }`}>
                                {isChecked && <Check size={12} />}
                              </div>
                              <span className="text-[11px] font-sans font-bold">{norma.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mensagem / Descrição */}
                    <div className="flex flex-col">
                      <label htmlFor="mensagem" className="text-[10px] uppercase font-mono tracking-wider text-brand-navy mb-2.5 font-extrabold">
                        Descrição da Demanda
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full text-xs p-4 bg-brand-gray-light/60 border border-brand-gray-med text-brand-navy-deep focus:outline-none focus:border-brand-green-vibrant focus:ring-2 focus:ring-brand-green-vibrant/20 font-sans transition-all duration-300 resize-none rounded-2xl"
                        placeholder="Por favor, liste as análises, número de pontos e a frequência de monitoramento requerida."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-full py-4 text-center justify-center"
                      icon={loading ? null : <Send size={14} />}
                    >
                      {loading ? 'Processando Dados Analíticos...' : 'Enviar Solicitação Técnica'}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="text-center py-12 flex flex-col items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="w-20 h-20 bg-brand-green-vibrant/10 text-brand-green-vibrant flex items-center justify-center rounded-full mb-8 border border-brand-green-vibrant/20 shadow-xl shadow-brand-green-vibrant/10">
                      <CheckCircle2 size={44} className="animate-pulse" />
                    </div>
                    
                    <span className="text-[11px] font-mono uppercase tracking-widest text-brand-green-vibrant font-bold block mb-1">
                      Conexão Estabelecida
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-navy mb-4 leading-tight">
                      Dados Enviados com Sucesso!
                    </h3>
                    <p className="text-sm text-brand-gray-dark/70 max-w-md leading-relaxed mb-8">
                      Obrigado por contatar a Biolab Global. Sua solicitação foi enfileirada no nosso CRM Técnico e um engenheiro especializado entrará em contato em até **24 horas úteis** com a proposta completa.
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-navy-deep/60 border border-brand-gray-med py-4 px-8 bg-brand-gray-light/40 rounded-full shadow-sm">
                      <Building size={12} className="text-brand-green-vibrant" />
                      ID da Demanda: BLG-{demandId}
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-xs font-display font-extrabold uppercase tracking-wider text-brand-green-vibrant hover:text-brand-green-dark transition-colors cursor-pointer"
                    >
                      Realizar Nova Cotação
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
