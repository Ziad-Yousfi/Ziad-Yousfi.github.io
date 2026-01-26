import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Education = () => {
  const certifications = [
    {
      title: 'Introduction à la programmation orientée objet (C++)',
      issuer: 'EPFL (Coursera)',
      icon: <FaCertificate className="text-white text-2xl" />
    },
    {
      title: 'JavaScript, jQuery & JSON',
      issuer: 'University of Michigan (Coursera)',
      icon: <FaCertificate className="text-white text-2xl" />
    },
    {
      title: 'Python pour tous',
      issuer: 'Alison Patou',
      icon: <FaCertificate className="text-white text-2xl" />
    }
  ]

  return (
    <section id="education" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Formation & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-white text-3xl mr-4" />
              <h3 className="text-2xl font-semibold text-white">Formation</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Cursus Ingénieur en Informatique et Réseaux
                </h4>
                <p className="text-white/90 mb-4">EMSI / École d'Ingénierie</p>
                <div className="space-y-2">
                  <p className="text-white/70 font-semibold">Modules clés :</p>
                  <ul className="list-disc list-inside text-white/90 space-y-1 ml-4">
                    <li>POO (C++)</li>
                    <li>Algorithmique</li>
                    <li>Réseaux TCP/IP</li>
                    <li>SQL/PL-SQL</li>
                    <li>Deep Learning</li>
                    <li>Big Data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-white/70 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

