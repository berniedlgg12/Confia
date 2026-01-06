export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/seguro-caucion', label: '¿Qué es Caución?' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/nosotros', label: 'Sobre Confía' },
];

export const FOOTER_LINKS = {
  navigation: [
    ...NAV_LINKS,
    { href: '/contacto', label: 'Contacto' },
  ],
  legal: [
    { href: '/aviso-legal', label: 'Aviso Legal' },
    { href: '/politica-privacidad', label: 'Política de Privacidad' },
    { href: '/politica-cookies', label: 'Política de Cookies' },
  ],
  support: [
     { href: '/atencion-cliente', label: 'Atención al Cliente' },
  ]
};
