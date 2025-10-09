import { useState } from 'react'
import data from '../../data/index.json'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq--section" id="faq">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Informações Necessárias</p>
          <h2 className="sections--heading">O que você precisa me enviar?</h2>
        </div>
      </div>

      <div className="faq--section--container">
        {data?.faq?.map((item, index) => (
          <div key={index} className="faq--section--card">
            <div
              className="faq--section--question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span
                className={`faq--toggle ${openIndex === index ? 'open' : ''}`}
              >
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="faq--section--answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
