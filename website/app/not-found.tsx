import Link from "next/link";

export default function NotFoundPage() {
  const locale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] || 'pt'
    : 'pt';

  return (
    <div className="flex min-h-[70vh] items-center bg-[#EAF1F7] pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-[#0A1628] sm:text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-lg text-[#3A5368]">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href={`/${locale}`}
          className="mt-6 inline-block bg-[#4FB0D9] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2A7FAA] transition shadow-lg shadow-[#4FB0D9]/30"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}