'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Sparkles } from 'lucide-react';

// ============================================================
// FOOTER
// ============================================================

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SocialIcon = ({
    children,
    href,
    label,
  }: {
    children: React.ReactNode;
    href: string;
    label: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#4FB0D9] hover:text-[#0A1628] transition-all duration-300 hover:scale-110"
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-[#0A1628] text-white/90 relative overflow-hidden mt-16">
      {/* CURVA SUPERIOR */}
      <div className="absolute -top-px left-0 right-0 pointer-events-none z-10">
        <svg
          className="w-full h-[100px] sm:h-[130px] md:h-[160px] block"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerWaveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EAF1F7" stopOpacity="1" />
              <stop offset="100%" stopColor="#EAF1F7" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 C240,20 480,140 720,100 C960,60 1200,20 1440,80 L1440,0 L0,0 Z"
            fill="url(#footerWaveGradient)"
          />
          <path
            d="M0,80 C240,20 480,140 720,100 C960,60 1200,20 1440,80"
            fill="none"
            stroke="#4FB0D9"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FB0D9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2A7FAA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40">
        {/* GRID — 5 colunas em lg */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* LOGO + DESCRIÇÃO */}
          <div className="lg:col-span-1">
            <Link href="/" className="relative inline-block w-40 h-12">
              <Image
                src="/images/logo_sem_slogan.png"
                alt="RiseON"
                fill
                className="object-contain object-left"
                sizes="160px"
                quality={100}
              />
            </Link>
            <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-xs">
              Ligar o Talento, Impulsionar o Crescimento. Consultora B2B especializada em
              Recrutamento, Gestão Digital e Performance Analytics.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href="https://www.facebook.com/profile.php?id=61590540806362" label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/estagion_pt" label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/riseonlda/home/?viewAsMember=true" label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5 relative inline-block">
              Navegação
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#4FB0D9] rounded"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Sobre Nós
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Serviços
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="/servicos#talento" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Talento
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="/servicos#impacto" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Impacto
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="/servicos#performance" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Performance
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5 relative inline-block">
              Links Úteis
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#4FB0D9] rounded"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://riseonhub.riseon.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group"
                >
                 
                  RiseON Hub
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5 relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#4FB0D9] rounded"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/politicas/termos" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Termos e Condições
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="/politicas/privacidade" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Política de Privacidade
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="/politicas/cookies" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Política de Cookies
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link href="https://www.livroreclamacoes.pt/inicio/" className="text-white/60 hover:text-[#4FB0D9] transition flex items-center gap-1 group">
                  Livro de Reclamações
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTOS */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5 relative inline-block">
              Contactos
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#4FB0D9] rounded"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60 hover:text-white transition group">
                <MapPin size={18} className="text-[#4FB0D9] mt-0.5 group-hover:scale-110 transition" />
                <span>
                  Rua José Florindo, 44C<br />
                  2750-400 Cascais, Portugal
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition group">
                <Phone size={18} className="text-[#4FB0D9] group-hover:scale-110 transition" />
                <a href="tel:+351923330190" className="hover:text-[#4FB0D9] transition">
                  +351 923 330 190
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition group">
                <Mail size={18} className="text-[#4FB0D9] group-hover:scale-110 transition" />
                <a href="mailto:geral@riseon.pt" className="hover:text-[#4FB0D9] transition">
                  geral@riseon.pt
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition group">
                <Globe size={18} className="text-[#4FB0D9] group-hover:scale-110 transition" />
                <a
                  href="https://riseon.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4FB0D9] transition"
                >
                  riseon.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/40">
            &copy; {new Date().getFullYear()} RiseON. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-[#4FB0D9] transition group"
          >
            <span>Voltar ao topo</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* CRÉDITOS */}
        <div className="py-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <p className="text-white/30 text-xs tracking-wide">Developed by</p>
          <a
            href="https://www.linkedin.com/in/ernesto-uanicela-b741252ab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4FB0D9] hover:text-[#6EC8F0] text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105 inline-flex items-center gap-1 group"
          >
            <span>Ernesto Uanicela</span>
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}