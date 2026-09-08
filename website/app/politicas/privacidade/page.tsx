import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, FileText } from 'lucide-react';

export default function PoliticaPrivacidade() {
  return (
    <div className="pt-32 pb-20 bg-[#EAF1F7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#4FB0D9] hover:text-[#0A1628] transition mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Voltar para o início
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-[#D6E2EC] overflow-hidden">
          <div className="bg-gradient-to-r from-[#0A1628] to-[#4FB0D9] p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Shield size={28} className="text-white" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  Política de Privacidade
                </h1>
                <p className="text-white/70 text-sm mt-1">
                  Última atualização: {new Date().toLocaleDateString('pt-PT')}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#0A1628] flex items-center gap-3">
                <Lock size={20} className="text-[#4FB0D9]" />
                Compromisso com a sua privacidade
              </h2>
              <p className="mt-3 text-[#3A5368] leading-relaxed">
                A RiseON está empenhada em proteger a privacidade e os dados pessoais dos seus utilizadores, clientes e parceiros. Esta Política de Privacidade descreve como recolhemos, utilizamos, armazenamos e protegemos as suas informações.
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D6E2EC] to-transparent"></div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-3">
                <Database size={18} className="text-[#4FB0D9]" />
                Dados que recolhemos
              </h2>
              <ul className="mt-3 space-y-2 text-[#3A5368] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Dados de identificação:</strong> nome, email, telefone, morada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Dados profissionais:</strong> cargo, empresa, área de atuação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Dados de navegação:</strong> IP, tipo de dispositivo, páginas visitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Cookies:</strong> informações sobre a sua interação com o nosso site</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-3">
                <Eye size={18} className="text-[#4FB0D9]" />
                Como utilizamos os seus dados
              </h2>
              <ul className="mt-3 space-y-2 text-[#3A5368] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span>Prestação de serviços de recrutamento e consultoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span>Comunicação e gestão de processos de seleção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span>Envio de informações sobre os nossos serviços</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span>Melhoria contínua da experiência do utilizador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span>Cumprimento de obrigações legais e regulatórias</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-3">
                <FileText size={18} className="text-[#4FB0D9]" />
                Os seus direitos
              </h2>
              <p className="mt-3 text-[#3A5368] text-sm leading-relaxed">
                De acordo com o Regulamento Geral de Proteção de Dados (RGPD), tem direito a:
              </p>
              <ul className="mt-3 space-y-2 text-[#3A5368] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Acesso:</strong> saber quais os seus dados que temos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Retificação:</strong> corrigir dados incorretos ou incompletos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Eliminação:</strong> solicitar a remoção dos seus dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Oposição:</strong> opor-se ao tratamento dos seus dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Portabilidade:</strong> receber os seus dados em formato digital</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EAF1F7] rounded-xl p-6 border border-[#D6E2EC]">
              <h3 className="font-heading text-lg font-bold text-[#0A1628]">Contacto para questões de privacidade</h3>
              <p className="mt-2 text-[#3A5368] text-sm">
                Para exercer os seus direitos ou esclarecer dúvidas, contacte-nos:
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-3 text-sm">
                <a href="mailto:privacidade@riseon.pt" className="text-[#4FB0D9] hover:text-[#0A1628] transition font-medium">
                  📧 privacidade@riseon.pt
                </a>
                <span className="text-[#6A859C]">|</span>
                <a href="tel:+351923330190" className="text-[#4FB0D9] hover:text-[#0A1628] transition font-medium">
                  📞 +351 923 330 190
                </a>
              </div>
            </div>

            <p className="text-xs text-[#6A859C] text-center">
              Esta Política de Privacidade está em conformidade com o RGPD (UE) 2016/679.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}