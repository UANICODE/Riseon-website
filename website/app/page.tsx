'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSwipe = () => {
    setMenuVisible(true);
  };

  // ==========================================================
  // SCROLL UP → REPOR SWIPE
  // ==========================================================

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se o utilizador fizer scroll para cima E o menu estiver visível
      if (currentScrollY < lastScrollY && menuVisible) {
        setMenuVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuVisible]);

  return (
    <section
      id="hero"
      className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-[#0a0e3f]"
    >
      {/* ======================================================
          FUNDO — GRADIENTE AZUL ESCURO (desloca para baixo ao abrir)
      ====================================================== */}

      <div
        className={`
          absolute inset-0
          bg-gradient-to-b from-[#0a0e3f] via-[#0d1350] to-[#1a1a6e]
          transition-transform duration-1000 ease-out
          ${menuVisible ? 'translate-y-16' : 'translate-y-0'}
        `}
      />

      {/* Glow central azul */}
      <div
        className={`
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_45%,rgba(79,176,217,0.18),transparent_55%)]
          transition-transform duration-1000 ease-out
          ${menuVisible ? 'translate-y-16' : 'translate-y-0'}
        `}
      />

      {/* ======================================================
          ESTRELAS
      ====================================================== */}

      <div
        className={`
          absolute inset-0 pointer-events-none
          transition-transform duration-1000 ease-out
          ${menuVisible ? 'translate-y-16' : 'translate-y-0'}
        `}
      >
        {Array.from({ length: 90 }).map((_, i) => {
          const size = (i % 3) + 0.8;
          const top = (i * 47.3) % 100;
          const left = (i * 83.7) % 100;
          const opacity = 0.2 + ((i * 13) % 60) / 100;
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
          CONTEÚDO CENTRAL (logo sobe ao abrir menu)
      ====================================================== */}

      <div
        className={`
          relative z-10
          w-full max-w-[1400px] mx-auto px-5 sm:px-8
          flex flex-col items-center justify-center text-center
          transition-transform duration-1000 ease-out
          ${menuVisible ? '-translate-y-6' : 'translate-y-0'}
        `}
      >
        {/* LOGO */}
        <div className="relative flex justify-center items-center w-full">
          <div
            className="
              relative
              w-[360px] h-[190px]
              sm:w-[500px] sm:h-[250px]
              md:w-[640px] md:h-[310px]
              lg:w-[820px] lg:h-[380px]
              xl:w-[980px] xl:h-[440px]
              hero-logo
            "
          >
            <Image
              src="/images/logo.png"
              alt="Logotipo RiseON"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 360px, (max-width: 768px) 500px, (max-width: 1024px) 640px, (max-width: 1280px) 820px, 980px"
              className="object-contain drop-shadow-[0_0_60px_rgba(79,176,217,0.35)]"
            />
          </div>
        </div>

        {/* ======================================================
            SWIPE ANIMADO — SEM A MÃO
        ====================================================== */}

        <button
          onClick={handleSwipe}
          aria-label="Deslizar para revelar menu"
          className={`
            relative
            mt-10 sm:mt-12
            group
            transition-all duration-700
            ${menuVisible ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}
          `}
        >
          {/* Cilindro externo */}
          <div
            className="
              relative
              w-[42px]
              h-[86px]
              rounded-full
              border-2
              border-[#4FB0D9]/60
              flex
              items-start
              justify-center
              pt-3
              transition-all
              duration-500
              group-hover:border-[#4FB0D9]
              group-hover:shadow-[0_0_30px_rgba(79,176,217,0.5)]
            "
          >
            {/* Bolinha animada dentro do cilindro */}
            <div className="w-[4px] h-[14px] rounded-full bg-[#4FB0D9] animate-scroll-dot shadow-[0_0_10px_rgba(79,176,217,0.9)]" />

            {/* ❌ MÃO REMOVIDA — era o bloco `animate-hand-tap` */}
          </div>
        </button>

        {/* ======================================================
            3 BOTÕES — APARECEM SÓ DEPOIS DO SWIPE
        ====================================================== */}

        <nav
          className={`
            mt-8 sm:mt-10
            flex flex-wrap justify-center items-center
            gap-4 sm:gap-6
            transition-all duration-700 ease-out
            ${
              menuVisible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-8 pointer-events-none'
            }
          `}
        >
          <Link
            href="/sobre"
            className="
              px-10 py-3.5
              rounded-full
              bg-[#1e2466]
              border border-[#4FB0D9]/25
              font-semibold text-sm tracking-wide
              hover:bg-[#4FB0D9]
              hover:border-[#4FB0D9]
              hover:shadow-lg hover:shadow-[#4FB0D9]/30
              hover:-translate-y-1
              transition-all duration-300
            "
            style={{ color: '#ffffff' }}
          >
            Sobre
          </Link>

          <Link
            href="/servicos"
            className="
              px-10 py-3.5
              rounded-full
              bg-[#1e2466]
              border border-[#4FB0D9]/25
              font-semibold text-sm tracking-wide
              hover:bg-[#4FB0D9]
              hover:border-[#4FB0D9]
              hover:shadow-lg hover:shadow-[#4FB0D9]/30
              hover:-translate-y-1
              transition-all duration-300
            "
            style={{ color: '#ffffff' }}
          >
            Serviços
          </Link>

          <Link
            href="/contactos"
            className="
              px-10 py-3.5
              rounded-full
              bg-[#1e2466]
              border border-[#4FB0D9]/25
              font-semibold text-sm tracking-wide
              hover:bg-[#4FB0D9]
              hover:border-[#4FB0D9]
              hover:shadow-lg hover:shadow-[#4FB0D9]/30
              hover:-translate-y-1
              transition-all duration-300
            "
            style={{ color: '#ffffff' }}
          >
            Contactos
          </Link>
        </nav>
      </div>

      {/* ======================================================
          CURVA DE BAIXO — FIXA
      ====================================================== */}

      <svg
        className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[130px] md:h-[160px] pointer-events-none z-[5]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a6e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0a0e3f" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C240,140 480,20 720,60 C960,100 1200,140 1440,80 L1440,160 L0,160 Z"
          fill="url(#waveGradient)"
        />
        <path
          d="M0,80 C240,140 480,20 720,60 C960,100 1200,140 1440,80"
          fill="none"
          stroke="#4FB0D9"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </svg>

      {/* ======================================================
          REDES SOCIAIS — ABAIXO DA LINHA (z-[6])
      ====================================================== */}

      <div className="absolute bottom-4 right-6 sm:bottom-5 sm:right-8 z-[6] flex flex-row items-center gap-3 sm:gap-4">
        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/riseon.pt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4FB0D9] hover:border-[#4FB0D9] hover:-translate-y-1 transition-all duration-300"
          style={{ color: '#ffffff' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/company/riseon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4FB0D9] hover:border-[#4FB0D9] hover:-translate-y-1 transition-all duration-300"
          style={{ color: '#ffffff' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        {/* FACEBOOK */}
        <a
          href="https://facebook.com/riseon.pt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4FB0D9] hover:border-[#4FB0D9] hover:-translate-y-1 transition-all duration-300"
          style={{ color: '#ffffff' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
    </section>
  );
}