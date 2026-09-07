import Link from 'next/link';
import { ArrowLeft, FileText, AlertCircle, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function LivroReclamacoes() {
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
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  Livro de Reclamações
                </h1>
                <p className="text-white/70 text-sm mt-1">
                  Estamos aqui para ouvir e melhorar
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-riseon-navy flex items-center gap-3">
                <AlertCircle size={20} className="text-gold" />
                O seu feedback é importante
              </h2>
              <p className="mt-3 text-riseon-textSecondary leading-relaxed">
                Na RiseON, estamos comprometidos com a excelência e a satisfação dos nossos clientes e parceiros. Se não ficou totalmente satisfeito com algum dos nossos serviços, ou se tem uma sugestão de melhoria, queremos ouvi-lo.
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-riseon-border to-transparent"></div>

            <div>
              <h2 className="font-heading text-xl font-bold text-riseon-navy flex items-center gap-3">
                <CheckCircle size={18} className="text-riseon-blue" />
                Como apresentar uma reclamação
              </h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-riseon-surface rounded-xl border border-riseon-borderLight">
                  <div className="w-10 h-10 bg-riseon-navy/10 rounded-full flex items-center justify-center text-riseon-navy font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-riseon-navy">Contacto direto</h4>
                    <p className="text-riseon-textSecondary text-sm">
                      Fale connosco diretamente para resolver a situação de forma rápida e personalizada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-riseon-surface rounded-xl border border-riseon-borderLight">
                  <div className="w-10 h-10 bg-riseon-blue/10 rounded-full flex items-center justify-center text-riseon-blue font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-riseon-navy">Formulário de reclamação</h4>
                    <p className="text-riseon-textSecondary text-sm">
                      Preencha o formulário abaixo com os detalhes da sua reclamação.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-riseon-surface rounded-xl border border-riseon-borderLight">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold-dark font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-riseon-navy">Livro de Reclamações físico</h4>
                    <p className="text-riseon-textSecondary text-sm">
                      Pode também utilizar o Livro de Reclamações disponível na nossa sede em Cascais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-riseon-navy flex items-center gap-3">
                <Phone size={18} className="text-riseon-blue" />
                Contactos para reclamações
              </h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-riseon-surface rounded-xl p-5 border border-riseon-borderLight">
                  <Mail size={20} className="text-riseon-navy mb-2" />
                  <h4 className="font-semibold text-riseon-navy text-sm">Email</h4>
                  <a href="mailto:reclamacoes@riseon.pt" className="text-riseon-blue hover:text-riseon-navy transition text-sm">
                    reclamacoes@riseon.pt
                  </a>
                </div>
                <div className="bg-riseon-surface rounded-xl p-5 border border-riseon-borderLight">
                  <Phone size={20} className="text-riseon-navy mb-2" />
                  <h4 className="font-semibold text-riseon-navy text-sm">Telefone</h4>
                  <a href="tel:+351923330190" className="text-riseon-blue hover:text-riseon-navy transition text-sm">
                    +351 923 330 190
                  </a>
                </div>
                <div className="bg-riseon-surface rounded-xl p-5 border border-riseon-borderLight">
                  <MapPin size={20} className="text-riseon-navy mb-2" />
                  <h4 className="font-semibold text-riseon-navy text-sm">Morada</h4>
                  <p className="text-riseon-textSecondary text-sm">
                    Rua José Florindo, 44C<br />
                    2750-400 Cascais
                  </p>
                </div>
                <div className="bg-riseon-surface rounded-xl p-5 border border-riseon-borderLight">
                  <Clock size={20} className="text-riseon-navy mb-2" />
                  <h4 className="font-semibold text-riseon-navy text-sm">Horário</h4>
                  <p className="text-riseon-textSecondary text-sm">
                    Segunda a Sexta: 09:00 – 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-riseon-navy/5 rounded-xl p-6 border border-riseon-borderLight">
              <h3 className="font-heading text-lg font-bold text-riseon-navy">Informação importante</h3>
              <ul className="mt-3 space-y-2 text-riseon-textSecondary text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Todas as reclamações são tratadas com confidencialidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Comprometemo-nos a dar resposta num prazo máximo de 15 dias úteis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>Pode também recorrer a entidades reguladoras, como o CNPD</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 bg-riseon-navy text-white px-8 py-3 rounded-lg font-medium hover:bg-riseon-navyDark transition shadow-lg shadow-riseon-navy/20"
              >
                Fale connosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}