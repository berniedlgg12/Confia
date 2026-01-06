import { Check, Shield, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Solidez de Aserta',
    description: 'La aseguradora líder en caución en España, con máxima capacidad de suscripción y reaseguro internacional.',
    href: "/nosotros"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: 'Alternativa al Aval',
    description: 'Libera tus líneas de crédito bancarias. El seguro de caución no computa en CIRBE y no inmoviliza tus fondos.',
    href: "/ventajas"
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Asesoramiento Experto',
    description: 'Somos especialistas en caución. Analizamos tu caso y te guiamos para obtener la garantía que necesitas.',
    href: "/nosotros"
  },
  {
    icon: <Check className="h-8 w-8 text-accent" />,
    title: 'Proceso Ágil y Claro',
    description: 'Revisión, estudio y emisión. Te acompañamos en cada paso para que el proceso sea rápido y sin sorpresas.',
    href: "/#como-trabajamos"
  },
];

const ValueProposition = () => {
  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
           <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tu garantía de cumplimiento, sin ataduras
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Combinamos el respaldo de la aseguradora líder, <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" style={{color: '#E10600'}}>Aserta</Link>, con un servicio de mediación cercano y experto para ofrecerte la mejor solución en seguros de caución.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
             <Link href={feature.href} key={feature.title} className="block h-full">
              <Card className="text-center h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:border-accent border">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.title === 'Solidez de Aserta' ? 'La aseguradora líder en caución en España, con máxima capacidad de suscripción y reaseguro internacional.' : feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
