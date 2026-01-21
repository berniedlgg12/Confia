import type { Metadata } from 'next';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Confía',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-transparent">
      <AnimatedOnScroll>
        <div className="container mx-auto py-16 sm:py-24">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-muted-foreground">Última actualización: 6 de enero de 2026</p>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg text-primary-foreground space-y-6">
            <p>
              En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y en la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios de la presente Política de Privacidad.
            </p>

            <h2 className="text-2xl font-bold text-primary">1. Responsable del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Responsable:</strong> CONFÍA AGENCIA DE SEGUROS, S.L.</li>
              <li><strong>CIF:</strong> B87557825</li>
              <li><strong>Domicilio social:</strong> Calle Ferraz 2, 2º izquierda, 28008 Madrid (España)</li>
              <li><strong>Correo electrónico de contacto:</strong> <a href="mailto:bdlg@confiax.es" className="text-primary hover:underline">bdlg@confiax.es</a></li>
              <li><strong>Teléfono:</strong> +34 643 633 288</li>
              <li><strong>Dominio web:</strong> <a href="https://confiax.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://confiax.es</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">2. Datos personales que se recogen</h2>
            <p>
              A través del sitio web se pueden recoger los siguientes datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos identificativos: nombre y apellidos, razón social.</li>
              <li>Datos de contacto: correo electrónico, teléfono.</li>
              <li>Datos profesionales y empresariales: CIF/NIF, tipo de actividad, información relacionada con la solicitud de seguros de caución.</li>
              <li>Cualquier otra información que el usuario facilite voluntariamente a través de los formularios o canales de contacto.</li>
            </ul>
            <p>CONFÍA AGENCIA DE SEGUROS, S.L. no recoge datos especialmente protegidos a través del sitio web.</p>

            <h2 className="text-2xl font-bold text-primary">3. Finalidad del tratamiento</h2>
            <p>
              Los datos personales facilitados por los usuarios serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar solicitudes de información y contacto.</li>
              <li>Realizar estudios de riesgo y análisis preliminares relacionados con seguros de caución.</li>
              <li>Mantener comunicaciones comerciales relacionadas con los servicios solicitados.</li>
              <li>Cumplir con las obligaciones legales aplicables al mediador de seguros.</li>
            </ul>
            <p>En ningún caso se utilizarán los datos para finalidades distintas sin informar previamente al usuario.</p>

            <h2 className="text-2xl font-bold text-primary">4. Legitimación del tratamiento</h2>
            <p>
              La base legal para el tratamiento de los datos es:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El <strong>consentimiento expreso del usuario</strong>, otorgado al marcar las casillas correspondientes en los formularios.</li>
              <li>La <strong>aplicación de medidas precontractuales</strong> solicitadas por el propio interesado.</li>
              <li>El <strong>cumplimiento de obligaciones legales</strong> aplicables a la actividad de mediación de seguros.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">5. Conservación de los datos</h2>
            <p>
              Los datos personales se conservarán:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Durante el tiempo necesario para atender la solicitud del usuario.</li>
              <li>Mientras exista una relación comercial o de interés.</li>
              <li>Durante los plazos legalmente exigidos para el cumplimiento de obligaciones legales.</li>
            </ul>
            <p>Una vez finalizados dichos plazos, los datos serán eliminados de forma segura.</p>

            <h2 className="text-2xl font-bold text-primary">6. Destinatarios de los datos</h2>
            <p>
              Los datos personales no se cederán a terceros, salvo obligación legal o cuando sea necesario para la correcta gestión de la solicitud.
            </p>
            <p>
              En el marco de la actividad de mediación, los datos podrán ser comunicados a la entidad aseguradora <strong><strong>Aserta</strong> Europa, Seguros y Reaseguros, S.A.U.</strong>, exclusivamente cuando resulte necesario para el análisis o tramitación del seguro solicitado.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Derechos de los usuarios</h2>
            <p>
              El usuario puede ejercer en cualquier momento los siguientes derechos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceso a sus datos personales.</li>
              <li>Rectificación de los datos inexactos.</li>
              <li>Supresión de los datos cuando ya no sean necesarios.</li>
              <li>Limitación del tratamiento.</li>
              <li>Oposición al tratamiento.</li>
              <li>Portabilidad de los datos, cuando proceda.</li>
            </ul>
            <p>
              Para ejercer estos derechos, el usuario puede enviar una solicitud acompañada de copia de su documento identificativo al correo electrónico <a href="mailto:bdlg@confiax.es" className="text-primary hover:underline">bdlg@confiax.es</a>.
            </p>
            <p>
              Asimismo, el usuario tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
            </p>

            <h2 className="text-2xl font-bold text-primary">8. Seguridad de los datos</h2>
            <p>
              CONFÍA AGENCIA DE SEGUROS, S.L. adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>

            <h2 className="text-2xl font-bold text-primary">9. Veracidad de los datos</h2>
            <p>
              El usuario garantiza que los datos facilitados son veraces, exactos y actualizados, y se compromete a comunicar cualquier modificación de los mismos.
            </p>

            <h2 className="text-2xl font-bold text-primary">10. Cambios en la Política de Privacidad</h2>
            <p>
              CONFÍA AGENCIA DE SEGUROS, S.L. se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda al usuario revisar periódicamente esta política.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default PrivacyPolicyPage;
