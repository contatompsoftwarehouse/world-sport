
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CourtSlide } from './CourtSlide';
import { useCarousel } from '../../hooks/useCarousel';
import type { Court } from '../../config/site';
import styles from './CourtsCarousel.module.scss';

interface CourtsCarouselProps {
  courts: readonly Court[];
  label: string;
  cta: string;
  previousLabel: string;
  nextLabel: string;
}

const pad = (value: number) => String(value).padStart(2, '0');

export function CourtsCarousel({
  courts,
  label,
  cta,
  previousLabel,
  nextLabel,
}: CourtsCarouselProps) {
  const {
    trackRef,
    active,
    goTo,
    previous,
    next,
    canPrevious,
    canNext,
    onKeyDown,
  } = useCarousel(courts.length);

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        ref={trackRef}
        className={styles.track}
        role="group"
        aria-label={`${label}. Use as setas do teclado para navegar.`}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {courts.map((court, index) => (
          <CourtSlide
            key={court.id}
            court={court}
            index={index}
            total={courts.length}
            active={index === active}
            cta={cta}
            onSelect={() => goTo(index)}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <div className={styles.navigation}>
          <div className={styles.counter} aria-hidden="true">
            <span>{pad(active + 1)}</span>
            <span className={styles.counterDivider}>/</span>
            <span>{pad(courts.length)}</span>
          </div>

          <div
            className={styles.progress}
            role="group"
            aria-label="Selecionar quadra"
          >
            {courts.map((court, index) => (
              <button
                key={court.id}
                type="button"
                className={styles.segment}
                aria-label={`Ir para a quadra de ${court.name}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            aria-label={previousLabel}
            disabled={!canPrevious}
            onClick={previous}
          >
            <ArrowLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            className={styles.arrow}
            aria-label={nextLabel}
            disabled={!canNext}
            onClick={next}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Quadra ${active + 1} de ${courts.length}: ${
          courts[active]?.name ?? ''
        }`}
      </p>
    </div>
  );
}
