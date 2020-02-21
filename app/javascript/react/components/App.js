import React from 'react'
import SiteHeader from './site_header'
import SiteExplanation from './site_explanation'
import ContactPage from './contact_page';

export const App = (props) => {
  return (
    <div className="app">
      <SiteHeader/>
      <SiteExplanation/>
      <ContactPage/>
    </div>
  )
}

export default App
