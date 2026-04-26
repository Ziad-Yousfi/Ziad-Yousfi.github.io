import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'SmartTender',
      description: t('projects.items.smarttender'),
      technologies: ['Python', 'Streamlit'],
      links: {
        github: null,
        demo: null
      }
    },
    {
      title: 'Atlas Guard',
      description: t('projects.items.atlasguard'),
      technologies: ['React', 'Vite', 'CSS'],
      links: {
        github: null,
        demo: null
      }
    },
    {
      title: 'UniRide',
      description: t('projects.items.uniride'),
      technologies: ['Laravel', 'Git'],
      links: {
        github: null,
        demo: null
      }
    },
    {
      title: 'Échange de Campus',
      description: t('projects.items.exchange'),
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        github: null,
        demo: null
      }
    },
    {
      title: 'Twitter-Clone-Fullstack',
      description: t('projects.items.twitter'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: {
        github: null,
        demo: null
      }
    },
    {
      title: 'Chatbot Intelligent',
      description: t('projects.items.chatbot'),
      technologies: ['JavaScript', 'Node.js', 'API', 'NLP'],
      links: {
        github: null,
        demo: null
      }
    }
  ]

  return (
    <section id="projects" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-gray/50 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-white/90 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                  >
                    <FaGithub />
                    <span>{t('projects.code')}</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>{t('projects.demo')}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
