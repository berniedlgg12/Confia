import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 bg-transparent">
      <div className="container mx-auto text-center relative">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Generamos Soluciones Simples
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          En Confía te ayudamos a contratar los seguros de caución de Aserta, la aseguradora líder, de forma rápida, clara y personalizada.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contacto">
              Solicitar Estudio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="tel:+34643633288">
              <Phone className="mr-2 h-5 w-5" />
              Hablar con un asesor
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
