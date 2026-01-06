import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Award, Truck, LucideIcon, Building2, Sun, Plane, Scaling, Briefcase, FileArchive } from 'lucide-react';

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const solutions: Solution[] = [
  {
    icon: Award,
    title: 'Licitaciones Públicas y Privadas',
    description: 'Garantías de mantenimiento de oferta, cumplimiento de contrato y buena ejecución.',
    href: '/soluciones#licitaciones',
  },
  {
    icon: Truck,
    title: 'Garantías Aduaneras',
    description: 'Asegura el pago de aranceles e impuestos en operaciones de comercio exterior.',
    href: '/soluciones#aduanas',
  },
  {
    icon: FileText,
    title: 'Aplazamientos y Subvenciones',
    description: 'Garantiza el cumplimiento de pagos aplazados a la administración o el buen fin de subvenciones.',
    href: '/soluciones#subvenciones',
  },
  {
    icon: Sun,
    title: 'Energías Renovables',
    description: 'Garantías para puntos de conexión, construcción y desmantelamiento de plantas.',
    href: '/soluciones#renovables',
  },
  {
    icon: Building2,
    title: 'Cantidades a Cuenta (L.O.E.)',
    description: 'Protege las cantidades anticipadas por los compradores en promociones de viviendas.',
    href: '/soluciones#promotores',
  },
  {
    icon: Briefcase,
    title: 'Otras Garantías Técnicas',
    description: 'Garantías para AENA, operadores del mercado eléctrico (OMIE/MEFF) y más.',
    href: '/soluciones#otras',
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
            Ofrecemos un portfolio de soluciones enfocado en las necesidades específicas de las empresas del sector de la construcción y servicios.
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
