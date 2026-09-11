'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Servicos() {
  const [active, setActive] = useState('talento');

  const pilares = [
    {
      id: 'talento',
      label: 'Talento',
     // logo: '/images/talento.png',
      fallback: 'Tal⏻nto',
    },
    {
      id: 'impacto',
      label: 'Impacto',
      //logo: '/website/public/images',
      fallback: 'Imp⏻cto',
    },
    {
      id: 'performance',
      label: 'Performance',
      //logo: '/images/performance.png',
      fallback: 'Perf⏻rmance',
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

      {/* ======================================================
          ESTRELAS DE FUNDO
      ====================================================== */}

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

      {/* ======================================================
          GLOWS FLUTUANTES
      ====================================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FB0D9]/10 rounded-full blur-3xl pointer-events-none animate-hero-orb-1" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2A7FAA]/10 rounded-full blur-3xl pointer-events-none animate-hero-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FB0D9]/5 rounded-full blur-3xl pointer-events-none animate-hero-orb-3" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================
            HEADER — LOGO GRANDE + NAV BRANCO
        ====================================================== */}

        <div className="flex items-center justify-between border-b border-[#4FB0D9]/20 pb-6 mb-12 animate-fade-in-down">
          <Link
            href="/"
            className="
              relative
              w-56 h-20
              sm:w-64 sm:h-24
              md:w-72 md:h-28
              transition-transform duration-500
              hover:scale-105
            "
          >
            <Image
              src="/images/logo.png"
              alt="RiseON"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="relative transition group"
              style={{ color: '#ffffff' }}
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/servicos"
              className="relative transition group"
              style={{ color: '#ffffff' }}
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contactos"
              className="relative transition group"
              style={{ color: '#ffffff' }}
            >
              Contactos
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
        </div>

        {/* ======================================================
            TÍTULO
        ====================================================== */}

        <div className="text-center animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Serviços
          </h1>
        </div>

        {/* ======================================================
            INTRODUÇÃO
        ====================================================== */}

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

        {/* ======================================================
            3 SUBLOGOTIPOS EM NUVEM
        ====================================================== */}

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            {pilares.map((p, i) => (
              <CloudButton
                key={p.id}
                label={p.label}
               // logo={p.logo}
                fallback={p.fallback}
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
            SECÇÕES SEQUENCIAIS — TALENTO, IMPACTO, PERFORMANCE
        ====================================================== */}

        <div className="mt-20 space-y-24">

          {/* TALENTO */}
          <Section ref={refs.talento} id="talento" title="Talento" delay={0.1}>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              <strong className="text-[#6EC8F0]">
                Recrutamento & Seleção
              </strong>
            </p>
            <p className="text-white/70 leading-relaxed">
              Recrutamento &amp; Seleção assente numa abordagem consultiva e rigorosa, orientada para a
              identificação de talento qualificado e alinhado com a cultura, os valores e os objetivos
              estratégicos de cada organização. Da confirmação do perfil ao acompanhamento pós-integração,
              cuidamos de cada etapa do processo com transparência e proximidade.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { t: 'Estágios Curriculares', d: 'Projetos de curso com duração flexível' },
                { t: 'Estágios Extracurriculares', d: 'Imersão full-time para acelerar a curva de aprendizagem' },
                { t: 'Perfis Seniores', d: 'Captação de talento experiente e estratégico' },
              ].map((item, i) => (
                <div
                  key={item.t}
                  className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-[#6EC8F0]/15 hover:border-[#6EC8F0]/40 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <strong className="text-white text-sm">{item.t}</strong>
                  <p className="text-xs text-white/60 mt-1">{item.d}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* IMPACTO */}
          <Section ref={refs.impacto} id="impacto" title="Impacto" delay={0.1}>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              <strong className="text-[#6EC8F0]">
                Gestão Digital
              </strong>
            </p>
            <p className="text-white/70 leading-relaxed">
              Criação de websites institucionais e gestão profissional de redes sociais para fortalecer
              a presença digital da sua empresa. Desenvolvemos websites modernos, responsivos e otimizados
              para SEO, e fazemos o planeamento, criação e publicação de conteúdos com monitorização
              contínua de desempenho.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { t: 'Website Institucional', d: 'Websites modernos, responsivos e otimizados' },
                { t: 'Gestão de Redes Sociais', d: 'Planeamento mensal + criação de conteúdos' },
                { t: 'Análise de Resultados', d: 'Relatórios com métricas e recomendações' },
              ].map((item, i) => (
                <div
                  key={item.t}
                  className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-[#6EC8F0]/15 hover:border-[#6EC8F0]/40 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <strong className="text-white text-sm">{item.t}</strong>
                  <p className="text-xs text-white/60 mt-1">{item.d}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* PERFORMANCE */}
          <Section ref={refs.performance} id="performance" title="Performance" delay={0.1}>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              <strong className="text-[#6EC8F0]">
                Performance Analytics
              </strong>
            </p>
            <p className="text-white/70 leading-relaxed">
              Desenvolvimento de dashboards personalizados que centralizam os indicadores críticos do
              seu negócio (KPIs) numa única plataforma visual. Transformamos dados complexos em informação
              clara, visual e acionável, colocando o poder da análise nas mãos de quem lidera, sem
              necessidade de conhecimentos técnicos.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { t: 'Centralização de Dados', d: 'Múltiplas fontes numa única plataforma' },
                { t: 'KPIs Personalizados', d: 'Indicadores à medida do seu negócio' },
                { t: 'Atualização em Tempo Real', d: 'Dados contínuos sem processamento manual' },
              ].map((item, i) => (
                <div
                  key={item.t}
                  className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-[#6EC8F0]/15 hover:border-[#6EC8F0]/40 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <strong className="text-white text-sm">{item.t}</strong>
                  <p className="text-xs text-white/60 mt-1">{item.d}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ======================================================
            CTA FINAL
        ====================================================== */}

        <div className="mt-20 bg-white/5 backdrop-blur-md rounded-2xl p-10 text-center relative overflow-hidden border border-[#4FB0D9]/20 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6EC8F0]/5 via-transparent to-[#6EC8F0]/5 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
              Pronto para <span className="text-[#6EC8F0]">crescer</span>?
            </h3>
            <p className="text-white/70 mt-2">Fale connosco e vamos encontrar a solução em conjunto.</p>
            <Link
              href="/contactos"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                px-8 py-3.5
                rounded-full
                bg-[#6EC8F0]
                font-semibold
                text-sm tracking-wide
                hover:bg-[#4FB0D9]
                hover:shadow-lg hover:shadow-[#4FB0D9]/30
                hover:-translate-y-1
                transition-all duration-300
              "
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
// COMPONENTE — BOTÃO EM NUVEM (com logo)
// ============================================================

function CloudButton({
  label,
  //logo,
  fallback,
  active,
  onClick,
  delay = 0,
}: {
  label: string;
 // logo: string;
  fallback: string;
  active: boolean;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        w-44 h-44
        flex flex-col items-center justify-center
        transition-all duration-500
        hover:scale-105
        animate-fade-in-up
        group
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Nuvem SVG */}
      <svg
        viewBox="0 0 200 160"
        className={`
          absolute inset-0 w-full h-full transition-all duration-500
          ${active ? 'text-[#6EC8F0] animate-cloud-pulse' : 'text-white/10 group-hover:text-[#6EC8F0]/30'}
        `}
        fill="currentColor"
      >
        <path d="M50 120 Q20 120 20 95 Q20 75 40 72 Q42 45 70 45 Q90 30 115 45 Q145 40 155 65 Q185 65 185 95 Q185 120 155 120 Z" />
      </svg>


      {/* Label */}
      <span
        className={`
          relative z-10 font-heading text-lg font-bold transition-colors duration-500
          ${active ? 'text-[#0a0e3f]' : 'text-white/80 group-hover:text-[#6EC8F0]'}
        `}
      >
        {fallback}
      </span>
    </button>
  );
}

// ============================================================
// COMPONENTE — SECÇÃO (com fade-in ao entrar no viewport)
// ============================================================

const Section = forwardRef<
  HTMLDivElement,
  { id?: string; title: string; children: React.ReactNode; delay?: number }
>(({ id, title, children, delay = 0 }, ref) => {
  const [visible, setVisible] = useState(false);
  const localRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Combinar refs
  const setRefs = (node: HTMLDivElement) => {
    localRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  return (
    <div
      ref={setRefs}
      id={id}
      className={`
        scroll-mt-32
        transition-all
        duration-1000
        ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h2 className="font-heading text-3xl font-bold text-white mb-6 text-center relative">
        {title}
        <span className="block mx-auto mt-3 w-16 h-px bg-gradient-to-r from-transparent via-[#6EC8F0] to-transparent" />
      </h2>
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-[#4FB0D9]/20 shadow-[0_0_40px_rgba(79,176,217,0.08)] transition-all duration-500 hover:border-[#6EC8F0]/30 hover:shadow-[0_0_60px_rgba(110,200,240,0.12)]">
        {children}
      </div>
    </div>
  );
});
Section.displayName = 'Section';