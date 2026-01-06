import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto py-16 sm:py-20">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para dar el siguiente paso?
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Hable con uno de nuestros asesores expertos y descubra cómo el seguro de caución puede beneficiar a su empresa. Sin compromiso.
            </p>
            <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contacto">
                Solicitar Estudio Gratuito
                </Link>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
