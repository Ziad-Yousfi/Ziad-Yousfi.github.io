import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          {t('about.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p 
              className="text-lg text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('about.p1') }}
            />
            <p 
              className="text-lg text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('about.p2') }}
            />
          </div>

          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">{t('about.detailsTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-white text-xl" />
                <span className="text-white/90">{t('about.location')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-white text-xl" />
                <a
                  href="mailto:yousfiziadpro@gmail.com"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  yousfiziadpro@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-white text-xl" />
                <a
                  href="https://www.linkedin.com/in/ziadyousfi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  linkedin.com/in/ziadyousfi
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub className="text-white text-xl" />
                <a
                  href="https://github.com/Ziad-Yousfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  github.com/Ziad-Yousfi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
