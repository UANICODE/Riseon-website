'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Award, 
  Target, 
  Users, 
  ChevronRight, 
  Sparkles, 
  BadgeCheck, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import { useParams } from 'next/navigation';

const teamMembers = [
  {
    id: 'beatriz-ferreira',
    name: 'Beatriz Ferreira',
    role: 'Gerente',
    email: 'beatriz@riseon.pt',
    phone: '+351 923 330 191',
    photo: '/images/beatriz.png',
    bio: 'Especialista em Recrutamento & Seleção com mais de 10 anos de experiência em consultoria de RH. Beatriz lidera a área de Talento da RiseON, garantindo que cada processo de recrutamento seja rigoroso e alinhado com a cultura das empresas.',
    expertise: ['Recrutamento & Seleção', 'Gestão de Talentos', 'HR Consulting', 'People Analytics'],
    experience: '10+ anos em consultoria de RH',
    education: 'Mestrado em Gestão de Recursos Humanos',
  },
  {
    id: 'tomas-ferreira',
    name: 'Tomás Ferreira',
    role: 'Gerente',
    email: 'tomas@riseon.pt',
    phone: '+351 923 330 192',
    photo: '/images/tomas.png',
    bio: 'Especialista em Estratégia Digital e Performance Analytics. Tomás lidera as áreas de Impacto e Performance da RiseON, ajudando empresas a crescer através de websites institucionais, redes sociais e dashboards de KPIs em tempo real.',
    expertise: ['Estratégia Digital', 'Performance Analytics', 'Website Development', 'Data Visualization'],
    experience: '8+ anos em estratégia digital',
    education: 'Mestrado em Business Intelligence',
  },
];

export default function TeamMemberPage() {
  const params = useParams();
  const id = params?.id as string;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 bg-[#EAF1F7] min-h-screen relative overflow-hidden">
      {/* ======================================================
          FUNDO COM EFEITOS
      ====================================================== */}

      {/* Glow orb 1 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FB0D9]/10 rounded-full blur-3xl animate-pulse" />
      
      {/* Glow orb 2 */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2A7FAA]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Glow orb 3 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FB0D9]/5 rounded-full blur-3xl" />

      {/* Partículas flutuantes */}
      <div className="absolute top-20 left-[10%] w-2 h-2 bg-[#4FB0D9]/40 rounded-full animate-bounce" />
      <div className="absolute top-40 right-[15%] w-3 h-3 bg-[#4FB0D9]/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-[20%] w-2 h-2 bg-[#2A7FAA]/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-[25%] w-4 h-4 bg-[#4FB0D9]/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================
            BOTÃO VOLTAR — ANIMADO
        ====================================================== */}

        <Link
          href="/#equipa"
          className="inline-flex items-center gap-2 text-[#4FB0D9] hover:text-[#0A1628] transition-all duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">Voltar para a equipa</span>
        </Link>

        {/* ======================================================
            CARD PRINCIPAL — COM ANIMAÇÃO DE ENTRADA
        ====================================================== */}

        <div className="bg-white rounded-2xl shadow-2xl border border-[#D6E2EC] overflow-hidden animate-fade-in-up">
          {/* ======================================================
              HEADER COM GRADIENTE ANIMADO
          ====================================================== */}

          <div className="bg-gradient-to-r from-[#0A1628] via-[#1A2A40] to-[#4FB0D9] p-8 md:p-12 relative overflow-hidden">
            {/* Overlay com brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* ===== FOTO COM ANIMAÇÃO ===== */}
              <div className="relative flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-float">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Anel pulsante em volta da foto */}
                <div className="absolute -inset-2 rounded-full border-2 border-[#4FB0D9]/20 animate-ping" />
                <div className="absolute -inset-4 rounded-full border border-[#4FB0D9]/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              <div className="text-center md:text-left animate-slide-in-right">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white flex items-center gap-3 justify-center md:justify-start">
                  {member.name}
                  
                </h1>
                <p className="text-[#4FB0D9] text-lg font-medium mt-1 flex items-center gap-2 justify-center md:justify-start">
                  <BadgeCheck size={18} className="text-[#4FB0D9]" />
                  {member.role}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                  <span className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors duration-300 group">
                    <Mail size={16} className="text-[#4FB0D9] group-hover:scale-110 transition-transform duration-300" />
                    {member.email}
                  </span>
                  <span className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors duration-300 group">
                    <Phone size={16} className="text-[#4FB0D9] group-hover:scale-110 transition-transform duration-300" />
                    {member.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              CONTEÚDO COM ANIMAÇÕES
          ====================================================== */}

          <div className="p-8 md:p-12 space-y-8">
            {/* BIO */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-heading text-2xl font-bold text-[#0A1628] flex items-center gap-2">
                <span className="w-1 h-8 bg-[#4FB0D9] rounded-full" />
                Sobre
              </h2>
              <p className="mt-3 text-[#3A5368] leading-relaxed pl-4 border-l-2 border-[#4FB0D9]/30">
                {member.bio}
              </p>
            </div>

            {/* GRID INFO COM CARDS ANIMADOS */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#EAF1F7] rounded-xl p-6 border border-[#D6E2EC] hover:shadow-lg hover:border-[#4FB0D9] transition-all duration-300 group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2A7FAA]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-[#2A7FAA]" size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#0A1628]">Experiência</h3>
                </div>
                <p className="mt-2 text-[#3A5368] text-sm flex items-center gap-2">
                  <Briefcase size={16} className="text-[#4FB0D9]" />
                  {member.experience}
                </p>
              </div>

              <div className="bg-[#EAF1F7] rounded-xl p-6 border border-[#D6E2EC] hover:shadow-lg hover:border-[#4FB0D9] transition-all duration-300 group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4FB0D9]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="text-[#4FB0D9]" size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#0A1628]">Formação</h3>
                </div>
                <p className="mt-2 text-[#3A5368] text-sm flex items-center gap-2">
                  <GraduationCap size={16} className="text-[#4FB0D9]" />
                  {member.education}
                </p>
              </div>
            </div>

            {/* ÁREAS DE ESPECIALIZAÇÃO COM ANIMAÇÃO */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-2">
                <Users size={20} className="text-[#4FB0D9]" />
                Áreas de Especialização
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {member.expertise.map((area, index) => (
                  <span
                    key={area}
                    className="bg-[#0A1628]/5 text-[#0A1628] px-4 py-2 rounded-full text-sm font-medium border border-[#D6E2EC] hover:bg-[#4FB0D9] hover:text-white hover:border-[#4FB0D9] transition-all duration-300 cursor-default animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA COM ANIMAÇÃO */}
            <div className="pt-6 border-t border-[#D6E2EC] animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 bg-[#4FB0D9] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2A7FAA] transition-all duration-300 shadow-lg shadow-[#4FB0D9]/20 hover:shadow-[#4FB0D9]/40 hover:-translate-y-1 group"
              >
                Falar com {member.name.split(' ')[0]}
              
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          ANIMAÇÕES CSS (via Tailwind)
      ====================================================== */}

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease-out forwards;
        }

        .animate-slide-in-up {
          opacity: 0;
          animation: slide-in-up 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}