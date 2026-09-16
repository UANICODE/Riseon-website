import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: 'RiseON · Ligar o Talento, Impulsionar o Crescimento',
  description:
    'Consultora B2B vocacionada para o crescimento empresarial nas áreas de Recrutamento & Seleção, Gestão Digital e Performance Analytics.',

  // ============================================================
  // FAVICON — logotipo na aba do navegador
  // ============================================================
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/logo_sem_slogan.png', type: 'image/png' },
    ],
    apple: '/images/logo_sem_slogan.png',
    shortcut: '/images/logo_sem_slogan.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-riseon-surface text-riseon-text">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}