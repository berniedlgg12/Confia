import HeroSection from '@/components/pages/home/HeroSection';
import ValueProposition from '@/components/pages/home/ValueProposition';
import ServicesSnapshot from '@/components/pages/home/ServicesSnapshot';
import HowItWorks from '@/components/pages/home/AdvantagesIntro';
import TestimonialsSection from '@/components/pages/home/TestimonialsSection';
import CtaSection from '@/components/pages/shared/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ServicesSnapshot />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
