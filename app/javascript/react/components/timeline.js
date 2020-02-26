import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '@fortawesome/fontawesome';
import {
  faGraduationCap,
  faUserTie,
  faRocket,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

library.add(faGraduationCap, faUserTie, faRocket, faStore);

const Timeline = () => {
  return (
    <div className="Timeline" id="mytimeline">
      <div className="container">
        <div className="page-header">
          <ScrollAnimation animateIn="fadeInDown">
            <h3 id="timeline-header">
              A timeline of my coding journey
            </h3>
          </ScrollAnimation>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-badge primary">
              <FontAwesomeIcon
                className="SiteHeader-icon"
                icon="graduation-cap"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Graduated from Union College</h4>
                <h5> Mid 2017</h5>
              </div>
              <div className="timeline-body">
                <p>Blurb about what I studied at Union</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge success">
              <FontAwesomeIcon className="SiteHeader-icon" icon="user-tie" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Worked at Rapid7 as a Business Development Representative
                </h4>
                <h5>Late 2017 - Early 2018</h5>
              </div>
              <div className="timeline-body">
                <p>Blurb about sales</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge danger">
              <FontAwesomeIcon className="SiteHeader-icon" icon="rocket" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Started Launch Academy</h4>
                <h5>Late 2018</h5>
              </div>
              <div className="timeline-body">
                <p>Blurb about launch academy</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge warning">
              <FontAwesomeIcon className="SiteHeader-icon" icon="store" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Accepted a position as a Software Engineer at Wayfair
                </h4>
                <h5>Late 2018</h5>
              </div>
              <div className="timeline-body">
                <p>Blurb about wayfair</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
