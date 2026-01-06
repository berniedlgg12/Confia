import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScanSearch, Rocket, Send } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const steps = [
  {
    icon: <ScanSearch className="h-8 w-8 text-accent" />,
    name: '1. Revisión',
    description: 'Contactas con nosotros, analizamos tu necesidad y la documentación de forma gratuita.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    name: '2. Estudio',
    description: 'Aserta, la aseguradora, realiza el estudio de viabilidad sin coste para ofrecerte las mejores condiciones.',
  },
  {
    icon: <Send className="h-8 w-8 text-accent" />,
    name: '3. Emisión',
    description: 'Una vez aprobada, se emite la póliza de caución y recibes tu garantía lista para presentar.',
  },
];

const HowItWorks = () => {
  const officeImage = PlaceHolderImages.find(p => p.id === 'about-office');
  
  return (
    <section id="como-trabajamos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square lg:aspect-[4/3.5] rounded-lg overflow-hidden">
             {officeImage && (
                <Image
                    src={officeImage.imageUrl}
                    alt={officeImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={officeImage.imageHint}
                />
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Cómo trabajamos: Rápido, Claro y Eficiente
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestro proceso está diseñado para darte una respuesta en tiempo récord. Tu tranquilidad es nuestra prioridad.
            </p>
            <div className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{step.name}</h3>
                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-10">
              <Link href="/contacto">Empezar ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
