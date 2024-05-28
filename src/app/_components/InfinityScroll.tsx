import React, { ReactNode, useEffect, useRef } from 'react';
import { useInfinityScroll } from '@/hooks/useInfinityScroll';

interface InfinityScrollProps {
  children: ReactNode;
  onNext: () => void;
}

function InfinityScroll({ children, onNext }: InfinityScrollProps) {
  const { set } = useInfinityScroll();

  const lastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    set(lastRef.current as HTMLElement, onNext);
  }, [onNext]);

  return (
    <>
      {children}
      <div ref={lastRef} />
    </>
  );
}

export default InfinityScroll;
