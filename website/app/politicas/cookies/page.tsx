import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, Shield, Info, CheckCircle } from 'lucide-react';

export default function PoliticaCookies() {
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
                <Cookie size={28} className="text-white" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  Política de Cookies
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
                <Info size={20} className="text-[#4FB0D9]" />
                O que são Cookies?
              </h2>
              <p className="mt-3 text-[#3A5368] leading-relaxed">
                Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um site. Eles permitem que o site reconheça o seu dispositivo, recorde as suas preferências e melhore a sua experiência de navegação.
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D6E2EC] to-transparent"></div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-3">
                <Cookie size={18} className="text-[#4FB0D9]" />
                Cookies que utilizamos
              </h2>
              <div className="mt-4 space-y-4">
                <div className="bg-[#EAF1F7] rounded-xl p-5 border border-[#D6E2EC]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[#0A1628]">Cookies Essenciais</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Sempre ativos</span>
                  </div>
                  <p className="mt-2 text-[#3A5368] text-sm">
                    Necessários para o funcionamento básico do site. Permitem a navegação e acesso a áreas seguras.
                  </p>
                </div>

                <div className="bg-[#EAF1F7] rounded-xl p-5 border border-[#D6E2EC]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[#0A1628]">Cookies de Preferências</h4>
                    <span className="text-xs bg-[#4FB0D9]/20 text-[#2A7FAA] px-2 py-1 rounded-full">Opcional</span>
                  </div>
                  <p className="mt-2 text-[#3A5368] text-sm">
                    Recordam as suas preferências, como idioma e região, para melhorar a sua experiência.
                  </p>
                </div>

                <div className="bg-[#EAF1F7] rounded-xl p-5 border border-[#D6E2EC]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[#0A1628]">Cookies de Análise</h4>
                    <span className="text-xs bg-[#4FB0D9]/20 text-[#2A7FAA] px-2 py-1 rounded-full">Opcional</span>
                  </div>
                  <p className="mt-2 text-[#3A5368] text-sm">
                    Recolhem informações anónimas sobre como os utilizadores interagem com o site (Google Analytics).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#0A1628] flex items-center gap-3">
                <Settings size={18} className="text-[#4FB0D9]" />
                Como gerir os Cookies
              </h2>
              <p className="mt-3 text-[#3A5368] text-sm leading-relaxed">
                Pode gerir ou desativar os cookies através das definições do seu navegador:
              </p>
              <ul className="mt-3 space-y-2 text-[#3A5368] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Firefox:</strong> Opções → Privacidade e segurança → Cookies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Safari:</strong> Preferências → Privacidade → Cookies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FB0D9] mt-0.5">•</span>
                  <span><strong>Edge:</strong> Configurações → Cookies e permissões</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EAF1F7] rounded-xl p-6 border border-[#D6E2EC]">
              <h3 className="font-heading text-lg font-bold text-[#0A1628]">Consentimento</h3>
              <p className="mt-2 text-[#3A5368] text-sm">
                Ao continuar a utilizar o nosso site, consente a utilização de cookies de acordo com esta política.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}