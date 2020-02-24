import React from 'react';

const MySkills = () => {
  return (
    <div className="MySkills">
      <h2>Skills</h2>
      <div className="MySkills-row">
        <div className="MySkills-frontend">
          <h4>Frontend</h4>
          <div className="MySkills-skillAndDescription">
            <p>Javascript (React.js)</p>
            <p>Proficient</p>
          </div>
          <div className="MySkills-proficientProgress">
            <div className="MySkills-proficientProgressBar" />
          </div>
          <div className="MySkills-skillAndDescription">
            <p>CSS/SCSS</p>
            <p>Advanced</p>
          </div>
          <div className="MySkills-advancedProgress">
            <div className="MySkills-advancedProgressBar" />
          </div>
          <div className="MySkills-skillAndDescription">
            <p>GraphQL</p>
            <p>Intermediate</p>
          </div>
          <div className="MySkills-intermediateProgress">
            <div className="MySkills-intermediateProgressBar" />
          </div>
        </div>
        <div className="MySkills-backend">
          <h4>Backend</h4>
          <div className="MySkills-skillAndDescription">
            <p>PHP</p>
            <p>Proficient</p>
          </div>
          <div className="MySkills-proficientProgress">
            <div className="MySkills-proficientProgressBar" />
          </div>
          <div className="MySkills-skillAndDescription">
            <p>SQL</p>
            <p>Proficient</p>
          </div>
          <div className="MySkills-proficientProgress">
            <div className="MySkills-proficientProgressBar" />
          </div>
          <div className="MySkills-skillAndDescription">
            <p>Ruby/Ruby on Rails</p>
            <p>Intermediate</p>
          </div>
          <div className="MySkills-intermediateProgress">
            <div className="MySkills-intermediateProgressBar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
