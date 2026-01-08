
import HeroSection from '@/components/pages/home/HeroSection';
import ValueProposition from '@/components/pages/home/ValueProposition';
import ServicesSnapshot from '@/components/pages/home/ServicesSnapshot';
import HowItWorks from '@/components/pages/home/AdvantagesIntro';
import CtaSection from '@/components/pages/shared/CtaSection';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import MottoSection from '@/components/pages/home/MottoSection';

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
