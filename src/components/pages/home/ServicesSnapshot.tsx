import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Award, Truck, LucideIcon, Building2, Sun, Ship, Landmark, HandCoins, Building, Home, Wind, Handshake } from 'lucide-react';

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const solutions: Solution[] = [
  {
    icon: Award,
    title: 'Cumplimiento de contratos públicos',
    description: 'Garantías para licitaciones y adjudicaciones de obra, servicio o suministro.',
    href: '/soluciones#contratos-publicos',
  },
  {
    icon: Handshake,
    title: 'Cumplimiento de contratos privados',
    description: 'Garantiza el cumplimiento de contratos entre entidades privadas.',
    href: '/soluciones#contratos-privados',
  },
  {
    icon: HandCoins,
    title: 'Devolución de cantidades anticipadas',
    description: 'Asegura a los compradores de vivienda la devolución de los anticipos.',
    href: '/soluciones#devolucion-cantidades',
  },
  {
    icon: Landmark,
    title: 'Garantías fiscales y sanciones',
    description: 'Garantías para litigios y para la constitución de garantías que permitan el desarrollo del litigio.',
    href: '/soluciones#fiscales-cnmc',
  },
  {
    icon: Building,
    title: 'Arrendamiento',
    description: 'Garantiza el pago de rentas por alquiler de locales destinados a actividad empresarial.',
    href: '/soluciones#arrendamiento',
  },
  {
    icon: Home,
    title: 'Nowo',
    description: 'Garantiza el pago del alquiler, suministros y gastos de comunidad de vivienda particular.',
    href: '/soluciones#nowo',
  },
];

const ServicesSnapshot = () => {
  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Soluciones de Caución para cada necesidad
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos un portafolio de soluciones enfocado en las necesidades específicas de las empresas del sector de la construcción y servicios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link href={solution.href} key={solution.title} className="block h-full">
              <Card className="bg-card flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-accent border">
                  <CardHeader className="flex-row items-start gap-4">
                    <solution.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg font-semibold">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/soluciones">Ver todas las soluciones</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
