import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Users, Shield, Building, Banknote, TrendingUp, Unlock, Zap, Scale, ShieldCheck } from 'lucide-react';
import CtaSection from '@/components/pages/shared/CtaSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import Link from 'next/link';

const figures = [
  { name: 'Tomador del Seguro', role: 'El contratista o empresa que contrata la póliza para garantizar su obligación.', icon: <Users className="w-8 h-8 text-accent" /> },
  { name: 'Asegurado / Beneficiario', role: 'La entidad (pública o privada) que exige la garantía y sería indemnizada en caso de incumplimiento.', icon: <Shield className="w-8 h-8 text-accent" /> },
  { name: 'Asegurador', role: 'La compañía de seguros (Aserta) que emite la póliza y asume el riesgo.', icon: <Building className="w-8 h-8 text-accent" /> },
];

const advantages = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "No computa en CIRBE",
    description: "A diferencia de los avales bancarios, el seguro de caución no se registra en la Central de Información de Riesgos del Banco de España (CIRBE).",
  },
  {
    icon: <Banknote className="w-8 h-8 text-accent" />,
    title: "Sin inmovilización de fondos",
    description: "No es necesario pignorar saldos en cuenta. Esto libera liquidez para que puedas invertirla en el crecimiento de tu negocio.",
  },
  {
    icon: <Unlock className="w-8 h-8 text-accent" />,
    title: "Aumenta la capacidad de financiación",
    description: "Al no consumir tus líneas de crédito bancarias, mantienes tu plena capacidad para solicitar financiación para otras necesidades.",
  },
];

const faqItems = [
  {
    question: "¿Qué coste tiene un seguro de caución?",
    answer: "El coste, llamado prima, es un porcentaje del importe a garantizar y varía según el riesgo, plazo y tipo de obligación. Suele ser significativamente más económico que las comisiones de un aval bancario. En Confía, negociamos con Aserta para conseguirte el mejor precio."
  },
  {
    question: "¿Cuánto se tarda en conseguir una póliza?",
    answer: "El proceso es muy ágil. Una vez presentada la documentación necesaria, Aserta puede realizar el estudio y emitir la póliza en un plazo de 24 a 72 horas, dependiendo de la complejidad de la operación."
  },
  {
    question: "¿Qué documentación necesito presentar?",
    answer: "Generalmente, se solicita documentación económico-financiera de la empresa (Cuentas Anuales, Impuesto de Sociedades, pool bancario) y documentación relativa a la obligación a garantizar (contrato, pliegos de la licitación, etc.)."
  },
  {
    question: "¿Cualquier empresa puede contratar un seguro de caución?",
    answer: "La aseguradora (Aserta) realiza un estudio de viabilidad de la empresa solicitante. Se valora la solvencia técnica y financiera para asegurar que la compañía puede cumplir con el contrato garantizado. En Confía te ayudamos a preparar y presentar tu caso."
  }
]


const SuretyBondPage = () => {
  return (
    <>
      <AnimatedOnScroll>
        <div className="bg-transparent">
          <div className="container mx-auto text-center py-16 sm:py-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              ¿Qué es el Seguro de Caución?
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
              La herramienta clave para garantizar sus obligaciones contractuales con agilidad, solvencia y sin consumir recursos bancarios.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>

      <div className="container mx-auto py-16 sm:py-24">
        <AnimatedOnScroll>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Un Contrato de Garantía a tu Favor</h2>
              <div className="space-y-4 text-primary-foreground">
                <p>
                  El seguro de caución es un contrato mediante el cual una compañía aseguradora se obliga a indemnizar al beneficiario (asegurado) por los perjuicios que sufra en caso de que el contratista (tomador) incumpla las obligaciones, legales o contractuales, que mantenga con él.
                </p>
                <p>
                 En esencia, es una garantía de cumplimiento que sustituye a los tradicionales y más costosos avales bancarios. Su principal objetivo es asegurar que un acuerdo entre dos partes se cumpla en tiempo y forma, protegiendo al beneficiario sin perjudicar la capacidad financiera del contratista.
                </p>
              </div>
            </div>
             <div className="grid grid-cols-1 gap-8">
              {advantages.map((advantage) => (
                <div key={advantage.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">{advantage.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg">{advantage.title}</h3>
                      <p className="text-primary-foreground">{advantage.description}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Las 3 Partes Clave del Contrato</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {figures.map(figure => (
                <div key={figure.name} className="text-center bg-card p-8 rounded-lg shadow-sm border">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">{figure.icon}</div>
                  <h3 className="text-xl font-semibold text-primary">{figure.name}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {figure.name === 'Asegurador' ? <>La compañía de seguros (<Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#E10600'}}>Aserta</Link>) que emite la póliza y asume el riesgo.</> : figure.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Preguntas Frecuentes (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map(item => (
                <AccordionItem value={item.question} key={item.question}>
                  <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-primary-foreground">
                    {item.question === '¿Qué coste tiene un seguro de caución?' ? <>El coste, llamado prima, es un porcentaje del importe a garantizar y varía según el riesgo, plazo y tipo de obligación. Suele ser significativamente más económico que las comisiones de un aval bancario. En Confía, negociamos con <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="hover:underline">Aserta</Link> para conseguirte el mejor precio.</> : 
                    item.question === '¿Cuánto se tarda en conseguir una póliza?' ? <>El proceso es muy ágil. Una vez presentada la documentación necesaria, <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="hover:underline">Aserta</Link> puede realizar el estudio y emitir la póliza en un plazo de 24 a 72 horas, dependiendo de la complejidad de la operación.</> : 
                    item.question === '¿Cualquier empresa puede contratar un seguro de caución?' ? <>La aseguradora (<Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" className="hover:underline">Aserta</Link>) realiza un estudio de viabilidad de la empresa solicitante. Se valora la solvencia técnica y financiera para asegurar que la compañía puede cumplir con el contrato garantizado. En Confía te ayudamos a preparar y presentar tu caso.</> :
                    item.answer
                    }
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedOnScroll>

      </div>
      <AnimatedOnScroll>
        <CtaSection />
      </AnimatedOnScroll>
    </>
  );
};

export default SuretyBondPage;
