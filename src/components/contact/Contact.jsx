import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        'service_k2qawqh', 
        'template_c6rkpn6', 
        formRef.current, 
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Connect with Me</h5>
      <h2>Contact Yogeeta</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bodadeyogeeta2001@gmail.com</h5>
            <a href="mailto:bodadeyogeeta2001@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" name="user_name" required />
          <input type="email" placeholder="Your Email" name="user_email" required />
          <textarea placeholder="Your Message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {message && <span>Thank you! I'll get back to you soon.</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
