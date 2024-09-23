'use client';

import { useState, useEffect, MutableRefObject } from 'react';

interface UseOnScreenProps<T> {
  unObserve?: boolean;
  ref: MutableRefObject<T | null>;
  rootMargin?: string;
}
function useOnScreen<T extends Element>({
  unObserve = true,
  ref,
  rootMargin = '0px',
}: UseOnScreenProps<T>): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (unObserve && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
}

export default useOnScreen;
