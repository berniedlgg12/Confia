import HeroSection from '@/components/pages/home/HeroSection';
import ValueProposition from '@/components/pages/home/ValueProposition';
import ServicesSnapshot from '@/components/pages/home/ServicesSnapshot';
import HowItWorks from '@/components/pages/home/AdvantagesIntro';
import TestimonialsSection from '@/components/pages/home/TestimonialsSection';
import CtaSection from '@/components/pages/shared/CtaSection';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';

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
        <TestimonialsSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <CtaSection />
      </AnimatedOnScroll>
    </>
  );
}
