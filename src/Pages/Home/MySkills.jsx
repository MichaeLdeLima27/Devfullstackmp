import { FaLaptopCode, FaChartLine, FaBullhorn } from 'react-icons/fa'

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">
          Veja porque pequenas e grandes empresas estão atraindo até 5x mais
          clientes com a
        </p>
        <h2 className="skills--section--heading">
          Criação de Landing Page Profissional
        </h2>
      </div>

      <div className="skills--section--container">
        {/* Card 1: Landing Page Personalizada */}
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaLaptopCode size={60} color="#0070f3" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">
              Landing Page Personalizada
            </h3>
            <p className="skills--section--description">
              Sua Landing Page será totalmente personalizada e profissional,
              criada sob medida para seu serviço ou produto.
            </p>
          </div>
        </div>

        {/* Card 2: Máquina de Vendas */}
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaChartLine size={60} color="#0070f3" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Máquina de Vendas</h3>
            <p className="skills--section--description">
              Sua Landing Page será uma verdadeira máquina de vendas,
              desenvolvida nos mínimos detalhes para ter mais conversão de leads
              e clientes potenciais.
            </p>
          </div>
        </div>

        {/* Card 3: Perfeito para Anúncios */}
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaBullhorn size={60} color="#0070f3" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Perfeito para Anúncios</h3>
            <p className="skills--section--description">
              A sua Landing Page será perfeita para anunciar no Google Ads e no
              Meta (Facebook / Instagram). Rápida e focada em conversão.
            </p>
          </div>
        </div>
      </div>
            <a
  href="https://wa.me/5541987604043"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  <span>Quero criar uma Landing Page</span>
</a>
    </section>
  )
}
