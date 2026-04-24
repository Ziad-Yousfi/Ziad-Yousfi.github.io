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
              Actuellement en formation d'Ingénierie Informatique et Réseaux, je me concentre sur les enjeux 
              majeurs de la <span className="text-blue-400">Cybersécurité</span> et de l'<span className="text-blue-400">Intelligence Artificielle</span>. 
              Ma démarche est guidée par une curiosité technologique constante, me poussant à explorer 
              de nouvelles solutions pour répondre aux défis numériques actuels.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              En tant que <span className="text-blue-400">tuteur pour les étudiants de première année</span>, 
              je m'engage à faciliter leur intégration et à renforcer leurs bases techniques. 
              Cette expérience m'a permis de développer d'excellentes capacités de communication et 
              une pédagogie adaptée pour vulgariser des concepts complexes.
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

