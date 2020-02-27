/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ScrollAnimation from 'react-animate-on-scroll';
import Swal from 'sweetalert2';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearInputs = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_UDbNQqJd',
        e.target,
        'user_N3vEIPlISgo5zdl7eDmoh',
      )
      .then(result => {
        Swal.fire({
          title: 'Thanks!',
          text: 'Thanks for your email. Ill be in contact soon.',
          icon: 'success',
        });
        clearInputs();
      })
      .catch(error => {
        Swal.fire({
          title: 'Whoops!',
          text: 'That didnt work. Please contact me at mdecrocemovson@gmail.com to chat further!.',
          icon: 'error',
        });
      });
  }

  return (
    <div data-aos="fade-up" className="ContactPage">
      <ScrollAnimation animateIn="zoomIn">
        <div className="ContactPage-intro">
          <h3>Lets start a conversation!</h3>
        </div>
      </ScrollAnimation>

      <form onSubmit={sendEmail}>
        <div className="ContactPage-form">
          <div className="ContactPage-firstInputs">
            <input
              placeholder="First Name"
              className="ContactPage-input"
              value={firstName}
              name="first_name"
              onChange={e => setFirstName(e.target.value)}
              type="text"
            />
            <input
              placeholder="Last Name"
              className="ContactPage-input"
              value={lastName}
              name="last_name"
              onChange={e => setLastName(e.target.value)}
              type="text"
            />
            <input
              placeholder="Email"
              className="ContactPage-input"
              value={email}
              name="email"
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="ContactPage-messageInput">
            <textarea
              placeholder="Message"
              value={message}
              name="message"
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <input className="ContactPage-submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactPage;
