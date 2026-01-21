import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CtaSection from "@/components/pages/shared/CtaSection";
import Link from "next/link";
import { LucideIcon, Award, Building, Wind, Lightbulb, Zap, Ship, Plane, Home, Scale, HelpingHand, Wallet, Users, Landmark, FileText, ShoppingCart, Power, HandCoins, Globe, Building2, Briefcase, FileArchive, Shield, CircleDollarSign, Receipt, Handshake } from "lucide-react";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

export const metadata: Metadata = {
  title: 'Soluciones en Seguros de Caución | Confía',
};

type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const solutions: Solution[] = [
  {
    id: "contratos-publicos",
    icon: Award,
    title: "Garantías para Licitaciones Públicas",
    description: "Garantías de licitación (provisionales) y de buena ejecución (definitivas) para contratos con la Administración Pública.",
  },
  {
    id: "contratos-privados",
    icon: Handshake,
    title: "Garantías entre Empresas Privadas",
    description: "Asegura el cumplimiento de obligaciones contractuales en proyectos y transacciones entre compañías.",
  },
  {
    id: "devolucion-cantidades",
    icon: HandCoins,
    title: "Garantías para Promotores Inmobiliarios",
    description: "Asegura la devolución de las cantidades entregadas a cuenta por los compradores de viviendas sobre plano.",
  },
  {
    id: "energias-renovables",
    icon: Wind,
    title: "Garantías para Energías Renovables",
    description: "Aseguramos el cumplimiento de los hitos administrativos en la tramitación de proyectos fotovoltaicos y eólicos.",
  },
  {
    id: "agencias-viaje",
    icon: Plane,
    title: "Garantías para Agencias de Viaje",
    description: "Cubre la responsabilidad frente a los clientes en caso de insolvencia y asegura la repatriación si es necesario.",
  },
  {
    id: "seguridad-privada",
    icon: Shield,
    title: "Garantías para Empresas de Seguridad",
    description: "Garantía obligatoria exigida para la inscripción y operación de empresas de seguridad privada.",
  },
  {
    id: "gestores-residuos",
    icon: FileArchive,
    title: "Garantías para Gestores de Residuos",
    description: "Cubre la responsabilidad por el correcto tratamiento y gestión de residuos según la normativa medioambiental.",
  },
  {
    id: "aduanas",
    icon: Ship,
    title: "Garantías de Aduanas",
    description: "Garantiza el pago de aranceles e impuestos derivados de operaciones de importación y tránsito aduanero.",
  },

  {
    id: "contenciosos-fiscales",
    icon: Landmark,
    title: "Aplazamiento de Deudas y Sanciones",
    description: "Permite aplazar el pago de deudas con Hacienda o la Seguridad Social, así como recurrir sanciones.",
  },
  {
    id: "subvenciones",
    icon: CircleDollarSign,
    title: "Garantías para Subvenciones",
    description: "Asegura la correcta inversión de las subvenciones públicas y su devolución en caso de incumplimiento.",
  },
  {
    id: "juego-online",
    icon: Zap,
    title: "Garantías para el Juego Online",
    description: "Garantía exigida a los operadores de juego online para asegurar el pago de premios a los usuarios.",
  },
  {
    id: "arrendamiento",
    icon: Building,
    title: "Garantías de Arrendamiento",
    description: "Asegura al propietario el cobro de la renta en alquileres de locales comerciales, oficinas y naves.",
  },
  {
    id: "internacional",
    icon: Globe,
    title: "Garantías Internacionales",
    description: "Emitimos garantías para proyectos y licitaciones en cualquier país a través de nuestra red global.",
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
              A través de <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#E10600'}}><strong>Aserta</strong></Link>, ofrecemos una solución de caución para cada tipo de garantía que tu empresa necesite. Encuentra la tuya.
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
