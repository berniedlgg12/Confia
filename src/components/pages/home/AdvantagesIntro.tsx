import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const advantages = [
  'Sin impacto en CIRBE',
  'No inmoviliza capital',
  'No reduce su capacidad de financiación',
  'Más flexible y ágil que un aval',
  'Ventajas contables y fiscales'
];

const AdvantagesIntro = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-accent font-headline">La Alternativa Inteligente</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Libere el potencial de su empresa
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              El seguro de caución es la herramienta financiera que le permite crecer sin las ataduras y costes de los avales bancarios tradicionales. Descubra por qué cada vez más empresas eligen esta opción.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/ventajas">Ver todas las ventajas</Link>
            </Button>
          </div>
          <div className="space-y-4">
            {advantages.map((advantage) => (
              <div key={advantage} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                <span className="text-lg text-primary">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesIntro;
