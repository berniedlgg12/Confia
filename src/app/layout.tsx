import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <body className={cn('font-body antialiased min-h-screen flex flex-col relative')}>
        <div 
          className="fixed inset-0 -z-20 h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(90deg, #F2A36B 0%, #E85C1A 25%, #E10600 50%, #7A0C14 75%, #000000 100%)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="fixed inset-0 -z-10 h-full w-full opacity-5">
            <Image
                src="/Logo/logotipo-usos-01.png"
                alt="Confía Logo Watermark"
                layout="fill"
                objectFit="cover"
                quality={10}
            />
        </div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
