'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Users, BarChart3, Globe2, ArrowRight, ChevronRight, Plus, Minus } from 'lucide-react';

// Dados da equipa
const teamMembers = [
  {
    id: 'beatriz-ferreira',
    name: 'Beatriz Ferreira',
    role: 'Gerente',
    email: 'beatriz@riseon.pt',
    photo: '/images/beatriz.png',
    bio: 'Especialista em Recrutamento & Seleção com mais de 10 anos de experiência em consultoria de RH. Beatriz lidera a área de Talento da RiseON, garantindo que cada processo de recrutamento seja rigoroso e alinhado com a cultura das empresas.',
    expertise: ['Recrutamento & Seleção', 'Gestão de Talentos', 'HR Consulting'],
  },
  {
    id: 'tomas-ferreira',
    name: 'Tomás Ferreira',
    role: 'Gerente',
    email: 'tomas@riseon.pt',
    photo: '/images/tomas.png',
    bio: 'Especialista em Estratégia Digital e Performance Analytics. Tomás lidera as áreas de Impacto e Performance da RiseON, ajudando empresas a crescer através de websites institucionais, redes sociais e dashboards de KPIs em tempo real.',
    expertise: ['Estratégia Digital', 'Performance Analytics', 'Website Development'],
  },
];

// Dados do FAQ
const faqData = [
  {
    question: 'Como posso contratar os serviços da RiseON?',
    answer: 'Pode entrar em contacto connosco através do formulário no site, por email (geral@riseon.pt) ou por telefone (+351 923 330 190). Agendamos uma reunião para conhecer o seu desafio e apresentar a melhor solução.',
  },
  {
    question: 'Qual é o custo dos serviços de recrutamento?',
    answer: 'Os valores variam conforme a tipologia: Estágios Curriculares (€120-140), Estágios Extracurriculares (€170-200) e Perfis Seniores (€260). A bolsa de estágio é paga pela empresa ao perfil, com valor mínimo de 920€/mês.',
  },
  {
    question: 'Quanto tempo demora um processo de recrutamento?',
    answer: 'O processo completo demora entre 2 a 4 semanas, dependendo da complexidade do perfil e da urgência da vaga. Desde a confirmação do perfil até à decisão de contratação, acompanhamos cada etapa.',
  },
  {
    question: 'Como funciona a gestão de redes sociais?',
    answer: 'Fazemos planeamento mensal de conteúdos, criação e publicação de posts, stories e atualizações, com monitorização de desempenho e envio de relatório mensal com análise de alcance, crescimento e recomendações estratégicas.',
  },
  {
    question: 'O que são os dashboards de Performance?',
    answer: 'São plataformas visuais personalizadas que centralizam os indicadores críticos do seu negócio (KPIs) em tempo real. Agregamos dados de múltiplas fontes (vendas, marketing, RH, operações) numa única interface.',
  },
];

// Clientes com logotipos
const clients = [
  { name: 'MyMoment', id: 'mymoment', logo: '/images/mymoment.png' },
  { name: 'Coolivin', id: 'coolivin', logo: '/images/coolivin.png' },
  { name: 'Centro Juvenil', id: 'centro-juvenil', logo: '/images/centro-juvenil.png' },
  { name: 'Dark Cloud', id: 'dark-cloud', logo: '/images/dark.png' },
  { name: 'MadreMedia', id: 'madremedia', logo: '/images/madre.png' },
  { name: 'CD Cova Piedade', id: 'cd-cova-piedade', logo: '/images/clube.png' },
  { name: 'T.E.C. Physio', id: 'tec-physio', logo: '/images/pysio.png' },
  { name: 'Skillfull', id: 'skillfull', logo: '/images/skillfull.png' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ========== HERO COM IMAGEM DE FUNDO E LOGOTIPO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="RiseON - Parceiro de crescimento"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-riseon-navy via-riseon-navy/90 to-riseon-navyDark/95"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(79, 176, 217, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217, 188, 102, 0.08) 0%, transparent 50%)`
            }}></div>
          </div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-riseon-blueLight/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-riseon-blueLight/5 rounded-full blur-3xl"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-riseon-blueLight/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <span className="inline-block text-gold font-heading text-sm sm:text-lg font-semibold tracking-[0.3em] uppercase mb-4 bg-riseon-navy/30 backdrop-blur-sm px-6 py-2 rounded-full border border-gold/20">
              Consultora B2B
            </span>
            
            {/* ===== LOGOTIPO EM VEZ DE TEXTO ===== */}
            <div className="flex justify-center">
              <div className="relative w-80 h-50 sm:w-80 sm:h-24 md:w-96 md:h-28 lg:w-[440px] lg:h-32">
                <Image
                  src="/images/logo.png"
                  alt="RiseON - Ligar o Talento, Impulsionar o Crescimento"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
          <p className="mt-4 text-xl md:text-3xl font-light tracking-wide bg-gradient-to-r from-[#4FB0D9] via-[#D9BC66] to-[#4FB0D9] bg-clip-text text-transparent animate-gradient">
          Ligar o Talento, Impulsionar o Crescimento
        </p>
            <div className="mt-6 max-w-2xl mx-auto">
              <p className="text-lg text-white/70 leading-relaxed backdrop-blur-sm bg-riseon-navy/20 rounded-xl px-6 py-4 border border-white/10">
                Parceiro estratégico de crescimento para startups e PMEs portuguesas, integrando Talento, Impacto Digital e Performance.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/servicos"
                className="group relative overflow-hidden bg-gold text-riseon-navy px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explorar Serviços
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </span>
                <div className="absolute inset-0 bg-gold-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/sobre"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Sobre Nós
              </Link>
            </div>
          </div>

 
        </div>
      </section>

      {/* ========== PILARES ESTRATÉGICOS ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">
              Pilares Estratégicos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-riseon-navy mt-2">
              Os nossos <span className="text-riseon-blueLight">3 pilares</span>
            </h2>
            <p className="mt-4 text-riseon-textSecondary max-w-2xl mx-auto">
              Soluções integradas para o crescimento da sua empresa.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Link href="/servicos/talento" className="service-card bg-riseon-surface rounded-2xl p-8 text-center group hover:border-riseon-blue">
              <div className="w-16 h-16 bg-riseon-navy/10 rounded-full flex items-center justify-center mx-auto text-riseon-navy group-hover:bg-riseon-navy group-hover:text-white transition-all">
                <Users size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4 group-hover:text-riseon-blue transition">Talent</h3>
              <p className="text-riseon-textSecondary text-sm mt-2 leading-relaxed">
                Recrutamento & Seleção consultivo, rigoroso e alinhado com a cultura da sua empresa.
              </p>
              <span className="inline-flex items-center gap-1 text-riseon-blue mt-4 font-medium text-sm group-hover:gap-2 transition-all">
                Saber mais <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/servicos/impacto" className="service-card bg-riseon-surface rounded-2xl p-8 text-center group hover:border-riseon-blue">
              <div className="w-16 h-16 bg-riseon-blue/10 rounded-full flex items-center justify-center mx-auto text-riseon-blue group-hover:bg-riseon-blue group-hover:text-white transition-all">
                <Globe2 size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4 group-hover:text-riseon-blue transition">Impact</h3>
              <p className="text-riseon-textSecondary text-sm mt-2 leading-relaxed">
                Criação de websites institucionais e gestão profissional de redes sociais.
              </p>
              <span className="inline-flex items-center gap-1 text-riseon-blue mt-4 font-medium text-sm group-hover:gap-2 transition-all">
                Saber mais <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/servicos/performance" className="service-card bg-riseon-surface rounded-2xl p-8 text-center group hover:border-riseon-blue">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto text-gold-dark group-hover:bg-gold group-hover:text-riseon-navy transition-all">
                <BarChart3 size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4 group-hover:text-riseon-blue transition">Performance</h3>
              <p className="text-riseon-textSecondary text-sm mt-2 leading-relaxed">
                Dashboards personalizados com KPIs em tempo real para decisões mais rápidas.
              </p>
              <span className="inline-flex items-center gap-1 text-riseon-blue mt-4 font-medium text-sm group-hover:gap-2 transition-all">
                Saber mais <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== EQUIPA ========== */}
      {/* ========== EQUIPA ========== */}
<section className="py-20 bg-riseon-surface">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center fade-in-up">
      <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">
        Quem Somos
      </span>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-riseon-navy mt-2">
        A nossa <span className="text-riseon-blueLight">Equipa</span>
      </h2>
      <p className="mt-4 text-riseon-textSecondary max-w-2xl mx-auto">
        Conheça os profissionais que estão prontos para impulsionar o crescimento da sua empresa.
      </p>
    </div>
    <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {teamMembers.map((member) => (
        <Link
          key={member.id}
          href={`/equipa/${member.id}`}
          className="team-card bg-white rounded-2xl p-8 shadow-sm border border-riseon-borderLight hover:shadow-xl hover:border-riseon-blue transition-all group"
        >
          <div className="flex items-center gap-6">
            {/* ===== FOTO COM IMAGEM ===== */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-riseon-navy/10 group-hover:border-riseon-blue transition-all">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-riseon-navy group-hover:text-riseon-blue transition">
                {member.name}
              </h3>
              <p className="text-gold-dark font-medium text-sm">{member.role}</p>
              <span className="inline-flex items-center gap-1 text-riseon-blue text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                Ver perfil <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* ========== PROVA SOCIAL - MARQUEE COM LOGOTIPOS ========== */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">
              Prova Social
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-riseon-navy mt-2">
              Clientes que <span className="text-riseon-blueLight">confiam</span> em nós
            </h2>
            <p className="mt-4 text-riseon-textSecondary">
              Empresas que escolheram a RiseON para impulsionar o seu crescimento
            </p>
          </div>
        </div>

        {/* Marquee / Carrossel infinito com logotipos */}
        <div className="relative mt-12">
          {/* Gradientes nas pontas para efeito fade - com fundo branco */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* Clientes - primeira volta */}
              {clients.map((client, index) => (
                <Link
                  key={`${client.id}-1`}
                  href={`/clientes/${client.id}`}
                  className="flex-shrink-0 mx-6 md:mx-10 group"
                >
                  <div className="flex flex-col items-center gap-3">
                    {/* Card com fundo azul escuro da RiseON */}
                    <div className="w-44 h-28 md:w-56 md:h-32 bg-riseon-navy rounded-xl border border-riseon-navyLight/50 flex items-center justify-center p-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-gold/50 group-hover:bg-riseon-navyDark">
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 176px, 224px"
                        />
                      </div>
                    </div>
                    <span className="text-xs text-riseon-textMuted opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {client.name} →
                    </span>
                  </div>
                </Link>
              ))}
              {/* Clientes - segunda volta (para efeito infinito) */}
              {clients.map((client, index) => (
                <Link
                  key={`${client.id}-2`}
                  href={`/clientes/${client.id}`}
                  className="flex-shrink-0 mx-6 md:mx-10 group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-44 h-28 md:w-56 md:h-32 bg-riseon-navy rounded-xl border border-riseon-navyLight/50 flex items-center justify-center p-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-gold/50 group-hover:bg-riseon-navyDark">
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 176px, 224px"
                        />
                      </div>
                    </div>
                    <span className="text-xs text-riseon-textMuted opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {client.name} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        
      </section>

      {/* ========== FAQ - ACORDEÃO ATRAENTE ========== */}
      <section className="py-20 bg-riseon-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">
              Dúvidas Frequentes
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-riseon-navy mt-2">
              Perguntas <span className="text-riseon-blueLight">Frequentes</span>
            </h2>
            <p className="mt-4 text-riseon-textSecondary max-w-2xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre os nossos serviços.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-riseon-blue shadow-lg shadow-riseon-blue/10'
                      : 'border-riseon-borderLight hover:border-riseon-blue/30 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isOpen
                            ? 'bg-riseon-navy text-white'
                            : 'bg-riseon-surface text-riseon-textMuted group-hover:bg-riseon-navy/10'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className={`font-heading text-lg font-semibold transition-colors duration-300 ${
                          isOpen ? 'text-riseon-navy' : 'text-riseon-textSecondary group-hover:text-riseon-navy'
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-riseon-navy text-white rotate-180'
                          : 'bg-riseon-surface text-riseon-textMuted group-hover:bg-riseon-navy/10'
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-riseon-blue/20 to-transparent mb-4"></div>
                      <p className="text-riseon-textSecondary text-sm leading-relaxed pl-12">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center bg-riseon-navy/5 rounded-2xl p-8 border border-riseon-borderLight">
            <p className="text-riseon-textSecondary">
              <span className="font-semibold text-riseon-navy">Ainda tem dúvidas?</span>{' '}
              Não hesite em contactar-nos.
            </p>
            <Link
              href="/contactos"
              className="inline-flex items-center gap-2 mt-4 bg-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-riseon-navyDark transition shadow-lg shadow-riseon-navy/20 hover:shadow-riseon-navy/30"
            >
              Fale connosco <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 bg-riseon-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-riseon-blueLight/10 via-transparent to-gold/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-riseon-blueLight/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Pronto para <span className="text-gold">crescer</span>?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Conte-nos o desafio. Encontramos a solução em conjunto.
          </p>
          <Link
            href="/contactos"
            className="inline-block mt-8 bg-gold text-riseon-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition-all shadow-lg shadow-gold/30 hover:shadow-gold/50"
          >
            Agendar Reunião
          </Link>
        </div>
      </section>
    </>
  );
}