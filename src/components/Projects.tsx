import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do projeto 1 com detalhes de implementação e tecnologias utilizadas.',
      category: 'web',
      image: '/placeholder-project.jpg',
      tags: ['React', 'TailwindCSS', 'Node.js'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do projeto 2 com detalhes de implementação e tecnologias utilizadas.',
      category: 'mobile',
      image: '/placeholder-project.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do projeto 3 com detalhes de implementação e tecnologias utilizadas.',
      category: 'ui',
      image: '/placeholder-project.jpg',
      tags: ['Figma', 'Adobe XD', 'UI/UX'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Descrição do projeto 4 com detalhes de implementação e tecnologias utilizadas.',
      category: 'web',
      image: '/placeholder-project.jpg',
      tags: ['Vue.js', 'Sass', 'Express'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Projeto 5',
      description: 'Descrição do projeto 5 com detalhes de implementação e tecnologias utilizadas.',
      category: 'mobile',
      image: '/placeholder-project.jpg',
      tags: ['Flutter', 'Dart', 'Firebase'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Projeto 6',
      description: 'Descrição do projeto 6 com detalhes de implementação e tecnologias utilizadas.',
      category: 'ui',
      image: '/placeholder-project.jpg',
      tags: ['Sketch', 'Prototyping', 'Wireframing'],
      link: '#',
      github: '#',
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ui', label: 'UI/UX' },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading">Meus Projetos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos mais recentes e descubra como posso ajudar a transformar suas ideias em realidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center flex-wrap mt-12 mb-12"
        >
          <div className="bg-dark inline-flex p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-6 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-tr from-primary/60 to-accent/60 absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="flex space-x-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Imagem do Projeto</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-secondary/50 text-sm rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-primary">Ver Todos os Projetos</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 