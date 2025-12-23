import { Award, Users, Zap, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Expertise Técnico',
    description: 'Profundo conocimiento del sector y la normativa para ofrecerle siempre la mejor solución.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Servicio Personalizado',
    description: 'Cada cliente es único. Analizamos sus necesidades para diseñar una cobertura a medida.',
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Agilidad vs. Banca',
    description: 'Procesos más rápidos y flexibles que los de la banca tradicional, para que no pierda oportunidades.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Solidez y Confianza',
    description: 'Trabajamos con aseguradoras de primer nivel para garantizar la máxima solvencia y tranquilidad.',
  },
];

const ValueProposition = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-accent font-headline">Nuestra Diferencia</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Más que un seguro, un socio estratégico
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            En CONFÍA no solo emitimos pólizas, construimos relaciones de confianza a largo plazo, entendiendo y apoyando el crecimiento de su empresa.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-headline font-semibold">{feature.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
