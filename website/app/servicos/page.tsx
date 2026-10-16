'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import {
  UserCheck,
  Users,
  ClipboardList,
  Handshake,
  UserCog,
  Star,
  Briefcase,
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
  Zap,
  Eye,
  Puzzle,
  FileText,
  GraduationCap,
  Clock,
  BadgeCheck,
  ArrowRight,
  Globe2,
  Heart,
  Rocket,
  MessageCircle,
  Coins,
  Package,
  LineChart,
} from 'lucide-react';

export default function Servicos() {
  const [active, setActive] = useState<string | null>(null);
  const [openImpacto, setOpenImpacto] = useState<string | null>(null);
  const [openTalento, setOpenTalento] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pilares = [
    {
      id: 'talento',
      label: 'Talento',
      textOffset: 'translate-x-4 translate-y-0',
      word: (
        <>
          Talent<span className="text-[#6EC8F0]">⏻</span>
        </>
      ),
    },
    {
      id: 'impacto',
      label: 'Impacto',
      textOffset: 'translate-x-4 translate-y-0',
      word: (
        <>
          Impact<span className="text-[#6EC8F0]">⏻</span>
        </>
      ),
    },
    {
      id: 'performance',
      label: 'Performance',
      textOffset: 'translate-x-4 translate-y-0',
      word: (
        <>
          Perf<span className="text-[#6EC8F0]">⏻</span>rmance
        </>
      ),
    },
  ];

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Contactos', href: '/contactos' },
  ];

  const refs = {
    talento: useRef<HTMLDivElement>(null),
    impacto: useRef<HTMLDivElement>(null),
    performance: useRef<HTMLDivElement>(null),
  };

  const handleClick = (id: string) => {
    if (active === id) {
      setActive(null);
      setOpenImpacto(null);
      setOpenTalento(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setActive(id);
    setOpenImpacto(null);
    setOpenTalento(null);

    setTimeout(() => {
      const el = refs[id as keyof typeof refs]?.current;
      if (el) {
        window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      }
    }, 100);
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:text-[#6EC8F0] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mb-8 bg-white/5 backdrop-blur-md border border-[#4FB0D9]/20 rounded-2xl p-4">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-white/80 hover:text-[#6EC8F0] hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        <div className="text-center animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Serviços</h1>
        </div>

        <div className="mt-8 max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-white/75 leading-relaxed text-base md:text-lg">
            A RiseON integra <strong className="text-[#6EC8F0] font-semibold">três pilares estratégicos</strong> que, em
            conjunto, impulsionam o crescimento sustentado da sua empresa: recrutamos o{' '}
            <strong className="text-white font-semibold">talento certo</strong>, fortalecemos a sua{' '}
            <strong className="text-white font-semibold">presença digital</strong> e transformamos{' '}
            <strong className="text-white font-semibold">dados em decisões</strong>. Uma abordagem consultiva, rigorosa
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
                textOffset={p.textOffset}
                active={active === p.id}
                delay={i * 0.12}
                onClick={() => handleClick(p.id)}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            TALENTO
        ====================================================== */}
        {(!active || active === 'talento') && (
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
                    <div key={i} className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                      <div className="w-20 h-20 rounded-full border-2 border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] transition-all duration-500 group-hover:scale-110 group-hover:border-[#6EC8F0] group-hover:bg-[#6EC8F0]/10 group-hover:shadow-[0_0_30px_rgba(110,200,240,0.4)]">
                        <Icon size={34} strokeWidth={1.5} />
                      </div>
                      <p className="mt-4 text-[#6EC8F0] text-sm font-medium max-w-[180px] transition-all duration-500 group-hover:tracking-wide">
                        {step.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-20 animate-fade-in-up">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                Áreas de Especialização
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
              </h3>

              <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {['Administração','Hotelaria e Restauração','Desenvolvimento de negócios','IT','Engenharia','Marketing'].map((area, i) => (
                  <div
                    key={area}
                    className="relative px-6 py-5 bg-[#1a3a5c]/60 backdrop-blur-md border-2 border-[#4FB0D9]/40 rounded-lg text-center transition-all duration-500 hover:border-[#6EC8F0] hover:bg-[#1a3a5c]/80 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(79,176,217,0.25)] animate-fade-in-up group cursor-default"
                    style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                  >
                    <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#6EC8F0]/50 rounded-tl" />
                    <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#6EC8F0]/50 rounded-tr" />
                    <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#6EC8F0]/50 rounded-bl" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#6EC8F0]/50 rounded-br" />
                    <span className="text-white font-medium text-sm group-hover:text-[#6EC8F0] group-hover:tracking-wide transition-all duration-300">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 animate-fade-in-up">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                Tipologia do Serviço
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
              </h3>

              <div className="mt-10 space-y-6">
                {[
                  {
                    id: 'curriculares',
                    icon: GraduationCap,
                    title: 'Estágios Curriculares',
                    content: {
                      desc: 'Tipologia de estágio desenhada para a realização de projetos de curso, permitindo a aplicação prática dos conhecimentos teóricos adquiridos durante a formação.',
                      bullets: ['Curta duração: 6 a 12 semanas', 'Média duração: 3 a 9 meses', '20 a 25 horas semanais'],
                      extraTitle: 'Alocação de talento:',
                      extra: 'Candidatos do ensino profissional (Nível IV) e graus académicos superiores (Níveis V, VI, VII).',
                    },
                  },
                  {
                    id: 'extracurriculares',
                    icon: Clock,
                    title: 'Estágios Extracurriculares',
                    content: {
                      desc: 'Modelo de imersão direcionado para acelerar a curva de aprendizagem e a integração cultural, privilegiando a produtividade, com carga horária entre 35 e 40 horas semanais.',
                      bullets: ['Média duração: 3 a 9 meses', 'Longa duração: 9 a 12 meses', 'Período experimental estendido'],
                      extraTitle: 'Vantagens:',
                      extra: 'Ciclo de formação completo · Avaliação de fit e desempenho · Transição para contratação definitiva.',
                      tags: ['Mid: €170', 'Long: €200'],
                    },
                  },
                  {
                    id: 'seniores',
                    icon: BadgeCheck,
                    title: 'Perfis Seniores',
                    content: {
                      desc: 'Recrutamento e seleção de perfis que trazem uma visão analítica superior e capacidade de resolução de problemas complexos. Possuem a maturidade necessária para liderar projetos internos e aplicar metodologias atualizadas que elevam o padrão de entrega da organização.',
                      bullets: ['Imersão total, menos supervisão', 'Resultados tangíveis no curto e médio prazo', 'Longa duração: até 12 meses'],
                      extraTitle: 'Solução ideal para:',
                      extra: 'Identificar futuros quadros de liderança · Testar competência e fit cultural · Integração definitiva após confirmação.',
                      tags: ['Long: €260'],
                    },
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isOpen = openTalento === item.id;
                  return (
                    <div key={item.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-[#4FB0D9]/20 transition-all duration-500 hover:border-[#6EC8F0]/50">
                      <button
                        onClick={() => setOpenTalento(isOpen ? null : item.id)}
                        className="w-full flex items-center gap-5 p-6 text-left group"
                      >
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#6EC8F0] group-hover:text-[#0a0e3f]">
                          <Icon size={26} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-xl md:text-2xl font-bold text-white group-hover:text-[#6EC8F0] transition-colors duration-300">
                            {item.title}
                          </h4>
                        </div>
                        <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-[#6EC8F0] border-[#6EC8F0] text-[#0a0e3f] rotate-90' : 'border-[#6EC8F0]/40 text-[#6EC8F0]'}`}>
                          <ArrowRight size={18} />
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 pb-6 pt-0 pl-[5.5rem]">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6EC8F0]/30 to-transparent mb-5" />
                          <p className="text-white/75 text-sm leading-relaxed">{item.content.desc}</p>
                          <ul className="mt-4 space-y-2">
                            {item.content.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-white/70 text-sm">
                                <span className="text-[#6EC8F0] mt-0.5">✓</span><span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                            <p className="text-white font-semibold text-sm">{item.content.extraTitle}</p>
                            <p className="text-white/70 text-sm mt-1">{item.content.extra}</p>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-white/5 backdrop-blur-md rounded-xl p-5 border border-[#4FB0D9]/20 text-sm text-white/60 leading-relaxed">
                <strong className="text-[#6EC8F0]">Nota:</strong> A bolsa de estágio é paga mensalmente
                pela Empresa ao perfil júnior ou sénior, com valor igual ou superior a 920€/mês em regime
                full-time superior a 3 meses. Os valores acima referem-se apenas à taxa de serviço RiseON.
              </div>
            </div>
          </div>
        )}

        {/* ======================================================
            IMPACTO
        ====================================================== */}
        {(!active || active === 'impacto') && (
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

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setOpenImpacto(openImpacto === 'website' ? null : 'website')}
                className={`text-left bg-white/5 backdrop-blur-md rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(79,176,217,0.2)] ${openImpacto === 'website' ? 'border-[#6EC8F0] bg-[#6EC8F0]/10' : 'border-[#4FB0D9]/20 hover:border-[#6EC8F0]/60'}`}
              >
                <div className="w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] mb-5">
                  <Globe2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Criação &amp; Manutenção de Website Institucional
                </h3>
                <p className="text-white/60 text-sm">
                  Clique para ver os detalhes, desenvolvimento, manutenção e características.
                </p>
                <span className="inline-flex items-center gap-1 text-[#6EC8F0] text-sm font-medium mt-4">
                  {openImpacto === 'website' ? 'Fechar' : 'Saber mais'} <ArrowRight size={16} />
                </span>
              </button>

              <button
                onClick={() => setOpenImpacto(openImpacto === 'redes' ? null : 'redes')}
                className={`text-left bg-white/5 backdrop-blur-md rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(79,176,217,0.2)] ${openImpacto === 'redes' ? 'border-[#6EC8F0] bg-[#6EC8F0]/10' : 'border-[#4FB0D9]/20 hover:border-[#6EC8F0]/60'}`}
              >
                <div className="w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] mb-5">
                  <Share2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Gestão de Redes Sociais Institucionais
                </h3>
                <p className="text-white/60 text-sm">
                  Clique para ver planeamento, criação, análise e características.
                </p>
                <span className="inline-flex items-center gap-1 text-[#6EC8F0] text-sm font-medium mt-4">
                  {openImpacto === 'redes' ? 'Fechar' : 'Saber mais'} <ArrowRight size={16} />
                </span>
              </button>
            </div>

            {openImpacto === 'website' && (
              <div className="mt-12 space-y-6 animate-fade-in-up">
                {[
                  { icon: Monitor, title: 'Desenvolvimento', desc: 'Construção de uma identidade online robusta, onde profissionais qualificados desenvolvem a estrutura e o design do website de raiz. Esta fase garante que a plataforma é desenhada para colmatar as necessidades específicas de visibilidade e conversão do seu negócio.' },
                  { icon: Wrench, title: 'Manutenção', desc: 'Através de um regime de imersão total, o profissional assume a responsabilidade direta pela atualização de conteúdos e segurança do website. A continuidade operacional assegura que a plataforma permanece funcional e livre de erros técnicos, permitindo uma resposta rápida perante qualquer imprevisto.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 group">
                      <div className="hidden md:flex flex-shrink-0 items-center text-[#6EC8F0] pt-4">
                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                          <path d="M2 12 L32 12 M24 4 L32 12 L24 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] group-hover:bg-[#6EC8F0] group-hover:text-[#0a0e3f] transition-all duration-500">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[#6EC8F0] transition-colors duration-500">{item.title}</h4>
                          <div className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                            <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* ⬇️ AQUI — margin-top extra para separar das cards acima */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[#4FB0D9]/20 mt-16">
                  <h4 className="font-heading text-2xl font-bold text-white mb-6 relative inline-block">
                    Características do Serviço
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {[
                      { icon: Monitor, bold: 'Website Profissional', rest: 'Design moderno, funcional e adaptado à identidade da sua marca' },
                      { icon: Settings, bold: 'Manutenção Contínua', rest: 'Prioridade para atualizações, segurança e suporte técnico' },
                      { icon: TrendingUp, bold: 'Otimizado Para Resultados', rest: 'Design moderno, funcional e adaptado à identidade da sua marca' },
                      { icon: Briefcase, bold: 'Valor do projeto', rest: 'Sujeito a consulta, dependente das características do projeto' },
                      { icon: Target, bold: 'Orçamentação', rest: 'À medida das necessidades, repartido consoante as fases de implementação' },
                    ].map((c) => {
                      const Icon = c.icon;
                      return (
                        <div key={c.bold} className="bg-[#6EC8F0]/5 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:bg-[#6EC8F0]/10">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="text-[#6EC8F0] font-semibold text-sm">{c.bold}</h5>
                            <Icon size={20} className="text-[#6EC8F0]" />
                          </div>
                          <div className="h-px w-full bg-gradient-to-r from-[#6EC8F0]/60 to-transparent mb-3" />
                          <p className="text-white/70 text-xs leading-relaxed">{c.rest}</p>
                          <div className="mt-4 flex gap-1">
                            <span className="w-6 h-0.5 bg-[#6EC8F0] rounded" />
                            <span className="w-3 h-0.5 bg-[#4FB0D9] rounded" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {openImpacto === 'redes' && (
              <div className="mt-12 space-y-6 animate-fade-in-up">
                {[
                  { icon: Share2, title: 'Gestão de Plataformas', desc: 'Gestão profissional das principais plataformas sociais (Instagram, LinkedIn, Facebook e outras relevantes para o seu negócio).' },
                  { icon: Lightbulb, title: 'Planeamento', desc: 'Planeamento de conteúdos mensais, com foco nos objetivos de comunicação e marketing.' },
                  { icon: Lightbulb, title: 'Processo Criativo', desc: 'Criação e publicação de posts, stories e atualizações de forma regular, com monitorização de desempenho das publicações e da interação com o público.' },
                  { icon: BarChart3, title: 'Análise mensal', desc: 'Envio de relatório mensal de resultados, com análise de alcance, crescimento e recomendações estratégicas.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 group">
                      <div className="hidden md:flex flex-shrink-0 items-center text-[#6EC8F0] pt-4">
                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                          <path d="M2 12 L32 12 M24 4 L32 12 L24 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] group-hover:bg-[#6EC8F0] group-hover:text-[#0a0e3f] transition-all duration-500">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[#6EC8F0] transition-colors duration-500">{item.title}</h4>
                          <div className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                            <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* ⬇️ AQUI — margin-top extra para separar das cards acima */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-[#4FB0D9]/20 mt-16">
                  <h4 className="font-heading text-2xl font-bold text-white mb-6 relative inline-block">
                    Características do Serviço
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {[
                      { icon: Heart, bold: 'Identidade consistente', rest: 'Através da comunicação coerente em todas as plataformas, reforçando a credibilidade da marca' },
                      { icon: Rocket, bold: 'Crescimento Orgânico', rest: 'Com foco na estratégia orientada para aumentar seguidores qualificados e o alcance da marca' },
                      { icon: MessageCircle, bold: 'Gestão de Interações', rest: 'Partindo do acompanhamento de comentários e mensagens para garantir uma relação próxima com a comunidade' },
                      { icon: Briefcase, bold: 'Valor do projeto', rest: 'Sujeito a consulta, estando dependente das características pretendidas' },
                      { icon: Clock, bold: 'Foco no core business', rest: 'Permitindo à Empresa focar-se no negócio enquanto a RiseON trata de toda a comunicação digital' },
                    ].map((c) => {
                      const Icon = c.icon;
                      return (
                        <div key={c.bold} className="bg-[#6EC8F0]/5 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:bg-[#6EC8F0]/10">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="text-[#6EC8F0] font-semibold text-sm">{c.bold}</h5>
                            <Icon size={20} className="text-[#6EC8F0]" />
                          </div>
                          <div className="h-px w-full bg-gradient-to-r from-[#6EC8F0]/60 to-transparent mb-3" />
                          <p className="text-white/70 text-xs leading-relaxed">{c.rest}</p>
                          <div className="mt-4 flex gap-1">
                            <span className="w-6 h-0.5 bg-[#6EC8F0] rounded" />
                            <span className="w-3 h-0.5 bg-[#4FB0D9] rounded" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================
            PERFORMANCE
        ====================================================== */}
        {(!active || active === 'performance') && (
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
                { icon: Database, title: 'Centralização de Dados', desc: 'Informação agregada de múltiplas fontes (vendas, marketing, RH, operações) numa única plataforma visual, eliminando relatórios dispersos.' },
                { icon: Target, title: 'KPIs Personalizados', desc: 'Definição e monitorização dos indicadores estratégicos mais relevantes para o seu negócio, adaptados aos seus objetivos específicos.' },
                { icon: RefreshCw, title: 'Atualização em Tempo Real', desc: 'Dados apresentados de forma contínua e automática, sem necessidade de processamento manual.' },
                { icon: FileText, title: 'Relatórios Automáticos', desc: 'Desenvolvimento periódico de relatórios executivos prontos a partilhar com equipas e investidores.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 group">
                    <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] group-hover:bg-[#6EC8F0] group-hover:text-[#0a0e3f] transition-all duration-500">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[#6EC8F0] transition-colors duration-500">{item.title}</h4>
                        <div className="bg-[#6EC8F0]/10 border border-[#6EC8F0]/20 rounded-xl p-4">
                          <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 animate-fade-in-up">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                Vantagens Competitivas
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
              </h3>
              <div className="mt-10 space-y-6">
                {[
                  { icon: Zap, bold: 'Decisões Mais Rápidas', rest: 'Através da informação crítica disponível em segundos, sem esperar por relatórios manuais' },
                  { icon: Eye, bold: 'Visibilidade Total do Negócio', rest: 'Colocando fim à dependência de folhas de Excel desatualizadas e a dados fragmentados' },
                  { icon: Puzzle, bold: '100% Personalizado', rest: 'Uma vez que cada dashboard é construído à medida do cliente, não se tratando de uma solução genérica' },
                  { icon: Handshake, bold: 'Antecipação de Tendências', rest: 'Permitindo identificar padrões e oportunidades antes que se tornem problemas' },
                  { icon: Lightbulb, bold: 'Acompanhamento Contínuo', rest: 'Ajuste e evolução do dashboard com o negócio' },
                ].map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.bold} className="flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#4FB0D9]/20 hover:border-[#6EC8F0]/50 transition-all duration-500 group">
                      <div className="hidden md:flex flex-shrink-0 items-center text-[#6EC8F0] pt-3">
                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                          <path d="M2 12 L32 12 M24 4 L32 12 L24 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row items-start gap-5">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#6EC8F0]/10 border border-[#6EC8F0]/30 flex items-center justify-center text-[#6EC8F0] group-hover:bg-[#6EC8F0] group-hover:text-[#0a0e3f] transition-all duration-500">
                          <Icon size={26} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#6EC8F0] transition-colors duration-500">{v.bold}</h4>
                          <p className="text-white/70 text-sm leading-relaxed">{v.rest}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-20 animate-fade-in-up">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                Características do Serviço
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {[
                  { icon: LineChart, bold: '100% Personalizado', rest: 'Cada dashboard é construído à medida do cliente, não se tratando de uma solução genérica' },
                  { icon: Handshake, bold: 'Antecipação de Tendências', rest: 'Identificação de padrões e oportunidades antes que se tornem problemas' },
                  { icon: Lightbulb, bold: 'Acompanhamento Contínuo', rest: 'Ajuste e evolução do dashboard com o negócio' },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.bold} className="bg-[#6EC8F0]/5 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:bg-[#6EC8F0]/10">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-[#6EC8F0] font-semibold text-sm">{c.bold}</h5>
                        <Icon size={20} className="text-[#6EC8F0]" />
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-[#6EC8F0]/60 to-transparent mb-3" />
                      <p className="text-white/70 text-xs leading-relaxed">{c.rest}</p>
                      <div className="mt-4 flex gap-1">
                        <span className="w-6 h-0.5 bg-[#6EC8F0] rounded" />
                        <span className="w-3 h-0.5 bg-[#4FB0D9] rounded" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-20 animate-fade-in-up">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                Valor do Serviço
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6EC8F0] to-transparent rounded-full" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {[
                  { icon: Coins, bold: 'Valor sujeito a consulta', rest: 'Dependente da complexidade, número de fontes de dados e funcionalidades pretendidas' },
                  { icon: Target, bold: 'Orçamentação personalizada', rest: 'Adaptada às necessidades e dimensão de cada empresa' },
                  { icon: Package, bold: 'Modelos de contratação flexíveis', rest: 'Projeto único, com desenvolvimento do dashboard e/ou Subscrição mensal, com manutenção e atualização contínua' },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.bold} className="bg-[#6EC8F0]/5 border border-[#6EC8F0]/20 rounded-xl p-5 transition-all duration-500 hover:border-[#6EC8F0]/50 hover:-translate-y-1 hover:bg-[#6EC8F0]/10">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-[#6EC8F0] font-semibold text-sm">{c.bold}</h5>
                        <Icon size={20} className="text-[#6EC8F0]" />
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-[#6EC8F0]/60 to-transparent mb-3" />
                      <p className="text-white/70 text-xs leading-relaxed">{c.rest}</p>
                      <div className="mt-4 flex gap-1">
                        <span className="w-6 h-0.5 bg-[#6EC8F0] rounded" />
                        <span className="w-3 h-0.5 bg-[#4FB0D9] rounded" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#4FB0D9]/20 text-center">
              <p className="text-white/70 text-sm italic leading-relaxed">
                Desenvolvemos dashboards que transformam dados complexos em informação clara, visual e
                acionável, colocando o poder da análise nas mãos de quem lidera, sem necessidade de
                conhecimentos técnicos.
              </p>
            </div>
          </div>
        )}

        {active && (
          <div className="mt-16 text-center animate-fade-in-up">
            <button
              onClick={() => {
                setActive(null);
                setOpenImpacto(null);
                setOpenTalento(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6EC8F0]/40 text-[#6EC8F0] font-semibold text-sm hover:bg-[#6EC8F0] hover:text-[#0a0e3f] transition-all duration-300"
            >
              ← Ver tudo
            </button>
          </div>
        )}

        {!active && (
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
        )}
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTE — BOTÃO EM NUVEM (com textOffset)
// ============================================================

function CloudButton({
  label,
  word,
  textOffset = '',
  active,
  onClick,
  delay = 0,
}: {
  label: string;
  word: React.ReactNode;
  textOffset?: string;
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
        flex items-center justify-center
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
        <path d="M70 160 Q25 160 25 128 Q25 100 65 96 Q68 55 115 55 Q145 38 185 55 Q225 48 250 80 Q275 85 275 125 Q275 160 230 160 Z" />
      </svg>

      <span
        className={`
          relative z-10 font-heading text-2xl font-bold transition-colors duration-500
          whitespace-nowrap
          ${textOffset}
          ${active ? 'text-[#0a0e3f]' : 'text-white/80 group-hover:text-[#6EC8F0]'}
        `}
      >
        {word}
      </span>
    </button>
  );
}