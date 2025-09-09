export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Olá, Sou Michael De Lima</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Desenvolvedor Fullstack
            </span>{' '}
            <p className="tech-stack">
              React | Node.js | JavaScript | TypeScript
            </p>
          </h1>
          <p className="hero--section-description">
            Transformo ideias em sites e sistemas modernos, rápidos e
            responsivos.
            <br /> Meu objetivo é ajudar empresas e pessoas a terem presença
            digital de impacto e aumentar suas vendas online.
          </p>
        </div>
        <button className="btn btn-primary">Solicitar Orçamento</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  )
}
