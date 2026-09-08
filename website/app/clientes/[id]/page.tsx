'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Sparkles, 
  Award, 
  Target, 
  Users, 
  CheckCircle, 
  Briefcase,
  Calendar,
  Star,
  TrendingUp,
  Globe2,
  BarChart3,
  Zap,
  Rocket,
  Eye,
  ArrowRight
} from 'lucide-react';

// ============================================================
// DADOS DOS CLIENTES (com links corrigidos)
// ============================================================

const clientsData = [
  {
    id: 'mymoment',
    name: 'MyMoment',
    logo: '/images/mymoment.png',
    description: 'Plataforma de gestão de eventos e momentos especiais.',
    industry: 'Tecnologia & Eventos',
    year: 2026,
    services: ['Website Institucional', 'Gestão de Redes Sociais'],
    testimonial: 'A RiseON transformou a nossa presença digital. O website ficou incrível e as redes sociais cresceram 200% em 3 meses.',
    results: [
      'Website moderno e responsivo',
      'Crescimento de 200% nas redes sociais',
      'Aumento de 45% no tráfego orgânico',
    ],
    website: 'https://mymoment.pt/',
  },
  {
    id: 'coolivin',
    name: 'Coolivin',
    logo: '/images/coolivin.png',
    description: 'Plataforma de alojamento para estudantes e jovens profissionais em Lisboa, oferecendo quartos em localizações centrais com todas as comodidades.',
    industry: 'Alojamento & Hospitalidade',
    year: 2026,
    services: ['Website Institucional', 'Performance Analytics'],
    testimonial: 'Os dashboards de performance ajudaram-nos a tomar decisões mais rápidas e baseadas em dados, otimizando a nossa operação.',
    results: [
      'Website institucional moderno',
      'Dashboards de KPI em tempo real',
      'Otimização da gestão de propriedades',
    ],
    website: 'https://coolivin.com/pt',
  },
  {
    id: 'centro-juvenil',
    name: 'Centro Juvenil',
    logo: '/images/centro-juvenil.png',
    description: 'Instituição sem fins lucrativos em Guimarães, fundada em 1915, dedicada ao acolhimento, inserção social e apoio a crianças e jovens em risco.',
    industry: 'Social & Solidariedade',
    year: 2026,
    services: ['Website Institucional', 'Gestão de Redes Sociais'],
    testimonial: 'A RiseON ajudou-nos a comunicar melhor com a comunidade e a atrair mais jovens para os nossos projetos sociais.',
    results: [
      'Website com design acessível',
      'Aumento de 150% no engajamento',
      'Mais de 500 novos seguidores em 2 meses',
    ],
    website: 'https://cjsj.pt/',
  },
  {
    id: 'madremedia',
    name: 'MadreMedia',
    logo: '/images/madre.png',
    description: 'Plataforma de conteúdo e comunicação digital, especializada em notícias e informação para a comunidade portuguesa.',
    industry: 'Media & Comunicação',
    year: 2026,
    services: ['Website Institucional', 'Performance Analytics', 'Gestão de Redes Sociais'],
    testimonial: 'A RiseON é um parceiro estratégico que entende as nossas necessidades e entrega resultados consistentes.',
    results: [
      'Website com alta performance',
      'Dashboards de audiência em tempo real',
      'Crescimento de 120% no tráfego',
    ],
    website: 'https://madremedia.pt/',
  },
  {
    id: 'cd-cova-piedade',
    name: 'CD Cova Piedade',
    logo: '/images/clube.png',
    description: 'Clube desportivo com tradição e paixão pelo futebol, fundado em 1938, com uma forte ligação à comunidade da Cova da Piedade.',
    industry: 'Desporto',
    year: 2026,
    services: ['Website Institucional', 'Gestão de Redes Sociais'],
    testimonial: 'A RiseON modernizou a nossa comunicação e aproximou o clube dos adeptos e da comunidade.',
    results: [
      'Website com notícias e resultados',
      'Aumento de 300% no engajamento',
      'Comunidade digital mais ativa',
    ],
    website: 'https://www.cdcovapiedade.pt/',
  },
  {
    id: 'skillfull',
    name: 'Skillfull',
    logo: '/images/skillfull.png',
    description: 'Plataforma de formação e desenvolvimento de competências, com foco no crescimento profissional e pessoal dos seus alunos.',
    industry: 'Educação & Formação',
    year: 2026,
    services: ['Website Institucional', 'Performance Analytics'],
    testimonial: 'Os dashboards da RiseON permitem-nos acompanhar o progresso dos nossos alunos em tempo real.',
    results: [
      'Website com área de alunos',
      'Dashboards de progresso',
      'Aumento de 60% na retenção',
    ],
    website: 'https://www.skillfull.pt/',
  },
];

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function ClientDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const client = clientsData.find((c) => c.id === id);

  if (!client) {
    notFound();
  }

  // Mapeamento de ícones por serviço
  const serviceIcons: { [key: string]: React.ReactNode } = {
    'Website Institucional': <Globe2 size={18} className="text-[#4FB0D9]" />,
    'Gestão de Redes Sociais': <Users size={18} className="text-[#4FB0D9]" />,
    'Performance Analytics': <BarChart3 size={18} className="text-[#4FB0D9]" />,
  };

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
          href="/#clientes" 
          className="inline-flex items-center gap-2 text-[#4FB0D9] hover:text-[#0A1628] transition-all duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
          <span>Voltar para Clientes</span>
        </Link>

        {/* ======================================================
            CARD PRINCIPAL
        ====================================================== */}

        <div className="bg-white rounded-2xl shadow-2xl border border-[#D6E2EC] overflow-hidden animate-fade-in-up">
          {/* ======================================================
              HEADER COM GRADIENTE
          ====================================================== */}

          <div className="bg-gradient-to-r from-[#0A1628] via-[#1A2A40] to-[#4FB0D9] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* ===== LOGO ===== */}
              <div className="relative flex-shrink-0">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-2xl p-4 animate-float">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Anel pulsante */}
                <div className="absolute -inset-3 rounded-2xl border-2 border-[#4FB0D9]/20 animate-ping" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white flex items-center gap-3 justify-center md:justify-start">
                  {client.name}
                  <Sparkles size={24} className="text-[#4FB0D9] animate-pulse" />
                </h1>
                <p className="text-[#4FB0D9] text-lg font-medium mt-1 flex items-center gap-2 justify-center md:justify-start">
                  <Briefcase size={18} className="text-[#4FB0D9]" />
                  {client.industry}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                  <span className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors duration-300">
                    <Calendar size={16} className="text-[#4FB0D9]" />
                    Parceiro desde {client.year}
                  </span>
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 text-sm hover:text-[#4FB0D9] transition-colors duration-300 group"
                  >
                    <Globe2 size={16} className="text-[#4FB0D9]" />
                    {client.website.replace('https://', '').replace('www.', '')}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              CONTEÚDO
          ====================================================== */}

          <div className="p-8 md:p-10 space-y-8">
            {/* DESCRIÇÃO */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-heading text-2xl font-bold text-[#0A1628] flex items-center gap-2">
                <span className="w-1 h-8 bg-[#4FB0D9] rounded-full" />
                Sobre o Cliente
              </h2>
              <p className="mt-3 text-[#3A5368] leading-relaxed pl-4 border-l-2 border-[#4FB0D9]/30">
                {client.description}
              </p>
            </div>

            {/* SERVIÇOS PRESTADOS */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-2">
                <Zap size={20} className="text-[#4FB0D9]" />
                Serviços Prestados
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {client.services.map((service, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-[#0A1628]/5 text-[#0A1628] px-4 py-2 rounded-full text-sm font-medium border border-[#D6E2EC] hover:bg-[#4FB0D9] hover:text-white hover:border-[#4FB0D9] transition-all duration-300 cursor-default animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {serviceIcons[service] || <CheckCircle size={16} className="text-[#4FB0D9]" />}
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* RESULTADOS */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-2">
                <TrendingUp size={20} className="text-[#4FB0D9]" />
                Resultados Alcançados
              </h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {client.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-[#EAF1F7] rounded-xl border border-[#D6E2EC] hover:border-[#4FB0D9] transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <CheckCircle size={18} className="text-[#4FB0D9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#3A5368] text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

  

            {/* CTA */}
            <div className="pt-6 border-t border-[#D6E2EC] animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 bg-[#4FB0D9] text-[#0A1628] px-6 py-3 rounded-lg font-medium hover:bg-[#2A7FAA] hover:text-white transition-all duration-300 shadow-lg shadow-[#4FB0D9]/20 hover:shadow-[#4FB0D9]/40 hover:-translate-y-1 group"
              >
                <Rocket size={18} />
                Trabalhar com a RiseON
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-up { opacity: 0; animation: slide-in-up 0.6s ease-out forwards; }
        .animate-fade-in { opacity: 0; animation: fade-in 0.5s ease-out forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}