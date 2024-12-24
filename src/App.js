import React from 'react'
import Header from './sections/Header'
import ServiceGrid from './sections/ServiceGrid'
import WorkSection from './sections/WorkSection'

function App() {
  return (
    <div className='font-[Roboto Slab] bg-[#048A90]'> 
      <Header />
      <ServiceGrid />
      <WorkSection />
    </div>
  )
}

export default App