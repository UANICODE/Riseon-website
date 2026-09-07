import Link from 'next/link';
import { Target, Award, Zap, Users, Eye, Shield } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="pt-24 pb-16 bg-riseon-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - com logo no canto */}
        <div className="flex items-center justify-between border-b border-riseon-borderLight pb-4 mb-8">
          <span className="font-heading text-2xl font-bold text-riseon-navy">
            Rise<span className="text-gold">ON</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-riseon-textMuted hover:text-riseon-navy">Início</Link>
            <Link href="/servicos" className="text-riseon-textMuted hover:text-riseon-navy">Serviços</Link>
            <Link href="/contactos" className="text-riseon-textMuted hover:text-riseon-navy">Contactos</Link>
          </nav>
        </div>

        <div className="text-center fade-in-up">
          <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">Sobre Nós</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-riseon-navy mt-2">
            Quem somos <span className="text-riseon-blueLight">na RiseON</span>
          </h1>
        </div>

        {/* Introdução - CONTEÚDO EXATO DOS PLANOS */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-riseon-textSecondary leading-relaxed">
            Fundada em <strong>janeiro de 2026</strong>, com sede em <strong>Cascais</strong>, a <strong className="text-riseon-navy">RiseON</strong> é uma consultora B2B vocacionada para o crescimento empresarial, com atuação nas áreas de <strong>Recrutamento &amp; Seleção</strong>, <strong>Gestão Digital</strong> e <strong>Performance Analytics</strong>.
          </p>
        </div>

        {/* Missão - CONTEÚDO EXATO */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight text-center">
            <div className="w-14 h-14 bg-riseon-navy/10 rounded-full flex items-center justify-center mx-auto text-riseon-navy">
              <Target size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4">Missão</h3>
            <p className="text-riseon-textSecondary text-sm mt-2">
              <strong>“Ligar o Talento, Impulsionar o Crescimento”</strong>
            </p>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Temos como objetivo ser o parceiro estratégico de crescimento para startups e PMEs portuguesas, integrando Talento, Impacto Digital e Performance numa visão coerente, orientada para resultados reais e fundamentada em dados.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight text-center">
            <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto text-gold-dark">
              <Award size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4">Valores</h3>
            <ul className="text-riseon-textSecondary text-sm space-y-3 mt-2 text-left">
              <li className="flex items-start gap-2">
                <span className="text-gold">◆</span>
                <div>
                  <strong>Transparência</strong>
                  <p className="text-xs text-riseon-textMuted">Comunicação clara e ética em todos os processos de seleção e serviços digitais</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">◆</span>
                <div>
                  <strong>Compromisso</strong>
                  <p className="text-xs text-riseon-textMuted">Acompanhamento próximo e personalizado, garantindo que cada integração seja bem-sucedida</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">◆</span>
                <div>
                  <strong>Agilidade e Simplicidade</strong>
                  <p className="text-xs text-riseon-textMuted">Foco no que realmente cria valor para as Empresas e para os Candidatos</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">◆</span>
                <div>
                  <strong>Inovação e Crescimento</strong>
                  <p className="text-xs text-riseon-textMuted">Movemo-nos pela vontade de fazer as Empresas crescerem, fornecendo as ferramentas necessárias para se destacarem num mercado competitivo</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight text-center">
            <div className="w-14 h-14 bg-riseon-blue/10 rounded-full flex items-center justify-center mx-auto text-riseon-blue">
              <Zap size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4">Pilares Estratégicos</h3>
            <div className="mt-4 space-y-3">
              <div className="bg-riseon-navy/5 rounded-lg p-3">
                <span className="font-heading text-xl font-bold text-riseon-navy">Talent</span>
                <p className="text-xs text-riseon-textMuted">Recrutamento &amp; Seleção</p>
              </div>
              <div className="bg-riseon-blue/5 rounded-lg p-3">
                <span className="font-heading text-xl font-bold text-riseon-blue">Impact</span>
                <p className="text-xs text-riseon-textMuted">Gestão Digital</p>
              </div>
              <div className="bg-gold/10 rounded-lg p-3">
                <span className="font-heading text-xl font-bold text-gold-dark">Performance</span>
                <p className="text-xs text-riseon-textMuted">Performance Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipa - CONTEÚDO EXATO */}
        <div className="mt-20">
          <h2 className="font-heading text-3xl font-bold text-riseon-navy text-center">
            A nossa <span className="text-riseon-blueLight">Equipa</span>
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="team-card bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight flex items-center gap-6">
              <div className="w-20 h-20 bg-riseon-navy/10 rounded-full flex items-center justify-center text-riseon-navy font-heading text-2xl font-bold">
                BF
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-riseon-navy">Beatriz Ferreira</h4>
                <p className="text-riseon-blue font-medium text-sm">Gerente</p>
                <p className="text-riseon-textMuted text-sm">Recrutamento &amp; Gestão</p>
              </div>
            </div>
            <div className="team-card bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight flex items-center gap-6">
              <div className="w-20 h-20 bg-riseon-blue/10 rounded-full flex items-center justify-center text-riseon-blue font-heading text-2xl font-bold">
                TF
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-riseon-navy">Tomás Ferreira</h4>
                <p className="text-riseon-blue font-medium text-sm">Gerente</p>
                <p className="text-riseon-textMuted text-sm">Estratégia &amp; Performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prova Social - CONTEÚDO EXATO */}
        <div className="mt-20">
          <h2 className="font-heading text-3xl font-bold text-riseon-navy text-center">
            Prova <span className="text-riseon-blueLight">Social</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'MyMoment', id: 'mymoment' },
              { name: 'Coolivin', id: 'coolivin' },
              { name: 'Centro Juvenil', id: 'centro-juvenil' },
              { name: 'Dark Cloud', id: 'dark-cloud' },
              { name: 'MadreMedia', id: 'madremedia' },
              { name: 'CD Cova Piedade', id: 'cd-cova-piedade' },
              { name: 'T.E.C. Physio', id: 'tec-physio' },
              { name: 'Skillfull', id: 'skillfull' },
            ].map((cliente) => (
              <Link
                key={cliente.id}
                href={`/clientes/${cliente.id}`}
                className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight hover:shadow-md hover:border-riseon-blue transition-all text-center flex items-center justify-center min-h-[70px]"
              >
                <span className="font-heading text-riseon-textSecondary font-semibold text-sm">{cliente.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-riseon-textMuted text-sm mt-4">
            Clique num cliente para ver o nosso trabalho conjunto
          </p>
        </div>
      </div>
    </div>
  );
}