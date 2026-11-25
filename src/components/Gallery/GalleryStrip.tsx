import type { CSSProperties } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { unsplashSrc, unsplashSrcSet } from '../../config/images';
import { galleryContent, type GalleryItem } from '../../config/site';
import { useScrollStrip } from '../../hooks/useScrollStrip';
import styles from './GalleryStrip.module.scss';

const PHOTO_WIDTHS = [480, 768, 1024] as const;

interface GalleryStripProps {
  items: readonly GalleryItem[];
  onOpen: (index: number) => void;
}

export function GalleryStrip({ items, onOpen }: GalleryStripProps) {
  const { ref, progress, canPrevious, canNext, scrollByPage } = useScrollStrip();

  return (
    <div className={styles.strip}>
      <div ref={ref} className={styles.track} role="group" aria-label={galleryContent.stripLabel}>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.item}
            style={{ '--ratio': item.ratio } as CSSProperties}
            aria-label={`Ampliar foto: ${item.alt}`}
            onClick={() => onOpen(index)}
          >
            <img
              className={styles.image}
              src={unsplashSrc(item.photoId, 768)}
              srcSet={unsplashSrcSet(item.photoId, PHOTO_WIDTHS)}
              sizes="(min-width: 1024px) 480px, 80vw"
              alt=""
              width={768}
              height={768}
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <span className={styles.zoom} aria-hidden="true">
              <Maximize2 />
            </span>
          </button>
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.progress} aria-hidden="true">
          <span className={styles.bar} style={{ transform: `scaleX(${0.15 + progress * 0.85})` }} />
        </div>

        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            aria-label={galleryContent.previousLabel}
            aria-disabled={!canPrevious}
            onClick={() => canPrevious && scrollByPage(-1)}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label={galleryContent.nextLabel}
            aria-disabled={!canNext}
            onClick={() => canNext && scrollByPage(1)}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}