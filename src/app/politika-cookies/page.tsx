import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import Link from 'next/link';

const CookiesPolicyPage = () => {
  return (
    <div className="bg-transparent">
      <AnimatedOnScroll>
        <div className="container mx-auto py-16 sm:py-24">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Política de Cookies
            </h1>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg text-primary-foreground space-y-6">
            <p>
              En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), esta página web informa, en esta sección, sobre la política de recogida y tratamiento de cookies.
            </p>

            <h2 className="text-2xl font-bold text-primary">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario (ordenador, smartphone, tablet) cuando visita un sitio web. Sirven para garantizar el correcto funcionamiento del sitio, mejorar la experiencia del usuario y obtener información estadística anónima.
            </p>

            <h2 className="text-2xl font-bold text-primary">2. Tipos de cookies utilizadas en este sitio web</h2>
            <p>
              El sitio web <strong>confiax.es</strong> utiliza los siguientes tipos de cookies:
            </p>

            <h3 className="text-xl font-bold text-primary">a) Cookies técnicas (necesarias)</h3>
            <p>
              Son aquellas imprescindibles para el correcto funcionamiento del sitio web y para permitir la navegación del usuario. Estas cookies no requieren consentimiento previo.
            </p>
            <p>Ejemplos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Control de sesión</li>
              <li>Seguridad</li>
              <li>Preferencias básicas de navegación</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">b) Cookies de análisis</h3>
            <p>
              Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico del uso que hacen los usuarios del sitio web, con el fin de mejorar los contenidos y servicios ofrecidos.
            </p>
            <p>Ejemplos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (cookies propias o de terceros, con datos agregados y anónimos)</li>
            </ul>
            <p>
              Estas cookies solo se instalan si el usuario las acepta expresamente.
            </p>

            <h3 className="text-xl font-bold text-primary">c) Cookies de personalización (si aplica)</h3>
            <p>
              Permiten recordar preferencias del usuario, como el idioma o la configuración regional.
            </p>

            <h2 className="text-2xl font-bold text-primary">3. Cookies de terceros</h2>
            <p>
              Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos y de uso del sitio web. En particular, se pueden utilizar servicios proporcionados por Google u otros proveedores tecnológicos, siempre bajo sus propias políticas de privacidad.
            </p>
            <p>
              CONFÍA AGENCIA DE SEGUROS, S.L. no se responsabiliza del contenido ni de la veracidad de las políticas de privacidad de terceros.
            </p>

            <h2 className="text-2xl font-bold text-primary">4. Gestión y configuración de cookies</h2>
            <p>
              El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador que utilice. A continuación, se facilitan enlaces a la información de los principales navegadores:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
            </ul>
            <p>
              La desactivación de cookies puede afectar al correcto funcionamiento del sitio web.
            </p>

            <h2 className="text-2xl font-bold text-primary">5. Aceptación de la Política de Cookies</h2>
            <p>
              Al acceder a este sitio web, el usuario verá un aviso de cookies donde podrá <strong>aceptar</strong>, <strong>rechazar</strong> o <strong>configurar</strong> el uso de cookies no necesarias. La aceptación del usuario se almacena conforme a la normativa vigente.
            </p>

            <h2 className="text-2xl font-bold text-primary">6. Actualización de la Política de Cookies</h2>
            <p>
              La presente Política de Cookies puede ser modificada en función de exigencias legislativas o técnicas. Se recomienda al usuario revisarla periódicamente.
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

export default CookiesPolicyPage;
