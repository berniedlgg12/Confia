import type { Metadata } from 'next';
import HeroSection from '@/components/pages/home/HeroSection';
import ValueProposition from '@/components/pages/home/ValueProposition';
import ServicesSnapshot from '@/components/pages/home/ServicesSnapshot';
import HowItWorks from '@/components/pages/home/AdvantagesIntro';
import CtaSection from '@/components/pages/shared/CtaSection';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MottoSection from '@/components/pages/home/MottoSection';

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedOnScroll>
        <ServicesSnapshot />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <ValueProposition />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <HowItWorks />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <MottoSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <CtaSection />
      </AnimatedOnScroll>
    </>
  );
}
