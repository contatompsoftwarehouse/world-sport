const WHATSAPP_NUMBER = '5500000000000';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de reservar uma quadra no World Sport.';
const HERO_PHOTO_ID = 'photo-1560553814-060afcd8904a';
const HERO_PHOTO_WIDTHS = [640, 1024, 1600, 2400];

const heroPhotoUrl = (width: number) =>
  `https://images.unsplash.com/${HERO_PHOTO_ID}?auto=format&fit=crop&q=75&w=${width}`;

type HeroSubject = { src: string; alt: string };

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quadras', href: '#quadras' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
] as const;

export const heroContent = {
  eyebrow: 'Seu espaço esportivo',
  titleStart: 'O próximo jogo começa',
  titleHighlight: 'aqui.',
  description:
    'O World Sport é um espaço para praticar esportes, reunir pessoas e viver novas experiências.',
  primaryCta: 'Reserve sua quadra',
  secondaryCta: 'Conheça o espaço',
  secondaryHref: '#quadras',
  modalitiesLabel: 'Modalidades',
  modalities: ['Futsal', 'Vôlei', 'Basquete'],
  modalitiesNote: 'Quadras para prática e locação',
  photo: {
    src: heroPhotoUrl(1600),
    srcSet: HERO_PHOTO_WIDTHS.map((width) => `${heroPhotoUrl(width)} ${width}w`).join(', '),
    alt: 'Quadra esportiva',
    width: 1600,
    height: 1067,
  },
  subject: null as HeroSubject | null,
};