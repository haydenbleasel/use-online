import { useEffect, useState } from 'react';

const useOnline = (): boolean => {
  const defaultOnline =
    typeof window === 'undefined' ? true : window.navigator.onLine;
  const [isOnline, setIsOnline] = useState(defaultOnline);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setIsOnline]);

  return isOnline;
};

export default useOnline;
