import { useLanguage } from '../context/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.categories.languages'),
      skills: ['C++', 'Java', 'Java Swing', 'Python', 'SQL', 'PL/SQL', 'T-SQL', 'TypeScript', 'PHP', 'JavaScript']
    },
    {
      title: t('skills.categories.web'),
      skills: ['Laravel', 'Node.js', 'React', 'Tailwind CSS', 'Streamlit', 'jQuery']
    },
    {
      title: t('skills.categories.cyber'),
      skills: ['Kali Linux', t('skills.items.malware'), 'Jailbreak/Modding', t('skills.items.ai')]
    },
    {
      title: t('skills.categories.network'),
      skills: ['Cisco (Routing & Switching)', 'TCP/IP', 'DNS/DHCP', t('skills.items.linux_admin'), t('skills.items.firewall')]
    },
    {
      title: t('skills.categories.tools'),
      skills: ['Git', 'Docker', 'VirtualBox', 'Zenbook 14 OLED', 'Firebase']
    },
    {
      title: t('skills.categories.design'),
      skills: ['UML', 'Merise (MCD/MLD)', 'Architecture MVC', 'Agile/Scrum']
    }
  ]

  return (
    <section id="skills" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
