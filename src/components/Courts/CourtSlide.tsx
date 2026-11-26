
import type { KeyboardEvent } from 'react';

import { ArrowUpRight, MessageCircle } from 'lucide-react';

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

export function CourtSlide({
  court,
  index,
  total,
  active,
  cta,
  onSelect,
}: CourtSlideProps) {
  const { photo } = court;

  const message = `Olá! Gostaria de consultar a disponibilidade da quadra de ${court.name}.`;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (active) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  const toneClass = styles[court.tone] ?? styles.featureDefault;

  return (
    <div
      className={`${styles.slide} ${active ? styles.active : ''}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} de ${total}: ${court.name}`}
      tabIndex={active ? -1 : 0}
      onClick={!active ? onSelect : undefined}
      onKeyDown={handleKeyDown}
    >
      <img
        className={styles.image}
        src={unsplashSrc(photo.id, 1280)}
        srcSet={unsplashSrcSet(photo.id, PHOTO_WIDTHS)}
        sizes="(min-width: 1024px) 1040px, 88vw"
        alt={photo.alt}
        width={1280}
        height={720}
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.top}>
        <span className={styles.category}>
          WORLD SPORT
          <span className={styles.categoryDot} />
          QUADRAS
        </span>

        <span className={styles.number} aria-hidden="true">
          {pad(index + 1)}
          <span>/ {pad(total)}</span>
        </span>
      </div>

      {active ? (
        <div className={styles.content}>
          <div className={styles.information}>
            <span className={styles.label}>
              CONHEÇA NOSSA ESTRUTURA
            </span>

            <h3 className={styles.name}>{court.name}</h3>

            <p className={styles.description}>
              {court.description}
            </p>

            {court.features.length > 0 && (
              <ul
                className={styles.features}
                aria-label={`Características da quadra de ${court.name}`}
              >
                {court.features.map((feature) => (
                  <li
                    key={feature}
                    className={`${styles.feature} ${toneClass}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.actions}>
            <Button
              href={buildWhatsappUrl(message)}
              external
              icon={<MessageCircle aria-hidden="true" />}
            >
              {cta}
              <span className="sr-only"> — {court.name}</span>
            </Button>

            <span className={styles.actionNote}>
              Consulte horários e disponibilidade
              <ArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </div>
      ) : (
        <span className={styles.previewIndicator}>
          <ArrowUpRight aria-hidden="true" />
          Explorar quadra
        </span>
      )}
    </div>
  );
}
