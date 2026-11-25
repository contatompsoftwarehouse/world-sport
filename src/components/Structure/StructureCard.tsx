import { unsplashSrc, unsplashSrcSet } from '../../config/images';
import type { Pillar } from '../../config/site';
import styles from './StructureCard.module.scss';

const PHOTO_WIDTHS = [480, 768, 1024, 1400] as const;

interface StructureCardProps {
  pillar: Pillar;
  index: number;
  total: number;
}

const pad = (value: number) => String(value).padStart(2, '0');

export function StructureCard({ pillar, index, total }: StructureCardProps) {
  const { photo } = pillar;
  const featured = index === 0;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <img
        className={styles.image}
        src={unsplashSrc(photo.id, 1024)}
        srcSet={unsplashSrcSet(photo.id, PHOTO_WIDTHS)}
        sizes={
          featured
            ? '(min-width: 1024px) 700px, 100vw'
            : '(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw'
        }
        alt={photo.alt}
        width={1024}
        height={768}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.shade} aria-hidden="true" />

      <p className={styles.index} aria-hidden="true">
        {pad(index + 1)} / {pad(total)}
      </p>

      <div className={styles.body}>
        <h3 className={styles.title}>{pillar.title}</h3>
        <p className={styles.description}>{pillar.description}</p>
      </div>
    </article>
  );
}