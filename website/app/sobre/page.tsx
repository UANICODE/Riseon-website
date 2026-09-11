'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sobre() {
  const [active, setActive] = useState('missao');

  const sections = [
    { id: 'missao', label: 'Missão' },
    { id: 'valores', label: 'Valores' },
    { id: 'pilares', label: 'Pilares Estratégicos' },
    { id: 'equipa', label: 'Equipa' },
  ];

  const refs = {
    missao: useRef<HTMLDivElement>(null),
    valores: useRef<HTMLDivElement>(null),
    pilares: useRef<HTMLDivElement>(null),
    equipa: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (id: string) => {
    setActive(id);
    // Scroll suave até à secção
    const el = refs[id as keyof typeof refs]?.current;
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================
            HEADER — LOGO S/ SLOGAN
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
            Sobre
          </h1>
        </div>

        {/* ======================================================
            INTRODUÇÃO
        ====================================================== */}

        <div className="mt-8 max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-white/75 leading-relaxed text-base md:text-lg">
            Fundada em <strong className="text-[#6EC8F0]">janeiro de 2026</strong>, com sede em{' '}
            <strong className="text-[#6EC8F0]">Cascais</strong>, a{' '}
            <strong className="text-[#6EC8F0]">RiseON</strong> é uma consultora B2B vocacionada para o
            crescimento empresarial, com atuação nas áreas de{' '}
            <strong className="text-white">Recrutamento &amp; Seleção</strong>,{' '}
            <strong className="text-white">Gestão Digital</strong> e{' '}
            <strong className="text-white">Performance Analytics</strong>.
          </p>
        </div>

        {/* ======================================================
            NAVEGAÇÃO EM NUVENS
        ====================================================== */}

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            {sections.slice(0, 2).map((s, i) => (
              <CloudButton
                key={s.id}
                label={s.label}
                active={active === s.id}
                delay={i * 0.1}
                onClick={() => scrollTo(s.id)}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {sections.slice(2).map((s, i) => (
              <CloudButton
                key={s.id}
                label={s.label}
                active={active === s.id}
                delay={i * 0.1}
                onClick={() => scrollTo(s.id)}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            SECÇÕES SEQUENCIAIS
        ====================================================== */}

        <div className="mt-20 space-y-24">

          {/* MISSÃO */}
          <Section ref={refs.missao} id="missao" title="Missão" delay={0.1}>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              <strong className="text-[#6EC8F0]">
                "Ligar o Talento, Impulsionar o Crescimento"
              </strong>
            </p>
            <p className="text-white/70 leading-relaxed">
              Temos como objetivo ser o parceiro estratégico de crescimento para startups e PMEs
              portuguesas, integrando Talento, Impacto Digital e Performance numa visão coerente,
              orientada para resultados reais e fundamentada em dados.
            </p>
          </Section>

          {/* VALORES */}
          <Section ref={refs.valores} id="valores" title="Valores" delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { t: 'Transparência', d: 'Comunicação clara e ética em todos os processos de seleção e serviços digitais' },
                { t: 'Compromisso', d: 'Acompanhamento próximo e personalizado, garantindo que cada integração seja bem-sucedida' },
                { t: 'Agilidade e Simplicidade', d: 'Foco no que realmente cria valor para as Empresas e para os Candidatos' },
                { t: 'Inovação e Crescimento', d: 'Movemo-nos pela vontade de fazer as Empresas crescerem, fornecendo as ferramentas necessárias para se destacarem' },
              ].map((v, i) => (
                <div
                  key={v.t}
                  className="flex items-start gap-3 group animate-fade-in-up"
                  style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                >
                  <span className="text-[#6EC8F0] text-lg mt-0.5 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125">
                    ◆
                  </span>
                  <div>
                    <strong className="text-white group-hover:text-[#6EC8F0] transition-colors duration-300">
                      {v.t}
                    </strong>
                    <p className="text-sm text-white/60 mt-1">{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* PILARES ESTRATÉGICOS */}
          <Section ref={refs.pilares} id="pilares" title="Pilares Estratégicos" delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  t: 'Talento',
                  d: 'Recrutamento & Seleção',
                  c: 'text-white',
                  bg: 'bg-white/5 border border-white/10',
                },
                {
                  t: 'Impacto',
                  d: 'Gestão de Plataformas Digitais',
                  c: 'text-[#6EC8F0]',
                  bg: 'bg-[#6EC8F0]/10 border border-[#6EC8F0]/20',
                },
                {
                  t: 'Performance',
                  d: 'Performance Analytics',
                  c: 'text-[#4FB0D9]',
                  bg: 'bg-[#4FB0D9]/10 border border-[#4FB0D9]/20',
                },
              ].map((p, i) => (
                <div
                  key={p.t}
                  className={`${p.bg} rounded-xl p-6 text-center animate-fade-in-up transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(79,176,217,0.2)] hover:border-[#6EC8F0]/50 flex flex-col items-center`}
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                >
                  <span className={`font-heading text-2xl font-bold ${p.c}`}>{p.t}</span>
                  <p className="text-sm text-white/60 mt-1">{p.d}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* EQUIPA — COM FOTOS */}
          <Section ref={refs.equipa} id="equipa" title="Equipa" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Beatriz Ferreira',
                  role: 'Gerente',
                  area: 'Recrutamento & Gestão',
                  photo: '/images/beatriz.png',
                  color: 'border-white/15',
                },
                {
                  name: 'Tomás Ferreira',
                  role: 'Gerente',
                  area: 'Estratégia & Performance',
                  photo: '/images/tomas.png',
                  color: 'border-[#6EC8F0]/25',
                },
              ].map((m, i) => (
                <div
                  key={m.name}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#4FB0D9]/20 flex items-center gap-6 transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(79,176,217,0.15)] group animate-fade-in-up"
                  style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                >
                  {/* FOTO */}
                  <div className={`relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 ${m.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_25px_rgba(79,176,217,0.2)]`}>
                    <Image
                      src={m.photo}
                      alt={`Foto de ${m.name}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  <div>
                    <h4 className="font-heading text-xl font-bold text-white group-hover:text-[#6EC8F0] transition-colors duration-300">
                      {m.name}
                    </h4>
                    <p className="text-[#6EC8F0] font-medium text-sm">{m.role}</p>
                    <p className="text-white/60 text-sm">{m.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* PROVA SOCIAL — LINKS DIRETOS PARA OS WEBSITES */}
          <Section id="prova-social" title="Empresas que confiam em nós" delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: 'MyMoment',
                  logo: '/images/mymoment.png',
                  website: 'https://mymoment.pt/',
                },
                {
                  name: 'Coolivin',
                  logo: '/images/coolivin.png',
                  website: 'https://coolivin.com/pt',
                },
                {
                  name: 'Centro Juvenil',
                  logo: '/images/centro-juvenil.png',
                  website: 'https://cjsj.pt/',
                },
                {
                  name: 'Dark Cloud',
                  logo: '/images/dark.png',
                  website: 'https://www.darkcloud.pt/',
                },
                {
                  name: 'MadreMedia',
                  logo: '/images/madre.png',
                  website: 'https://madremedia.pt/',
                },
                {
                  name: 'CD Cova Piedade',
                  logo: '/images/clube.png',
                  website: 'https://www.cdcovapiedade.pt/',
                },
                {
                  name: 'Mundial Exemplar',
                  logo: '/images/mundo_exemplar.png',
                  website:
                    'https://mundialexemplarcuidadosnolar.pt/',
                },
                {
                  name: 'Skillfull',
                  logo: '/images/skillfull.png',
                  website: 'https://www.skillfull.pt/',
                },
              ].map((c, i) => (
                <a
                  key={c.name}
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-[#4FB0D9]/20 flex items-center justify-center min-h-[110px] transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(79,176,217,0.15)] animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${0.15 + i * 0.05}s` }}
                >
                  <div className="relative w-32 h-16 transition-all duration-500 group-hover:scale-110">
                    <Image
                      src={c.logo}
                      alt={`Logo ${c.name}`}
                      fill
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTE — BOTÃO EM NUVEM
// ============================================================

function CloudButton({
  label,
  active,
  onClick,
  delay = 0,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        px-10 py-5
        font-heading font-bold text-lg
        transition-all duration-500
        hover:scale-105
        animate-fade-in-up
        ${active ? 'text-[#0a0e3f] scale-105' : 'text-white/80 hover:text-[#6EC8F0]'}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg
        viewBox="0 0 260 110"
        className={`
          absolute inset-0 w-full h-full transition-all duration-500
          ${active ? 'text-[#6EC8F0]' : 'text-white/10 hover:text-[#6EC8F0]/30'}
          ${active ? 'animate-cloud-pulse' : ''}
        `}
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M65 90 Q25 90 25 65 Q25 45 55 42 Q58 15 95 15 Q120 5 150 15 Q185 10 205 35 Q245 38 245 65 Q245 90 205 90 Z" />
      </svg>
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </button>
  );
}

// ============================================================
// COMPONENTE — SECÇÃO
// ============================================================

const Section = forwardRef<
  HTMLDivElement,
  { id?: string; title: string; children: React.ReactNode; delay?: number }
>(({ id, title, children, delay = 0 }, ref) => (
  <div ref={ref} id={id} className="scroll-mt-32 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
    <h2 className="font-heading text-3xl font-bold text-white mb-6 text-center relative">
      {title}
      <span className="block mx-auto mt-3 w-16 h-px bg-gradient-to-r from-transparent via-[#6EC8F0] to-transparent" />
    </h2>
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-[#4FB0D9]/20 shadow-[0_0_40px_rgba(79,176,217,0.08)] transition-all duration-500 hover:border-[#6EC8F0]/30 hover:shadow-[0_0_60px_rgba(110,200,240,0.12)]">
      {children}
    </div>
  </div>
));
Section.displayName = 'Section';