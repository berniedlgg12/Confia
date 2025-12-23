import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TestimonialGenerator from './TestimonialGenerator';

const testimonials = [
  {
    intro: "Para G-Construct, la agilidad en la obtención de garantías para licitaciones es crucial. CONFÍA nos ha proporcionado una solución rápida y sin el consumo de recursos que suponían los avales bancarios.",
    text: "El cambio a los seguros de caución con CONFÍA ha sido un antes y un después. Ahora podemos presentarnos a más concursos sin preocuparnos por el impacto en nuestras líneas de crédito. Su equipo es increíblemente profesional y eficiente.",
    name: 'Javier García',
    title: 'Director de Contratación, G-Construct',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
  },
  {
    intro: "Promociones Urbanas S.L. ha encontrado en el seguro de caución de CONFÍA la herramienta perfecta para garantizar las entregas a cuenta de sus promociones, generando confianza en sus clientes finales.",
    text: "Necesitábamos una solución para las cantidades entregadas a cuenta que no afectara nuestra financiación para la construcción. CONFÍA entendió perfectamente nuestras necesidades y nos ofreció una póliza de caución que nos ha dado una flexibilidad enorme.",
    name: 'Laura Méndez',
    title: 'CEO, Promociones Urbanas S.L.',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  },
    {
    intro: "Gracias a la gestión de CONFÍA, en Infraestructuras Globales hemos optimizado la gestión de nuestras garantías de buena ejecución, mejorando la eficiencia financiera de nuestros proyectos de obra civil.",
    text: "Teníamos varias obras en marcha y la gestión de avales bancarios era un quebradero de cabeza. El equipo de CONFÍA nos asesoró y consolidamos todas nuestras garantías bajo seguros de caución. El ahorro en costes y tiempo ha sido notable.",
    name: 'Carlos Jiménez',
    title: 'Jefe de Obra, Infraestructuras Globales',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 lg:gap-16 items-center">
            <div className="lg:col-span-2 text-center lg:text-left mb-12 lg:mb-0">
                <h2 className="text-base font-semibold leading-7 text-accent font-headline">Nunca fallamos al Protegido</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                    Lo que dicen nuestros clientes
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                    Nuestra mayor satisfacción es el éxito y la tranquilidad de las empresas que confían en nosotros.
                </p>
                
                <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full mt-8"
                >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                        <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="flex flex-col items-center lg:items-start text-center lg:text-left p-0">
                            <p className="text-lg font-medium text-primary">&ldquo;{testimonial.intro}&rdquo;</p>
                            <blockquote className="mt-4 text-muted-foreground border-l-2 border-accent pl-4 italic">
                            {testimonial.text}
                            </blockquote>
                            <div className="mt-6 flex items-center gap-4">
                            {testimonial.image && (
                                <Image
                                src={testimonial.image.imageUrl}
                                alt={`Foto de ${testimonial.name}`}
                                width={56}
                                height={56}
                                className="rounded-full object-cover"
                                data-ai-hint={testimonial.image.imageHint}
                                />
                            )}
                            <div>
                                <p className="font-semibold text-primary">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                            </div>
                        </CardContent>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden lg:block mt-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
                </Carousel>
            </div>
            <div className="lg:col-span-3">
                <TestimonialGenerator />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
