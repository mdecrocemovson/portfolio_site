import React from 'react';
import SiteHeader from './site_header';
import SiteExplanation from './site_explanation';
import ContactPage from './contact_page';
import Timeline from './timeline';

export const App = () => {
  return (
    <div className="app">
      <SiteHeader />
      <SiteExplanation />
      <Timeline />
      <ContactPage />
    </div>
  );
};

export default App;
