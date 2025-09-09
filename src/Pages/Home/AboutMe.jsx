export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Sobre</p>
          <h1 className="skills-section--heading">Sobre mim</h1>
          <p className="hero--section-description">
            Sou Michael De Lima, desenvolvedor Fullstack com foco em Front-end.
            Crio sites modernos, rápidos e responsivos, transformando ideias em
            resultados.
          </p>
          <p className="hero--section-description">
            Tenho experiência em React, Node.js, TypeScript e outras tecnologias
            web. Estou sempre buscando aprender e crescer profissionalmente.
          </p>
        </div>
      </div>
    </section>
  )
}
