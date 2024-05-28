import { useEffect, useRef } from 'react';

export function useInfinityScroll() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<Element | null>(null);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  const clear = () => {
    if (observerRef.current) {
      if (targetRef.current) {
        observerRef.current?.unobserve(targetRef.current);
      }
      observerRef.current.disconnect();
    }
  };

  const set = (element: HTMLElement, callback: () => void) => {
    clear();

    observerRef.current?.unobserve(element);
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        targetRef.current = entry.target;
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        threshold: 0.5,
      },
    );
    observerRef.current.observe(element);
  };

  return { set };
}
