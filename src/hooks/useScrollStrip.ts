import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ progress: 0, canPrevious: false, canNext: true });

  const update = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    setState({
      progress: max > 0 ? element.scrollLeft / max : 0,
      canPrevious: element.scrollLeft > 4,
      canNext: element.scrollLeft < max - 4,
    });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const onChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    element.addEventListener('scroll', onChange, { passive: true });
    window.addEventListener('resize', onChange);
    update();
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener('scroll', onChange);
      window.removeEventListener('resize', onChange);
    };
  }, [update]);

  const scrollByPage = useCallback((direction: 1 | -1) => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollBy({
      left: direction * element.clientWidth * 0.8,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, []);

  return { ref, ...state, scrollByPage };
}