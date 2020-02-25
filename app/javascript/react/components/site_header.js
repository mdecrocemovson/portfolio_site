import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'react-bootstrap/Image';

import iceland from '../../../assets/images/iceland.jpg';

library.add(faEnvelope, faGithub, faGithub);

const SiteHeader = () => {
  return (
    <div className="SiteHeader">
      <div className="SiteHeader-imageContainer">
        <Image width={250} alt="iceland" roundedCircle src={iceland} />
      </div>
      <div className="SiteHeader-intro">
        <a className="SiteHeader-left" href="https://github.com/mdecrocemovson">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <h1 className="SiteHeader-text">Michael Decroce-Movson</h1>
        <a
          className="SiteHeader-right"
          href="https://www.linkedin.com/in/michael-decroce-movson/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
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
