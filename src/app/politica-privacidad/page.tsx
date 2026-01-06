import AnimatedOnScroll from '@/components/AnimatedOnScroll';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-transparent">
      <AnimatedOnScroll>
        <div className="container mx-auto py-16 sm:py-24">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-muted-foreground">Última actualización: 6 de enero 2026</p>
          </header>

          <div className="max-w-4xl mx-auto prose prose-lg text-primary-foreground space-y-6">
            <p>
              En CONFÍA Agencia de Seguro S.L. (“Confía”, “nosotros”), con domicilio en Calle Ferraz 2, 2° izquierda, 28008 Madrid, y C.I.F. B-12345678, nos comprometemos a proteger y respetar su privacidad. Esta política establece cómo tratamos cualquier dato personal que recopilamos de usted o que usted nos proporciona.
            </p>

            <h2 className="text-2xl font-bold text-primary">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es CONFÍA Agencia de Seguro S.L., con los datos de contacto proporcionados anteriormente. Puede contactarnos por correo electrónico en <a href="mailto:bdlg@confiax.es" className="text-primary hover:underline">bdlg@confiax.es</a>.
            </p>

            <h2 className="text-2xl font-bold text-primary">2. Información que recopilamos</h2>
            <p>
              Recopilamos y tratamos los siguientes datos sobre usted:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Información que usted nos facilita:</strong> Es la información que nos proporciona al rellenar formularios en nuestro sitio web www.confiax.es, como el formulario de contacto. Incluye su nombre, empresa, CIF/NIF, correo electrónico, teléfono y cualquier otra información que nos proporcione en su mensaje.
              </li>
              <li>
                <strong>Información que recopilamos automáticamente:</strong> A través de cookies y tecnologías similares, podemos recopilar información técnica sobre su dispositivo, como la dirección IP, el tipo de navegador, el sistema operativo y las páginas que visita en nuestro sitio.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">3. Finalidad del tratamiento</h2>
            <p>
              Utilizamos la información que tenemos sobre usted para los siguientes fines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Para gestionar su solicitud de estudio y ponernos en contacto con usted para ofrecerle el asesoramiento solicitado.</li>
              <li>Para cumplir con nuestras obligaciones legales y contractuales.</li>
              <li>Para mejorar nuestro sitio web y garantizar que el contenido se presente de la manera más efectiva para usted y para su dispositivo.</li>
              <li>Para enviarle comunicaciones comerciales, siempre que tengamos su consentimiento explícito.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-primary">4. Base Jurídica para el Tratamiento</h2>
             <p>
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El <strong>consentimiento</strong> que nos otorga al aceptar esta política y marcar la casilla correspondiente en nuestros formularios.</li>
              <li>La necesidad de ejecutar <strong>medidas precontractuales</strong> a petición suya, como la elaboración de un estudio para un seguro de caución.</li>
              <li>El cumplimiento de nuestras <strong>obligaciones legales</strong>.</li>
            </ul>


            <h2 className="text-2xl font-bold text-primary">5. Conservación de los Datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>

            <h2 className="text-2xl font-bold text-primary">6. Cesión de Datos a Terceros</h2>
            <p>
              Sus datos personales podrán ser cedidos a la compañía aseguradora Aserta Aseguradora S.A.U. con la única finalidad de realizar el estudio de viabilidad y, en su caso, emitir la póliza de seguro de caución solicitada. No cederemos sus datos a otros terceros, salvo que estemos obligados por ley.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, rectificar y suprimir sus datos, así como otros derechos, como se explica en la información adicional. Puede ejercer sus derechos enviando un correo electrónico a <a href="mailto:bdlg@confiax.es" className="text-primary hover:underline">bdlg@confiax.es</a>, adjuntando una copia de su DNI. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>

            <h2 className="text-2xl font-bold text-primary">8. Cambios en Nuestra Política de Privacidad</h2>
            <p>
              Cualquier cambio que realicemos en nuestra política de privacidad en el futuro se publicará en esta página. Le recomendamos que la revise con frecuencia para estar informado de cualquier actualización.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default PrivacyPolicyPage;
