import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/pages/contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <div className="bg-secondary/50">
        <div className="container mx-auto text-center py-16 sm:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Solicite su Estudio de Caución
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Rellene el formulario y un asesor analizará su caso sin compromiso. Le respondemos en el mismo día laborable cuando sea posible.
          </p>
        </div>
      </div>
      <div className="container mx-auto pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-card border p-8 rounded-lg sticky top-24">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Información de Contacto</h3>
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <a href="mailto:bdlg@confiax.es" className="text-muted-foreground hover:text-primary transition-colors">bdlg@confiax.es</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-primary">Teléfono</h4>
                    <a href="tel:+34643633288" className="text-muted-foreground hover:text-primary transition-colors">+34 643633288</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-primary">Oficina</h4>
                    <p className="text-muted-foreground">Calle de la Confianza, 123<br />28001 Madrid, España</p>
                    </div>
                </div>
                </div>
                <div className="mt-8 border-t pt-6">
                <h4 className="font-semibold text-primary mb-2">Horario</h4>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
