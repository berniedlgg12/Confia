import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const advantages = [
  'Sin impacto en CIRBE',
  'No inmoviliza capital ni saldos',
  'Libera sus líneas de crédito bancarias',
  'Proceso más rápido y flexible que un aval',
  'Coste menor y ventajas fiscales'
];

const AdvantagesIntro = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-white font-headline">La Alternativa Inteligente</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Optimice la salud financiera de su empresa
            </p>
            <p className="mt-6 text-lg text-white/80">
              El seguro de caución es la herramienta que le permite crecer sin las ataduras y costes de los avales bancarios tradicionales. Descubra por qué cada vez más empresas eligen esta opción.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/ventajas">Ver todas las ventajas</Link>
            </Button>
          </div>
          <div className="space-y-4">
            {advantages.map((advantage) => (
              <div key={advantage} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mr-3 mt-1" />
                <span className="text-lg text-white">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesIntro;
