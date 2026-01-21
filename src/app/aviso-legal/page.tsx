import type { Metadata } from 'next';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso Legal | Confía',
};

const AvisoLegalPage = () => {
  return (
    <div className="bg-transparent">
      <AnimatedOnScroll>
        <div className="container mx-auto py-16 sm:py-24">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Aviso Legal
            </h1>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg text-primary-foreground space-y-6">
            <p>
              En cumplimiento con lo dispuesto en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos:
            </p>

            <h2 className="text-2xl font-bold text-primary">1. Titular del sitio web</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Denominación social:</strong> CONFÍA AGENCIA DE SEGUROS, S.L.</li>
              <li><strong>CIF:</strong> B87557825</li>
              <li><strong>Domicilio social:</strong> Calle Ferraz 2, 2º izquierda, 28008 Madrid (España)</li>
              <li><strong>Correo electrónico:</strong> <a href="mailto:bdlg@confiax.es" className="text-primary hover:underline">bdlg@confiax.es</a></li>
              <li><strong>Teléfono:</strong> +34 643 633 288</li>
              <li><strong>Dominio web:</strong> <a href="https://confiax.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://confiax.es</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">2. Condición de mediador de seguros</h2>
            <p>
              CONFÍA AGENCIA DE SEGUROS, S.L. actúa como <strong>agente exclusivo de seguros</strong>, conforme a lo dispuesto en el Real Decreto-ley 3/2020, de 4 de febrero, de distribución de seguros y reaseguros privados.
            </p>
            <p>
              La sociedad se encuentra <strong>inscrita (o en proceso de inscripción)</strong> en el <strong>Registro administrativo de distribuidores de seguros de la Dirección General de Seguros y Fondos de Pensiones (DGSFP)</strong>.
            </p>
            <p>
              CONFÍA AGENCIA DE SEGUROS, S.L. distribuye productos de <strong>Aserta Europa, Seguros y Reaseguros, S.A.U.</strong>, entidad aseguradora legalmente autorizada para operar en España.
            </p>

            <h2 className="text-2xl font-bold text-primary">3. Objeto del sitio web</h2>
            <p>
              El presente sitio web tiene por objeto <strong>informar</strong> sobre los seguros de caución y <strong>facilitar la captación de solicitudes de información y estudios de riesgo</strong>, sin que en ningún caso se realice contratación directa de productos aseguradores a través del mismo.
            </p>
            <p>
              Las solicitudes enviadas a través del sitio web no constituyen una oferta vinculante ni implican la formalización de contrato alguno.
            </p>

            <h2 className="text-2xl font-bold text-primary">4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, diseños, logotipos, código fuente y demás elementos, son titularidad de CONFÍA AGENCIA DE SEGUROS, S.L. o de terceros que han autorizado su uso, quedando prohibida su reproducción, distribución o transformación sin autorización expresa del titular.
            </p>

            <h2 className="text-2xl font-bold text-primary">5. Responsabilidad</h2>
            <p>
              CONFÍA AGENCIA DE SEGUROS, S.L. no se hace responsable del uso indebido de los contenidos del sitio web ni de los daños que pudieran derivarse del acceso o uso del mismo.
            </p>
            <p>
              El titular se reserva el derecho a modificar, suspender o eliminar los contenidos del sitio web en cualquier momento y sin previo aviso.
            </p>

            <h2 className="text-2xl font-bold text-primary">6. Enlaces a terceros</h2>
            <p>
              El sitio web puede contener enlaces a páginas web de terceros. CONFÍA AGENCIA DE SEGUROS, S.L. no se responsabiliza del contenido, políticas o prácticas de dichos sitios externos.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Legislación aplicable y jurisdicción</h2>
            <p>
              El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los Juzgados y Tribunales de la ciudad de Madrid, salvo que la normativa aplicable disponga otra cosa.
            </p>
            
            <hr />

            <p className="text-sm text-muted-foreground">
              Última actualización: 6 de enero de 2026
            </p>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default AvisoLegalPage;
