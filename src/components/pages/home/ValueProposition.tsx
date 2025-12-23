import { Check, Compass, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Check className="h-8 w-8 text-accent" />,
    title: 'Verdad ante Todo',
    description: 'Transparencia y honestidad como base de cada interacción. Asesoramiento claro para decisiones informadas.',
  },
  {
    icon: <Compass className="h-8 w-8 text-accent" />,
    title: 'Enfoque',
    description: 'Nos concentramos en lo que importa: encontrar la solución más eficiente para su necesidad específica.',
  },
  {
    icon: <Smile className="h-8 w-8 text-accent" />,
    title: 'Simplicidad',
    description: 'Traducimos la complejidad del sector asegurador en procesos y soluciones sencillas y comprensibles.',
  },
  {
    icon: <div className="font-headline text-2xl font-bold text-accent">VES</div>,
    title: 'Nuestros Valores',
    description: 'Verdad, Enfoque y Simplicidad. Los pilares que guían cada una de nuestras acciones para protegerle.',
  },
];

const ValueProposition = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-accent font-headline">Nuestra Filosofía</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Más que una agencia, sus socios en protección
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            En CONFÍA construimos relaciones a largo plazo basadas en nuestros valores fundamentales. No solo emitimos pólizas, generamos soluciones simples para que usted se sienta seguro.
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
