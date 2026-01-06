'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScanSearch, Rocket, Send } from 'lucide-react';

const steps = [
  {
    icon: <ScanSearch className="h-8 w-8 text-primary-foreground" />,
    name: '1. Revisión',
    description: 'Contactas con nosotros, analizamos tu necesidad y la documentación de forma gratuita.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary-foreground" />,
    name: '2. Estudio',
    description: 'Aserta, la aseguradora, realiza el estudio de viabilidad sin coste para ofrecerte las mejores condiciones.',
  },
  {
    icon: <Send className="h-8 w-8 text-primary-foreground" />,
    name: '3. Emisión',
    description: 'Una vez aprobada, se emite la póliza de caución y recibes tu garantía lista para presentar.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-trabajamos" className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            La Alternativa Inteligente
          </h2>
          <p className="mt-4 text-lg text-primary-foreground">
            Optimice la salud financiera de su empresa.
          </p>
        </div>
        <div className="mt-10 space-y-8 max-w-xl w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">{step.name}</h3>
                <p className="mt-1 text-primary-foreground">
                  {step.name === '2. Estudio' ? 'Aserta, la aseguradora, realiza el estudio de viabilidad sin coste para ofrecerte las mejores condiciones.' : step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button asChild className="mt-10">
          <Link href="/contacto">Empezar ahora</Link>
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;
