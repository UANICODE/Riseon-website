'use client';

import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function Contactos() {
  // Coordenadas da RiseON - Rua José Florindo, 44C, 2750-400 Cascais
  const latitude = 38.6979;
  const longitude = -9.4215;
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15&maptype=roadmap`;

  // Link para abrir no Google Maps
  const openMaps = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="pt-24 pb-16 bg-riseon-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">Contactos</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-riseon-navy mt-2">
            Fale <span className="text-riseon-blueLight">connosco</span>
          </h1>
          <p className="mt-4 text-riseon-textSecondary max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contacto e descubra como a RiseON pode impulsionar o seu crescimento.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Informações */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight flex items-start gap-4 hover:shadow-md transition">
              <MapPin className="text-riseon-navy flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-riseon-navy">Sede</h4>
                <p className="text-riseon-textSecondary text-sm">
                  Rua José Florindo, 44C<br />
                  2750-400 Cascais, Portugal
                </p>
                <a
                  href={openMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-riseon-blue text-sm font-medium mt-2 hover:text-riseon-navy transition"
                >
                  <Navigation size={14} />
                  Como chegar
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight flex items-start gap-4 hover:shadow-md transition">
              <Phone className="text-riseon-blue flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-riseon-navy">Telefone</h4>
                <a href="tel:+351923330190" className="text-riseon-textSecondary text-sm hover:text-riseon-blue transition">
                  +351 923 330 190
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight flex items-start gap-4 hover:shadow-md transition">
              <Mail className="text-gold-dark flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-riseon-navy">Email</h4>
                <a href="mailto:geral@riseon.pt" className="text-riseon-textSecondary text-sm hover:text-riseon-blue transition">
                  geral@riseon.pt
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-riseon-borderLight flex items-start gap-4 hover:shadow-md transition">
              <Clock className="text-riseon-navy flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-riseon-navy">Horário</h4>
                <p className="text-riseon-textSecondary text-sm">
                  Segunda a Sexta: 09:00 – 18:00<br />
                  Sábado e Domingo: Fechado
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-riseon-borderLight">
            <h3 className="font-heading text-2xl font-bold text-riseon-navy">Envie uma mensagem</h3>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-riseon-textSecondary">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  required
                  className="mt-1 w-full px-4 py-3 border border-riseon-borderLight rounded-md focus:outline-none focus:ring-2 focus:ring-riseon-blue focus:border-transparent transition"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-riseon-textSecondary">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 w-full px-4 py-3 border border-riseon-borderLight rounded-md focus:outline-none focus:ring-2 focus:ring-riseon-blue focus:border-transparent transition"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-riseon-textSecondary">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  className="mt-1 w-full px-4 py-3 border border-riseon-borderLight rounded-md focus:outline-none focus:ring-2 focus:ring-riseon-blue focus:border-transparent transition"
                  placeholder="+351 912 345 678"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-riseon-textSecondary">Mensagem *</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  required
                  className="mt-1 w-full px-4 py-3 border border-riseon-borderLight rounded-md focus:outline-none focus:ring-2 focus:ring-riseon-blue focus:border-transparent transition"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-riseon-navy text-white py-3.5 rounded-md font-medium hover:bg-riseon-navyDark transition shadow-sm hover:shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps - funcional */}
        <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-md border border-riseon-borderLight">
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
            {/* Overlay com informação */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-riseon-borderLight">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-riseon-navy" />
                <span className="text-sm font-medium text-riseon-navy">RiseON - Cascais</span>
              </div>
              <p className="text-xs text-riseon-textMuted">Rua José Florindo, 44C</p>
            </div>
            {/* Botão de abrir no mapa */}
            <a
              href={openMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-riseon-navy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-riseon-navyDark transition shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Navigation size={16} />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}