import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 75 },
        { name: 'TailwindCSS', level: 90 },
      ],
    },
    {
      title: 'Back-end',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'Firebase', level: 90 },
        { name: 'REST API', level: 80 },
        { name: 'GraphQL', level: 60 },
      ],
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'Adobe XD', level: 65 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-dark text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Minhas Habilidades</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estas são as tecnologias e ferramentas com as quais trabalho para criar soluções web de alto desempenho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/20 backdrop-blur-sm p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm p-8 rounded-xl mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Deseja trabalhar comigo?
              </h3>
              <p className="text-gray-400 mb-6">
                Estou sempre aberto a novos projetos e oportunidades desafiadoras.
                Se você tem um projeto em mente, entre em contato e vamos conversar!
              </p>
              <a href="#contact" className="btn-primary">
                Entre em contato
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-xs aspect-square bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-primary/30 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-1/2 h-1/2 bg-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 