const Hero = () => {
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
            Étudiant en 3ème année Ingénierie Informatique et Réseaux (IIR) à l'EMSI. 
            Passionné par la <span className="text-blue-400">Cybersécurité</span> et l'<span className="text-blue-400">Intelligence Artificielle</span>, 
            je cultive une forte curiosité technologique au quotidien. 
            Également <span className="text-blue-400">tuteur pour les étudiants de première année</span>, 
            j'aime transmettre mes connaissances et accompagner les futurs ingénieurs dans leur parcours.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

