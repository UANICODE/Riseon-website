import Link from 'next/link';
import { ArrowLeft, BarChart3, Database, Gauge, FileText, Eye, TrendingUp, Zap } from 'lucide-react';

export default function Performance() {
  return (
    <div className="pt-24 pb-16 bg-riseon-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/servicos" className="inline-flex items-center gap-2 text-riseon-blue hover:text-riseon-navy transition mb-6">
          <ArrowLeft size={20} /> Voltar para Serviços
        </Link>

        <div className="fade-in-up">
          <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">Serviço</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-riseon-navy mt-2">
            <span className="text-gold">Performance</span> Analytics
          </h1>
          <p className="mt-4 text-lg text-riseon-textSecondary leading-relaxed">
            Desenvolvimento de dashboards personalizados que centralizam os indicadores críticos do seu negócio (KPIs) numa única plataforma visual.
          </p>
        </div>

        {/* Problema */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight text-center">
          <h3 className="font-heading text-2xl font-bold text-riseon-navy">
            Toma decisões todos os dias, mas sem <span className="text-riseon-blueLight">dados reais</span> para as sustentar
          </h3>
          <div className="mt-4 flex justify-center gap-8 text-sm text-riseon-textMuted">
            <span>📊 Dados dispersos</span>
            <span>📉 Relatórios manuais</span>
            <span>⏳ Decisões atrasadas</span>
          </div>
        </div>

        {/* 4 pilares */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight">
            <Database className="text-riseon-navy mb-3" size={28} />
            <h4 className="font-heading text-xl font-bold text-riseon-navy">Centralização de Dados</h4>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Informação agregada de múltiplas fontes (vendas, marketing, RH, operações) numa única plataforma visual, eliminando relatórios dispersos.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight">
            <Gauge className="text-riseon-blue mb-3" size={28} />
            <h4 className="font-heading text-xl font-bold text-riseon-navy">KPIs Personalizados</h4>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Definição e monitorização dos indicadores estratégicos mais relevantes para o seu negócio, adaptados aos seus objetivos específicos.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight">
            <Zap className="text-gold-dark mb-3" size={28} />
            <h4 className="font-heading text-xl font-bold text-riseon-navy">Atualização em Tempo Real</h4>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Dados apresentados de forma contínua e automática, sem necessidade de processamento manual.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight">
            <FileText className="text-riseon-navy mb-3" size={28} />
            <h4 className="font-heading text-xl font-bold text-riseon-navy">Relatórios Automáticos</h4>
            <p className="text-riseon-textSecondary text-sm mt-2">
              Desenvolvimento periódico de relatórios executivos prontos a partilhar com equipas e investidores.
            </p>
          </div>
        </div>

        {/* Vantagens Competitivas */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight">
          <h3 className="font-heading text-2xl font-bold text-riseon-navy text-center">
            <span className="text-gold">Vantagens</span> Competitivas
          </h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-riseon-surface rounded-lg">
              <Eye className="text-riseon-blue flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-riseon-navy text-sm">Decisões Mais Rápidas</p>
                <p className="text-xs text-riseon-textMuted">Informação crítica disponível em segundos</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-riseon-surface rounded-lg">
              <Eye className="text-riseon-navy flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-riseon-navy text-sm">Visibilidade Total do Negócio</p>
                <p className="text-xs text-riseon-textMuted">Fim da dependência de folhas de Excel desatualizadas</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-riseon-surface rounded-lg">
              <Eye className="text-gold-dark flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-riseon-navy text-sm">100% Personalizado</p>
                <p className="text-xs text-riseon-textMuted">Cada dashboard é construído à medida do cliente</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-riseon-surface rounded-lg">
              <TrendingUp className="text-riseon-blue flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-riseon-navy text-sm">Antecipação de Tendências</p>
                <p className="text-xs text-riseon-textMuted">Identificar padrões antes que se tornem problemas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Valor do Serviço */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight">
          <h4 className="font-heading text-2xl font-bold text-riseon-navy text-center">Valor do Serviço</h4>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-riseon-surface rounded-lg p-4">
              <p className="text-sm text-riseon-textMuted">Projeto Único</p>
              <p className="font-heading text-xl font-bold text-riseon-navy">Sob consulta</p>
              <p className="text-xs text-riseon-textMuted mt-1">Desenvolvimento do dashboard</p>
            </div>
            <div className="bg-riseon-surface rounded-lg p-4 border border-gold">
              <p className="text-sm text-riseon-textMuted">Subscrição Mensal</p>
              <p className="font-heading text-xl font-bold text-riseon-navy">Sob consulta</p>
              <p className="text-xs text-riseon-textMuted mt-1">Com manutenção e atualização contínua</p>
            </div>
            <div className="bg-riseon-surface rounded-lg p-4">
              <p className="text-sm text-riseon-textMuted">Pacote Combinado</p>
              <p className="font-heading text-xl font-bold text-riseon-navy">Sob consulta</p>
              <p className="text-xs text-riseon-textMuted mt-1">Desenvolvimento + acompanhamento</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-riseon-textMuted text-center">
            Dependente da complexidade, número de fontes de dados e funcionalidades pretendidas
          </p>
        </div>

        <div className="mt-8 bg-riseon-navy/5 rounded-xl p-6 border border-riseon-borderLight text-center">
          <p className="text-riseon-textSecondary text-sm italic">
            “Desenvolvemos dashboards que transformam dados complexos em informação clara, visual e acionável, colocando o poder da análise nas mãos de quem lidera, sem necessidade de conhecimentos técnicos.”
          </p>
        </div>

        <div className="mt-12 bg-riseon-navy text-white rounded-xl p-8 text-center">
          <h4 className="font-heading text-2xl font-bold">Transforme dados em decisões</h4>
          <p className="text-white/70 mt-2">Fale connosco e descubra como podemos ajudar.</p>
          <Link href="/contactos" className="inline-block mt-4 bg-gold text-riseon-navy px-8 py-3 rounded-md font-bold hover:bg-gold-dark transition">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}