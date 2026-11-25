import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';

const getSlides = (track: HTMLElement | null) =>
  Array.from(track?.children ?? []) as HTMLElement[];

export function useCarousel(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Infinity;
    getSlides(track).forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    track.addEventListener('scroll', onChange, { passive: true });
    window.addEventListener('resize', onChange);
    update();
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onChange);
      window.removeEventListener('resize', onChange);
    };
  }, [update]);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const slide = getSlides(track)[Math.max(0, Math.min(index, count - 1))];
      if (!track || !slide) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({
        left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    },
    [count],
  );

  const canPrevious = active > 0;
  const canNext = active < count - 1;
  const previous = () => canPrevious && goTo(active - 1);
  const next = () => canNext && goTo(active + 1);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const actions: Record<string, () => void> = {
      ArrowLeft: previous,
      ArrowRight: next,
      Home: () => goTo(0),
      End: () => goTo(count - 1),
    };
    const action = actions[event.key];
    if (!action) return;
    event.preventDefault();
    action();
  };

  return { trackRef, active, goTo, previous, next, canPrevious, canNext, onKeyDown };
}