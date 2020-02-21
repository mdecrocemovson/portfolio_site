/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <h1>Lets start a conversation!</h1>
      <form>
        <label>
          First Name: <input type="text" />
        </label>

        <label>
          Last Name: <input type="text" />
        </label>

        <label>
          Email <input type="text" />
        </label>

        <label>
          Message: <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default ContactPage;
