import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, TrendingUp, Unlock, ShieldCheck, Zap, Scale, Rocket, CheckCircle } from "lucide-react";
import CtaSection from "@/components/pages/shared/CtaSection";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

const advantages = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "No computa en CIRBE",
    description: "A diferencia de los avales bancarios, el seguro de caución no se registra en la Central de Información de Riesgos del Banco de España. Su capacidad de endeudamiento con la banca permanece intacta.",
  },
  {
    icon: <Banknote className="w-8 h-8 text-accent" />,
    title: "Sin inmovilización de fondos",
    description: "No es necesario pignorar saldos en cuenta ni inmovilizar capital. Esto libera liquidez para que pueda invertirla en el crecimiento de su negocio, compra de materiales o pago a proveedores.",
  },
  {
    icon: <Unlock className="w-8 h-8 text-accent" />,
    title: "Aumenta la capacidad de financiación",
    description: "Al no consumir sus líneas de crédito bancarias, mantiene su plena capacidad para solicitar financiación para otras necesidades de la empresa, como circulante o inversiones en maquinaria.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-accent" />,
    title: "Agilidad y Rapidez en la emisión",
    description: "El proceso de estudio y emisión de una póliza de caución a través de Aserta es significativamente más rápido y flexible que el de un aval bancario, permitiéndole responder con celeridad a las oportunidades.",
  },
  {
    icon: <Scale className="w-8 h-8 text-accent" />,
    title: "Coste menor y ventajas fiscales",
    description: "La prima del seguro de caución suele ser inferior a las comisiones y gastos de un aval. Además, la prima se contabiliza como un gasto deducible en el Impuesto de Sociedades.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Asesoramiento Especializado",
    description: "A diferencia de un banco, en Confía somos especialistas en garantías. Analizamos su caso para ofrecerle la solución que mejor se adapte a su proyecto, con condiciones más flexibles.",
  },
]

const AdvantagesPage = () => {
  return (
    <>
      <AnimatedOnScroll>
        <div className="bg-transparent">
          <div className="container mx-auto text-center py-16 sm:py-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Caución vs. Aval Bancario
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Descubra por qué el seguro de caución es la elección estratégica para empresas que buscan eficiencia financiera y agilidad operativa.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll>
        <div className="bg-transparent">
          <div className="container mx-auto py-16 sm:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage) => (
                <Card key={advantage.title} className="bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">{advantage.icon}</div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
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

export default AdvantagesPage;
