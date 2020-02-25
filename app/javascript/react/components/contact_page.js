/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', 'template_UDbNQqJd', e.target, 'user_N3vEIPlISgo5zdl7eDmoh')
    .then ((result) => {
      debugger
    }), (error) => {
      debugger
    }
  }

  return (
    <div className="ContactPage">
      <div className="ContactPage-intro">
        <h3>Lets start a conversation!</h3>
      </div>
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
