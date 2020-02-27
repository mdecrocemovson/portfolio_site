import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe = () => {
  return (
    <div className="AboutMe" id="aboutme">
      <ScrollAnimation animateIn="fadeIn">
        <p className="AboutMe-title">Hello, I&apos;m Michael.</p>
      </ScrollAnimation>
      <p className="AboutMe-blurb">
        I am an eager Software Engineer with experience in full stack web
        development and a graduate of Union College. I&apos;m also an avid
        hiker, musician and cook. I&apos;m on the hunt right now for a position
        with great mentorship at a small company but am open to any intriguing
        offers.
      </p>
    </div>
  );
};

export default AboutMe;
