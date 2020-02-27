import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <ScrollAnimation animateIn="fadeIn">
        <div className="SiteHeader-buttonContainer">
          <p className="SiteHeader-button">
            Contact me at{' '}
            <a
              href="mailto:mdecrocemovson@gmail.com"
              className="SiteHeader-link"
            >
              mdecrocemovson@gmail.com
            </a>
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default SiteHeader;
