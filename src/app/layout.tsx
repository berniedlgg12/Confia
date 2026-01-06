import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Confía | Seguros de Caución Aserta | Rápido y Claro',
  description: 'En Confía te ayudamos a contratar los seguros de caución de Aserta, la aseguradora líder, de forma rápida, clara y personalizada. Alternativa al aval bancario.',
  keywords: 'seguro de caución, caución para licitaciones, aserta, garantía aduanera, caución subvenciones, alternativa al aval bancario, confía seguros',
  openGraph: {
    title: 'Confía | Seguros de Caución Aserta | Rápido y Claro',
    description: 'Soluciones en seguros de caución para empresas. Obtén tu garantía con Aserta de forma ágil y sin consumir tus líneas de crédito.',
    url: 'https://www.confiax.es',
    siteName: 'Confía Agencia de Seguros',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add an OG image to the public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${poppins.variable} ${inter.variable}`}>
      <body className={cn('font-body antialiased min-h-screen flex flex-col relative bg-transparent')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
