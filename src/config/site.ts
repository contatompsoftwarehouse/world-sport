import { unsplashSrc, unsplashSrcSet } from './images';

const WHATSAPP_NUMBER = '5531999990000';
const ADDRESS_FULL = 'Rua Oriental, 59 - São Lucas, Belo Horizonte - MG';
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

export interface Pillar {
  id: string;
  title: string;
  description: string;
  photo: { id: string; alt: string };
}

export interface GalleryItem {
  id: string;
  photoId: string;
  alt: string;
  ratio: string;
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

export const structureContent = {
  eyebrow: 'O espaço',
  titleStart: 'Mais que quadras. Um lugar para',
  titleHighlight: 'jogar junto.',
  description:
    'Praticar esportes, reunir pessoas e viver novas experiências: é isso que move o World Sport.',
  pillars: [
    {
      id: 'praticar',
      title: 'Praticar',
      description: 'Quadras para treinar e jogar no seu ritmo, com opção de prática e locação.',
      photo: { id: 'photo-1720217262350-2dec57765d26', alt: 'Grupo jogando basquete' },
    },
    {
      id: 'reunir',
      title: 'Reunir',
      description: 'Um espaço para encontrar a turma, juntar o time e fazer o jogo acontecer.',
      photo: { id: 'photo-1786025164139-ae27c4aafa3e', alt: 'Grupo em partida de vôlei' },
    },
    {
      id: 'viver',
      title: 'Viver',
      description: 'Novas experiências esportivas para quem quer jogar mais e se divertir mais.',
      photo: { id: 'photo-1535506197904-e5c09c0e5619', alt: 'Grupo reunido em campo' },
    },
  ] satisfies readonly Pillar[],
  banner: {
    title: 'Pronto para o próximo jogo?',
    description: 'Chame a gente no WhatsApp e consulte a disponibilidade das quadras.',
    cta: 'Reservar quadra',
  },
};

export const courtsContent = {
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

export const locationContent = {
  eyebrow: 'Localização',
  titleStart: 'Venha conhecer o',
  titleHighlight: 'World Sport.',
  description:
    'Estamos no bairro São Lucas, em Belo Horizonte. Fale com a gente pelo WhatsApp para combinar sua visita ou reservar uma quadra.',
  mapTitle: 'Mapa com a localização do World Sport',
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_FULL)}&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_FULL)}`,
  directionsCta: 'Como chegar',
  whatsappCta: 'Chamar no WhatsApp',
  contacts: [
    {
      id: 'address',
      label: 'Endereço',
      value: 'Rua Oriental, 59',
      detail: 'São Lucas, Belo Horizonte - MG',
      href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_FULL)}`,
      external: true,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '(31) 99999-0000',
      detail: 'Reservas e informações',
      href: whatsappUrl,
      external: true,
    },
    {
      id: 'email',
      label: 'E-mail',
      value: 'contato@worldsport.example',
      detail: 'Dúvidas e parcerias',
      href: 'mailto:contato@worldsport.example',
      external: false,
    },
  ],
} as const;

export const galleryContent = {
  eyebrow: 'Galeria',
  titleStart: 'Veja o World Sport',
  titleHighlight: 'em ação.',
  description: 'Imagens do espaço, das quadras e de quem faz o jogo acontecer.',
  stripLabel: 'Fotos da galeria',
  previousLabel: 'Fotos anteriores',
  nextLabel: 'Próximas fotos',
  items: [
    { id: 'g1', photoId: 'photo-1560553814-060afcd8904a', alt: 'Quadra esportiva vazia', ratio: '4 / 5' },
    { id: 'g2', photoId: 'photo-1720217262350-2dec57765d26', alt: 'Grupo jogando basquete', ratio: '3 / 2' },
    { id: 'g3', photoId: 'photo-1547347298-4074fc3086f0', alt: 'Mulheres jogando vôlei em quadra coberta', ratio: '1 / 1' },
    { id: 'g4', photoId: 'photo-1701277050203-eabfa03e64eb', alt: 'Quadra com gol de futsal', ratio: '4 / 5' },
    { id: 'g5', photoId: 'photo-1536089760511-ddfd66f75f96', alt: 'Linha branca em piso azul de quadra', ratio: '3 / 2' },
    { id: 'g6', photoId: 'photo-1786025164139-ae27c4aafa3e', alt: 'Partida de vôlei em quadra de madeira', ratio: '1 / 1' },
    { id: 'g7', photoId: 'photo-1535506197904-e5c09c0e5619', alt: 'Grupo reunido em campo', ratio: '4 / 5' },
    { id: 'g8', photoId: 'photo-1728971124745-423b12df446d', alt: 'Grupo jogando vôlei', ratio: '3 / 2' },
  ] satisfies readonly GalleryItem[],
  lightbox: {
    label: 'Galeria de fotos',
    close: 'Fechar',
    previous: 'Foto anterior',
    next: 'Próxima foto',
  },
};

export const footerContent = {
  description: 'Complexo esportivo com quadras para prática e locação.',
  navTitle: 'Navegação',
  contactTitle: 'Contato',
  cta: 'Reservar quadra',
  backToTop: 'Voltar ao topo',
  rights: 'World Sport. Todos os direitos reservados.',
};