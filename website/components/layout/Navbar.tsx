'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  // Navegação da RiseON
  const navigation = [
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Equipa", href: "/equipa" }, 
    { label: "Contactos", href: "/contactos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  // Verificar se está na home page
  const isHomePage = pathname === "/";

  // Determinar o fundo do navbar
  const getNavbarBg = () => {
    // Se estiver na home e não tiver scroll e menu fechado → transparente com gradiente
    if (isHomePage && !scrolled && !open) {
      return "bg-gradient-to-b from-riseon-navy/80 via-riseon-navy/40 to-transparent backdrop-blur-sm";
    }
    // Em qualquer outro caso → fundo escuro sólido
    return "bg-riseon-navy/95 backdrop-blur-xl shadow-lg shadow-riseon-navy/20 border-b border-white/5";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${getNavbarBg()}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:px-8">
        {/* Logo - com imagem */}
        <Link
          href="/"
          className="group relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-18 w-56 sm:h-12 sm:w-40 md:h-14 md:w-44">
            <Image
              src="/images/logo.png"
              alt="RiseON - Ligar o Talento, Impulsionar o Crescimento"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
          {navigation.map((item, index) => {
            const active = isActive(item.href);
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 xl:px-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-gold"
                      : isHovered
                      ? "text-gold-light"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                </span>

                {/* Linha de baixo */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-500 ${
                    active || isHovered ? "w-full" : "w-0"
                  }`}
                />

                {/* Fundo hover */}
                <span
                  className={`absolute inset-0 rounded-lg bg-gold/5 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Indicador ativo */}
                {active && (
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-lg shadow-gold/50" />
                )}
              </Link>
            );
          })}

          {/* CTA Principal */}
          <Link
            href="/contactos"
            className="group relative ml-2 overflow-hidden rounded-full bg-gold px-4 py-2 text-sm font-bold text-riseon-navy transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 xl:ml-4 xl:px-6 xl:py-2.5"
          >
            <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10 flex items-center gap-2">
          Agendar Reunião
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
            <span className="absolute inset-0 translate-y-full bg-gold-light transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="relative z-20 p-1 text-white hover:text-gold transition-colors"
            aria-label="Menu"
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute inset-0 transition-transform duration-300 ${
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="h-6 w-6" />
              </span>
              <span
                className={`absolute inset-0 transition-transform duration-300 ${
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <X className="h-6 w-6" />
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-[72px] z-40 h-[calc(100vh-72px)] overflow-y-auto bg-riseon-navy/98 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col space-y-1 px-4 py-6 sm:px-6">
            {/* Logo no menu mobile */}
            <div className="mb-4 flex justify-center border-b border-white/10 pb-4">
              <div className="relative h-10 w-32">
                <Image
                  src="/images/riseon-logo-white.png"
                  alt="RiseON"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center justify-between rounded-lg px-4 py-4 transition-all duration-300 ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base font-medium sm:text-lg">
                    {item.label}
                  </span>

                  {active && (
                    <span className="flex h-2 w-2 rounded-full bg-gold shadow-lg shadow-gold/50" />
                  )}

                  <span
                    className={`absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-gold transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

            <div className="mt-4 border-t border-white/10 pt-4">
              <Link
                href="/contactos"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-4 text-base font-bold text-riseon-navy transition-all hover:bg-gold-light"
                onClick={() => setOpen(false)}
              >
                <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10">Falar com Especialista</span>
                <ArrowUpRight
                  size={18}
                  className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="space-y-3 text-center text-sm text-white/40">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/20">
                  Contacto
                </p>
                <a
                  href="tel:+351923330190"
                  className="block text-white/60 transition-colors hover:text-gold"
                >
                  +351 923 330 190
                </a>
                <a
                  href="mailto:geral@riseon.pt"
                  className="block text-white/60 transition-colors hover:text-gold"
                >
                  geral@riseon.pt
                </a>
                <p className="text-xs text-white/30">
                  Rua José Florindo, 44C • 2750-400 Cascais
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Linha decorativa */}
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-opacity duration-500 ${
          scrolled || !isHomePage ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}