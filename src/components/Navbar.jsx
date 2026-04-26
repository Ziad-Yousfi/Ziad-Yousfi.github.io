import { useState } from 'react'
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGraduationCap, FaSuitcaseRolling, FaBars, FaTimes } from 'react-icons/fa'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  
  const navItems = [
    { id: 'home', icon: FaHome, label: t('nav.home') },
    { id: 'about', icon: FaUser, label: t('nav.about') },
    { id: 'skills', icon: FaCode, label: t('nav.skills') },
    { id: 'projects', icon: FaBriefcase, label: t('nav.projects') },
    { id: 'education', icon: FaGraduationCap, label: t('nav.education') },
    { id: 'experience', icon: FaSuitcaseRolling, label: t('nav.experience') },
    { id: 'contact', icon: FaEnvelope, label: t('nav.contact') },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          <LanguageSwitcher />
          <div className="w-px h-12 bg-white/20"></div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-white text-dark-bg' 
                      : 'bg-transparent text-white hover:bg-white/10'
                  }`}
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="text-lg" />
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden flex items-center space-x-4">
        <LanguageSwitcher />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute right-0 top-16 bg-dark-bg/95 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[200px]">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-white text-dark-bg' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

