import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto py-16 sm:py-20 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
          Hable con uno de nuestros asesores expertos y descubra cómo el seguro de caución puede beneficiar a su empresa. Sin compromiso.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contacto">
              Contactar ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
