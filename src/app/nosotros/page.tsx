import Image from "next/image";
import { Quote, Shield, Target, Eye } from 'lucide-react';
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
              Nacimos para ser la agencia de seguros más eficiente de España, generando soluciones simples para nuestros protegidos.
            </p>
        </div>
      </div>

      <div className="container mx-auto py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Nuestra Historia y Filosofía</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                    <p>
                        CONFÍA Agencia de Seguros nació de la visión de un grupo de profesionales con décadas de experiencia en los sectores asegurador y financiero. Observamos una necesidad clara en el mercado: las empresas españolas, especialmente los contratistas, requerían un socio especializado en garantías que comprendiera sus retos y les ofreciera soluciones más allá del rígido sistema bancario.
                    </p>
                    <p>
                        Nuestra filosofía se basa en tres pilares: <strong className="text-primary">Verdad</strong>, <strong className="text-primary">Enfoque</strong> y <strong className="text-primary">Simplicidad</strong>. Creemos en las relaciones a largo plazo y en ser asesores estratégicos para nuestros protegidos.
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

        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg shadow-sm">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-headline text-primary">Misión</h3>
                <p className="mt-2 text-muted-foreground">Generar soluciones simples.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
                <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-headline text-primary">Visión</h3>
                <p className="mt-2 text-muted-foreground">Ser la agencia de seguros más eficiente de España.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-headline text-primary">Propósito</h3>
                <p className="mt-2 text-muted-foreground">Proteger los proyectos y el patrimonio de nuestros clientes.</p>
            </div>
        </div>

        <div className="mt-24 bg-primary text-primary-foreground rounded-lg p-12 relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 w-24 h-24 text-accent/20" />
            <blockquote className="text-center text-2xl font-medium leading-9 relative">
                <p>&ldquo;Nunca fallamos al <span className="line-through">CLIENTE</span>, PROTEGIDO.&rdquo;</p>
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
