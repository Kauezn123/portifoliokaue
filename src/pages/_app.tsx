import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Durante o SSR, renderizaremos apenas o que não depende de window
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark text-white">
        <div className="text-center">
          <div className="animate-pulse text-primary text-4xl font-bold mb-4">
            Carregando...
          </div>
          <p className="text-gray-400">Aguarde um momento enquanto preparamos seu portfólio</p>
        </div>
      </div>
    );
  }

  return <Component {...pageProps} />;
} 