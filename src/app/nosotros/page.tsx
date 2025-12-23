import { Quote, Shield, Target, Eye } from 'lucide-react';
import CtaSection from "@/components/pages/shared/CtaSection";

const AboutPage = () => {
  return (
    <>
      <div className="bg-transparent py-24 sm:py-32">
        <div className="container mx-auto text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Somos sus Asesores de Confianza
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Nacimos para ser la agencia de seguros más eficiente de España, generando soluciones simples para nuestros protegidos.
            </p>
        </div>
      </div>

      <div className="container mx-auto py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Nuestra Historia y Filosofía</h2>
                <div className="mt-6 space-y-4 text-muted-foreground max-w-3xl mx-auto">
                    <p>
                        CONFÍA Agencia de Seguros nació de la visión de un grupo de profesionales con décadas de experiencia en los sectores asegurador y financiero. Observamos una necesidad clara en el mercado: las empresas españolas, especialmente los contratistas, requerían un socio especializado en garantías que comprendiera sus retos y les ofreciera soluciones más allá del rígido sistema bancario.
                    </p>
                    <p>
                        Nuestra filosofía se basa en tres pilares: <strong className="text-primary">Verdad</strong>, <strong className="text-primary">Enfoque</strong> y <strong className="text-primary">Simplicidad</strong>. Creemos en las relaciones a largo plazo y en ser asesores estratégicos para nuestros protegidos.
                    </p>
                </div>
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
                <p className="mt-2 text-muted-foreground">Proteger los proyectos y el patrimonio de nuestros protegidos.</p>
            </div>
        </div>

        <div className="mt-24 bg-primary text-primary-foreground rounded-lg p-12 relative overflow-hidden flex items-center justify-center">
            <blockquote className="text-center text-3xl font-medium leading-9 relative">
                <p><span className="text-accent">&ldquo;</span>Nunca fallarle al <span className="line-through">cliente</span>, PROTEGIDO.<span className="text-accent">&rdquo;</span></p>
            </blockquote>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default AboutPage;
