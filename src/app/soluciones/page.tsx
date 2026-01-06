import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CtaSection from "@/components/pages/shared/CtaSection";
import Link from "next/link";
import { LucideIcon, Award, Truck, FileText, Sun, Building2, Briefcase, Plane, Wrench, FileArchive, Building, Recycle, HeartHandshake } from "lucide-react";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  when: string;
  docs: string;
};

const solutions: Solution[] = [
  {
    id: "licitaciones",
    icon: Award,
    title: "Licitaciones y Contratos",
    description: "Garantías para asegurar el mantenimiento de la oferta (provisional) o el cumplimiento del contrato (definitiva). Imprescindibles para contratar con la Administración Pública y grandes empresas.",
    when: "Al presentar una oferta a un concurso o al formalizar un contrato público o privado.",
    docs: "Pliegos de la licitación, contrato a firmar, cuentas anuales de la empresa."
  },
  {
    id: "aduanas",
    icon: Truck,
    title: "Garantías ante la Aduana",
    description: "Asegura el pago de aranceles e impuestos derivados de operaciones de importación y tránsito aduanero, agilizando el comercio exterior.",
    when: "Al realizar importaciones, operar como depósito aduanero o en regímenes de tránsito.",
    docs: "Autorización de la AEAT, histórico de operaciones, cuentas anuales."
  },
  {
    id: "subvenciones",
    icon: FileText,
    title: "Anticipo de Subvenciones",
    description: "Permite el cobro anticipado de subvenciones públicas, garantizando a la Administración el buen fin de los fondos o su devolución en caso de incumplimiento.",
    when: "Al ser beneficiario de una subvención pública que permite el cobro por adelantado.",
    docs: "Resolución de concesión de la subvención, proyecto a realizar, cuentas anuales."
  },
  {
    id: "renovables",
    icon: Sun,
    title: "Energías Renovables",
    description: "Garantías exigidas para asegurar los puntos de conexión a la red eléctrica (REE), la construcción o el desmantelamiento de plantas fotovoltaicas o eólicas.",
    when: "En las distintas fases de desarrollo de un proyecto de energía renovable.",
    docs: "Resguardo del punto de conexión, documentación del proyecto, SPV y datos de los socios."
  },
  {
    id: "promotores",
    icon: Building2,
    title: "Cantidades a Cuenta (L.O.E.)",
    description: "Garantía obligatoria para promotores inmobiliarios que asegura la devolución de las cantidades entregadas a cuenta por los compradores de vivienda sobre plano.",
    when: "Antes de recibir anticipos de los compradores de una promoción inmobiliaria.",
    docs: "Licencia de obras, documentación de la promoción, datos de la sociedad promotora."
  },
    {
    id: "arrendamiento",
    icon: HeartHandshake,
    title: "Garantía de Arrendamiento",
    description: "Una alternativa al depósito o aval bancario para garantizar al arrendador el pago de la renta en alquileres de locales comerciales, naves u oficinas.",
    when: "Al firmar un contrato de alquiler de un inmueble para uso comercial o industrial.",
    docs: "Contrato de arrendamiento, datos financieros del inquilino (empresa o autónomo)."
  },
  {
    id: "otras",
    icon: Briefcase,
    title: "Otras Garantías Técnicas",
    description: "Cubrimos garantías específicas como las requeridas para operar en AENA, para agentes del mercado eléctrico (OMIE/MEFF) o para agencias de viaje.",
    when: "Al iniciar actividades en sectores regulados que exigen garantías específicas.",
    docs: "Normativa aplicable, documentación específica del sector, cuentas anuales."
  },
    {
    id: "fiscales",
    icon: FileArchive,
    title: "Garantías Fiscales",
    description: "Garantías ante la Agencia Tributaria para el aplazamiento de deudas fiscales (IVA, IS, etc.) o para recurrir sanciones y liquidaciones.",
    when: "Al solicitar un aplazamiento de impuestos o al interponer un recurso ante la AEAT.",
    docs: "Notificación de la AEAT, detalle de la deuda o sanción, cuentas anuales."
  },
];

const SolutionsPage = () => {
  return (
    <>
      <AnimatedOnScroll>
        <div className="bg-transparent">
          <div className="container mx-auto text-center py-16 sm:py-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Soluciones de Caución a tu Medida
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
              A través de Aserta, ofrecemos una solución de caución para cada tipo de garantía que tu empresa necesite. Encuentra la tuya.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll>
        <div className="bg-transparent">
          <div className="container mx-auto py-16 sm:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <Link href="/contacto" key={solution.id} className="block h-full">
                  <Card id={solution.id} className="bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <solution.icon className="w-10 h-10 text-accent flex-shrink-0" />
                        <CardTitle className="text-xl mt-1">{solution.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <p className="text-muted-foreground">{solution.description}</p>
                      <div>
                        <h4 className="font-semibold text-sm text-primary">¿Cuándo se pide?</h4>
                        <p className="text-sm text-muted-foreground">{solution.when}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary">Documentación habitual</h4>
                        <p className="text-sm text-muted-foreground">{solution.docs}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <CtaSection />
      </AnimatedOnScroll>
    </>
  )
}

export default SolutionsPage;
