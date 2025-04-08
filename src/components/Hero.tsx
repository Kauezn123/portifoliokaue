import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  animX: number[];
  animY: number[];
  duration: number;
}

const Hero = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Este código só será executado no cliente
    const generateParticles = () => {
      return Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        animX: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        animY: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
        duration: 8 + Math.random() * 12,
      }));
    };
    
    setParticles(generateParticles());
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-dark text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10"></div>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              opacity: particle.opacity,
            }}
            animate={{
              x: particle.animX,
              y: particle.animY,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
          >
            Olá, sou <span className="text-primary">Kauê Mateus</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
          >
            <span className="typing-animation">Desenvolvedor Full Stack</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mb-10 text-gray-400"
          >
            Criando soluções web modernas e inovadoras com foco em experiência do usuário e desempenho.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex space-x-4"
          >
            <a href="#projects" className="btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn-secondary">Contato</a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 mb-2">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 