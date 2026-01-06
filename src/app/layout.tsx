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
        <div className="fixed inset-0 -z-20 h-full w-full bg-white"></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div 
          className="fixed inset-0 -z-30 h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #f5b3a8, #e83322, #8c1d16, #000000)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="fixed inset-0 -z-40 h-full w-full opacity-5">
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
