import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { contatti } from '@/data/contatti';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form-success">
        <Check size={24} />
        <p>Messaggio inviato. Ti risponderemo al più presto.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="oggetto">Oggetto</label>
        <input id="oggetto" name="oggetto" type="text" required />
      </div>
      <div className="contact-form__field">
        <label htmlFor="messaggio">Messaggio</label>
        <textarea id="messaggio" name="messaggio" rows={5} required />
      </div>
      <button className="button button--primary contact-form__submit" type="submit">
        Invia messaggio <Send size={16} />
      </button>
      <p className="contact-form__note">
        Oppure scrivici direttamente a {contatti.email}
      </p>
    </form>
  );
}
