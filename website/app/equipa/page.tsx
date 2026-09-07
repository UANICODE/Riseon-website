import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    id: 'beatriz-ferreira',
    name: 'Beatriz Ferreira',
    role: 'Gerente',
    photo: 'BF',
    bio: 'Especialista em Recrutamento & Seleção com mais de 10 anos de experiência.',
  },
  {
    id: 'tomas-ferreira',
    name: 'Tomás Ferreira',
    role: 'Gerente',
    photo: 'TF',
    bio: 'Especialista em Estratégia Digital e Performance Analytics.',
  },
];

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20 bg-riseon-surface min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <span className="text-riseon-blue font-heading text-sm font-semibold tracking-widest uppercase">
            Quem Somos
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-riseon-navy mt-2">
            A nossa <span className="text-riseon-blueLight">Equipa</span>
          </h1>
          <p className="mt-4 text-riseon-textSecondary max-w-2xl mx-auto">
            Conheça os profissionais que estão prontos para impulsionar o crescimento da sua empresa.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href={`/equipa/${member.id}`}
              className="bg-white rounded-2xl p-8 shadow-sm border border-riseon-borderLight hover:shadow-xl hover:border-riseon-blue transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-riseon-navy to-riseon-blue rounded-full flex items-center justify-center text-white font-heading text-2xl font-bold shadow-lg">
                  {member.photo}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-riseon-navy group-hover:text-riseon-blue transition">
                    {member.name}
                  </h3>
                  <p className="text-gold-dark font-medium text-sm">{member.role}</p>
                  <p className="text-riseon-textSecondary text-sm mt-1">{member.bio}</p>
                  <span className="inline-flex items-center gap-1 text-riseon-blue text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                    Ver perfil <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}