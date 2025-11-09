import { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function ModeLang({ currentLocale, currentPath }: { currentLocale: string; currentPath: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (newLocale: string) => {
    if (newLocale === currentLocale || isLoading) return;

    setIsLoading(true);

     try {
      const segments = currentPath.split('/').filter(Boolean);
      const pathWithoutLocale = segments.slice(1).join('/');
      const newPath = pathWithoutLocale ? `/${newLocale}/${pathWithoutLocale}` : `/${newLocale}`;

      window.location.href = newPath;
    } catch (error) {
      console.error('Error changing locale:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center align-middle">
      <Button
        onClick={() => handleSelect('en')}
        className={cn(
          currentLocale === 'en' && 'text-terciary underline',
          'text-xl'
        )}
        disabled={isLoading}
        variant="link"
      >
        EN
      </Button>
      <span>|</span>
      <Button
        onClick={() => handleSelect('es')}
        className={cn(
          currentLocale === 'es' && 'text-terciary underline',
          'text-xl'
        )}
        disabled={isLoading}
        variant="link"
      >
        ES
      </Button>
    </div>
  );
};
