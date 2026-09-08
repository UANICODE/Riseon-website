'use client';

import Link from 'next/link';
import { ArrowLeft, Users, Calendar, Clock, Briefcase, CheckCircle, Target, Filter, Sparkles, Award, TrendingUp } from 'lucide-react';

export default function Talento() {
  return (
    <div className="pt-24 pb-16 bg-[#EAF1F7] min-h-screen relative overflow-hidden">
      {/* ======================================================
          FUNDO COM EFEITOS
      ====================================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FB0D9]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2A7FAA]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FB0D9]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================
            BOTÃO VOLTAR
        ====================================================== */}

        <Link 
          href="/servicos" 
          className="inline-flex items-center gap-2 text-[#4FB0D9] hover:text-[#0A1628] transition-all duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
          <span>Voltar para Serviços</span>
        </Link>

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-2">

           
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#0A1628]">
            <span className="text-[#4FB0D9]">Tal⏻nto</span>
          </h1>
          <p className="mt-4 text-lg text-[#3A5368] leading-relaxed max-w-3xl">
            Recrutamento &amp; Seleção assente numa abordagem consultiva e rigorosa, orientada para a identificação de talento qualificado e alinhado com a cultura, os valores e os objetivos estratégicos de cada organização.
          </p>
        </div>

        {/* ======================================================
            PROCESSO DE SELEÇÃO
        ====================================================== */}

        <div className="mt-16">
          <h3 className="font-heading text-2xl font-bold text-[#0A1628] text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4FB0D9]/30" />
            Processo de Seleção
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4FB0D9]/30" />
          </h3>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'Confirmação do perfil', desc: 'Alinhamento da vaga com as necessidades exatas', color: 'bg-[#0A1628]/10', textColor: 'text-[#0A1628]' },
              { num: '2', title: 'Promoção & Sourcing', desc: 'Divulgação em canais próprios e parcerias', color: 'bg-[#4FB0D9]/10', textColor: 'text-[#4FB0D9]' },
              { num: '3', title: 'Seleção do(s) Candidato(s)', desc: 'Análise de CVs, vídeo e entrevista 1ª fase', color: 'bg-[#4FB0D9]/20', textColor: 'text-[#2A7FAA]' },
              { num: '4', title: 'Decisão de Contratação', desc: 'Seleção e confirmação final', color: 'bg-[#0A1628]/10', textColor: 'text-[#0A1628]' },
              { num: '5', title: 'Logística', desc: 'Formalização contratual e documentação', color: 'bg-[#4FB0D9]/10', textColor: 'text-[#4FB0D9]' },
              { num: '6', title: 'Acompanhamento da experiência', desc: 'Check-ins periódicos e feedback', color: 'bg-[#4FB0D9]/20', textColor: 'text-[#2A7FAA]' },
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-[#D6E2EC] text-center hover:shadow-lg hover:border-[#4FB0D9] transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto text-lg font-bold ${step.textColor} group-hover:scale-110 transition-transform duration-300`}>
                  {step.num}
                </div>
                <p className="text-sm font-semibold text-[#0A1628] mt-3">{step.title}</p>
                <p className="text-xs text-[#6A859C] mt-1">{step.desc}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#D6E2EC] text-center hover:shadow-lg hover:border-[#4FB0D9] transition-all duration-300 group col-span-2 lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-[#0A1628]/10 rounded-full flex items-center justify-center mx-auto text-lg font-bold text-[#0A1628] group-hover:scale-110 transition-transform duration-300">7-8</div>
              <p className="text-sm font-semibold text-[#0A1628] mt-3">Áreas de Especialização</p>
              <p className="text-xs text-[#6A859C] mt-1">Análise de perfis e fit cultural</p>
            </div>
          </div>
        </div>

        {/* ======================================================
            TIPOLOGIAS DE SERVIÇO
        ====================================================== */}

        <div className="mt-16 space-y-8">
          {/* Estágios Curriculares */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D6E2EC] hover:shadow-xl hover:border-[#4FB0D9]/30 transition-all duration-500 group animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#0A1628]/10 rounded-full flex items-center justify-center text-[#0A1628] group-hover:scale-110 group-hover:bg-[#0A1628] group-hover:text-white transition-all duration-300">
                <Calendar size={28} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0A1628]">Estágios Curriculares</h3>
                <p className="text-[#3A5368] text-sm flex items-center gap-2">
                  <Award size={16} className="text-[#4FB0D9]" />
                  Projeto de Curso · €120 (short) / €140 (mid)
                </p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#3A5368] text-sm leading-relaxed">
                  Tipologia de estágio desenhada para a realização de projetos de curso, permitindo a aplicação prática dos conhecimentos teóricos adquiridos durante a formação.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#3A5368]">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Curta duração: 6 a 12 semanas</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Média duração: 3 a 9 meses</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> 20 a 25 horas semanais</li>
                </ul>
              </div>
              <div className="bg-[#EAF1F7] rounded-xl p-5 border border-[#D6E2EC]">
                <p className="text-sm font-medium text-[#0A1628] flex items-center gap-2">
                  <Users size={16} className="text-[#4FB0D9]" />
                  Alocação de talento:
                </p>
                <p className="text-sm text-[#3A5368] mt-1">Candidatos do ensino profissional (Nível IV) e graus académicos superiores (Níveis V, VI, VII)</p>
                <div className="mt-3 flex gap-2">
                  <span className="bg-[#0A1628]/10 px-4 py-1.5 rounded-full text-xs font-medium text-[#0A1628] border border-[#D6E2EC]">Short: €120</span>
                  <span className="bg-[#0A1628]/10 px-4 py-1.5 rounded-full text-xs font-medium text-[#0A1628] border border-[#D6E2EC]">Mid: €140</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estágios Extracurriculares */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D6E2EC] hover:shadow-xl hover:border-[#4FB0D9]/30 transition-all duration-500 group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#4FB0D9]/10 rounded-full flex items-center justify-center text-[#4FB0D9] group-hover:scale-110 group-hover:bg-[#4FB0D9] group-hover:text-white transition-all duration-300">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0A1628]">Estágios Extracurriculares</h3>
                <p className="text-[#3A5368] text-sm flex items-center gap-2">
                  <Award size={16} className="text-[#4FB0D9]" />
                  Imersão full-time · €170 (mid) / €200 (long)
                </p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#3A5368] text-sm leading-relaxed">
                  Modelo de imersão direcionado para acelerar a curva de aprendizagem e a integração cultural, privilegiando a produtividade, com carga horária entre 35 e 40 horas semanais.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#3A5368]">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Média duração: 3 a 9 meses</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Longa duração: 9 a 12 meses</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Período experimental estendido</li>
                </ul>
              </div>
              <div className="bg-[#EAF1F7] rounded-xl p-5 border border-[#D6E2EC]">
                <p className="text-sm font-medium text-[#0A1628] flex items-center gap-2">
                  <TrendingUp size={16} className="text-[#4FB0D9]" />
                  Vantagens:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-[#3A5368]">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Ciclo de formação completo</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Avaliação de fit e desempenho</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Transição para contratação definitiva</li>
                </ul>
                <div className="mt-3 flex gap-2">
                  <span className="bg-[#4FB0D9]/10 px-4 py-1.5 rounded-full text-xs font-medium text-[#4FB0D9] border border-[#4FB0D9]/20">Mid: €170</span>
                  <span className="bg-[#4FB0D9]/10 px-4 py-1.5 rounded-full text-xs font-medium text-[#4FB0D9] border border-[#4FB0D9]/20">Long: €200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Captação de Perfis Seniores */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D6E2EC] border-[#4FB0D9]/30 hover:shadow-xl hover:border-[#4FB0D9] transition-all duration-500 group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#4FB0D9]/20 rounded-full flex items-center justify-center text-[#2A7FAA] group-hover:scale-110 group-hover:bg-[#4FB0D9] group-hover:text-white transition-all duration-300">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0A1628]">Captação de Perfis Seniores</h3>
                <p className="text-[#3A5368] text-sm flex items-center gap-2">
                  <Award size={16} className="text-[#4FB0D9]" />
                  Talento experiente · €260 (long)
                </p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#3A5368] text-sm leading-relaxed">
                  Recrutamento e seleção de perfis que trazem uma visão analítica superior e capacidade de resolução de problemas complexos. Possuem a maturidade necessária para liderar projetos internos e aplicar metodologias atualizadas que elevam o padrão de entrega da organização.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#3A5368]">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Imersão total, menos supervisão</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Resultados tangíveis no curto e médio prazo</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#4FB0D9]" /> Longa duração: até 12 meses</li>
                </ul>
              </div>
              <div className="bg-[#4FB0D9]/10 rounded-xl p-5 border border-[#4FB0D9]/20">
                <p className="text-sm font-medium text-[#0A1628] flex items-center gap-2">
                  <Target size={16} className="text-[#4FB0D9]" />
                  Solução ideal para:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-[#3A5368]">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Identificar futuros quadros de liderança</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Testar competência e fit cultural</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Ambiente de risco reduzido</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#4FB0D9]" /> Integração definitiva após confirmação</li>
                </ul>
                <div className="mt-3">
                  <span className="bg-[#4FB0D9]/20 px-4 py-1.5 rounded-full text-xs font-medium text-[#2A7FAA] border border-[#4FB0D9]/20">Long: €260</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            NOTA
        ====================================================== */}

        <div className="mt-8 bg-[#EAF1F7] rounded-xl p-5 text-sm text-[#6A859C] border border-[#D6E2EC] animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>
            <strong className="text-[#0A1628]">Nota:</strong> A bolsa de estágio é paga mensalmente pela Empresa ao perfil júnior ou sénior, com valor igual ou superior a 920€/mês em regime full-time superior a 3 meses. Os valores acima referem-se apenas à taxa de serviço RiseON.
          </p>
        </div>

        {/* ======================================================
            CTA FINAL
        ====================================================== */}

        <div className="mt-12 bg-[#0A1628] text-white rounded-2xl p-10 text-center relative overflow-hidden group animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4FB0D9]/10 via-transparent to-[#4FB0D9]/10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4FB0D9]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#4FB0D9]/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h4 className="font-heading text-2xl md:text-3xl font-bold">Encontrar o talento certo é o maior desafio de RH</h4>
            <p className="text-white/70 mt-2">Nós resolvemos isso por si.</p>
            <Link 
              href="/contactos" 
              className="inline-block mt-6 bg-[#4FB0D9] text-[#0A1628] px-8 py-3.5 rounded-lg font-bold hover:bg-[#2A7FAA] hover:text-white transition-all duration-300 shadow-lg shadow-[#4FB0D9]/20 hover:shadow-[#4FB0D9]/40 hover:-translate-y-1"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================================
          ANIMAÇÕES CSS
      ====================================================== */}

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-up { opacity: 0; animation: slide-in-up 0.6s ease-out forwards; }
        .animate-fade-in { opacity: 0; animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
}