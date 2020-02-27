import React from 'react';
import SiteHeader from './site_header';
import AboutMe from './about_me';
import ContactPage from './contact_page';
import Timeline from './timeline';
import MySkills from './my_skills';
import NavBar from './nav_bar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SiteHeader />
      <AboutMe />
      <MySkills />
      <Timeline />
      <ContactPage />
    </div>
  );
};

export default App;
