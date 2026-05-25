import { ShieldCheck, Award, FileSpreadsheet, Building2, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Accreditation = () => {
  const credentials = [
    {
      title: "Competência Analítica",
      desc: "Metodologias em estrita conformidade com referências globais (APHA, EPA, ABNT), validadas e auditadas periodicamente por órgãos federais.",
      icon: FileSpreadsheet
    },
    {
      title: "Validade Jurídica",
      desc: "Os laudos emitidos pela Biolab Global possuem fé pública e são legalmente aceitos em tribunais, inquéritos ambientais e processos regulatórios.",
      icon: ShieldCheck
    },
    {
      title: "Habilitação em Editais",
      desc: "Atendimento pleno a requisitos habilitatórios de licitações públicas municipais, estaduais e federais para serviços analíticos.",
      icon: Building2
    }
  ];

  return (
    <section id="acreditacao" className="bg-white py-20 md:py-28 select-none border-y border-brand-gray-med">
      <div className="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Info Panel (7 columns) */}
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase font-mono tracking-widest bg-brand-green-vibrant/10 text-brand-green-vibrant px-4 py-1.5 rounded-full font-bold inline-block">
              Segurança jurídica & qualidade
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-navy mt-6 leading-tight">
              Por que a acreditação ISO/IEC 17025 é fundamental para sua empresa?
            </h2>
            <p className="text-base text-brand-gray-dark/75 mt-6 leading-relaxed font-sans">
              A **ISO/IEC 17025** é o mais rigoroso padrão de qualidade internacional específico para laboratórios de ensaio e calibração. Ao contrário de normas de gestão geral, ela atesta cientificamente a competência técnica dos laboratórios de ensaio.
            </p>
            <p className="text-base text-brand-gray-dark/75 mt-4 leading-relaxed font-sans">
              Para concessionárias de saneamento, indústrias e agroindústrias, contratar um laboratório acreditado pelo **INMETRO** garante que cada laudo emitido representa o estado da arte em exatidão analítica, evitando multas e protegendo a reputação institucional da sua marca.
            </p>

            {/* Checklist of trust parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div key={idx} className="p-6 border border-brand-gray-med bg-brand-gray-light/40 rounded-[2rem] hover:shadow-lg transition-shadow duration-500">
                    <div className="p-3 bg-brand-gray-light text-brand-green-vibrant rounded-2xl border border-brand-gray-med inline-block mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-display font-extrabold text-brand-navy uppercase mb-2">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-brand-gray-dark/70 leading-relaxed font-sans">
                      {cred.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Certificate Panel (5 columns) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-brand-gray-med p-8 md:p-10 shadow-xl shadow-brand-navy-deep/5 rounded-[2.5rem]">
              
              {/* Accreditation Header Badge */}
              <div className="flex items-center gap-3 border-b border-brand-gray-med pb-5 mb-6">
                <div className="p-3 bg-brand-green-vibrant/10 text-brand-green-vibrant border border-brand-green-vibrant/20 rounded-2xl">
                  <Award size={24} />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand-green-vibrant font-extrabold block">
                    INMETRO • Rede Brasileira de Calibração (RBC)
                  </span>
                  <h3 className="text-base md:text-lg font-display font-extrabold text-brand-navy uppercase tracking-wide mt-0.5">
                    Credencial Científica
                  </h3>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4 font-mono text-[11px] bg-brand-gray-light/50 border border-brand-gray-med p-6 rounded-[2rem]">
                <div className="flex justify-between items-center border-b border-brand-gray-med/50 pb-2.5">
                  <span className="text-brand-gray-dark/60 uppercase">Instituição Certificadora</span>
                  <span className="text-brand-navy font-bold">Cgcre / INMETRO</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-gray-med/50 pb-2.5">
                  <span className="text-brand-gray-dark/60 uppercase">Norma de Referência</span>
                  <span className="text-brand-green-vibrant font-bold">ABNT NBR ISO/IEC 17025</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-gray-med/50 pb-2.5">
                  <span className="text-brand-gray-dark/60 uppercase">Código do Laboratório</span>
                  <span className="text-brand-navy font-bold">CRL-0842 / RBC</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-gray-med/50 pb-2.5">
                  <span className="text-brand-gray-dark/60 uppercase">Status Operacional</span>
                  <span className="text-brand-green-vibrant font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green-vibrant animate-pulse" />
                    Ativo & Auditado
                  </span>
                </div>
                <div className="flex justify-between items-start pt-1">
                  <span className="text-brand-gray-dark/60 uppercase">Escopo de Atuação</span>
                  <span className="text-brand-navy font-bold text-right leading-relaxed">
                    Química, Microbiologia, Efluentes, Solos & Amostragem
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-2.5 text-xs text-brand-gray-dark/70 font-sans">
                  <CheckCircle2 size={14} className="text-brand-green-vibrant" />
                  <span>Métodos rastreáveis pela ABNT NBR / Standard Methods</span>
                </div>
                
                <a 
                  href="https://www.gov.br/inmetro/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center"
                >
                  <Button variant="outline" className="w-full">
                    Verificar Acreditação no INMETRO
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

export default Accreditation;
