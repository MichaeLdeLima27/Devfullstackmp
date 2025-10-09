export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Fale Comigo</p>
        <h2>Entre em Contato</h2>
        <p className="text-lg">
          Quer trocar uma ideia sobre projetos, vagas ou oportunidades? Me mande
          uma mensagem!
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Nome</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Sobrenome</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Telefone</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Escolha um assunto</span>
          <select id="choose-topic" className="contact--input text-md">
            <option value="">Selecione...</option>
            <option value="projeto">Landing Page</option>
            <option value="vaga">Site Profisional</option>
            <option value="outro">Portfolio De Serviços</option>
            <option value="outro">Outro</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Mensagem</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Escreva sua mensagem..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">Aceito os termos</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Enviar</button>
        </div>
      </form>
    </section>
  )
}
