import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">Sobre Mim</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 bg-gray-800 rounded-lg overflow-hidden">
              {/* Imagem de programação */}
              <img 
                src="https://clarify.com.br/blog/wp-content/uploads/2021/09/linguagens-de-programacao.jpg"
                alt="Linguagens de Programação"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary rounded-lg">
              {/* Imagem pequena - usando caminho correto para a pasta img */}
              <img 
                src="/img/foto.jpeg"
                alt="Kauê Mateus"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="subheading mb-4">Quem sou eu?</h3>
            <p className="text-gray-300 mb-6">
              Olá! Sou Kauê Mateus, um desenvolvedor apaixonado por criar experiências digitais
              incríveis. Com forte foco em design e usabilidade, trabalho para 
              desenvolver aplicações web que não apenas funcionam bem, mas também
              proporcionam uma experiência incrível para os usuários.
            </p>
            <p className="text-gray-300 mb-8">
              Minha jornada na programação começou há 1 ano, e desde então venho
              aprimorando minhas habilidades em diversas tecnologias e frameworks.
              Sou especializado em desenvolvimento front-end, mas também tenho experiência
              com soluções back-end, o que me permite criar projetos completos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Nome:</h4>
                <p className="text-gray-300">Kauê Mateus</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Email:</h4>
                <p className="text-gray-300">Kauedireito490@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Telefone:</h4>
                <p className="text-gray-300">(11) 96375-5370</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Disponível:</h4>
                <p className="text-gray-300">Freelance / Contrato</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block mt-8"
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 