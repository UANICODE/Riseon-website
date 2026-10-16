'use client';

import { useState, useRef, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Sobre() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    if (active === id) {
      setActive(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setActive(id);
    setTimeout(() => {
      const el = refs[id as keyof typeof refs]?.current;
      if (el) {
        window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Contactos', href: '/contactos' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0a0e3f] via-[#0d1350] to-[#1a1a6e] pt-6 pb-20">

      {/* ESTRELAS DE FUNDO */}
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

      {/* GLOWS FLUTUANTES */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FB0D9]/10 rounded-full blur-3xl pointer-events-none animate-hero-orb-1" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2A7FAA]/10 rounded-full blur-3xl pointer-events-none animate-hero-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FB0D9]/5 rounded-full blur-3xl pointer-events-none animate-hero-orb-3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===== HEADER COM MENU COMPLETO (DESKTOP + MOBILE) ===== */}
        <div className="flex items-center justify-between border-b border-[#4FB0D9]/20 pb-6 mb-12">
          <Link
            href="/"
            className="relative w-40 h-14 sm:w-56 sm:h-20 md:w-64 md:h-24 transition-transform duration-500 hover:scale-105"
          >
            <Image
              src="/images/logo_sem_slogan.png"
              alt="RiseON"
              fill
              className="object-contain object-left"
              priority
              quality={100}
              sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
            />
          </Link>

          {/* Menu desktop — todos os links sempre visíveis */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition group"
                style={{ color: '#ffffff' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6EC8F0] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Botão hambúrguer mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:text-[#6EC8F0] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mb-8 bg-white/5 backdrop-blur-md border border-[#4FB0D9]/20 rounded-2xl p-4 animate-fade-in-down">
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-white/80 hover:text-[#6EC8F0] hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* TÍTULO */}
        <div className="text-center animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Sobre</h1>
        </div>

        {/* INTRODUÇÃO */}
        <div className="mt-8 max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-white/75 leading-relaxed text-base md:text-lg">
            Fundada em <strong className="text-[#6EC8F0]">janeiro de 2026</strong>, com sede em{' '}
            <strong className="text-[#6EC8F0]">Cascais</strong>, a{' '}
            <strong className="text-[#6EC8F0]">RiseON</strong> é uma consultora B2B vocacionada para o
            crescimento empresarial, com atuação nas áreas de{' '}
            <strong className="text-white">Recrutamento &amp; Seleção</strong>,{' '}
            <strong className="text-white">Gestão das plataformas digitais</strong> e{' '}
            <strong className="text-white">Performance Analytics</strong>.
          </p>
        </div>

        {/* NAVEGAÇÃO EM NUVENS */}
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

        {/* SECÇÕES SEQUENCIAIS */}
        <div className="mt-20 space-y-24">
          {/* MISSÃO */}
          {(!active || active === 'missao') && (
            <Section ref={refs.missao} id="missao" title="Missão" delay={0.1}>
              <p className="text-lg text-white/85 leading-relaxed mb-4 group cursor-default">
                <strong className="text-[#6EC8F0] inline-block transition-all duration-500 group-hover:tracking-wider group-hover:drop-shadow-[0_0_15px_rgba(110,200,240,0.6)]">
                  "Ligar o Talento, Impulsionar o Crescimento"
                </strong>
              </p>
              <p className="text-white/70 leading-relaxed transition-all duration-500 hover:text-white/95 cursor-default">
                Temos como objetivo ser o parceiro estratégico de crescimento para startups e PMEs
                portuguesas, integrando Talento, Impacto Digital e Performance numa visão coerente,
                orientada para resultados reais e fundamentada em dados.
              </p>
            </Section>
          )}

          {/* VALORES */}
          {(!active || active === 'valores') && (
            <Section ref={refs.valores} id="valores" title="Valores" delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { t: 'Transparência', d: 'Comunicação clara e ética em todos os processos de seleção e serviços digitais' },
                  { t: 'Compromisso', d: 'Acompanhamento próximo e personalizado, garantindo que cada integração seja bem-sucedida' },
                  { t: 'Agilidade e Simplicidade', d: 'Foco no que realmente cria valor para as Empresas e para os Candidatos' },
                  { t: 'Inovação e Crescimento', d: 'Movemo-nos pela vontade de fazer as Empresas crescerem, fornecendo as ferramentas necessárias para se destacarem' },
                ].map((v, i) => (
                  <div key={v.t} className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                    <span className="text-[#6EC8F0] text-lg mt-0.5 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125">◆</span>
                    <div>
                      <strong className="text-white group-hover:text-[#6EC8F0] transition-colors duration-300">{v.t}</strong>
                      <p className="text-sm text-white/60 mt-1 transition-colors duration-500 group-hover:text-white/85">{v.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          
          {(!active || active === 'pilares') && (
            <Section ref={refs.pilares} id="pilares" title="Pilares Estratégicos" delay={0.1}>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    id: 'talento',
                    d: 'Recrutamento & Seleção',
                    bg: 'bg-[#6EC8F0]/10 border border-[#6EC8F0]/20',
                    word: (
                      <>
                        Talent<span className="text-[#6EC8F0]">⏻</span>
                      </>
                    ),
                  },
                  {
                    id: 'impacto',
                    d: 'Gestão de Plataformas Digitais',
                    bg: 'bg-[#6EC8F0]/10 border border-[#6EC8F0]/20',
                    word: (
                      <>
                        Impact<span className="text-[#6EC8F0]">⏻</span>
                      </>
                    ),
                  },
                  {
                    id: 'performance',
                    d: 'Performance Analytics',
                    bg: 'bg-[#4FB0D9]/10 border border-[#4FB0D9]/20',
                    word: (
                      <>
                        Perf<span className="text-[#6EC8F0]">⏻</span>rmance
                      </>
                    ),
                  },
                ].map((p, i) => (
                  <div
                    key={p.id}
                    className={`${p.bg} rounded-xl p-6 text-center animate-fade-in-up transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(79,176,217,0.2)] hover:border-[#6EC8F0]/50 flex flex-col items-center justify-center min-h-[220px]`}
                    style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                  >
                    {/* PALAVRA GRANDE COM O SUBSTITUÍDO */}
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-wide mb-4 transition-transform duration-500 hover:scale-105">
                      {p.word}
                    </div>
                    <p className="text-sm text-white/60 mt-1">{p.d}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* EQUIPA */}
          {(!active || active === 'equipa') && (
            <Section ref={refs.equipa} id="equipa" title="Equipa" delay={0.1}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Beatriz Ferreira', role: 'Gerente', area: 'Estratégia & Performance', photo: '/images/beatriz.png', color: 'border-white/15' },
                  { name: 'Tomás Ferreira', role: 'Gerente', area: 'Recrutamento & Gestão', photo: '/images/tomas.png', color: 'border-[#6EC8F0]/25' },
                ].map((m, i) => (
                  <div key={m.name} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#4FB0D9]/20 flex items-center gap-6 transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(79,176,217,0.15)] group animate-fade-in-up" style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
                    <div className={`relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 ${m.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_25px_rgba(79,176,217,0.2)]`}>
                      <Image src={m.photo} alt={`Foto de ${m.name}`} fill className="object-cover" sizes="96px" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-white group-hover:text-[#6EC8F0] transition-colors duration-300">{m.name}</h4>
                      <p className="text-[#6EC8F0] font-medium text-sm">{m.role}</p>
                      <p className="text-white/60 text-sm">{m.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* PROVA SOCIAL */}
          {!active && (
            <Section id="prova-social" title="Empresas que confiam em nós" delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'MyMoment', logo: '/images/mymoment.png', website: 'https://mymoment.pt/', scale: 1.5 },
                  { name: 'Coolivin', logo: '/images/coolivin.png', website: 'https://coolivin.com/pt', scale: 0.85 },
                  { name: 'Centro Juvenil', logo: '/images/centro-juvenil.png', website: 'https://cjsj.pt/' },
                  { name: 'MadreMedia', logo: '/images/madre.png', website: 'https://madremedia.pt/' },
                  { name: 'Mário Ferreira Advogados', logo: '/images/mfadvogados.png', website: 'https://mfadvogados.online/pt' },
                  { name: 'Mundial Exemplar', logo: '/images/mundo_exemplar.png', website: 'https://mundialexemplarcuidadosnolar.pt/' },
                ].map((c, i) => (
                  <a key={c.name} href={c.website} target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-[#4FB0D9]/20 flex items-center justify-center min-h-[110px] overflow-hidden transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(79,176,217,0.15)] animate-fade-in-up group cursor-pointer" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
                    <div className="relative w-32 h-16 transition-all duration-500 group-hover:scale-110">
                      <Image src={c.logo} alt={`Logo ${c.name}`} fill className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: `scale(${c.scale ?? 1})` }} sizes="(max-width: 768px) 128px, 128px" />
                    </div>
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* BOTÃO "VER TUDO" */}
        {active && (
          <div className="mt-16 text-center animate-fade-in-up">
            <button
              onClick={() => { setActive(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6EC8F0]/40 text-[#6EC8F0] font-semibold text-sm hover:bg-[#6EC8F0] hover:text-[#0a0e3f] transition-all duration-300"
            >
              ← Ver tudo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTE — BOTÃO EM NUVEM
// ============================================================

function CloudButton({ label, active, onClick, delay = 0 }: { label: string; active: boolean; onClick: () => void; delay?: number }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-14 py-7 font-heading font-bold text-xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${active ? 'text-[#0a0e3f] scale-105' : 'text-white/80 hover:text-[#6EC8F0]'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg viewBox="0 0 300 130" className={`absolute inset-0 w-full h-full transition-all duration-500 ${active ? 'text-[#6EC8F0]' : 'text-white/10 hover:text-[#6EC8F0]/30'} ${active ? 'animate-cloud-pulse' : ''}`} fill="currentColor" preserveAspectRatio="none">
        <path d="M75 105 Q28 105 28 78 Q28 54 65 50 Q68 18 110 18 Q138 5 175 18 Q215 12 240 42 Q285 45 285 78 Q285 105 240 105 Z" />
      </svg>
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </button>
  );
}

// ============================================================
// COMPONENTE — SECÇÃO
// ============================================================

const Section = forwardRef<HTMLDivElement, { id?: string; title: string; children: React.ReactNode; delay?: number }>(
  ({ id, title, children, delay = 0 }, ref) => (
    <div ref={ref} id={id} className="scroll-mt-32 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <h2 className="font-heading text-3xl font-bold text-white mb-6 text-center relative">
        {title}
        <span className="block mx-auto mt-3 w-16 h-px bg-gradient-to-r from-transparent via-[#6EC8F0] to-transparent" />
      </h2>
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-[#4FB0D9]/20 shadow-[0_0_40px_rgba(79,176,217,0.08)] transition-all duration-500 hover:border-[#6EC8F0]/30 hover:shadow-[0_0_60px_rgba(110,200,240,0.12)]">
        {children}
      </div>
    </div>
  )
);
Section.displayName = 'Section';