import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const MySkills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonText = isOpen ? 'Hide my skills!' : 'See my skills!';
  return (
    <div className="MySkills" id="myskills">
      <button
        className="MySkills-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonText}
      </button>
      {isOpen && (
        <div>
          <h2>Skills</h2>
          <div className="MySkills-row">
            <div className="MySkills-frontend">
              <h4>Frontend</h4>
              <div className="MySkills-skillAndDescription">
                <p>Javascript (React.js)</p>
                <p>Proficient</p>
              </div>
              <ProgressBar variant="success" animated now={90} />
              <div className="MySkills-skillAndDescription">
                <p>CSS/SCSS</p>
                <p>Advanced</p>
              </div>
              <ProgressBar variant="success" animated now={75} />
              <div className="MySkills-skillAndDescription">
                <p>GraphQL</p>
                <p>Intermediate</p>
              </div>
              <ProgressBar variant="success" animated now={65} />
            </div>
            <div className="MySkills-backend">
              <h4>Backend</h4>
              <div className="MySkills-skillAndDescription">
                <p>PHP</p>
                <p>Proficient</p>
              </div>
              <ProgressBar variant="success" animated now={90} />
              <div className="MySkills-skillAndDescription">
                <p>SQL</p>
                <p>Proficient</p>
              </div>
              <ProgressBar variant="success" animated now={90} />
              <div className="MySkills-skillAndDescription">
                <p>Ruby/Ruby on Rails</p>
                <p>Intermediate</p>
              </div>
              <ProgressBar variant="success" animated now={65} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySkills;
