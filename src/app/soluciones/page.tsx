import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CtaSection from "@/components/pages/shared/CtaSection";
import Link from "next/link";
import { LucideIcon, Award, Building, Wind, Lightbulb, Zap, Ship, Plane, Home, Scale, HelpingHand, Wallet, Users, Landmark, FileText, ShoppingCart, Power, HandCoins, Globe, Building2, Briefcase, FileArchive, HeartHandshake, Shield, CircleDollarSign, Receipt } from "lucide-react";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const solutions: Solution[] = [
  {
    id: "zero-risk",
    icon: Shield,
    title: "Zero Risk Score",
    description: "Previene la morosidad y cubre el riesgo de tus operaciones de manera garantizada empleando Inteligencia Artificial en tiempo real.",
  },
  {
    id: "contratos-publicos",
    icon: Award,
    title: "Cumplimiento de contratos públicos",
    description: "Se garantiza el cumplimiento de contratos que se adjudican por medio de licitación pública, que pueden ser de obra, servicio, suministro o concesiones.",
  },
  {
    id: "contratos-privados",
    icon: Handshake,
    title: "Cumplimiento de contratos privados",
    description: "Se garantiza el cumplimiento de contratos entre entidades privadas.",
  },
  {
    id: "renovables",
    icon: Wind,
    title: "Energías renovables",
    description: "Se garantiza el correcto desarrollo y puesta en marcha de proyectos de energía renovable.",
  },
  {
    id: "omie",
    icon: Power,
    title: "OMIE - Compraventa de electricidad",
    description: "Responden de la compra de electricidad en el mercado y aseguran su pago.",
  },
  {
    id: "meff",
    icon: Zap,
    title: "MEFF - Productores y comercializadores",
    description: "Aseguran el pago de los posibles desvíos estimados entre las compraventas y los consumos finales de electricidad.",
  },
  {
    id: "aduanas",
    icon: Ship,
    title: "Aduanas",
    description: "Aseguran el pago a las autoridades aduaneras de liquidaciones devengadas por operaciones de importación.",
  },
  {
    id: "aena",
    icon: Plane,
    title: "AENA",
    description: "Garantiza el pago de tasas aeroportuarias facturadas a las aerolíneas.",
  },
  {
    id: "devolucion-cantidades",
    icon: HandCoins,
    title: "Devolución de cantidades anticipadas en la compra de viviendas",
    description: "Asegura a los compradores de vivienda la devolución de los anticipos.",
  },
  {
    id: "fiscales-cnmc",
    icon: Landmark,
    title: "Garantías fiscales y sanciones CNMC",
    description: "Los contenciosos derivados de liquidaciones fiscales requieren la constitución de garantías que permitan el desarrollo del litigio.",
  },
  {
    id: "subvenciones",
    icon: CircleDollarSign,
    title: "Subvenciones",
    description: "Garantiza la devolución de las ayudas obtenidas de las administraciones para el desarrollo de determinadas actuaciones, en caso de incumplimiento del proyecto subvencionado.",
  },
  {
    id: "arrendamiento",
    icon: Building,
    title: "Arrendamiento",
    description: "Garantiza el pago de rentas por alquiler de locales destinados a actividad empresarial.",
  },
  {
    id: "nowo",
    icon: Home,
    title: "Nowo",
    description: "Garantiza el pago del alquiler, suministros y gastos de comunidad de vivienda particular.",
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
              A través de <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#E10600'}}>Aserta</Link>, ofrecemos una solución de caución para cada tipo de garantía que tu empresa necesite. Encuentra la tuya.
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
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{solution.description}</p>
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
