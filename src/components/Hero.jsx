import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { language, t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
            ZIAD YOUSFI
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr' ? (
              <>
                Étudiant en 3ème année Ingénierie Informatique et Réseaux (IIR) à l'EMSI. 
                Passionné par la <span className="text-blue-400">{t('hero.cyber')}</span> et l'<span className="text-blue-400">{t('hero.ai')}</span>, 
                je cultive une forte curiosité technologique au quotidien. 
                Également <span className="text-blue-400">{t('hero.tutor')}</span>, 
                j'aime transmettre mes connaissances et accompagner les futurs ingénieurs dans leur parcours.
              </>
            ) : (
              <>
                3rd-year Computer Engineering and Networks (IIR) student at EMSI. 
                Passionate about <span className="text-blue-400">{t('hero.cyber')}</span> and <span className="text-blue-400">{t('hero.ai')}</span>, 
                I cultivate a strong technological curiosity daily. 
                Also a <span className="text-blue-400">{t('hero.tutor')}</span>, 
                I enjoy sharing my knowledge and supporting future engineers in their journey.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

