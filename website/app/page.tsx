'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  BarChart3,
  Globe2,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  Phone,
  Zap,
  BookOpen,
} from 'lucide-react';

// ============================================================
// DADOS DA EQUIPA
// ============================================================

const teamMembers = [
  {
    id: 'beatriz-ferreira',
    name: 'Beatriz Ferreira',
    role: 'Gerente',
    email: 'beatriz@riseon.pt',
    photo: '/images/beatriz.png',
    bio: 'Especialista em Recrutamento & Seleção com mais de 10 anos de experiência em consultoria de RH. Beatriz lidera a área de Talento da RiseON, garantindo que cada processo de recrutamento seja rigoroso e alinhado com a cultura das empresas.',
    expertise: [
      'Recrutamento & Seleção',
      'Gestão de Talentos',
      'HR Consulting',
    ],
  },
  {
    id: 'tomas-ferreira',
    name: 'Tomás Ferreira',
    role: 'Gerente',
    email: 'tomas@riseon.pt',
    photo: '/images/tomas.png',
    bio: 'Especialista em Estratégia Digital e Performance Analytics. Tomás lidera as áreas de Impacto e Performance da RiseON, ajudando empresas a crescer através de websites institucionais, redes sociais e dashboards de KPIs em tempo real.',
    expertise: [
      'Estratégia Digital',
      'Performance Analytics',
      'Website Development',
    ],
  },
];

// ============================================================
// FAQ
// ============================================================

const faqData = [
  {
    question: 'Como posso contratar os serviços da RiseON?',
    answer:
      'Pode entrar em contacto connosco através do formulário no site, por email (geral@riseon.pt) ou por telefone (+351 923 330 190). Agendamos uma reunião para conhecer o seu desafio e apresentar a melhor solução.',
  },
  {
    question: 'Qual é o custo dos serviços de recrutamento?',
    answer:
      'Os valores variam conforme a tipologia: Estágios Curriculares (€120-140), Estágios Extracurriculares (€170-200) e Perfis Seniores (€260). A bolsa de estágio é paga pela empresa ao perfil, com valor mínimo de 920€/mês.',
  },
  {
    question: 'Quanto tempo demora um processo de recrutamento?',
    answer:
      'O processo completo demora entre 2 a 4 semanas, dependendo da complexidade do perfil e da urgência da vaga. Desde a confirmação do perfil até à decisão de contratação, acompanhamos cada etapa.',
  },
  {
    question: 'Como funciona a gestão de redes sociais?',
    answer:
      'Fazemos planeamento mensal de conteúdos, criação e publicação de posts, stories e atualizações, com monitorização de desempenho e envio de relatório mensal com análise de alcance, crescimento e recomendações estratégicas.',
  },
  {
    question: 'O que são os dashboards de Performance?',
    answer:
      'São plataformas visuais personalizadas que centralizam os indicadores críticos do seu negócio (KPIs) em tempo real. Agregamos dados de múltiplas fontes (vendas, marketing, RH, operações) numa única interface.',
  },
];

// ============================================================
// CLIENTES
// ============================================================

const clients = [
  {
    name: 'MyMoment',
    id: 'mymoment',
    logo: '/images/mymoment.png',
  },
  {
    name: 'Coolivin',
    id: 'coolivin',
    logo: '/images/coolivin.png',
  },
  {
    name: 'Centro Juvenil',
    id: 'centro-juvenil',
    logo: '/images/centro-juvenil.png',
  },
  {
    name: 'MadreMedia',
    id: 'madremedia',
    logo: '/images/madre.png',
  },
  {
    name: 'CD Cova Piedade',
    id: 'cd-cova-piedade',
    logo: '/images/clube.png',
  },
  {
    name: 'Skillfull',
    id: 'skillfull',
    logo: '/images/skillfull.png',
  },
];

// ============================================================
// HOME
// ============================================================

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showCards, setShowCards] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // ==========================================================
  // HERO — ESTRELAS + BOLHAS + ONDAS
  // ==========================================================

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let animationFrame = 0;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 100 }, (_, i) => ({
      x: ((i * 137.508) % 100) / 100,
      y: ((i * 83.17) % 100) / 100,
      size: 0.35 + ((i * 17) % 14) / 10,
      opacity: 0.12 + ((i * 13) % 48) / 100,
      speed: 0.0003 + ((i * 7) % 10) / 10000,
      phase: i * 1.73,
    }));

    const bubbles = Array.from({ length: 22 }, (_, i) => ({
      x: 0.03 + ((i * 0.137) % 0.94),
      y: 0.04 + ((i * 0.217) % 0.88),
      radius: 35 + ((i * 31) % 130),
      speed: 0.08 + ((i * 17) % 35) / 100,
      drift: 18 + ((i * 23) % 80),
      phase: i * 2.3,
      opacity: 0.018 + ((i * 11) % 32) / 1000,
    }));

    const animate = (time: number) => {
      const t = time / 1000;

      ctx.clearRect(0, 0, width, height);

      // ESTRELAS
      stars.forEach((star) => {
        const twinkle =
          star.opacity *
          (0.55 +
            Math.sin(t * star.speed * 1000 + star.phase) * 0.45);

        ctx.beginPath();

        ctx.arc(
          star.x * width,
          star.y * height,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(10,22,40,${twinkle * 0.5})`;

        ctx.fill();
      });

      // BOLHAS LUMINOSAS
      bubbles.forEach((bubble) => {
        const x =
          bubble.x * width +
          Math.sin(t * bubble.speed + bubble.phase) *
            bubble.drift;

        const y =
          bubble.y * height +
          Math.cos(
            t * bubble.speed * 0.7 + bubble.phase
          ) *
            bubble.drift;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          bubble.radius
        );

        gradient.addColorStop(
          0,
          `rgba(79,176,217,${bubble.opacity * 3})`
        );

        gradient.addColorStop(
          0.3,
          `rgba(79,176,217,${bubble.opacity * 1.8})`
        );

        gradient.addColorStop(
          0.65,
          `rgba(79,176,217,${bubble.opacity * 0.6})`
        );

        gradient.addColorStop(
          1,
          'rgba(79,176,217,0)'
        );

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          bubble.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;

        ctx.fill();
      });

      // ONDA PRINCIPAL — PARTE INFERIOR
      const mainWaveY = height * 0.955;

      ctx.beginPath();

      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 2) {
        const wave =
          Math.sin(
            x * 0.00165 +
              t * 0.52
          ) *
            34 +
          Math.sin(
            x * 0.0008 +
              t * 0.32
          ) *
            16;

        const y = mainWaveY + wave;

        if (x === 0) {
          ctx.lineTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      const mainGradient = ctx.createLinearGradient(
        0,
        mainWaveY - 50,
        0,
        height
      );

      mainGradient.addColorStop(
        0,
        'rgba(79,176,217,0.25)'
      );

      mainGradient.addColorStop(
        0.45,
        'rgba(42,127,170,0.15)'
      );

      mainGradient.addColorStop(
        1,
        'rgba(234,241,247,0.95)'
      );

      ctx.fillStyle = mainGradient;

      ctx.fill();

      // Linha superior da onda principal
      ctx.beginPath();

      for (let x = 0; x <= width; x += 2) {
        const wave =
          Math.sin(
            x * 0.00165 +
              t * 0.52
          ) *
            34 +
          Math.sin(
            x * 0.0008 +
              t * 0.32
          ) *
            16;

        const y = mainWaveY + wave;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle =
        'rgba(79,176,217,0.5)';

      ctx.lineWidth = 2;

      ctx.stroke();

      // SEGUNDA ONDA
      const secondWaveY = height * 0.985;

      ctx.beginPath();

      for (let x = 0; x <= width; x += 2) {
        const wave =
          Math.sin(
            x * 0.0012 +
              t * 0.34 +
              2
          ) *
            30 +
          Math.sin(
            x * 0.00055 +
              t * 0.22
          ) *
            12;

        const y = secondWaveY + wave;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle =
        'rgba(79,176,217,0.25)';

      ctx.lineWidth = 1.5;

      ctx.stroke();

      // TERCEIRA ONDA
      const thirdWaveY = height * 1.015;

      ctx.beginPath();

      for (let x = 0; x <= width; x += 2) {
        const wave =
          Math.sin(
            x * 0.0009 +
              t * 0.22 +
              4
          ) *
          45;

        const y = thirdWaveY + wave;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle =
        'rgba(79,176,217,0.12)';

      ctx.lineWidth = 1;

      ctx.stroke();

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        'resize',
        resize
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  // ==========================================================
  // MOSTRAR CARDS AO SAIR DO HERO
  // ==========================================================

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById('hero');

      if (!hero) return;

      const rect =
        hero.getBoundingClientRect();

      if (
        rect.bottom <
        window.innerHeight * 0.65
      ) {
        setShowCards(true);
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  return (
    <>
      {/* ======================================================
          HERO — FUNDO CLARO (EAF1F7)
      ====================================================== */}

      <section
        id="hero"
        className="
          relative
          min-h-screen
          h-screen
          flex
          items-center
          justify-center
          overflow-hidden
          bg-[#EAF1F7]
        "
      >
        {/* ==================================================
            FUNDO PRINCIPAL
        ================================================== */}

        <div className="absolute inset-0 bg-[#EAF1F7]" />

        {/* Glow central com azul claro */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_43%,rgba(79,176,217,0.15),transparent_55%)]
          "
        />

        {/* Glow superior */}

        <div
          className="
            absolute
            -top-56
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[600px]
            rounded-full
            bg-[#4FB0D9]/[0.08]
            blur-[150px]
            pointer-events-none
          "
        />

        {/* Glow lateral esquerdo */}

        <div
          className="
            absolute
            -left-52
            top-[18%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#4FB0D9]/[0.06]
            blur-[130px]
            pointer-events-none
            animate-hero-orb-1
          "
        />

        {/* Glow lateral direito */}

        <div
          className="
            absolute
            -right-56
            top-[12%]
            w-[600px]
            h-[600px]
            rounded-full
            bg-[#2A7FAA]/[0.05]
            blur-[150px]
            pointer-events-none
            animate-hero-orb-2
          "
        />

        {/* Glow inferior */}

        <div
          className="
            absolute
            left-[20%]
            -bottom-52
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#6EC8F0]/[0.06]
            blur-[130px]
            pointer-events-none
            animate-hero-orb-3
          "
        />

        {/* ==================================================
            CANVAS
        ================================================== */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
            z-[1]
          "
        />

        {/* ==================================================
            PEQUENOS PONTOS LUMINOSOS
        ================================================== */}

        <div
          className="
            absolute
            left-[11%]
            top-[27%]
            w-2
            h-2
            rounded-full
            bg-[#4FB0D9]/50
            shadow-[0_0_25px_8px_rgba(79,176,217,0.12)]
            animate-floating-dot
            z-[2]
          "
        />

        <div
          className="
            absolute
            right-[14%]
            top-[31%]
            w-1.5
            h-1.5
            rounded-full
            bg-[#6EC8F0]/50
            shadow-[0_0_25px_8px_rgba(110,200,240,0.12)]
            animate-floating-dot-delayed
            z-[2]
          "
        />

        <div
          className="
            absolute
            left-[18%]
            bottom-[26%]
            w-1
            h-1
            rounded-full
            bg-[#0A1628]/30
            animate-pulse
            z-[2]
          "
        />

        <div
          className="
            absolute
            right-[24%]
            bottom-[29%]
            w-1
            h-1
            rounded-full
            bg-[#4FB0D9]/40
            animate-pulse
            z-[2]
          "
        />

        {/* ==================================================
            VINHETA SUAVE
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_30%,rgba(234,241,247,0.4)_100%)]
            pointer-events-none
            z-[3]
          "
        />

        {/* ==================================================
            CONTEÚDO CENTRAL
        ================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-[1400px]
            mx-auto
            px-5
            sm:px-8
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <div
            className="
              hero-content-animation
              w-full
              flex
              flex-col
              items-center
            "
          >
            {/* ==================================================
                LOGO
            ================================================== */}

            <div
              className="
                relative
                flex
                justify-center
                items-center
                w-full
              "
            >
              <div
                className="
                  relative
                  w-[350px]
                  h-[190px]

                  sm:w-[480px]
                  sm:h-[240px]

                  md:w-[620px]
                  md:h-[300px]

                  lg:w-[1000px]
                  lg:h-[360px]

                  xl:w-[1500px]
                  xl:h-[400px]

                  2xl:w-[1000px]
                  2xl:h-[440px]

                  hero-logo
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="Logotipo RiseON"
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 350px,
                    (max-width: 768px) 480px,
                    (max-width: 1024px) 620px,
                    (max-width: 1280px) 780px,
                    (max-width: 1536px) 900px,
                    1000px
                  "
                  className="
                    object-contain
                    drop-shadow-[0_0_45px_rgba(79,176,217,0.20)]
                  "
                />
              </div>
            </div>

            {/* ==================================================
                MENU — BOTÕES AZUIS
            ================================================== */}

            <nav
              className="
                relative
                -mt-2
                sm:-mt-4
                md:-mt-6

                flex
                flex-wrap
                justify-center
                items-center

                gap-3
                sm:gap-5
                md:gap-6

                z-20
              "
            >
              <Link
                href="/sobre"
                className="
                  px-8
                  py-3
                  rounded-full
                  bg-[#4FB0D9]
                  text-white
                  font-semibold
                  text-sm
                  tracking-wide
                  hover:bg-[#2A7FAA]
                  hover:shadow-lg
                  hover:shadow-[#4FB0D9]/30
                  transition-all
                  duration-300
                  shadow-md
                  shadow-[#4FB0D9]/20
                "
              >
                Sobre
              </Link>

              <Link
                href="/servicos"
                className="
                  px-8
                  py-3
                  rounded-full
                  bg-[#4FB0D9]
                  text-white
                  font-semibold
                  text-sm
                  tracking-wide
                  hover:bg-[#2A7FAA]
                  hover:shadow-lg
                  hover:shadow-[#4FB0D9]/30
                  transition-all
                  duration-300
                  shadow-md
                  shadow-[#4FB0D9]/20
                "
              >
                Serviços
              </Link>

              <Link
                href="/contactos"
                className="
                  px-8
                  py-3
                  rounded-full
                  bg-[#4FB0D9]
                  text-white
                  font-semibold
                  text-sm
                  tracking-wide
                  hover:bg-[#2A7FAA]
                  hover:shadow-lg
                  hover:shadow-[#4FB0D9]/30
                  transition-all
                  duration-300
                  shadow-md
                  shadow-[#4FB0D9]/20
                "
              >
                Contactos
              </Link>
            </nav>

            {/* ==================================================
                LINHA
            ================================================== */}

            <div
              className="
                mt-6
                sm:mt-8
                flex
                justify-center
              "
            >
              <div className="hero-line" />
            </div>

            {/* ==================================================
                SCROLL
            ================================================== */}

            <Link
              href="#conteudo"
              aria-label="Descer para o conteúdo"
              className="
                mt-5
                sm:mt-7

                flex
                flex-col
                items-center

                text-[#0A1628]/40
                hover:text-[#4FB0D9]

                transition-all
                duration-500

                group
              "
            >
              <span
                className="
                  text-[8px]
                  sm:text-[9px]

                  uppercase
                  tracking-[0.35em]

                  mb-2
                "
              >
                Scroll
              </span>

              <div className="scroll-mouse">
                <div className="scroll-wheel" />
              </div>
            </Link>
          </div>
        </div>

        {/* ==================================================
            LINHAS LATERAIS
        ================================================== */}

        <div
          className="
            absolute
            left-0
            top-[52%]
            w-[15vw]
            h-px

            bg-gradient-to-r
            from-transparent
            to-[#4FB0D9]/30

            pointer-events-none
            z-[4]
          "
        />

        <div
          className="
            absolute
            right-0
            top-[52%]
            w-[15vw]
            h-px

            bg-gradient-to-l
            from-transparent
            to-[#4FB0D9]/30

            pointer-events-none
            z-[4]
          "
        />

        {/* ==================================================
            BRILHO SOBRE A ONDA
        ================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-28

            bg-gradient-to-t
            from-[#EAF1F7]/80
            via-transparent
            to-transparent

            pointer-events-none
            z-[5]
          "
        />
      </section>

      {/* ======================================================
          ÂNCORA
      ====================================================== */}

      <div
        id="conteudo"
        className="scroll-mt-20"
      />

      {/* ======================================================
          CARDS PRINCIPAIS
      ====================================================== */}
{/* ======================================================
    CARDS PRINCIPAIS
====================================================== */}

<section
  className="
    relative
    py-14
    bg-[#EAF1F7]
    border-t
    border-[#4FB0D9]/15
    overflow-hidden
  "
>
  {/* Glow */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      -top-40
      w-[500px]
      h-[300px]
      rounded-full
      bg-[#4FB0D9]/[0.06]
      blur-[100px]
      pointer-events-none
    "
  />

  <div
    className="
      relative
      z-10
      max-w-6xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div
      className={`
        grid
        md:grid-cols-3
        gap-6

        transition-all
        duration-1000

        ${
          showCards
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }
      `}
    >
      {/* SOBRE */}

      <Link
        href="/sobre"
        className="
          group
          bg-white/80
          backdrop-blur-md
          border
          border-[#4FB0D9]/20
          rounded-2xl
          p-8
          text-center

          hover:bg-white
          hover:border-[#4FB0D9]/60
          hover:-translate-y-2

          transition-all
          duration-500

          hover:shadow-[0_20px_60px_rgba(79,176,217,0.12)]
        "
      >
        <div
          className="
            w-16
            h-16
            bg-[#4FB0D9]/15
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            text-[#4FB0D9]

            group-hover:scale-110
            group-hover:rotate-3

            transition-all
            duration-500
          "
        >
          <BookOpen size={32} />
        </div>

        <h3
          className="
            font-heading
            text-2xl
            font-bold
            text-[#0A1628]
            mt-5
          "
        >
          Sobre
        </h3>

        <p
          className="
            text-[#0A1628]/50
            text-sm
            mt-2
          "
        >
          Conheça a nossa história,
          missão e valores
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-1
            mt-5
            text-[#4FB0D9]
            text-sm
            font-medium

            group-hover:gap-2

            transition-all
          "
        >
          Explorar
          <ArrowRight size={15} />
        </span>
      </Link>

      {/* SERVIÇOS */}

      <Link
        href="/servicos"
        className="
          group
          bg-white/80
          backdrop-blur-md
          border
          border-[#4FB0D9]/20
          rounded-2xl
          p-8
          text-center

          hover:bg-white
          hover:border-[#4FB0D9]/60
          hover:-translate-y-2

          transition-all
          duration-500

          hover:shadow-[0_20px_60px_rgba(79,176,217,0.12)]
        "
      >
        <div
          className="
            w-16
            h-16
            bg-[#4FB0D9]/15
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            text-[#4FB0D9]

            group-hover:scale-110
            group-hover:rotate-3

            transition-all
            duration-500
          "
        >
          <Zap size={32} />
        </div>

        <h3
          className="
            font-heading
            text-2xl
            font-bold
            text-[#0A1628]
            mt-5
          "
        >
          Serviços
        </h3>

        <p
          className="
            text-[#0A1628]/50
            text-sm
            mt-2
          "
        >
          Talento, Impacto e Performance
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-1
            mt-5
            text-[#4FB0D9]
            text-sm
            font-medium

            group-hover:gap-2

            transition-all
          "
        >
          Explorar
          <ArrowRight size={15} />
        </span>
      </Link>

      {/* CONTACTOS */}

      <Link
        href="/contactos"
        className="
          group
          bg-white/80
          backdrop-blur-md
          border
          border-[#4FB0D9]/20
          rounded-2xl
          p-8
          text-center

          hover:bg-white
          hover:border-[#4FB0D9]/60
          hover:-translate-y-2

          transition-all
          duration-500

          hover:shadow-[0_20px_60px_rgba(79,176,217,0.12)]
        "
      >
        <div
          className="
            w-16
            h-16
            bg-[#4FB0D9]/15
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            text-[#4FB0D9]

            group-hover:scale-110
            group-hover:rotate-3

            transition-all
            duration-500
          "
        >
          <Phone size={32} />
        </div>

        <h3
          className="
            font-heading
            text-2xl
            font-bold
            text-[#0A1628]
            mt-5
          "
        >
          Contactos
        </h3>

        <p
          className="
            text-[#0A1628]/50
            text-sm
            mt-2
          "
        >
          Fale connosco e vamos
          crescer juntos
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-1
            mt-5
            text-[#4FB0D9]
            text-sm
            font-medium

            group-hover:gap-2

            transition-all
          "
        >
          Explorar
          <ArrowRight size={15} />
        </span>
      </Link>
    </div>
  </div>
</section>

      {/* ======================================================
          PILARES
      ====================================================== */}
{/* ======================================================
    PILARES
====================================================== */}
{/* ======================================================
    PILARES
====================================================== */}

<section className="py-20 bg-[#EAF1F7]">
  <div
    className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div className="text-center fade-in-up">
  
      <h2
        className="
          font-heading
          text-3xl
          md:text-4xl
          font-bold
          text-[#0A1628]
          mt-2
        "
      >
        Os nossos{' '}
        <span className="text-[#4FB0D9]">
          3 pilares
        </span>
      </h2>

      <p
        className="
          mt-4
          text-[#3A5368]
          max-w-2xl
          mx-auto
        "
      >
        Soluções integradas para o
        crescimento da sua empresa.
      </p>
    </div>

    <div
      className="
        mt-12
        grid
        md:grid-cols-3
        gap-6
      "
    >
      {/* TALENTO — Tal⏻nto */}

      <Link
        href="/servicos/talento"
        className="
          service-card
          bg-white
          rounded-2xl
          p-8
          text-center
          group
          hover:border-[#4FB0D9]
          border
          border-[#D6E2EC]
        "
      >
        <div
          className="
            w-16
            h-16
            bg-[#0A1628]/10
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            text-[#0A1628]

            group-hover:bg-[#4FB0D9]
            group-hover:text-white

            transition-all
          "
        >
          <Users size={32} />
        </div>

        <h3
          className="
            font-heading
            text-2xl
            font-bold
            text-[#0A1628]
            mt-4

            group-hover:text-[#4FB0D9]

            transition
          "
        >
          Talent<span className="text-[#4FB0D9]">⏻</span>
        </h3>

        <p
          className="
            text-[#3A5368]
            text-sm
            mt-2
            leading-relaxed
          "
        >
          Recrutamento & Seleção
          consultivo, rigoroso e
          alinhado com a cultura da
          sua empresa.
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-1
            text-[#4FB0D9]
            mt-4
            font-medium
            text-sm

            group-hover:gap-2

            transition-all
          "
        >
          Saber mais
          <ArrowRight size={16} />
        </span>
      </Link>

      {/* IMPACTO — Imp⏻cto */}

      <Link
        href="/servicos/impacto"
        className="
          service-card
          bg-white
          rounded-2xl
          p-8
          text-center
          group
          hover:border-[#4FB0D9]
          border
          border-[#D6E2EC]
        "
      >
        <div
          className="
            w-16
            h-16
            bg-[#4FB0D9]/10
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            text-[#4FB0D9]

            group-hover:bg-[#4FB0D9]
            group-hover:text-white

            transition-all
          "
        >
          <Globe2 size={32} />
        </div>

        <h3
          className="
            font-heading
            text-2xl
            font-bold
            text-[#0A1628]
            mt-4

            group-hover:text-[#4FB0D9]

            transition
          "
        >
          Impact<span className="text-[#4FB0D9]">⏻</span>
        </h3>

        <p
          className="
            text-[#3A5368]
            text-sm
            mt-2
            leading-relaxed
          "
        >
          Criação de websites
          institucionais e gestão
          profissional de redes sociais.
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-1
            text-[#4FB0D9]
            mt-4
            font-medium
            text-sm

            group-hover:gap-2

            transition-all
          "
        >
          Saber mais
          <ArrowRight size={16} />
        </span>
      </Link>

      {/* PERFORMANCE — Perf⏻rmance */}

      <Link
        href="/servicos/performance"
        className="
          service-card
          bg-white
          rounded-2xl
          p-8
          text-center
          group
          hover:border-[#4FB0D9]
          border
          border-[#D6E2EC]
        "
      >
        <div
          className="
            w-16
            h-16
            bg-[#4FB0D9]/20
            rounded-full
            flex
            items-center
            justify-center
            mx-auto
            text-[#2A7FAA]

            group-hover:bg-[#4FB0D9]
            group-hover:text-white

            transition-all
          "
        >
          <BarChart3 size={32} />
        </div>

        <h3
          className="
            font-heading
            text-2xl
            font-bold
            text-[#0A1628]
            mt-4

            group-hover:text-[#4FB0D9]

            transition
          "
        >
          Perf<span className="text-[#4FB0D9]">⏻</span>rmance
        </h3>

        <p
          className="
            text-[#3A5368]
            text-sm
            mt-2
            leading-relaxed
          "
        >
          Dashboards personalizados
          com KPIs em tempo real para
          decisões mais rápidas.
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-1
            text-[#4FB0D9]
            mt-4
            font-medium
            text-sm

            group-hover:gap-2

            transition-all
          "
        >
          Saber mais
          <ArrowRight size={16} />
        </span>
      </Link>
    </div>
  </div>
</section>
      {/* ======================================================
          EQUIPA
      ====================================================== */}

      <section className="py-20 bg-white">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="text-center fade-in-up">


            <h2
              className="
                font-heading
                text-3xl
                md:text-4xl
                font-bold
                text-[#0A1628]
                mt-2
              "
            >
              A nossa{' '}
              <span className="text-[#4FB0D9]">
                Equipa
              </span>
            </h2>

            <p
              className="
                mt-4
                text-[#3A5368]
                max-w-2xl
                mx-auto
              "
            >
              Conheça os profissionais que estão
              prontos para impulsionar o crescimento
              da sua empresa.
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              md:grid-cols-2
              gap-8
              max-w-4xl
              mx-auto
            "
          >
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/equipa/${member.id}`}
                className="
                  team-card
                  bg-[#EAF1F7]
                  rounded-2xl
                  p-8
                  shadow-sm
                  border
                  border-[#D6E2EC]

                  hover:shadow-xl
                  hover:border-[#4FB0D9]

                  transition-all
                  group
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-6
                  "
                >
                  <div
                    className="
                      relative
                      w-20
                      h-20
                      rounded-full
                      overflow-hidden
                      flex-shrink-0
                      shadow-lg
                      border-2
                      border-[#0A1628]/10

                      group-hover:border-[#4FB0D9]

                      transition-all
                    "
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="
                        font-heading
                        text-xl
                        font-bold
                        text-[#0A1628]

                        group-hover:text-[#4FB0D9]

                        transition
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      className="
                        text-[#2A7FAA]
                        font-medium
                        text-sm
                      "
                    >
                      {member.role}
                    </p>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1
                        text-[#4FB0D9]
                        text-sm
                        font-medium
                        mt-2

                        group-hover:gap-2

                        transition-all
                      "
                    >
                      Ver perfil
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CLIENTES
      ====================================================== */}

      {/* ======================================================
    CLIENTES
====================================================== */}
{/* ======================================================
    CLIENTES
====================================================== */}

<section
  className="
    py-20
    bg-[#EAF1F7]
    overflow-hidden
  "
>
  <div
    className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div className="text-center fade-in-up">
      

      <h2
        className="
          font-heading
          text-3xl
          md:text-4xl
          font-bold
          text-[#0A1628]
          mt-2
        "
      >
        Clientes que{' '}
        <span className="text-[#4FB0D9]">
          confiam
        </span>{' '}
        em nós
      </h2>

      <p
        className="
          mt-4
          text-[#3A5368]
        "
      >
        Empresas que escolheram a RiseON
        para impulsionar o seu crescimento
      </p>
    </div>
  </div>

  <div className="relative mt-12">
    {/* Fade esquerdo */}
    <div
      className="
        absolute
        left-0
        top-0
        bottom-0
        w-32
        bg-gradient-to-r
        from-[#EAF1F7]
        to-transparent
        z-10
        pointer-events-none
      "
    />

    {/* Fade direito */}
    <div
      className="
        absolute
        right-0
        top-0
        bottom-0
        w-32
        bg-gradient-to-l
        from-[#EAF1F7]
        to-transparent
        z-10
        pointer-events-none
      "
    />

    <div className="flex overflow-hidden">
      <div
        className="
          flex
          animate-marquee
          whitespace-nowrap
        "
      >
        {[...clients, ...clients].map(
          (client, index) => (
            <Link
              key={`${client.id}-${index}`}
              href={`/clientes/${client.id}`}
              className="
                flex-shrink-0
                mx-6
                md:mx-10
                group
              "
            >
              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    w-44
                    h-28

                    md:w-56
                    md:h-32

                    bg-[#D6E2EC]
                    rounded-xl
                    border
                    border-[#C8D6E4]

                    flex
                    items-center
                    justify-center

                    p-5

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:shadow-2xl
                    group-hover:border-[#4FB0D9]
                    group-hover:bg-[#D6E2EC]
                  "
                >
                  <div
                    className="
                      relative
                      w-full
                      h-full
                    "
                  >
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      fill
                      className="object-contain"
                      sizes="
                        (max-width: 768px) 176px,
                        224px
                      "
                    />
                  </div>
                </div>

                <span
                  className="
                    text-xs
                    text-[#6A859C]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    font-medium
                  "
                >
                  {client.name} →
                </span>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  </div>
</section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section
        className="
          py-20
          bg-white
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="text-center fade-in-up">
       
            <h2
              className="
                font-heading
                text-3xl
                md:text-4xl
                font-bold
                text-[#0A1628]
                mt-2
              "
            >
              Perguntas{' '}
              <span className="text-[#4FB0D9]">
                Frequentes
              </span>
            </h2>

            <p
              className="
                mt-4
                text-[#3A5368]
                max-w-2xl
                mx-auto
              "
            >
              Encontre respostas para as perguntas
              mais comuns sobre os nossos serviços.
            </p>
          </div>

          <div
            className="
              mt-12
              space-y-3
            "
          >
            {faqData.map((item, index) => {
              const isOpen =
                openFaq === index;

              return (
                <div
                  key={index}
                  className={`
                    bg-[#EAF1F7]
                    rounded-xl
                    border
                    transition-all
                    duration-300
                    overflow-hidden

                    ${
                      isOpen
                        ? 'border-[#4FB0D9] shadow-lg shadow-[#4FB0D9]/10'
                        : 'border-[#D6E2EC] hover:border-[#4FB0D9]/30 hover:shadow-md'
                    }
                  `}
                >
                  <button
                    onClick={() =>
                      toggleFaq(index)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      p-6
                      text-left
                      group
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        flex-1
                      "
                    >
                      <span
                        className={`
                          flex-shrink-0
                          w-8
                          h-8
                          rounded-full
                          flex
                          items-center
                          justify-center
                          text-sm
                          font-bold
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? 'bg-[#4FB0D9] text-white'
                              : 'bg-white text-[#6A859C] group-hover:bg-[#4FB0D9]/10'
                          }
                        `}
                      >
                        {String(index + 1).padStart(
                          2,
                          '0'
                        )}
                      </span>

                      <h3
                        className={`
                          font-heading
                          text-lg
                          font-semibold
                          transition-colors
                          duration-300

                          ${
                            isOpen
                              ? 'text-[#0A1628]'
                              : 'text-[#3A5368] group-hover:text-[#0A1628]'
                          }
                        `}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`
                        flex-shrink-0
                        w-8
                        h-8
                        rounded-full
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? 'bg-[#4FB0D9] text-white rotate-180'
                            : 'bg-white text-[#6A859C] group-hover:bg-[#4FB0D9]/10'
                        }
                      `}
                    >
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ease-in-out

                      ${
                        isOpen
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }
                    `}
                  >
                    <div
                      className="
                        px-6
                        pb-6
                        pt-0
                      "
                    >
                      <div
                        className="
                          h-px
                          w-full
                          bg-gradient-to-r
                          from-transparent
                          via-[#4FB0D9]/20
                          to-transparent
                          mb-4
                        "
                      />

                      <p
                        className="
                          text-[#3A5368]
                          text-sm
                          leading-relaxed
                          pl-12
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ CTA */}

          <div
            className="
              mt-10
              text-center
              bg-[#EAF1F7]
              rounded-2xl
              p-8
              border
              border-[#D6E2EC]
            "
          >
            <p
              className="
                text-[#3A5368]
              "
            >
              <span
                className="
                  font-semibold
                  text-[#0A1628]
                "
              >
                Ainda tem dúvidas?
              </span>{' '}
              Não hesite em contactar-nos.
            </p>

            <Link
              href="/contactos"
              className="
                inline-flex
                items-center
                gap-2
                mt-4
                bg-[#4FB0D9]
                text-white
                px-6
                py-3
                rounded-lg
                font-medium

                hover:bg-[#2A7FAA]

                transition

                shadow-lg
                shadow-[#4FB0D9]/20

                hover:shadow-[#4FB0D9]/30
              "
            >
              Fale connosco
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA FINAL
      ====================================================== */}

      <section
        className="
          py-20
          bg-[#0A1628]
          text-white
          relative
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#4FB0D9]/15
            via-transparent
            to-[#4FB0D9]/5
          "
        />

        <div
          className="
            absolute
            -top-40
            -right-40
            w-80
            h-80
            bg-[#4FB0D9]/15
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-80
            h-80
            bg-[#4FB0D9]/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10
            max-w-4xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            text-center
          "
        >
          <h2
            className="
              font-heading
              text-3xl
              md:text-5xl
              font-bold
            "
          >
            Pronto para{' '}
            <span className="text-[#4FB0D9]">
              crescer
            </span>
            ?
          </h2>

          <p
            className="
              mt-4
              text-white/70
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Conte-nos o desafio.
            Encontramos a solução em conjunto.
          </p>

          <Link
            href="/contactos"
            className="
              inline-flex
              items-center
              gap-2

              mt-8

              bg-[#4FB0D9]
              text-white

              px-10
              py-4

              rounded-full

              font-bold
              text-lg

              hover:bg-[#2A7FAA]

              transition-all

              shadow-lg
              shadow-[#4FB0D9]/30

              hover:shadow-[#4FB0D9]/50
              hover:-translate-y-1
            "
          >
            Agendar Reunião
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}