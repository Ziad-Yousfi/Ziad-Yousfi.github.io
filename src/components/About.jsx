import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          À Propos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              Passionné par la conception d'architectures logicielles et le développement Full-Stack, 
              j'utilise les méthodologies UML et Merise pour structurer des solutions performantes, 
              évolutives et sécurisées.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Je possède une solide maîtrise du développement logiciel avec des langages comme C, C++, 
              Python, PHP et JavaScript, ainsi qu'une expertise approfondie dans les infrastructures réseaux. 
              Mon approche combine rigueur technique et créativité pour résoudre des problèmes complexes 
              et créer des solutions innovantes.
            </p>
          </div>

          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-white text-xl" />
                <span className="text-white/90">Témara, Maroc</span>
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

