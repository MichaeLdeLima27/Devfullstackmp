import data from '../../data/index.json'

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Projetos Recentes</p>
          <h2 className="section--heading">Escolha seu modelo!</h2>
        </div>
        <div>
          <a
            href="https://wa.me/5541987604043"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            Faça um orçamento!
          </a>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              {item.src.endsWith('.mp4') ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="portfolio--video"
                />
              ) : (
                <img src={item.src} alt={item.title} />
              )}
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio--link-anchor"
                >
                  Ver Projeto →
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
