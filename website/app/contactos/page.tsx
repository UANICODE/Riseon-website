'use client';

import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function Contactos() {
  const latitude = 38.6979;
  const longitude = -9.4215;
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15&maptype=roadmap`;
  const openMaps = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="pt-24 pb-16 bg-[#EAF1F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
         
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#0A1628] mt-2">
            Fale <span className="text-[#4FB0D9]">connosco</span>
          </h1>
          <p className="mt-4 text-[#3A5368] max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contacto e descubra como a RiseON pode impulsionar o seu crescimento.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
              <MapPin className="text-[#0A1628] flex-shrink-0 mt-1" size={24} />
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
                  className="inline-flex items-center gap-1 text-[#4FB0D9] text-sm font-medium mt-2 hover:text-[#2A7FAA] transition"
                >
                  <Navigation size={14} />
                  Como chegar
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
              <Phone className="text-[#4FB0D9] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-[#0A1628]">Telefone</h4>
                <a href="tel:+351923330190" className="text-[#3A5368] text-sm hover:text-[#4FB0D9] transition">
                  +351 923 330 190
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
              <Mail className="text-[#2A7FAA] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-[#0A1628]">Email</h4>
                <a href="mailto:geral@riseon.pt" className="text-[#3A5368] text-sm hover:text-[#4FB0D9] transition">
                  geral@riseon.pt
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D6E2EC] flex items-start gap-4 hover:shadow-md transition">
              <Clock className="text-[#0A1628] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-[#0A1628]">Horário</h4>
                <p className="text-[#3A5368] text-sm">
                  Segunda a Sexta: 08:00 – 20:00<br />
                  Sábado: 09:00 – 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#D6E2EC]">
            <h3 className="font-heading text-2xl font-bold text-[#0A1628]">Envie uma mensagem</h3>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-[#3A5368]">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  required
                  className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB0D9] focus:border-transparent transition"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3A5368]">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB0D9] focus:border-transparent transition"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-[#3A5368]">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB0D9] focus:border-transparent transition"
                  placeholder="+351 912 345 678"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-[#3A5368]">Mensagem *</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  required
                  className="mt-1 w-full px-4 py-3 border border-[#D6E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FB0D9] focus:border-transparent transition"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4FB0D9] text-white py-3.5 rounded-md font-medium hover:bg-[#2A7FAA] transition shadow-sm hover:shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

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
                <MapPin size={16} className="text-[#0A1628]" />
                <span className="text-sm font-medium text-[#0A1628]">RiseON - Cascais</span>
              </div>
              <p className="text-xs text-[#6A859C]">Rua José Florindo, 44C</p>
            </div>
            <a
              href={openMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-[#4FB0D9] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2A7FAA] transition shadow-lg hover:shadow-xl flex items-center gap-2"
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