import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Mail, Phone, Award, Target, Users, ChevronRight } from 'lucide-react';

// Dados da equipa (mesmo que na home)
const teamMembers = [
  {
    id: 'beatriz-ferreira',
    name: 'Beatriz Ferreira',
    role: 'Gerente',
    email: 'beatriz@riseon.pt',
    phone: '+351 923 330 191',
    photo: 'BF',
    bio: 'Especialista em Recrutamento & Seleção com mais de 10 anos de experiência em consultoria de RH. Beatriz lidera a área de Talento da RiseON, garantindo que cada processo de recrutamento seja rigoroso e alinhado com a cultura das empresas.',
    expertise: ['Recrutamento & Seleção', 'Gestão de Talentos', 'HR Consulting', 'People Analytics'],
    experience: '10+ anos em consultoria de RH',
    education: 'Mestrado em Gestão de Recursos Humanos',
  },
  {
    id: 'tomas-ferreira',
    name: 'Tomás Ferreira',
    role: 'Gerente',
    email: 'tomas@riseon.pt',
    phone: '+351 923 330 192',
    photo: 'TF',
    bio: 'Especialista em Estratégia Digital e Performance Analytics. Tomás lidera as áreas de Impacto e Performance da RiseON, ajudando empresas a crescer através de websites institucionais, redes sociais e dashboards de KPIs em tempo real.',
    expertise: ['Estratégia Digital', 'Performance Analytics', 'Website Development', 'Data Visualization'],
    experience: '8+ anos em estratégia digital',
    education: 'Mestrado em Business Intelligence',
  },
];

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 bg-riseon-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Voltar */}
        <Link
          href="/#equipa"
          className="inline-flex items-center gap-2 text-riseon-blue hover:text-riseon-navy transition mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Voltar para a equipa
        </Link>

        {/* Perfil */}
        <div className="bg-white rounded-2xl shadow-lg border border-riseon-borderLight overflow-hidden">
          {/* Header com gradiente */}
          <div className="bg-gradient-to-r from-riseon-navy to-riseon-blue p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-white font-heading text-5xl font-bold border-4 border-white/30 shadow-xl">
                {member.photo}
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  {member.name}
                </h1>
                <p className="text-gold-light text-lg font-medium mt-1">{member.role}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                  <span className="flex items-center gap-2 text-white/80 text-sm">
                    <Mail size={16} className="text-gold" />
                    {member.email}
                  </span>
                  <span className="flex items-center gap-2 text-white/80 text-sm">
                    <Phone size={16} className="text-gold" />
                    {member.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Bio */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-riseon-navy">Sobre</h2>
              <p className="mt-3 text-riseon-textSecondary leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Grid info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-riseon-surface rounded-xl p-6 border border-riseon-borderLight">
                <div className="flex items-center gap-3">
                  <Award className="text-gold-dark" size={24} />
                  <h3 className="font-heading text-lg font-semibold text-riseon-navy">Experiência</h3>
                </div>
                <p className="mt-2 text-riseon-textSecondary text-sm">{member.experience}</p>
              </div>
              <div className="bg-riseon-surface rounded-xl p-6 border border-riseon-borderLight">
                <div className="flex items-center gap-3">
                  <Target className="text-riseon-blue" size={24} />
                  <h3 className="font-heading text-lg font-semibold text-riseon-navy">Formação</h3>
                </div>
                <p className="mt-2 text-riseon-textSecondary text-sm">{member.education}</p>
              </div>
            </div>

            {/* Áreas de especialização */}
            <div>
              <h3 className="font-heading text-xl font-bold text-riseon-navy flex items-center gap-2">
                <Users size={20} className="text-riseon-blue" />
                Áreas de Especialização
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {member.expertise.map((area) => (
                  <span
                    key={area}
                    className="bg-riseon-navy/5 text-riseon-navy px-4 py-2 rounded-full text-sm font-medium border border-riseon-borderLight"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className=" pt-6 border-t border-riseon-borderLight">
              <Link
                href="/contactos"
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-riseon-navyDark transition shadow-lg shadow-riseon-navy/20"
              >
                Falar com {member.name.split(' ')[0]}
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}