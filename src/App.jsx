import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { LanguageProvider } from './context/LanguageContext'

import Background3D from './components/Background3D'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <LanguageProvider>
      <div className="relative min-h-screen text-white">
        <Background3D />
        <Navbar activeSection={activeSection} />
        <main className="md:pr-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
        <footer className="border-t border-white/10 py-8 text-center text-white/60">
          <p>&copy; 2024 Ziad Yousfi. <TranslatedFooter /></p>
        </footer>
      </div>
    </LanguageProvider>
  )
}

const TranslatedFooter = () => {
  const { t } = useLanguage();
  return <span>{t('footer.rights')}</span>
}

import { useLanguage } from './context/LanguageContext'

export default App

