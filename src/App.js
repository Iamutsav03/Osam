import React from 'react'
import Header from './sections/Header'
import ServiceGrid from './sections/ServiceGrid'
import WorkSection from './sections/WorkSection'
import TeamSection from './sections/TeamSection'
import ContactUs from './sections/ContactUs'
import AboutUs from './sections/AboutUs'

function App() {
  return (
    <div className='font-[satoshi]'>
    <Header/>
    <ServiceGrid/>
    <WorkSection/>
    <TeamSection/>
    <ContactUs/>
    <AboutUs/>
    </div>
  )
}

export default App