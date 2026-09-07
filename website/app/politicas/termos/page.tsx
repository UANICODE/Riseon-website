import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

export default function TermosCondicoes() {
  return (
    <div className="pt-32 pb-20 bg-riseon-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-riseon-blue hover:text-riseon-navy transition mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Voltar para o início
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-riseon-borderLight overflow-hidden">
          <div className="bg-gradient-to-r from-riseon-navy to-riseon-blue p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Scale size={28} className="text-white" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  Termos e Condições
                </h1>
                <p className="text-white/70 text-sm mt-1">
                  Última atualização: {new Date().toLocaleDateString('pt-PT')}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-riseon-navy flex items-center gap-3">
                <FileText size={20} className="text-gold" />
                1. Aceitação dos Termos
              </h2>
              <p className="mt-3 text-riseon-textSecondary leading-relaxed">
                Ao utilizar o website da RiseON e os nossos serviços, concorda com os presentes Termos e Condições. Se não concordar, por favor, não utilize o nosso site ou serviços.
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-riseon-border to-transparent"></div>

            <div>
              <h2 className="font-heading text-xl font-bold text-riseon-navy flex items-center gap-3">
                <CheckCircle size={18} className="text-riseon-blue" />
                2. Serviços Prestados
              </h2>
              <p className="mt-3 text-riseon-textSecondary text-sm leading-relaxed">
                A RiseON oferece serviços de:
              </p>
              <ul className="mt-3 space-y-2 text-riseon-textSecondary text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span><strong>Recrutamento &amp; Seleção:</strong> identificação de talento qualificado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span><strong>Gestão Digital:</strong> websites e redes sociais institucionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span><strong>Performance Analytics:</strong> dashboards com KPIs em tempo real</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-riseon-navy flex items-center gap-3">
                <AlertCircle size={18} className="text-gold-dark" />
                3. Responsabilidades do Utilizador
              </h2>
              <ul className="mt-3 space-y-2 text-riseon-textSecondary text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Fornecer informações verdadeiras e precisas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Utilizar o site de forma ética e legal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Não violar os direitos de propriedade intelectual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Respeitar a confidencialidade dos processos</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-riseon-navy flex items-center gap-3">
                <Scale size={18} className="text-riseon-blue" />
                4. Propriedade Intelectual
              </h2>
              <p className="mt-3 text-riseon-textSecondary text-sm leading-relaxed">
                Todo o conteúdo do site (textos, imagens, logótipos, design) é propriedade da RiseON e está protegido por direitos de autor. É proibida a reprodução, distribuição ou utilização sem autorização prévia.
              </p>
            </div>

            <div className="bg-riseon-surface rounded-xl p-6 border border-riseon-borderLight">
              <h3 className="font-heading text-lg font-bold text-riseon-navy">Contacto</h3>
              <p className="mt-2 text-riseon-textSecondary text-sm">
                Para questões relacionadas com os Termos e Condições:
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-3 text-sm">
                <a href="mailto:geral@riseon.pt" className="text-riseon-blue hover:text-riseon-navy transition font-medium">
                  📧 geral@riseon.pt
                </a>
                <span className="text-riseon-textMuted">|</span>
                <a href="tel:+351923330190" className="text-riseon-blue hover:text-riseon-navy transition font-medium">
                  📞 +351 923 330 190
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}