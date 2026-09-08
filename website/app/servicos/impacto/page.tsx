'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  Globe2, 
  Layout, 
  Smartphone, 
  Share2, 
  TrendingUp, 
  Sparkles, 
  Award, 
  CheckCircle,
  Rocket,
  Target,
  Users,
  BarChart3,
  Eye,
  Zap
} from 'lucide-react';

export default function Impacto() {
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
            <span className="text-[#4FB0D9]">Impact⏻</span> Digital
          </h1>
          <p className="mt-4 text-lg text-[#3A5368] leading-relaxed max-w-3xl">
            Criação de websites institucionais e gestão profissional de redes sociais para fortalecer a presença digital da sua empresa.
          </p>
        </div>

        {/* ======================================================
            PROBLEMA — COM ÍCONES LUCIDE-REACT
        ====================================================== */}

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-[#D6E2EC] text-center hover:shadow-xl transition-all duration-500 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="font-heading text-2xl font-bold text-[#0A1628]">
            A sua empresa tem presença digital, mas <span className="text-[#4FB0D9]">não gera impacto</span>?
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-[#6A859C]">
            <span className="flex items-center gap-2 bg-[#EAF1F7] px-5 py-2.5 rounded-full border border-[#D6E2EC] hover:border-[#4FB0D9] hover:bg-white transition-all duration-300">
              <Layout size={18} className="text-[#4FB0D9]" />
              Website desatualizado
            </span>
            <span className="flex items-center gap-2 bg-[#EAF1F7] px-5 py-2.5 rounded-full border border-[#D6E2EC] hover:border-[#4FB0D9] hover:bg-white transition-all duration-300">
              <Share2 size={18} className="text-[#4FB0D9]" />
              Redes sociais inativas
            </span>
            <span className="flex items-center gap-2 bg-[#EAF1F7] px-5 py-2.5 rounded-full border border-[#D6E2EC] hover:border-[#4FB0D9] hover:bg-white transition-all duration-300">
              <BarChart3 size={18} className="text-[#4FB0D9]" />
              Sem análise de resultados
            </span>
          </div>
        </div>

        {/* ======================================================
            4 PILARES
        ====================================================== */}

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { icon: Globe2, title: 'Website Institucional', desc: 'Criação de websites modernos, responsivos e otimizados para SEO, que transmitem profissionalismo e credibilidade.', color: 'text-[#0A1628]', bg: 'bg-[#0A1628]/5' },
            { icon: Smartphone, title: 'Design Responsivo', desc: 'Websites que se adaptam perfeitamente a todos os dispositivos (desktop, tablet e smartphone), garantindo a melhor experiência.', color: 'text-[#4FB0D9]', bg: 'bg-[#4FB0D9]/10' },
            { icon: Share2, title: 'Gestão de Redes Sociais', desc: 'Planeamento mensal de conteúdos, criação e publicação de posts, stories e atualizações com monitorização de desempenho.', color: 'text-[#2A7FAA]', bg: 'bg-[#2A7FAA]/10' },
            { icon: TrendingUp, title: 'Análise de Resultados', desc: 'Relatórios mensais com análise de alcance, crescimento e recomendações estratégicas para otimizar a presença digital.', color: 'text-[#0A1628]', bg: 'bg-[#0A1628]/5' },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#D6E2EC] hover:shadow-xl hover:border-[#4FB0D9] transition-all duration-500 group animate-slide-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#0A1628] mt-4">{item.title}</h4>
              <p className="text-[#3A5368] text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ======================================================
            VANTAGENS COMPETITIVAS
        ====================================================== */}

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-[#D6E2EC] hover:shadow-xl transition-all duration-500 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-heading text-2xl font-bold text-[#0A1628] text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4FB0D9]/30" />
            <span><span className="text-[#4FB0D9]">Vantagens</span> Competitivas</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4FB0D9]/30" />
          </h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Rocket, title: 'Presença Digital Profissional', desc: 'Website e redes sociais que transmitem credibilidade', color: 'text-[#4FB0D9]', bg: 'bg-[#4FB0D9]/5' },
              { icon: Eye, title: 'Visibilidade Online', desc: 'Aumento do alcance e reconhecimento da marca', color: 'text-[#0A1628]', bg: 'bg-[#0A1628]/5' },
              { icon: Target, title: 'Conteúdo Estratégico', desc: 'Publicações alinhadas com os objetivos do negócio', color: 'text-[#2A7FAA]', bg: 'bg-[#2A7FAA]/5' },
              { icon: Zap, title: 'Resultados Mensuráveis', desc: 'Relatórios com métricas claras e recomendações', color: 'text-[#4FB0D9]', bg: 'bg-[#4FB0D9]/5' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-start gap-3 p-4 ${item.bg} rounded-xl hover:shadow-md transition-all duration-300 group cursor-default hover:border hover:border-[#4FB0D9]/20`}
              >
                <item.icon className={`${item.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`} size={20} />
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm">{item.title}</p>
                  <p className="text-xs text-[#6A859C]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================
            VALOR DO SERVIÇO
        ====================================================== */}

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-[#D6E2EC] hover:shadow-xl transition-all duration-500 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <h4 className="font-heading text-2xl font-bold text-[#0A1628] text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4FB0D9]/30" />
            Valor do Serviço
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4FB0D9]/30" />
          </h4>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-[#EAF1F7] rounded-xl p-5 hover:bg-[#4FB0D9]/5 transition-all duration-300 border border-transparent hover:border-[#4FB0D9]/20">
              <p className="text-sm text-[#6A859C]">Website Institucional</p>
              <p className="font-heading text-2xl font-bold text-[#0A1628] mt-1">Sob consulta</p>
              <p className="text-xs text-[#6A859C] mt-1">Desenvolvimento completo</p>
            </div>
            <div className="bg-[#EAF1F7] rounded-xl p-5 border-2 border-[#4FB0D9] hover:shadow-lg transition-all duration-300">
              <p className="text-sm text-[#6A859C]">Gestão de Redes Sociais</p>
              <p className="font-heading text-2xl font-bold text-[#0A1628] mt-1">Sob consulta</p>
              <p className="text-xs text-[#6A859C] mt-1">Planeamento mensal + relatórios</p>
            </div>
            <div className="bg-[#EAF1F7] rounded-xl p-5 hover:bg-[#4FB0D9]/5 transition-all duration-300 border border-transparent hover:border-[#4FB0D9]/20">
              <p className="text-sm text-[#6A859C]">Pacote Completo</p>
              <p className="font-heading text-2xl font-bold text-[#0A1628] mt-1">Sob consulta</p>
              <p className="text-xs text-[#6A859C] mt-1">Website + Redes Sociais</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#6A859C] text-center">
            Dependente da complexidade, número de páginas e funcionalidades pretendidas
          </p>
        </div>

        {/* ======================================================
            CITAÇÃO
        ====================================================== */}

        <div className="mt-8 bg-[#EAF1F7] rounded-2xl p-6 border border-[#D6E2EC] text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-[#3A5368] text-sm italic">
            “Transformamos a presença digital da sua empresa, criando websites e estratégias de redes sociais que geram impacto real e resultados mensuráveis.”
          </p>
        </div>

        {/* ======================================================
            CTA FINAL
        ====================================================== */}

        <div className="mt-12 bg-[#0A1628] text-white rounded-2xl p-10 text-center relative overflow-hidden group animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4FB0D9]/10 via-transparent to-[#4FB0D9]/10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4FB0D9]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#4FB0D9]/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h4 className="font-heading text-2xl md:text-3xl font-bold">Dê impacto à sua presença digital</h4>
            <p className="text-white/70 mt-2">Fale connosco e descubra como podemos ajudar.</p>
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