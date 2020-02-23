/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="ContactPage">
      <h3>Lets start a conversation!</h3>
      <form>
        <label className="ContactPage-label">
          First Name:{' '}
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            type="text"
          />
        </label>

        <label className="ContactPage-label">
          Last Name:{' '}
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            type="text"
          />
        </label>

        <label className="ContactPage-label">
          Email
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />
        </label>

        <label className="ContactPage-label">
          Message:
          <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            type="text"
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactPage;
