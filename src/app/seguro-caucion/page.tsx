import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Users, Shield, Building } from 'lucide-react';
import CtaSection from '@/components/pages/shared/CtaSection';

const figures = [
  { name: 'Tomador del Seguro', role: 'El contratista o empresa que contrata la póliza para garantizar su obligación.', icon: <Users className="w-8 h-8 text-accent" /> },
  { name: 'Asegurado / Beneficiario', role: 'La entidad (pública o privada) que recibe la garantía y sería indemnizada en caso de incumplimiento.', icon: <Shield className="w-8 h-8 text-accent" /> },
  { name: 'Asegurador', role: 'La compañía de seguros que emite la póliza y asume el riesgo.', icon: <Building className="w-8 h-8 text-accent" /> },
];

const SuretyBondPage = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto text-center py-16 sm:py-24">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            ¿Qué es el Seguro de Caución?
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            La herramienta clave para garantizar sus obligaciones contractuales con agilidad, solvencia y sin consumir recursos bancarios.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Un Contrato de Garantía a su Favor</h2>
            <div className="space-y-4 text-white">
              <p>
                El seguro de caución es un contrato mediante el cual una compañía aseguradora se obliga a indemnizar al beneficiario (asegurado) por los perjuicios que sufra en caso de que el contratista (tomador) incumpla las obligaciones, legales o contractuales, que mantenga con él.
              </p>
              <p>
                En esencia, es una garantía de cumplimiento que sustituye a los tradicionales y más costosos avales bancarios. Su principal objetivo es asegurar que un acuerdo entre dos partes se cumpla en tiempo y forma, protegiendo al beneficiario sin perjudicar la capacidad financiera del contratista.
              </p>
            </div>
          </div>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline">¿Para quién es?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-start"><Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Empresas que licitan con la Administración Pública.</p>
              <p className="flex items-start"><Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Constructoras, promotoras e ingenierías.</p>
              <p className="flex items-start"><Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Empresas de servicios, suministros o instalación.</p>
              <p className="flex items-start"><Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Empresas con obligaciones legales específicas (ej. agencias de viaje).</p>
              <p className="flex items-start"><Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Compañías que operan en mercados internacionales.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24">
          <h2 className="font-headline text-3xl font-bold text-primary text-center mb-12">Las Figuras Clave del Contrato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {figures.map(figure => (
              <div key={figure.name} className="text-center bg-card p-8 rounded-lg shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">{figure.icon}</div>
                <h3 className="font-headline text-xl font-semibold text-primary">{figure.name}</h3>
                <p className="mt-2 text-muted-foreground">{figure.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default SuretyBondPage;
