import { Download } from 'lucide-react';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const presentations = [
  {
    title: 'Cómo Funciona el Seguro de Caución',
    description: 'Una guía paso a paso sobre el proceso de obtención y funcionamiento de un seguro de caución, desde la solicitud hasta la emisión.',
    fileUrl: '/presentations/CONFIA-Como-Funciona-Caucion.pdf',
  },
  {
    title: 'Presentación Corporativa CONFÍA',
    description: 'Un resumen completo de nuestros servicios, filosofía y ventajas competitivas. Ideal para nuevos clientes.',
    fileUrl: '/presentations/CONFIA-Presentacion-Corporativa.pdf',
  },
  {
    title: 'El Seguro de Caución vs. Aval Bancario',
    description: 'Análisis detallado de las ventajas financieras y operativas del seguro de caución frente a las alternativas tradicionales.',
    fileUrl: '/presentations/CONFIA-Caucion-vs-Aval.pdf',
  },
  {
    title: 'Soluciones para el Sector Construcción',
    description: 'Presentación enfocada en las garantías y soluciones específicas para empresas del sector de la construcción.',
    fileUrl: '/presentations/CONFIA-Soluciones-Construccion.pdf',
  },
];

const PresentacionesPage = () => {
  return (
    <div className="bg-transparent">
      <AnimatedOnScroll>
        <div className="container mx-auto py-16 sm:py-24">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Recursos y Presentaciones
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Aquí puede descargar nuestras presentaciones en formato PDF.
            </p>
          </header>

          <div className="max-w-4xl mx-auto space-y-8">
            {presentations.map((presentation, index) => (
              <Card key={index} className="border shadow-sm">
                <CardHeader>
                  <CardTitle>{presentation.title}</CardTitle>
                  <CardDescription>{presentation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <a href={presentation.fileUrl} download>
                            <Download className="mr-2 h-4 w-4" />
                            Descargar PDF
                        </a>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default PresentacionesPage;
