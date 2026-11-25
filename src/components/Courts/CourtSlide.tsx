import { MessageCircle } from 'lucide-react';
import { Button } from '../Button/Button';
import { unsplashSrc, unsplashSrcSet } from '../../config/images';
import { buildWhatsappUrl, type Court } from '../../config/site';
import styles from './CourtSlide.module.scss';

const PHOTO_WIDTHS = [640, 960, 1280, 1600] as const;

interface CourtSlideProps {
  court: Court;
  index: number;
  total: number;
  active: boolean;
  cta: string;
  onSelect: () => void;
}

const pad = (value: number) => String(value).padStart(2, '0');

export function CourtSlide({ court, index, total, active, cta, onSelect }: CourtSlideProps) {
  const { photo } = court;
  const message = `Olá! Gostaria de consultar a disponibilidade da quadra de ${court.name}.`;

  return (
    <div
      className={`${styles.slide} ${active ? styles.active : ''}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} de ${total}: ${court.name}`}
      onClick={active ? undefined : onSelect}
    >
      <img
        className={styles.image}
        src={unsplashSrc(photo.id, 1280)}
        srcSet={unsplashSrcSet(photo.id, PHOTO_WIDTHS)}
        sizes="(min-width: 1024px) 880px, 86vw"
        alt={photo.alt}
        width={1280}
        height={720}
        loading={index < 2 ? 'eager' : 'lazy'}
        decoding="async"
      />
      <div className={styles.shade} aria-hidden="true" />

      <p className={styles.badge} aria-hidden="true">
        {pad(index + 1)} / {pad(total)}
      </p>

      <div className={styles.bottom}>
        <div className={styles.info}>
          <h3 className={styles.name}>{court.name}</h3>
          <p className={styles.description}>{court.description}</p>
          {court.features.length > 0 && (
            <ul className={styles.features} aria-label={`Características da quadra de ${court.name}`}>
              {court.features.map((feature) => (
                <li key={feature} className={`${styles.feature} ${styles[court.tone]}`}>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.cta}>
          <Button href={buildWhatsappUrl(message)} external icon={<MessageCircle aria-hidden="true" />}>
            {cta}
            <span className="sr-only"> — {court.name}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}