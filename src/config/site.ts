import { unsplashSrc, unsplashSrcSet } from './images';

const WHATSAPP_NUMBER = '5500000000000';
const HERO_PHOTO_ID = 'photo-1560553814-060afcd8904a';
const HERO_PHOTO_WIDTHS = [640, 1024, 1600, 2400] as const;

export const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const whatsappUrl = buildWhatsappUrl('Olá! Gostaria de reservar uma quadra no World Sport.');

type HeroSubject = { src: string; alt: string };
type Tone = 'sky' | 'peach' | 'mint';

export interface Court {
  id: string;
  name: string;
  description: string;
  features: readonly string[];
  tone: Tone;
  photo: { id: string; alt: string };
}

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
    src: unsplashSrc(HERO_PHOTO_ID, 1600),
    srcSet: unsplashSrcSet(HERO_PHOTO_ID, HERO_PHOTO_WIDTHS),
    alt: 'Quadra esportiva',
    width: 1600,
    height: 1067,
  },
  subject: null as HeroSubject | null,
};

export const courtsContent = {
  eyebrow: 'Nossa estrutura',
  titleStart: 'Encontre a',
  titleHighlight: 'quadra ideal',
  titleEnd: 'para seu jogo.',
  description:
    'Conheça as quadras do World Sport e escolha a modalidade ideal para praticar ou reservar. Fale com a gente pelo WhatsApp para consultar a disponibilidade.',
  action: 'Falar no WhatsApp',
  carouselLabel: 'Quadras do World Sport',
  previousLabel: 'Quadra anterior',
  nextLabel: 'Próxima quadra',
  cta: 'Consultar disponibilidade',
  courts: [
    {
      id: 'futsal',
      name: 'Futsal',
      description: 'Quadra para partidas, treinos e encontros com a turma.',
      features: ['Prática', 'Locação'],
      tone: 'sky',
      photo: { id: 'photo-1701277050203-eabfa03e64eb', alt: 'Quadra de futsal' },
    },
    {
      id: 'volei',
      name: 'Vôlei',
      description: 'Quadra para jogos e treinos de vôlei com a sua equipe.',
      features: ['Prática', 'Locação'],
      tone: 'peach',
      photo: { id: 'photo-1547347298-4074fc3086f0', alt: 'Quadra de vôlei' },
    },
    {
      id: 'basquete',
      name: 'Basquete',
      description: 'Quadra para treinos e partidas de basquete.',
      features: ['Prática', 'Locação'],
      tone: 'mint',
      photo: { id: 'photo-1536089760511-ddfd66f75f96', alt: 'Quadra de basquete' },
    },
  ] satisfies readonly Court[],
};