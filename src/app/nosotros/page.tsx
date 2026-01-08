import { Quote, Shield, Target, Eye } from 'lucide-react';
import CtaSection from "@/components/pages/shared/CtaSection";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <AnimatedOnScroll>
        <div className="bg-transparent py-24 sm:py-32">
          <div className="container mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Socios en tu crecimiento
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
                Nacimos para ser la agencia de seguros más eficiente de España, generando soluciones simples para nuestros protegidos, con el respaldo de la aseguradora líder.
              </p>
          </div>
        </div>
      </AnimatedOnScroll>

      <div className="container mx-auto py-16 sm:py-24">
        <AnimatedOnScroll>
          <div className="w-full text-left">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">Nuestra Historia y Filosofía</h2>
              <div className="mt-6 space-y-4 text-primary-foreground">
                  <p>
                      CONFÍA Agencia de Seguros nació de la visión de un grupo de profesionales con décadas de experiencia en los sectores asegurador y financiero. Observamos una necesidad clara en el mercado: las empresas españolas requerían un socio especializado en garantías que comprendiera sus retos y les ofreciera soluciones más allá del rígido sistema bancario.
                  </p>
                  <p>
                    Decidimos crear una agencia de mediación enfocada 100% en el cliente, capaz de ofrecer un <strong className="text-primary">asesoramiento experto y un servicio ágil.</strong> Para ello, nos asociamos con <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#E10600'}}>Aserta</Link>, la compañía aseguradora líder y especialista en seguros de caución, para distribuir sus productos.
                  </p>
                  <p>
                      Esta alianza nos permite combinar la <strong className="text-primary">solidez y capacidad de suscripción de una gran aseguradora</strong> con la <strong className="text-primary">cercanía, flexibilidad y enfoque en el cliente</strong> de una agencia especializada. En Confía no eres un número, eres un protegido.
                  </p>
              </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">Misión</h3>
                  <p className="mt-2 text-muted-foreground">Generar soluciones simples, mediando con la aseguradora líder para proteger los proyectos de nuestros clientes.</p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">Visión</h3>
                  <p className="mt-2 text-muted-foreground">Ser la agencia de seguros de caución más eficiente y de mayor confianza en España.</p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">Valores</h3>
                  <p className="mt-2 text-muted-foreground">Verdad, Enfoque y Simplicidad. Los pilares que guían cada una de nuestras acciones para protegerle.</p>
              </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <div className="mt-24 bg-primary text-primary-foreground rounded-lg p-12 relative overflow-hidden flex items-center justify-center">
              <blockquote className="text-center text-3xl font-medium leading-9 relative">
                  <p><span className="text-accent">&ldquo;</span>Nunca fallarle al <span className="line-through">CLIENTE</span>, PROTEGIDO.<span className="text-accent">&rdquo;</span></p>
              </blockquote>
          </div>
        </AnimatedOnScroll>
      </div>
      <AnimatedOnScroll>
        <CtaSection />
      </AnimatedOnScroll>
    </>
  );
};

export default AboutPage;
