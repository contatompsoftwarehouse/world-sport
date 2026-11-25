import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { unsplashSrc, unsplashSrcSet } from '../../config/images';
import { galleryContent, type GalleryItem } from '../../config/site';
import styles from './Lightbox.module.scss';

const PHOTO_WIDTHS = [768, 1280, 1920] as const;

interface LightboxProps {
  items: readonly GalleryItem[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({ items, index, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { lightbox } = galleryContent;
  const current = items[index ?? 0];
  const total = items.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const go = (direction: 1 | -1) => {
    if (index === null) return;
    onChange((index + direction + total) % total);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
    }
  };

  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (!(event.target as HTMLElement).closest('[data-lightbox-ui]')) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={lightbox.label}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={onBackdropClick}
    >
      <button
        type="button"
        className={`${styles.button} ${styles.close}`}
        data-lightbox-ui
        aria-label={lightbox.close}
        onClick={onClose}
      >
        <X aria-hidden="true" />
      </button>

      <div className={styles.stage}>
        <button
          type="button"
          className={`${styles.button} ${styles.previous}`}
          data-lightbox-ui
          aria-label={lightbox.previous}
          onClick={() => go(-1)}
        >
          <ArrowLeft aria-hidden="true" />
        </button>

        {index !== null && current && (
          <img
            key={current.id}
            className={styles.image}
            data-lightbox-ui
            src={unsplashSrc(current.photoId, 1280)}
            srcSet={unsplashSrcSet(current.photoId, PHOTO_WIDTHS)}
            sizes="92vw"
            alt={current.alt}
          />
        )}

        <button
          type="button"
          className={`${styles.button} ${styles.next}`}
          data-lightbox-ui
          aria-label={lightbox.next}
          onClick={() => go(1)}
        >
          <ArrowRight aria-hidden="true" />
        </button>
      </div>

      <p className={styles.caption} data-lightbox-ui aria-live="polite">
        <span className={styles.count}>
          {String((index ?? 0) + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        {current?.alt}
      </p>
    </dialog>
  );
}