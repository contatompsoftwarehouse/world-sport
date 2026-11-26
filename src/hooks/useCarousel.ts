
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';

const getSlides = (track: HTMLElement | null) =>
  Array.from(track?.children ?? []) as HTMLElement[];

export function useCarousel(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const slides = getSlides(track);
    const edge = parseFloat(getComputedStyle(track).paddingLeft) || 0;

    if (
      track.scrollLeft >= track.scrollWidth - track.clientWidth - 2 &&
      track.scrollLeft > 0
    ) {
      setActive(slides.length - 1);
      return;
    }

    const start = track.scrollLeft + edge;

    let nearest = 0;
    let nearestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - start);

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

      if (!track) return;

      const slides = getSlides(track);
      const slide = slides[Math.max(0, Math.min(index, count - 1))];

      if (!slide) return;

      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      track.scrollTo({
        left:
          slide.offsetLeft -
          (parseFloat(getComputedStyle(track).paddingLeft) || 0),
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

  return {
    trackRef,
    active,
    goTo,
    previous,
    next,
    canPrevious,
    canNext,
    onKeyDown,
  };
}
