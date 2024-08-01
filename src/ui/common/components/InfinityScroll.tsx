import { useInfinityScroll } from 'hooks/common/useInfinityScroll';
import React, { ReactNode, useEffect, useRef } from 'react';

interface InfinityScrollProps {
  children: ReactNode;
  onNext: () => void;
}

function InfinityScroll({ children, onNext }: InfinityScrollProps) {
  const setInfinityScroll = useInfinityScroll();

  const lastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setInfinityScroll(lastRef.current as HTMLElement, onNext);
  }, [onNext]);

  return (
    <>
      {children}
      <div ref={lastRef} />
    </>
  );
}

export default InfinityScroll;
