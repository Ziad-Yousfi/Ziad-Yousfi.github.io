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
            Étudiant Ingénieur en Informatique et Réseaux. Passionné par la conception 
            d'architectures logicielles et le développement Full-Stack, j'utilise les méthodologies 
            UML et Merise pour structurer des solutions performantes, évolutives et sécurisées.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

