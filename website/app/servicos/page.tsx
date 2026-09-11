'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  UserCheck,
  Users,
  ClipboardList,
  Handshake,
  UserCog,
  Star,
  Calendar,
  Clock,
  Briefcase,
  CheckCircle,
  Monitor,
  Wrench,
  Settings,
  TrendingUp,
  Share2,
  Lightbulb,
  BarChart3,
  Database,
  Target,
  RefreshCw,
  Award,
} from 'lucide-react';

export default function Servicos() {
  const [active, setActive] = useState('talento');

  const pilares = [
    {
      id: 'talento',
      label: 'Talento',
      word: (
        <>
          Talent<span className="text-[#6EC8F0]">⏻</span>
        </>
      ),
    },
    {
      id: 'impacto',
      label: 'Impacto',
      word: (
        <>
          Impact<span className="text-[#6EC8F0]">⏻</span>
        </>
      ),
    },
    {
      id: 'performance',
      label: 'Performance',
      word: (
        <>
          Perf<span className="text-[#6EC8F0]">⏻</span>rmance
        </>
      ),
    },
  ];

  const refs = {
    talento: useRef<HTMLDivElement>(null),
    impacto: useRef<HTMLDivElement>(null),
    performance: useRef<HTMLDivElement>(null),
  };

  // Detetar secção ativa ao scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of Object.keys(refs) as (keyof typeof refs)[]) {
        const el = refs[id].current;
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: keyof typeof refs) => {
    const el = refs[id].current;
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0a0e3f] via-[#0d1350] to-[#1a1a6e] pt-6 pb-20">

      {/* ESTRELAS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 70 }).map((_, i) => {
          const size = (i % 3) + 0.7;
          const top = (i * 47.3) % 100;
          const left = (i * 83.7) % 100;
          const opacity = 0.15 + ((i * 13) % 55) / 100;
          const delay = ((i * 17) % 50) / 10;
          const duration = 3 + ((i * 7) % 40) / 10;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-star-twinkle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* GLOWS */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FB0D9]/10 rounded-full blur-3xl pointer-events-none animate-hero-orb-1" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2A7FAA]/10 rounded-full blur-3xl pointer-events-none animate-hero-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FB0D9]/5 rounded-full blur-3xl pointer-events-none animate-hero-orb-3" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#4FB0D9]/20 pb-6 mb-12 animate-fade-in-down">
          <Link
            href="/"
            className="relative w-56 h-20 sm:w-64 sm:h-24 md:w-72 md:h-28 transition-transform duration-500 hover:scale-105"
          >
            <Image
              src="/images/logo_sem_slogan.png"
              alt="RiseON"
              fill
              className="object-contain object-left"
              priority
              quality={100}
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="relative transition group" style={{ color: '#ffffff' }}>
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/servicos" className="relative transition group" style={{ color: '#ffffff' }}>
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contactos" className="relative transition group" style={{ color: '#ffffff' }}>
              Contactos
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
        </div>

        {/* TÍTULO */}
        <div className="text-center animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Serviços
          </h1>
        </div>

        {/* INTRODUÇÃO */}
        <div className="mt-8 max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-white/75 leading-relaxed text-base md:text-lg">
            A RiseON integra <strong className="text-[#6EC8F0]">três pilares estratégicos</strong> que, em
            conjunto, impulsionam o crescimento sustentado da sua empresa: recrutamos o{' '}
            <strong className="text-white">talento certo</strong>, fortalecemos a sua{' '}
            <strong className="text-white">presença digital</strong> e transformamos{' '}
            <strong className="text-white">dados em decisões</strong>. Uma abordagem consultiva, rigorosa
            e orientada a resultados.
          </p>
        </div>

        {/* NUVENS */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            {pilares.map((p, i) => (
              <CloudButton
                key={p.id}
                label={p.label}
                word={p.word}
                active={active === p.id}
                delay={i * 0.12}
                onClick={() => {
                  setActive(p.id);
                  scrollTo(p.id as keyof typeof refs);
                }}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            TALENTO — SECÇÃO COMPLETA
        ====================================================== */}

        <div ref={refs.talento} id="talento" className="mt-24 scroll-mt-32">

          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Talent<span className="text-[#6EC8F0]">⏻</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-3xl mx-auto leading-relaxed">
              Recrutamento &amp; Seleção assente numa abordagem consultiva e rigorosa, orientada para a
              identificação de talento qualificado e alinhado com a cultura, os valores e os objetivos
              estratégicos de cada organização.
            </p>
          </div>

          {/* Processo de Seleção */}
          <div className="animate-fade-in-up">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
              Processo de Seleção
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
            </h3>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: UserCheck, title: 'Confirmação do perfil' },
                { icon: Users, title: 'Promoção & Sourcing' },
                { icon: ClipboardList, title: 'Seleção do(s) Candidato(s)' },
                { icon: Handshake, title: 'Decisão de Contratação' },
                { icon: UserCog, title: 'Logística' },
                { icon: Star, title: 'Acompanhamento da experiência' },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center group animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] transition-all duration-500 group-hover:scale-110 group-hover:border-[#6EC8F0] group-hover:bg-[#6EC8F0]/10 group-hover:shadow-[0_0_30px_rgba(110,200,240,0.4)]">
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                    <p className="mt-4 text-[#6EC8F0] text-sm font-medium max-w-[180px]">
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Áreas de Especialização */}
          <div className="mt-20 animate-fade-in-up">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
              Áreas de Especialização
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
            </h3>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                'Administração',
                'Hotelaria e Restauração',
                'Desenvolvimento de negócios',
                'IT',
                'Engenharia',
                'Marketing',
              ].map((area, i) => (
                <div
                  key={area}
                  className="relative px-6 py-5 bg-[#1a3a5c]/60 backdrop-blur-md border-2 border-[#4FB0D9]/40 rounded-lg text-center transition-all duration-500 hover:border-[#6EC8F0] hover:bg-[#1a3a5c]/80 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(79,176,217,0.25)] animate-fade-in-up group cursor-default"
                  style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#6EC8F0]/50 rounded-tl" />
                  <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#6EC8F0]/50 rounded-tr" />
                  <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#6EC8F0]/50 rounded-bl" />
                  <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#6EC8F0]/50 rounded-br" />
                  <span className="text-white font-medium text-sm group-hover:text-[#6EC8F0] transition-colors duration-300">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================
            IMPACTO — SECÇÃO COMPLETA
        ====================================================== */}

        <div ref={refs.impacto} id="impacto" className="mt-24 scroll-mt-32">

          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Impact<span className="text-[#6EC8F0]">⏻</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-3xl mx-auto leading-relaxed">
              Criação de websites institucionais e gestão profissional de redes sociais para fortalecer
              a presença digital da sua empresa.
            </p>
          </div>

          {/* PARTE 1 — WEBSITE INSTITUCIONAL */}
          <div className="animate-fade-in-up">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
              Criação e Manutenção de Website Institucional
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
            </h3>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Monitor,
                  title: 'Desenvolvimento',
                  desc: 'Construção de uma identidade online robusta, onde profissionais qualificados desenvolvem a estrutura e o design do website de raiz. Esta fase garante que a plataforma é desenhada para colmatar as necessidades específicas de visibilidade e conversão do seu negócio.',
                },
                {
                  icon: Wrench,
                  title: 'Manutenção',
                  desc: 'Através de um regime de imersão total, o profissional assume a responsabilidade direta pela atualização de conteúdos e segurança do website. A continuidade operacional assegura que a plataforma permanece funcional e livre de erros técnicos, permitindo uma resposta rápida perante qualquer imprevisto.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  >
                    <div className="hidden md:flex flex-shrink-0 items-center text-[#6EC8F0] pt-4">
                      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                        <path
                          d="M2 12 L32 12 M24 4 L32 12 L24 20"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0]">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <div className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                          <p className="text-white/80 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Características do Serviço */}
            <div className="mt-10 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[#4FB0D9]/20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-heading text-2xl font-bold text-white mb-2 relative inline-block">
                Características do Serviço
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
              </h4>

              <ul className="mt-10 space-y-4">
                {[
                  { icon: Monitor, bold: 'Website Profissional', rest: 'com design moderno, funcional e adaptado à identidade da sua marca' },
                  { icon: Settings, bold: 'Manutenção Contínua', rest: 'com prioridade para atualizações, segurança e suporte técnico' },
                  { icon: TrendingUp, bold: 'Otimizado para Resultados', rest: 'através de uma estrutura pensada para atrair clientes e converter visitas em negócios' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6EC8F0]/15 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0]">
                        <Icon size={18} />
                      </div>
                      <p className="text-sm text-white/75 leading-relaxed pt-2">
                        <strong className="text-[#6EC8F0]">{item.bold}</strong> {item.rest}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6EC8F0]/15 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0]">
                    <Briefcase size={18} />
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed pt-2">
                    <strong className="text-[#6EC8F0]">Valor do projeto sujeito a consulta</strong>, dependente das características do projeto
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6EC8F0]/15 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0]">
                    <Target size={18} />
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed pt-2">
                    <strong className="text-[#6EC8F0]">Orçamentação à medida das necessidades</strong>, repartido consoante as fases de implementação
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PARTE 2 — GESTÃO DE REDES SOCIAIS */}
          <div className="mt-20 animate-fade-in-up">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
              Gestão de Redes Sociais Institucionais
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
            </h3>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Share2,
                  title: 'Gestão de Plataformas',
                  desc: 'Gestão profissional das principais plataformas sociais (Instagram, LinkedIn, Facebook e outras relevantes para o seu negócio).',
                },
                {
                  icon: Lightbulb,
                  title: 'Processo Criativo',
                  desc: 'Criação e publicação de posts, stories e atualizações de forma regular, com monitorização de desempenho das publicações e da interação com o público.',
                },
                {
                  icon: BarChart3,
                  title: 'Análise mensal',
                  desc: 'Envio de relatório mensal de resultados, com análise de alcance, crescimento e recomendações estratégicas.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  >
                    <div className="hidden md:flex flex-shrink-0 items-center text-[#6EC8F0] pt-4">
                      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                        <path
                          d="M2 12 L32 12 M24 4 L32 12 L24 20"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0]">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <div className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                          <p className="text-white/80 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================
            PERFORMANCE — SECÇÃO COMPLETA
        ====================================================== */}

        <div ref={refs.performance} id="performance" className="mt-24 scroll-mt-32">

          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Perf<span className="text-[#6EC8F0]">⏻</span>rmance
            </h2>
            <p className="mt-4 text-white/70 max-w-3xl mx-auto leading-relaxed">
              Desenvolvimento de dashboards personalizados que centralizam os indicadores críticos do
              seu negócio (KPIs) numa única plataforma visual.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {[
              {
                icon: Database,
                title: 'Centralização de Dados',
                desc: 'Informação agregada de múltiplas fontes (vendas, marketing, RH, operações) numa única plataforma visual, eliminando relatórios dispersos.',
              },
              {
                icon: Target,
                title: 'KPIs Personalizados',
                desc: 'Definição e monitorização dos indicadores estratégicos mais relevantes para o seu negócio, adaptados aos seus objetivos específicos.',
              },
              {
                icon: RefreshCw,
                title: 'Atualização em Tempo Real',
                desc: 'Dados apresentados de forma contínua e automática, sem necessidade de processamento manual.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0]">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <div className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                        <p className="text-white/80 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-24 bg-white/5 backdrop-blur-md rounded-2xl p-10 text-center relative overflow-hidden border border-[#4FB0D9]/20 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6EC8F0]/5 via-transparent to-[#6EC8F0]/5 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
              Pronto para <span className="text-[#6EC8F0]">crescer</span>?
            </h3>
            <p className="text-white/70 mt-2">Fale connosco e vamos encontrar a solução em conjunto.</p>
            <Link
              href="/contactos"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full bg-[#6EC8F0] font-semibold text-sm tracking-wide hover:bg-[#4FB0D9] hover:shadow-lg hover:shadow-[#4FB0D9]/30 hover:-translate-y-1 transition-all duration-300"
              style={{ color: '#0a0e3f' }}
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTE — BOTÃO EM NUVEM (MAIOR — cabe "Performance")
// ============================================================

function CloudButton({
  label,
  word,
  active,
  onClick,
  delay = 0,
}: {
  label: string;
  word: React.ReactNode;
  active: boolean;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        w-56 h-56
        sm:w-60 sm:h-60
        flex flex-col items-center justify-center
        transition-all duration-500
        hover:scale-105
        animate-fade-in-up
        group
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg
        viewBox="0 0 280 220"
        className={`
          absolute inset-0 w-full h-full transition-all duration-500
          ${active ? 'text-[#6EC8F0] animate-cloud-pulse' : 'text-white/10 group-hover:text-[#6EC8F0]/30'}
        `}
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Nuvem mais larga — cabe "Performance" */}
        <path d="M70 160 Q25 160 25 128 Q25 100 65 96 Q68 55 115 55 Q145 38 185 55 Q225 48 250 80 Q275 85 275 125 Q275 160 230 160 Z" />
      </svg>

      <span
        className={`
          relative z-10 font-heading text-2xl font-bold transition-colors duration-500
          whitespace-nowrap
          ${active ? 'text-[#0a0e3f]' : 'text-white/80 group-hover:text-[#6EC8F0]'}
        `}
      >
        {word}
      </span>
    </button>
  );
}