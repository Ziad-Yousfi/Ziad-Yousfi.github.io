import { FaBriefcase, FaUsers, FaChalkboardTeacher } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Expérience & Engagement
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Expérience Professionnelle */}
          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-white text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-white">Expérience Professionnelle</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-dark-bg/50 rounded-lg border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Stagiaire (Stage d'immersion)
                </h4>
                <p className="text-white/90 font-medium mb-2">ONICL</p>
                <p className="text-white/70 text-sm mb-2">
                  Office National Interprofessionnel des Céréales et des Légumineuses Maroc
                </p>
                <p className="text-white/70 text-sm">Durée : 1 mois</p>
              </div>
            </div>
          </div>

          {/* Activités Parascolaires */}
          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <div className="flex items-center mb-6">
              <FaUsers className="text-white text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-white">Activités Parascolaires</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <FaUsers className="text-white text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Membre actif du club Nexus IA EMSI
                    </h4>
                    <p className="text-white/70 text-sm">
                      Participation à des débats, animation de workshops techniques IA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <FaChalkboardTeacher className="text-white text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Tuteur Étudiant EMSI
                    </h4>
                    <p className="text-white/70 text-sm">
                      Accompagnement académique des étudiants de 1ère année
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
