/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="ContactPage">
      <div className="ContactPage-intro">
        <h3>Lets start a conversation!</h3>
      </div>
      <form>
        <div className="ContactPage-form">
          <div className="ContactPage-firstInputs">
            <input
              placeholder="First Name"
              className="ContactPage-input"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              type="text"
            />
            <input
              placeholder="Last Name"
              className="ContactPage-input"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              type="text"
            />
            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="ContactPage-messageInput">
            <textarea
              placeholder="Message"
              value={message}
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
