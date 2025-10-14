import { useRef, useState } from 'react';
import '../../App.css';

export default function ContactMe() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    setStatusMessage('Enviando...');

    fetch('https://formspree.io/f/xnngojdp', {
      method: 'POST',
      body: new FormData(form.current),
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        setStatusMessage('Mensagem enviada com sucesso!');
        form.current.reset();
      } else {
        setStatusMessage('Erro ao enviar a mensagem. Tente novamente.');
      }
    }).catch(() => {
      setStatusMessage('Erro ao enviar a mensagem. Tente novamente.');
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Fale Comigo</p>
        <h2>Entre em Contato</h2>
        <p className="text-lg">
          Quer trocar uma ideia sobre projetos, vagas ou oportunidades? Me mande uma mensagem!
        </p>
      </div>

      <form ref={form} className="contact--form--container" onSubmit={sendEmail}>
        <div className="container">
          <label className="contact--label">
            <span className="text-md">Nome</span>
            <input type="text" name="first_name" className="contact--input text-md" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Sobrenome</span>
            <input type="text" name="last_name" className="contact--input text-md" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" name="email" className="contact--input text-md" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Telefone</span>
            <input type="text" name="phone" className="contact--input text-md" required />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">Escolha um assunto</span>
          <select name="topic" className="contact--input text-md" required>
            <option value="">Selecione...</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Site Profissional">Site Profissional</option>
            <option value="Portfólio de Serviços">Portfólio de Serviços</option>
            <option value="Outro">Outro</option>
          </select>
        </label>

        <label className="contact--label">
          <span className="text-md">Mensagem</span>
          <textarea
            name="message"
            className="contact--input text-md"
            rows="8"
            placeholder="Escreva sua mensagem..."
            required
          />
        </label>

        <label className="checkbox--label">
          <input type="checkbox" name="checkbox" required />
          <span className="text-sm">Aceito os termos</span>
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Enviar
          </button>
        </div>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </section>
  );
}
