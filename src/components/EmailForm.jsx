import { useEffect } from 'react';

export default function EmailForm({ onClose }) {
  useEffect(() => {
    window.__lenis?.stop();
    return () => {
      window.__lenis?.start();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;
    const mailtoLink = `mailto:amanbuilz@gmail.com?subject=Portfolio Inquiry from ${name}&body=Hello Aman,%0D%0A%0D%0A${message}%0D%0A%0D%0ARegards,%0D%0A${name}%0D%0A${email}`;
    window.location.href = mailtoLink;
    e.target.reset();
    if (onClose) onClose();
  };

  return (
    <div className="email-form-overlay" onClick={onClose}>
      <div
        className="email-form"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="email-form-close"
          aria-label="Close form"
          onClick={onClose}
        >
          ×
        </button>
        <h2>Send me a message</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" rows={3} required />
          </div>
          <button type="submit" className="button button-primary">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}