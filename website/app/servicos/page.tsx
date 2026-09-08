import Link from 'next/link';
import { Users, Globe2, BarChart3, ArrowRight } from 'lucide-react';

export default function Servicos() {
  return (
    <div className="pt-24 pb-16 bg-riseon-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
         
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-riseon-navy mt-2">
            O que <span className="text-riseon-blueLight">oferecemos</span>
          </h1>
          <p className="mt-4 text-riseon-textSecondary max-w-2xl mx-auto">
            Soluções integradas para o crescimento da sua empresa, assentes em três pilares estratégicos.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link href="/servicos/talento" className="service-card bg-white rounded-xl p-8 text-center group">
            <div className="w-16 h-16 bg-riseon-navy/10 rounded-full flex items-center justify-center mx-auto text-riseon-navy">
              <Users size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4">Talento</h3>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Recrutamento &amp; Seleção consultivo, rigoroso e orientado para a identificação de talento qualificado.
            </p>
            <ul className="text-left text-sm text-riseon-textMuted mt-4 space-y-1">
              <li>✓ Estágios Curriculares</li>
              <li>✓ Estágios Extracurriculares</li>
              <li>✓ Captação de Perfis Seniores</li>
            </ul>
            <span className="inline-flex items-center gap-1 text-riseon-blue mt-4 font-medium group-hover:gap-2 transition-all">
              Saber mais <ArrowRight size={16} />
            </span>
          </Link>

          <Link href="/servicos/impacto" className="service-card bg-white rounded-xl p-8 text-center group">
            <div className="w-16 h-16 bg-riseon-blue/10 rounded-full flex items-center justify-center mx-auto text-riseon-blue">
              <Globe2 size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4">Impacto</h3>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Gestão Digital para dar visibilidade e consistência à sua marca online.
            </p>
            <ul className="text-left text-sm text-riseon-textMuted mt-4 space-y-1">
              <li>✓ Website Institucional</li>
              <li>✓ Manutenção Contínua</li>
              <li>✓ Gestão de Redes Sociais</li>
            </ul>
            <span className="inline-flex items-center gap-1 text-riseon-blue mt-4 font-medium group-hover:gap-2 transition-all">
              Saber mais <ArrowRight size={16} />
            </span>
          </Link>

          <Link href="/servicos/performance" className="service-card bg-white rounded-xl p-8 text-center group">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto text-gold-dark">
              <BarChart3 size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-riseon-navy mt-4">Performance</h3>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Dashboards personalizados que centralizam os indicadores críticos do seu negócio.
            </p>
            <ul className="text-left text-sm text-riseon-textMuted mt-4 space-y-1">
              <li>✓ Centralização de Dados</li>
              <li>✓ KPIs Personalizados</li>
              <li>✓ Atualização em Tempo Real</li>
            </ul>
            <span className="inline-flex items-center gap-1 text-riseon-blue mt-4 font-medium group-hover:gap-2 transition-all">
              Saber mais <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}