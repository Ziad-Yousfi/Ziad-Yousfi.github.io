const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages',
      skills: ['C++', 'Python', 'SQL', 'PL/SQL', 'TypeScript', 'PHP', 'JavaScript', 'VB.NET']
    },
    {
      title: 'Web & Frameworks',
      skills: ['Laravel', 'Node.js', 'React', 'Tailwind CSS', 'Streamlit', 'jQuery', 'JSON']
    },
    {
      title: 'Outils',
      skills: ['Git', 'Linux (Bash)', 'VirtualBox', 'Firebase']
    },
    {
      title: 'Conception & Modélisation',
      skills: ['UML', 'Merise (MCD/MLD)', 'Architecture MVC', 'Microservices']
    }
  ]

  return (
    <section id="skills" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Compétences Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-gray/50 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

