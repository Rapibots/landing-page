import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = () => setMatches(Boolean(mediaQueryList.matches));

    listener();

    mediaQueryList.addEventListener('change', listener);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [mediaQueryString]);

  return matches;
};
