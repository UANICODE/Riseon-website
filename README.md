📚 Documentação Técnica Completa
RiseON - Website Corporativo
Versão: 1.0.0
Data: Setembro de 2026
Status: Produção ✅
Cliente: RiseON
Desenvolvedor: Ernesto Uanicela

📑 Índice
Visão Geral do Projeto

Arquitetura do Sistema

Estrutura de Pastas

Identidade Visual

Páginas e Funcionalidades

Componentes Reutilizáveis

SEO e Performance

Instalação e Desenvolvimento

Deploy e Produção

Manutenção e Evolução

1. Visão Geral do Projeto
1.1 Descrição
O website da RiseON é uma plataforma digital profissional que representa uma consultora B2B vocacionada para o crescimento empresarial, com atuação nas áreas de Recrutamento & Seleção, Gestão Digital e Performance Analytics.

1.2 Objetivos Estratégicos
Objetivo	Descrição
Institucional	Apresentar a missão, valores, pilares estratégicos e equipa
Serviços	Detalhar as 3 áreas de atuação: Talent, Impact, Performance
Confiança	Transmitir credibilidade através de prova social (clientes)
Conversão	Facilitar o contacto via formulário e CTAs estratégicos
Presença Digital	Website moderno, responsivo e visualmente atraente
SEO	Estrutura otimizada para mecanismos de busca
1.3 Público-Alvo
Tipo	Descrição
Startups	Empresas em fase de crescimento que precisam de talento e visibilidade
PMEs	Pequenas e médias empresas que buscam otimização de performance
Candidatos	Profissionais à procura de oportunidades de estágio ou emprego
1.4 Proposta de Valor
Talento: Recrutamento & Seleção consultivo e rigoroso

Impacto: Gestão Digital para visibilidade online

Performance: Dashboards com KPIs em tempo real

Proximidade: Acompanhamento próximo e personalizado

Inovação: Soluções modernas baseadas em dados

2. Arquitetura do Sistema
2.1 Stack Tecnológica
Tecnologia	Versão	Finalidade
Next.js	16.3.1	Framework React com App Router
TypeScript	5.x	Tipagem estática
Tailwind CSS	4.x	Estilização utility-first
Turbopack	-	Build e desenvolvimento rápido
Lucide React	1.31.0	Ícones SVG
Google Fonts	-	Fontes (Inter + Playfair Display)
2.2 Diagrama de Arquitetura
text
┌─────────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                               │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      NEXT.JS APPLICATION                           │
├─────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────────┐ │
│ │   Routing     │ │  Components   │ │      Static Generation    │ │
│ │   (App)       │ │   (UI/UX)     │ │      (SSG)                │ │
│ └───────────────┘ └───────────────┘ └───────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────────┐ │
│ │   Content     │ │   Styles      │ │      Images               │ │
│ │   (Data)      │ │   (Tailwind)  │ │      (Optimized)          │ │
│ └───────────────┘ └───────────────┘ └───────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                             │
├─────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────────┐ │
│ │   Vercel      │ │   Google      │ │      Google               │ │
│ │   (Hosting)   │ │   Maps        │ │      Fonts                │ │
│ └───────────────┘ └───────────────┘ └───────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
3. Estrutura de Pastas
text
website/
├── app/
│   ├── layout.tsx                 # Layout principal
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Estilos globais
│   ├── sobre/
│   │   └── page.tsx               # Sobre Nós
│   ├── servicos/
│   │   ├── page.tsx               # Lista de serviços
│   │   ├── talento/
│   │   │   └── page.tsx           # Talento (detalhe)
│   │   ├── impacto/
│   │   │   └── page.tsx           # Impacto (detalhe)
│   │   └── performance/
│   │       └── page.tsx           # Performance (detalhe)
│   ├── equipa/
│   │   ├── page.tsx               # Lista da equipa
│   │   └── [id]/
│   │       └── page.tsx           # Perfil individual
│   ├── clientes/
│   │   ├── page.tsx               # Lista de clientes
│   │   └── [id]/
│   │       └── page.tsx           # Perfil do cliente
│   ├── contactos/
│   │   └── page.tsx               # Contactos + Formulário
│   └── politicas/
│       ├── privacidade/
│       │   └── page.tsx           # Política de Privacidade
│       ├── termos/
│       │   └── page.tsx           # Termos e Condições
│       ├── cookies/
│       │   └── page.tsx           # Política de Cookies
│       └── reclamacoes/
│           └── page.tsx           # Livro de Reclamações
├── components/
│   ├── Navbar.tsx                 # Navegação principal
│   └── Footer.tsx                 # Rodapé
├── public/
│   └── images/
│       ├── hero.png               # Imagem de fundo do hero
│       ├── riseon-logo-white.png  # Logotipo branco
│       ├── beatriz.png            # Foto Beatriz
│       ├── tomas.png              # Foto Tomás
│       ├── mymoment.png           # Logo cliente
│       ├── coolivin.png           # Logo cliente
│       ├── centro-juvenil.png     # Logo cliente
│       ├── dark.png               # Logo cliente
│       ├── madre.png              # Logo cliente
│       ├── clube.png              # Logo cliente
│       ├── pysio.png              # Logo cliente
│       └── skillfull.png          # Logo cliente
├── tailwind.config.ts             # Configuração do Tailwind
├── next.config.ts                 # Configuração do Next.js
├── package.json                   # Dependências
└── README.md                      # Documentação
4. Identidade Visual
4.1 Sistema de Cores
css
/* Design Tokens - globals.css */

@theme {
  /* Cores Principais - RiseON */
  --color-riseon-navy: #0B2B4A;
  --color-riseon-navy-dark: #061A2E;
  --color-riseon-navy-light: #1A4A6E;
  --color-riseon-blue: #2A7FAA;
  --color-riseon-blue-light: #4FB0D9;
  --color-riseon-blue-glow: #6EC8F0;
  
  /* Cores de Superfície */
  --color-riseon-surface: #F6F9FC;
  --color-riseon-surface-muted: #EAF1F7;
  
  /* Cores de Texto */
  --color-riseon-text: #0B1E2E;
  --color-riseon-text-secondary: #3A5368;
  --color-riseon-text-muted: #6A859C;
  
  /* Cores de Borda */
  --color-riseon-border: #D6E2EC;
  --color-riseon-border-light: #E8EFF5;
  
  /* Dourado (destaques) */
  --color-gold: #D9BC66;
  --color-gold-dark: #B99D4F;
  --color-gold-light: #E7D59A;
}
4.2 Paleta de Cores
Cor	Hex	Uso
Navy	#0B2B4A	Fundos, botões primários, footer
Navy Dark	#061A2E	Hover de botões, gradientes
Navy Light	#1A4A6E	Variações de fundo
Blue	#2A7FAA	Destaques secundários
Blue Light	#4FB0D9	Destaques principais, links
Blue Glow	#6EC8F0	Efeitos de glow
Surface	#F6F9FC	Fundo de secções
Gold	#D9BC66	CTAs, destaques, seleção
Gold Dark	#B99D4F	Hover do gold
4.3 Tipografia
css
/* Fontes */
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
Elemento	Fonte	Tamanho	Peso
Títulos (h1)	Playfair Display	48-80px	700
Títulos (h2)	Playfair Display	32-48px	600
Subtítulos	Playfair Display	20-28px	600
Corpo de texto	Inter	16-18px	400
Links/Navegação	Inter	14-16px	500
5. Páginas e Funcionalidades
5.1 Homepage (/)
Secção	Descrição
Hero	Imagem de fundo, logotipo, tagline "Ligar o Talento, Impulsionar o Crescimento", CTAs
Pilares Estratégicos	3 cards: Talent, Impact, Performance
Equipa	Cards com membros da equipa e links para perfis
Prova Social	Marquee com logotipos de clientes
FAQ	Acordeão interativo com perguntas frequentes
CTA Final	"Pronto para crescer?" com botão de agendamento
5.2 Sobre Nós (/sobre)
Secção	Descrição
Introdução	Fundada em janeiro de 2026, sede em Cascais, consultora B2B
Missão	"Ligar o Talento, Impulsionar o Crescimento"
Valores	Transparência, Compromisso, Agilidade e Simplicidade, Inovação e Crescimento
Pilares Estratégicos	Talent, Impact, Performance
Equipa	Beatriz Ferreira e Tomás Ferreira (Gerentes)
Prova Social	Clientes com links para detalhes
5.3 Serviços (/servicos)
Página	Descrição
Lista de Serviços	3 cards com links para detalhes
Talento	Recrutamento & Seleção, Processo de seleção (6 passos), Tipologias (Estágios Curriculares €120-140, Estágios Extracurriculares €170-200, Perfis Seniores €260)
Impacto	Criação & Manutenção de Website, Gestão de Redes Sociais
Performance	Dashboards personalizados, Centralização de dados, KPIs em tempo real
5.4 Equipa (/equipa e /equipa/[id])
Página	Descrição
Lista da Equipa	Cards com todos os membros
Perfil Individual	Bio, experiência, formação, áreas de especialização, contacto
5.5 Clientes (/clientes e /clientes/[id])
Página	Descrição
Lista de Clientes	Grid com todos os clientes e logotipos
Perfil do Cliente	Descrição da empresa e nosso trabalho
5.6 Contactos (/contactos)
Secção	Descrição
Informações	Sede, telefone, email, horário
Formulário	Nome, email, telefone, mensagem
Google Maps	Mapa interativo com localização
5.7 Páginas Legais
Página	URL
Política de Privacidade	/politicas/privacidade
Termos e Condições	/politicas/termos
Política de Cookies	/politicas/cookies
Livro de Reclamações	/politicas/reclamacoes
6. Componentes Reutilizáveis
6.1 Navbar (components/Navbar.tsx)
tsx
// Características
- Fixed / sticky
- Fundo transparente na home (com gradiente)
- Fundo escuro nas outras páginas
- Efeito de scroll
- Menu mobile com animação
- Links com hover glow
- CTA "Falar com Especialista"
6.2 Footer (components/Footer.tsx)
tsx
// Características
- 4 colunas: Logo, Navegação, Legal, Contactos
- Newsletter (input + CTA)
- Ícones de redes sociais (SVG inline)
- Links para páginas legais
- "Voltar ao topo"
- "Developed by Ernesto Uanicela"
6.3 Animações (globals.css)
css
/* Animações disponíveis */
.fade-in-up        → Fade + translação para cima
.animate-slideDown → Slide down
.animate-shimmer   → Efeito de brilho
.animate-marquee   → Carrossel infinito
.animate-gradient  → Gradiente animado
.pulse-glow        → Pulsar com glow
7. SEO e Performance
7.1 SEO Implementado
Elemento	Descrição
Títulos	Títulos semânticos (h1, h2, h3...)
Meta Tags	Título e descrição personalizados
Open Graph	Metadados para partilha em redes sociais
Imagens	priority no hero, loading="lazy" nas restantes
Sitemap	Gerado automaticamente via Next.js
Robots	robots.txt configurado
7.2 Performance
Métrica	Alvo	Status
LCP	< 2.5s	✅ Otimizado
FID	< 100ms	✅ Otimizado
CLS	< 0.1	✅ Otimizado
INP	< 200ms	✅ Otimizado
7.3 Otimizações
✅ Imagens otimizadas com next/image

✅ Fontes com display: swap

✅ Code splitting automático

✅ Lazy loading em componentes

✅ CSS purgado com Tailwind

8. Instalação e Desenvolvimento
8.1 Pré-requisitos
bash
Node.js >= 20.x
pnpm >= 8.x (ou npm/yarn)
8.2 Instalação
bash
# Clonar o repositório
git clone <url-do-repositorio>
cd website

# Instalar dependências
pnpm install
# ou
npm install

# Criar ficheiro .env.local (se necessário)
touch .env.local
8.3 Desenvolvimento
bash
# Iniciar servidor de desenvolvimento
pnpm dev
# ou
npm run dev

# Abrir http://localhost:3000
8.4 Comandos Disponíveis
Comando	Descrição
pnpm dev	Servidor de desenvolvimento com Turbopack
pnpm build	Build de produção
pnpm start	Servir build de produção
pnpm lint	Verificar código com ESLint
pnpm clean	Limpar cache .next
8.5 Scripts no package.json
json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "clean": "rm -rf .next"
  }
}
9. Deploy e Produção
9.1 Build de Produção
bash
# Build
pnpm build

# Iniciar produção
pnpm start
9.2 Deploy na Vercel (Recomendado)
bash
# Instalar Vercel CLI
pnpm install -g vercel

# Deploy
vercel
# ou
vercel --prod
9.3 Deploy Manual (servidor próprio)
bash
# Build
pnpm build

# Copiar para servidor
scp -r .next/ user@server:/var/www/riseon/
scp -r public/ user@server:/var/www/riseon/
scp package.json user@server:/var/www/riseon/

# No servidor
cd /var/www/riseon/
pnpm install --prod
pnpm start
9.4 Variáveis de Ambiente
bash
# .env.local (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
10. Manutenção e Evolução
10.1 Como Adicionar Conteúdo
Adicionar membro da equipa:
tsx
// app/page.tsx e app/equipa/[id]/page.tsx
const teamMembers = [
  // ... membros existentes
  {
    id: 'novo-membro',
    name: 'Nome do Membro',
    role: 'Cargo',
    email: 'email@riseon.pt',
    photo: '/images/novo-membro.png',
    bio: 'Biografia do membro...',
    expertise: ['Área 1', 'Área 2'],
    experience: 'X anos de experiência',
    education: 'Formação académica',
  },
];
Adicionar cliente:
tsx
// app/page.tsx, app/clientes/page.tsx, app/clientes/[id]/page.tsx
const clients = [
  // ... clientes existentes
  { 
    name: 'Nome do Cliente', 
    id: 'nome-cliente', 
    logo: '/images/logo-cliente.png',
    descricao: 'Descrição da empresa...',
    servico: 'Serviço prestado...',
  },
];
Adicionar FAQ:
tsx
// app/page.tsx
const faqData = [
  // ... perguntas existentes
  {
    question: 'Nova pergunta?',
    answer: 'Resposta da nova pergunta...',
  },
];
10.2 Estrutura de Dados
typescript
// Tipos de dados

// Membro da Equipa
interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  photo: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
}

// Cliente
interface Client {
  id: string;
  name: string;
  logo: string;
  descricao: string;
  servico: string;
}

// FAQ
interface FAQ {
  question: string;
  answer: string;
}
10.3 Próximas Evoluções
Funcionalidade	Prioridade	Descrição
Multilíngue	⭐⭐⭐	Adicionar versão em Inglês
Blog/Insights	⭐⭐⭐	Artigos jurídicos e conteúdo
CMS	⭐⭐	Gestão de conteúdo via WordPress/Sanity
Formulário Avançado	⭐⭐	Validação e integração com CRM
Analytics	⭐⭐	Google Analytics 4 integrado
Newsletter	⭐	Integração com Mailchimp
11. Anexos
11.1 Dependências
json
{
  "dependencies": {
    "lucide-react": "^1.31.0",
    "next": "16.3.1",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
11.2 Links Úteis
Recurso	Link
Next.js	https://nextjs.org/docs
Tailwind CSS	https://tailwindcss.com/docs
Lucide Icons	https://lucide.dev/icons
Google Fonts	https://fonts.google.com
Vercel	https://vercel.com/docs
11.3 Contacto do Desenvolvedor
Informação	Detalhe
Nome	Ernesto Uanicela
Email	ernesto@uanicela.dev
GitHub	https://github.com/ernesto-uanicela
📝 Changelog
Versão	Data	Alterações
1.0.0	Set/2026	Lançamento inicial do website RiseON
© 2026 RiseON. Todos os direitos reservados.

