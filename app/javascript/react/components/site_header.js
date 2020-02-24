import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faGithub, faGithub);

const SiteHeader = () => {
  return (
    <div className="SiteHeader">
      <div className="SiteHeader-intro">
        <p>
          <a href="https://github.com/mdecrocemovson">
            <FontAwesomeIcon className="SiteHeader-icon" icon={faGithub} />
          </a>
        </p>
        <h1 className="SiteHeader-text">Michael Decroce-Movson</h1>
        <p>
          <a href="https://www.linkedin.com/in/michael-decroce-movson/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </p>
      </div>
      <div className="SiteHeader-buttonContainer">
        <a href="mailto:mdecrocemovson@gmail.com">
          <button type="button" className="SiteHeader-button">
            <FontAwesomeIcon className="SiteHeader-icon" icon="envelope" />{' '}
            Contact me at mdecrocemovson@gmail.com
          </button>
        </a>
      </div>
    </div>
  );
};

export default SiteHeader;
