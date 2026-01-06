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
            <p className="mt-4 text-muted-foreground">Última actualización: 24 de mayo de 2024</p>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg text-primary-foreground space-y-6">
            <h2 className="text-2xl font-bold text-primary">1. ¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
            </p>

            <h2 className="text-2xl font-bold text-primary">2. ¿Qué tipos de cookies utiliza este sitio web?</h2>
            <p>
              Este sitio web, www.confiax.es, utiliza los siguientes tipos de cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies técnicas:</strong> Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada, cuándo navega un usuario anónimo y uno registrado, tareas básicas para el funcionamiento de cualquier web dinámica.
              </li>
              <li>
                <strong>Cookies de análisis:</strong> Recogen información sobre el tipo de navegación que está realizando, las secciones que más utiliza, productos consultados, franja horaria de uso, idioma, etc. El objetivo es medir la actividad del sitio web para introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.
              </li>
               <li>
                <strong>Cookies de terceros:</strong> Este sitio web puede utilizar servicios de terceros que, por cuenta de Google, recopilarán información con fines estadísticos, de uso del Site por parte del usuario y para la prestación de otros servicios relacionados con la actividad del Website y otros servicios de Internet. En particular, este sitio web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">3. ¿Cómo desactivar o eliminar las cookies?</h2>
            <p>
              En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. A continuación, le proporcionamos enlaces a las guías de los navegadores más populares:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
            </ul>
             <p>
              Confía no se hace responsable del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
            </p>

            <h2 className="text-2xl font-bold text-primary">4. Consentimiento</h2>
            <p>
              Al navegar y continuar en nuestro sitio web estará consintiendo el uso de las cookies antes enunciadas, y en las condiciones contenidas en la presente Política de Cookies. Para más información sobre el uso de sus datos, puede consultar nuestra <Link href="/politica-privacidad" className="text-accent hover:underline">Política de Privacidad</Link>.
            </p>

             <h2 className="text-2xl font-bold text-primary">5. Cambios en la Política de Cookies</h2>
            <p>
              Podemos actualizar la Política de Cookies de nuestro sitio web, por lo que le recomendamos revisar esta política cada vez que acceda a nuestro sitio con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default CookiesPolicyPage;
