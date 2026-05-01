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
        github: 'https://github.com/Ziad-Yousfi/SmartTender',
        demo: null
      }
    },
    {
      title: 'Atlas Guard',
      description: t('projects.items.atlasguard'),
      technologies: ['React', 'Vite', 'CSS'],
      links: {
        github: 'https://github.com/Ziad-Yousfi/Atlas-Guard',
        demo: null
      }
    },
    {
      title: 'UniRide',
      description: t('projects.items.uniride'),
      technologies: ['Laravel', 'Git'],
      links: {
        github: 'https://github.com/Ziad-Yousfi/UniRide',
        demo: null
      }
    },
    {
      title: 'Campus Exchange Hub',
      description: t('projects.items.exchange'),
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/Ziad-Yousfi/Campus-Exchange-Hub',
        demo: null
      }
    },
    {
      title: 'FlowPKG',
      description: t('projects.items.flowpkg'),
      technologies: ['Python', 'PyQt5', 'PS4'],
      links: {
        github: 'https://github.com/Ziad-Yousfi/FlowPKG',
        demo: null
      }
    },
    {
      title: 'ChatBot',
      description: t('projects.items.chatbot'),
      technologies: ['JavaScript', 'Node.js', 'API', 'NLP'],
      links: {
        github: 'https://github.com/Ziad-Yousfi/ChatBot',
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
            <a
              key={index}
              href={project.links.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-gray/50 p-6 rounded-lg border border-white/10 
                hover:border-white/30 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] 
                transition-all duration-300 ease-out flex flex-col cursor-pointer no-underline"
            >
              {/* En-tête avec titre + icône GitHub */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <FaGithub 
                  size={22} 
                  className="text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-300" 
                />
              </div>
              <p className="text-white/90 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
