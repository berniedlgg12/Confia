import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Expertos en seguros de caución y responsabilidad civil, protegiendo sus compromisos con solidez y confianza.
          </p>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold mb-4">Contacto Directo</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:bdlg@confiax.es" className="text-muted-foreground hover:text-primary transition-colors">bdlg@confiax.es</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+34643633288" className="text-muted-foreground hover:text-primary transition-colors">+34 643633288</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent mt-1" />
              <span className="text-muted-foreground">Calle de la Confianza, 123<br/>28001 Madrid, España</span>
            </li>
             <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-accent" />
                <a href="https://www.instagram.com/confiax.es" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
            </li>
            <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-accent" />
                <a href="https://linkedin.com/company/confiax-agencia-de-seguros" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Aviso Legal</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover-text-primary transition-colors">Política de Cookies</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Atención al Cliente</Link></li>
          </ul>
        </div>
      </div>
      <div className="container py-6 border-t">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CONFÍA Agencia de Seguro S.L. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
