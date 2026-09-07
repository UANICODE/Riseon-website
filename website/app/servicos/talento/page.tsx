import Link from 'next/link';
import { ArrowLeft, Users, Calendar, Clock, Briefcase, CheckCircle, Target, Filter } from 'lucide-react';

export default function Talento() {
  return (
    <div className="pt-24 pb-16 bg-riseon-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/servicos" className="inline-flex items-center gap-2 text-riseon-blue hover:text-riseon-navy transition mb-6">
          <ArrowLeft size={20} /> Voltar para Serviços
        </Link>

        <div className="fade-in-up">
          <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">Serviço</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-riseon-navy mt-2">
            <span className="text-riseon-blueLight">Talento</span>
          </h1>
          <p className="mt-4 text-lg text-riseon-textSecondary leading-relaxed">
            Recrutamento &amp; Seleção assente numa abordagem consultiva e rigorosa, orientada para a identificação de talento qualificado e alinhado com a cultura, os valores e os objetivos estratégicos de cada organização.
          </p>
        </div>

        {/* Processo de Seleção - 8 passos */}
        <div className="mt-12">
          <h3 className="font-heading text-2xl font-bold text-riseon-navy text-center">Processo de Seleção</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center">
              <div className="w-10 h-10 bg-riseon-navy/10 rounded-full flex items-center justify-center mx-auto text-riseon-navy font-bold">1</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Confirmação do perfil</p>
              <p className="text-xs text-riseon-textMuted">Alinhamento da vaga com as necessidades exatas</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center">
              <div className="w-10 h-10 bg-riseon-blue/10 rounded-full flex items-center justify-center mx-auto text-riseon-blue font-bold">2</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Promoção &amp; Sourcing</p>
              <p className="text-xs text-riseon-textMuted">Divulgação em canais próprios e parcerias</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mx-auto text-gold-dark font-bold">3</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Seleção do(s) Candidato(s)</p>
              <p className="text-xs text-riseon-textMuted">Análise de CVs, vídeo e entrevista 1ª fase</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center">
              <div className="w-10 h-10 bg-riseon-navy/10 rounded-full flex items-center justify-center mx-auto text-riseon-navy font-bold">4</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Decisão de Contratação</p>
              <p className="text-xs text-riseon-textMuted">Seleção e confirmação final</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center">
              <div className="w-10 h-10 bg-riseon-blue/10 rounded-full flex items-center justify-center mx-auto text-riseon-blue font-bold">5</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Logística</p>
              <p className="text-xs text-riseon-textMuted">Formalização contratual e documentação</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mx-auto text-gold-dark font-bold">6</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Acompanhamento da experiência</p>
              <p className="text-xs text-riseon-textMuted">Check-ins periódicos e feedback</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-riseon-borderLight text-center col-span-2">
              <div className="w-10 h-10 bg-riseon-navy/10 rounded-full flex items-center justify-center mx-auto text-riseon-navy font-bold">7-8</div>
              <p className="text-sm font-medium text-riseon-navy mt-2">Áreas de Especialização</p>
              <p className="text-xs text-riseon-textMuted">Análise de perfis e fit cultural</p>
            </div>
          </div>
        </div>

        {/* Tipologias de Serviço - CONTEÚDO EXATO DOS PLANOS */}
        <div className="mt-16 space-y-8">
          {/* Estágios Curriculares */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-riseon-navy/10 rounded-full flex items-center justify-center text-riseon-navy">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-riseon-navy">Estágios Curriculares</h3>
                <p className="text-riseon-textSecondary text-sm">Projeto de Curso · €120 (short) / €140 (mid)</p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-riseon-textSecondary text-sm">
                  Tipologia de estágio desenhada para a realização de projetos de curso, permitindo a aplicação prática dos conhecimentos teóricos adquiridos durante a formação.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-riseon-textSecondary">
                  <li>✓ Curta duração: 6 a 12 semanas</li>
                  <li>✓ Média duração: 3 a 9 meses</li>
                  <li>✓ 20 a 25 horas semanais</li>
                </ul>
              </div>
              <div className="bg-riseon-surface rounded-lg p-4">
                <p className="text-sm font-medium text-riseon-navy">Alocação de talento:</p>
                <p className="text-sm text-riseon-textSecondary">Candidatos do ensino profissional (Nível IV) e graus académicos superiores (Níveis V, VI, VII)</p>
                <div className="mt-3 flex gap-2">
                  <span className="bg-riseon-navy/10 px-3 py-1 rounded-full text-xs font-medium text-riseon-navy">Short: €120</span>
                  <span className="bg-riseon-navy/10 px-3 py-1 rounded-full text-xs font-medium text-riseon-navy">Mid: €140</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estágios Extracurriculares */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-riseon-blue/10 rounded-full flex items-center justify-center text-riseon-blue">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-riseon-navy">Estágios Extracurriculares</h3>
                <p className="text-riseon-textSecondary text-sm">Imersão full-time · €170 (mid) / €200 (long)</p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-riseon-textSecondary text-sm">
                  Modelo de imersão direcionado para acelerar a curva de aprendizagem e a integração cultural, privilegiando a produtividade, com carga horária entre 35 e 40 horas semanais.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-riseon-textSecondary">
                  <li>✓ Média duração: 3 a 9 meses</li>
                  <li>✓ Longa duração: 9 a 12 meses</li>
                  <li>✓ Período experimental estendido</li>
                </ul>
              </div>
              <div className="bg-riseon-surface rounded-lg p-4">
                <p className="text-sm font-medium text-riseon-navy">Vantagens:</p>
                <ul className="text-sm text-riseon-textSecondary space-y-1">
                  <li>✓ Ciclo de formação completo</li>
                  <li>✓ Avaliação de fit e desempenho</li>
                  <li>✓ Transição para contratação definitiva</li>
                </ul>
                <div className="mt-3 flex gap-2">
                  <span className="bg-riseon-blue/10 px-3 py-1 rounded-full text-xs font-medium text-riseon-blue">Mid: €170</span>
                  <span className="bg-riseon-blue/10 px-3 py-1 rounded-full text-xs font-medium text-riseon-blue">Long: €200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Captação de Perfis Seniores */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight border-gold/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold-dark">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-riseon-navy">Captação de Perfis Seniores</h3>
                <p className="text-riseon-textSecondary text-sm">Talento experiente · €260 (long)</p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-riseon-textSecondary text-sm">
                  Recrutamento e seleção de perfis que trazem uma visão analítica superior e capacidade de resolução de problemas complexos. Possuem a maturidade necessária para liderar projetos internos e aplicar metodologias atualizadas que elevam o padrão de entrega da organização.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-riseon-textSecondary">
                  <li>✓ Imersão total, menos supervisão</li>
                  <li>✓ Resultados tangíveis no curto e médio prazo</li>
                  <li>✓ Longa duração: até 12 meses</li>
                </ul>
              </div>
              <div className="bg-gold/10 rounded-lg p-4 border border-gold/20">
                <p className="text-sm font-medium text-riseon-navy">Solução ideal para:</p>
                <ul className="text-sm text-riseon-textSecondary space-y-1">
                  <li>✓ Identificar futuros quadros de liderança</li>
                  <li>✓ Testar competência e fit cultural</li>
                  <li>✓ Ambiente de risco reduzido</li>
                  <li>✓ Integração definitiva após confirmação</li>
                </ul>
                <div className="mt-3">
                  <span className="bg-gold/20 px-3 py-1 rounded-full text-xs font-medium text-gold-dark">Long: €260</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota sobre bolsa */}
        <div className="mt-8 bg-riseon-surfaceMuted rounded-xl p-4 text-sm text-riseon-textMuted border border-riseon-borderLight">
          <p>
            <strong>Nota:</strong> A bolsa de estágio é paga mensalmente pela Empresa ao perfil júnior ou sénior, com valor igual ou superior a 920€/mês em regime full-time superior a 3 meses. Os valores acima referem-se apenas à taxa de serviço RiseON.
          </p>
        </div>

        <div className="mt-12 bg-riseon-navy text-white rounded-xl p-8 text-center">
          <h4 className="font-heading text-2xl font-bold">Encontrar o talento certo é o maior desafio de RH</h4>
          <p className="text-white/70 mt-2">Nós resolvemos isso por si.</p>
          <Link href="/contactos" className="inline-block mt-4 bg-gold text-riseon-navy px-8 py-3 rounded-md font-bold hover:bg-gold-dark transition">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}