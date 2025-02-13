import { useState } from "react";
import "./contact.scss";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Email: support@ssfinancials.com</p>
      <p>Phone: +1 (800) 123-4567</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="contact-input" />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="contact-input" />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="contact-input" style={{ height: "100px" }} />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
