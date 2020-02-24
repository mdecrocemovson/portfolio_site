import React from 'react';
import SiteHeader from './site_header';
import SiteExplanation from './site_explanation';
import ContactPage from './contact_page';
import Timeline from './timeline';
import MySkills from './my_skills';

export const App = () => {
  return (
    <div className="app">
      <SiteHeader />
      <SiteExplanation />
      <MySkills />
      <Timeline />
      <ContactPage />
    </div>
  );
};

export default App;
