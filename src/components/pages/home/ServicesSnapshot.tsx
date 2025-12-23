import { FileText, Shield, HardHat } from 'lucide-react';

const services = [
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: 'Seguros de Caución',
    description: 'Garantice el cumplimiento de sus obligaciones contractuales y de licitación sin afectar sus líneas de crédito bancarias.',
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Responsabilidad Civil para Contratistas',
    description: 'Proteja su patrimonio frente a daños a terceros derivados de su actividad profesional y de la ejecución de sus obras.',
  },
  {
    icon: <HardHat className="w-10 h-10 text-primary" />,
    title: 'Asesoría Especializada',
    description: 'Le acompañamos en el análisis de riesgos y en la selección de las coberturas que su proyecto realmente necesita.',
  },
];

const ServicesSnapshot = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Cobertura Integral para Contratistas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos un portfolio de soluciones enfocado en las necesidades específicas de las empresas del sector de la construcción y servicios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-8 rounded-lg shadow-sm border border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-headline font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
