import Image from "next/image";
import { Quote } from 'lucide-react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import CtaSection from "@/components/pages/shared/CtaSection";

const AboutPage = () => {
  const officeImage = PlaceHolderImages.find(p => p.id === 'about-office');
  const teamImage = PlaceHolderImages.find(p => p.id === 'about-team');

  return (
    <>
      <div className="relative isolate overflow-hidden bg-secondary py-24 sm:py-32">
        {officeImage && (
         <Image
          src={officeImage.imageUrl}
          alt={officeImage.description}
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-10"
          data-ai-hint={officeImage.imageHint}
        />
        )}
        <div className="container mx-auto text-center relative">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Somos sus Asesores de Confianza
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Más que proveedores, nos convertimos en una extensión de su equipo financiero y legal.
            </p>
        </div>
      </div>

      <div className="container mx-auto py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Nuestra Historia y Filosofía</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                    <p>
                        CONFÍA Agencia de Seguros nació de la visión de un grupo de profesionales con décadas de experiencia en los sectores asegurador y financiero. Observamos una necesidad clara en el mercado: las empresas españolas requerían un socio especializado en garantías que comprendiera sus retos y les ofreciera soluciones más allá del rígido sistema bancario.
                    </p>
                    <p>
                        Nuestra filosofía se basa en tres pilares: <strong className="text-primary">confianza</strong>, <strong className="text-primary">proximidad</strong> y <strong className="text-primary">excelencia técnica</strong>. Creemos en las relaciones a largo plazo, en sentarnos con nuestros clientes para entender los matices de su negocio y en ofrecer siempre la solución más sólida y eficiente. No somos vendedores; somos asesores estratégicos.
                    </p>
                </div>
            </div>
            <div className="order-1 md:order-2">
                {teamImage && (
                 <Image
                    src={teamImage.imageUrl}
                    alt={teamImage.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint={teamImage.imageHint}
                />
                )}
            </div>
        </div>

        <div className="mt-24 bg-primary text-primary-foreground rounded-lg p-12 relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 w-24 h-24 text-accent/20" />
            <blockquote className="text-center text-2xl font-medium leading-9 relative">
                <p>&ldquo;Nuestro éxito no se mide en pólizas emitidas, sino en los proyectos que nuestros clientes pueden llevar a cabo con la tranquilidad y la solidez que les proporcionamos.&rdquo;</p>
            </blockquote>
            <footer className="mt-8 text-center">
                <p className="font-bold">El Equipo Fundador</p>
                <p className="text-primary-foreground/70">CONFÍA Agencia de Seguros</p>
            </footer>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default AboutPage;
