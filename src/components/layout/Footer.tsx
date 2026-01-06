import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/Logo';
import { FOOTER_LINKS } from '@/lib/constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-transparent text-primary-foreground border-t">
      <div className="container py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Link href="/">
            <Image 
              src="/Logo/logotipo-usos-19.png" 
              alt="CONFÍA Logo"
              width={360}
              height={100}
              className="h-24 w-auto"
            />
          </Link>
          <p className="text-sm text-primary-foreground/80 max-w-sm">
            Agencia de seguros especializada en la mediación de seguros de caución de <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" style={{color: '#E10600'}}>Aserta</Link>. Generamos soluciones simples para empresas.
          </p>
          <div className="flex items-center gap-4 mt-4">
             <a href="https://www.instagram.com/confiax.es" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/confiax-agencia-de-seguros" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
                 <span className="sr-only">LinkedIn</span>
              </a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-headline text-base font-semibold mb-4 text-primary-foreground">Navegación</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-headline text-base font-semibold mb-4 text-primary-foreground">Contacto Directo</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="mailto:bdlg@confiax.es" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">bdlg@confiax.es</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+34643633288" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">+34 643633288</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span className="text-primary-foreground/80">Calle Ferraz 2, 2° izquierda<br/>28008 Madrid</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-headline text-base font-semibold mb-4 text-primary-foreground">Legal</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container py-6 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} CONFÍA Agencia de Seguro S.L. Todos los derechos reservados. <br/> Confía actúa como agente de seguros mediador de productos de <Link href="https://aserta.com.es" target="_blank" rel="noopener noreferrer" style={{color: '#E10600'}}>Aserta</Link> Aseguradora S.A.U.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
