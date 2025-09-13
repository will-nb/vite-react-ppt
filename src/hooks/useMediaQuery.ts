import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Replace deprecated addListener with addEventListener
    mediaQueryList.addEventListener('change', listener);

    // Initial check
    setMatches(mediaQueryList.matches);

    return () => {
      // Replace deprecated removeListener with removeEventListener
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};
