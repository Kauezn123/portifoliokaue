import Head from 'next/head';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Importações normais para componentes que não usam window diretamente
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Importação dinâmica para componentes que usam window (com SSR desabilitado)
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function Home() {
  // Fix para os efeitos que usam window no lado do cliente apenas
  useEffect(() => {
    // Código de inicialização do cliente, se necessário
  }, []);

  return (
    <>
      <Head>
        <title>Portfólio | Desenvolvedor Web</title>
        <meta name="description" content="Portfólio profissional com projetos de desenvolvimento web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
} 