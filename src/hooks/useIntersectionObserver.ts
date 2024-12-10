import { useEffect, useRef } from "react";

interface IntersectionObserver {
  // eslint-disable-next-line no-unused-vars
  setIsVisible: (val: boolean) => void;
}
export default function useIntersectionObserver({
  setIsVisible,
}: IntersectionObserver) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsVisible]);

  return ref;
}
