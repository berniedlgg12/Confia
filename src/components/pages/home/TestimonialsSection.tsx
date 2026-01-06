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

const testimonials = [
  {
    text: "El cambio a los seguros de caución con CONFÍA ha sido un antes y un después. Ahora podemos presentarnos a más concursos sin preocuparnos por el impacto en nuestras líneas de crédito. Su equipo es increíblemente profesional y eficiente.",
    name: 'Javier García',
    title: 'Director de Contratación, G-Construct',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
  },
  {
    text: "Necesitábamos una solución para las cantidades entregadas a cuenta que no afectara nuestra financiación. Confía entendió nuestras necesidades y nos ofreció una póliza de caución de Aserta que nos ha dado una flexibilidad enorme.",
    name: 'Laura Méndez',
    title: 'CEO, Promociones Urbanas S.L.',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  },
    {
    text: "Teníamos varias obras en marcha y la gestión de avales bancarios era un quebradero de cabeza. El equipo de Confía nos asesoró y consolidamos todas nuestras garantías bajo seguros de caución de Aserta. El ahorro en costes y tiempo ha sido notable.",
    name: 'Carlos Jiménez',
    title: 'Jefe de Obra, Infraestructuras Globales',
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-transparent py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nunca fallamos al Protegido
          </h2>
          <p className="mt-4 text-lg text-white">
              Nuestra mayor satisfacción es el éxito y la tranquilidad de las empresas que confían en nosotros.
          </p>
          
          <Carousel
          opts={{
              align: "start",
              loop: true,
          }}
          className="w-full mt-12"
          >
          <CarouselContent>
              {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                  <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="flex flex-col items-center text-center p-0">
                      <blockquote className="max-w-2xl text-xl font-medium text-white">
                      &ldquo;{testimonial.text}&rdquo;
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
          <div className="mt-6">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
          </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
