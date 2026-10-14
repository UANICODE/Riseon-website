'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ArrowUpRight,
  Loader2,
  Check,
  AlertCircle,
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';


// ============================================================
// PÁGINA CONTACTOS
// ============================================================

export default function Contactos() {
  const latitude = 38.6979;
  const longitude = -9.4215;
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15&maptype=roadmap`;
  const openMaps = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  // ==========================================================
  // FORM STATE
  // ==========================================================

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false, // ⬅️ NOVO
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setFormData({
      ...formData,
      [target.id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const subjectMap: Record<string, string> = {
      talento: 'Talento — Recrutamento & Seleção',
      impacto: 'Impacto — Website Institucional',
      impacto_rs: 'Impacto — Gestão de Redes Sociais',
      performance: 'Performance — Dashboards & KPIs',
      geral: 'Contacto Geral',
      outro: 'Outro assunto',
    };

    const subjectLabel = subjectMap[formData.subject] || formData.subject;

    try {
      const payload = new FormData();

      payload.append('access_key', '3b07d96a-f89e-4b6c-89a8-5735991a0402');
      payload.append('subject', `[RiseON] Novo contacto — ${subjectLabel}`);
      payload.append('from_name', 'Site RiseON');
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone || 'Não informado');
      payload.append('service', subjectLabel);
      payload.append('message', formData.message || 'Sem mensagem adicional');
      payload.append('consent', formData.consent ? 'Sim' : 'Não'); // ⬅️ NOVO

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false, // ⬅️ reset
        });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen pt-6 pb-16 bg-[#EAF1F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER — COM "SOBRE" */}
          <div className="flex items-center justify-between border-b border-[#D6E2EC] pb-6 mb-12">
            <Link
              href="/"
              className="relative w-56 h-20 sm:w-64 sm:h-24 md:w-72 md:h-28 transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/images/logo_sem_slogan.png"
                alt="RiseON"
                fill
                className="object-contain object-left"
                priority
                quality={100}
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="relative transition group" style={{ color: '#0A1628' }}>
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0a0e3f] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/sobre" className="relative transition group" style={{ color: '#0A1628' }}>
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0a0e3f] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/servicos" className="relative transition group" style={{ color: '#0A1628' }}>
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0a0e3f] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contactos" className="relative transition group font-semibold" style={{ color: '#0A1628' }}>
                Contactos
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0a0e3f] group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* TÍTULO */}
          <div className="text-center fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#0A1628] mt-2">
              Fale <span className="text-[#0a0e3f]">connosco</span>
            </h1>
            <p className="mt-4 text-[#3A5368] max-w-2xl mx-auto">
              Estamos aqui para ajudar. Entre em contacto e descubra como a RiseON pode impulsionar
              o seu crescimento.
            </p>
          </div>

          {/* GRID INFO + FORMULÁRIO */}
          <div className="mt-12 grid lg:grid-cols-2 gap-10">

            {/* INFO */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
                <MapPin className="text-[#0a0e3f] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Sede</h4>
                  <p className="text-[#3A5368] text-sm">
                    Rua José Florindo, 44C<br />
                    2750-400 Cascais, Portugal
                  </p>
                  <a
                    href={openMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0a0e3f] text-sm font-medium mt-2 hover:text-[#4FB0D9] transition"
                  >
                    <Navigation size={14} />
                    Como chegar
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
                <Phone className="text-[#0a0e3f] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Telefone</h4>
                  <a href="tel:+351923330190" className="text-[#3A5368] text-sm hover:text-[#0a0e3f] transition">
                    +351 923 330 190
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
                <Mail className="text-[#0a0e3f] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Email</h4>
                  <a href="mailto:geral@riseon.pt" className="text-[#3A5368] text-sm hover:text-[#0a0e3f] transition">
                    geral@riseon.pt
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
                <Clock className="text-[#0a0e3f] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Horário</h4>
                  <p className="text-[#3A5368] text-sm">
                    Segunda a Sexta: 08:00 – 20:00<br />
                    Sábado: 09:00 – 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#D6E2EC]">
              <h3 className="font-heading text-2xl font-bold text-[#0A1628]">
                Envie uma mensagem
              </h3>

              {submitStatus === 'success' ? (
                <div className="mt-6 rounded-xl bg-green-50 p-6 text-center border border-green-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check size={24} />
                  </div>
                  <p className="mt-4 text-base font-medium text-green-800">
                    Mensagem enviada com sucesso!
                  </p>
                  <p className="mt-2 text-sm text-green-700">
                    Entraremos em contacto brevemente.
                  </p>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="mt-6 rounded-xl bg-red-50 p-6 text-center border border-red-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <AlertCircle size={24} />
                  </div>
                  <p className="mt-4 text-base font-medium text-red-800">
                    Ocorreu um erro
                  </p>
                  <p className="mt-2 text-sm text-red-700">
                    Por favor, tenta novamente.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 text-sm font-medium text-red-600 hover:text-red-800 transition"
                  >
                    Tentar novamente
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3A5368]">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a0e3f] focus:border-transparent transition bg-white text-[#0A1628]"
                      placeholder="O seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3A5368]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a0e3f] focus:border-transparent transition bg-white text-[#0A1628]"
                      placeholder="email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#3A5368]">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a0e3f] focus:border-transparent transition bg-white text-[#0A1628]"
                      placeholder="+351 912 345 678"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#3A5368]">
                      Área de Interesse *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a0e3f] focus:border-transparent transition bg-white text-[#0A1628]"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="talento">Talento — Recrutamento & Seleção</option>
                      <option value="impacto">Impacto — Website Institucional</option>
                      <option value="impacto_rs">Impacto — Gestão de Redes Sociais</option>
                      <option value="performance">Performance — Dashboards & KPIs</option>
                      <option value="geral">Contacto Geral</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#3A5368]">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a0e3f] focus:border-transparent transition bg-white text-[#0A1628] resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>

                  {/* ⬇️ CHECKBOX DE CONSENTIMENTO */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-[#D6E2EC] text-[#0a0e3f] focus:ring-2 focus:ring-[#0a0e3f] focus:ring-offset-0 accent-[#0a0e3f]"
                    />
                    <label htmlFor="consent" className="text-xs text-[#3A5368] leading-relaxed cursor-pointer select-none">
                      Autorizo o tratamento dos meus dados pessoais para efeitos de resposta a este
                      pedido de contacto, nos termos da{' '}
                      <Link
                        href="/politicas/privacidade"
                        className="text-[#0a0e3f] font-medium underline hover:text-[#4FB0D9] transition"
                        target="_blank"
                      >
                        Política de Privacidade
                      </Link>
                      . *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full py-3.5 rounded-full font-semibold text-sm tracking-wide hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 inline-flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: '#0a0e3f',
                      color: '#ffffff',
                      boxShadow: '0 4px 14px rgba(10, 14, 63, 0.25)',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        A enviar...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-md border border-[#D6E2EC]">
            <div className="relative aspect-[16/7] min-h-[300px]">
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da RiseON - Cascais"
                className="absolute inset-0"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-[#D6E2EC]">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#0a0e3f]" />
                  <span className="text-sm font-medium text-[#0A1628]">RiseON - Cascais</span>
                </div>
                <p className="text-xs text-[#6A859C]">Rua José Florindo, 44C</p>
              </div>
              <a
                href={openMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#0a0e3f',
                  color: '#ffffff',
                }}
              >
                <Navigation size={16} />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}