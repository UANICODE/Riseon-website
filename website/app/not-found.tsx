// src/app/[locale]/not-found.tsx
import Link from "next/link";

export default function NotFoundPage() {
  // Usar o locale da URL ou fallback para pt
  const locale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] || 'pt'
    : 'pt';

  return (
    <div className="flex min-h-[70vh] items-center bg-background pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-riseon-navy sm:text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-lg text-riseon-textSecondary">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href={`/${locale}`}
          className="mt-6 inline-block bg-riseon-navy text-white px-6 py-3 rounded-md font-medium hover:bg-riseon-navyDark transition"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
} 
  