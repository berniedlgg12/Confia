import { FileText, Building, Globe } from 'lucide-react';

const services = [
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: 'Garantías para Contratos',
    description: 'Asegure el cumplimiento de sus obligaciones contractuales, tanto en ejecución de obra como en suministro de bienes y servicios.',
  },
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: 'Licitaciones Públicas',
    description: 'Presente sus ofertas a la Administración Pública con las garantías de licitación y adjudicación que exige la ley.',
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: 'Proyectos Internacionales',
    description: 'Le acompañamos en su expansión internacional con garantías adaptadas a los requisitos de cada país.',
  },
];

const ServicesSnapshot = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Cobertura Integral para cada Necesidad
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos un portfolio completo de seguros de caución para cubrir todas las fases de su actividad empresarial.
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
