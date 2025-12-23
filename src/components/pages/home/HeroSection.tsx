import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
       <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent) / 0.03), transparent 40%, hsl(var(--primary) / 0.03) 80%)'
        }}
      />
      <div className="container mx-auto text-center relative">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Generamos Soluciones Simples
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Especialistas en Seguros de Caución y Responsabilidad Civil para contratistas. Garantizamos la solidez de sus proyectos con agilidad y confianza.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Button asChild size="lg">
            <Link href="/contacto">
              Solicitar Asesoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/seguro-caucion">¿Qué es el seguro de caución?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
