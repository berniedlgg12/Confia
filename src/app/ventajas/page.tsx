import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, TrendingUp, Unlock, ShieldCheck, Zap, Scale } from "lucide-react";
import CtaSection from "@/components/pages/shared/CtaSection";

const advantages = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "No computa en CIRBE",
    description: "A diferencia de los avales bancarios, el seguro de caución no se registra en la Central de Información de Riesgos del Banco de España. Su capacidad de endeudamiento con la banca permanece intacta.",
  },
  {
    icon: <Banknote className="w-8 h-8 text-accent" />,
    title: "Sin inmovilización de fondos",
    description: "No es necesario pignorar saldos en cuenta ni inmovilizar capital. Esto libera liquidez para que pueda invertirla en el crecimiento de su negocio.",
  },
  {
    icon: <Unlock className="w-8 h-8 text-accent" />,
    title: "Aumenta la capacidad de financiación",
    description: "Al no consumir sus líneas de crédito bancarias, mantiene su plena capacidad para solicitar financiación para otras necesidades de la empresa, como circulante o inversiones.",
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Agilidad y Rapidez en la emisión",
    description: "El proceso de estudio y emisión de una póliza de caución es significativamente más rápido y flexible que el de un aval bancario, permitiéndole responder con celeridad a las oportunidades.",
  },
  {
    icon: <Scale className="w-8 h-8 text-accent" />,
    title: "Coste menor y ventajas contables",
    description: "El coste del seguro de caución (la prima) suele ser inferior al de un aval. Además, se contabiliza como un gasto, lo que ofrece ventajas fiscales.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Condiciones Flexibles",
    description: "Las aseguradoras especializadas tienen un conocimiento profundo de los sectores y pueden ofrecer condiciones más adaptadas a la realidad de cada proyecto o contrato.",
  },
]

const AdvantagesPage = () => {
  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto text-center py-16 sm:py-24">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Ventajas frente al Aval Bancario
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Descubra por qué el seguro de caución es la elección estratégica para empresas que buscan eficiencia financiera y agilidad operativa.
          </p>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container mx-auto py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <Card key={advantage.title} className="bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  {advantage.icon}
                  <CardTitle className="font-headline">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  )
}

export default AdvantagesPage;
