export interface ContactInfo {
  ragioneSociale: string;
  indirizzo: string;
  citta: string;
  cap: string;
  provincia: string;
  telefono: string;
  telefonoLink: string;
  email: string;
  piva: string;
  cf: string;
}

export const contatti: ContactInfo = {
  ragioneSociale: 'SINT S.r.l.',
  indirizzo: 'Via Solferino, 81',
  citta: 'Meda',
  cap: '20821',
  provincia: 'MB',
  telefono: '0362 1545393',
  telefonoLink: 'tel:+3903621545393',
  email: 'info@sintsrl.it',
  piva: '02011550965',
  cf: '02011550965',
};

export const mapsLink = 'https://maps.google.com/?q=Via+Solferino+81+Meda';

export const navItems = [
  { label: 'Azienda', href: '#azienda' },
  { label: 'Cosa facciamo', href: '#servizi' },
  { label: 'Clienti', href: '#clienti' },
  { label: 'Dove siamo', href: '#contatti' },
];

export const navCta = {
  label: 'Parliamone',
  href: '#contatti',
};
