import React from 'react'
import WorkSection from '../components/Home-components/Body/Work-section/Section/WorkSection'
import ServiceGrid from '../components/Home-components/Body/Service-section/ServiceGrid'
import Header from '../components/Home-components/Header/Header'

const Home = () => {
  return (
    <div className='font-[Roboto Slab] bg-[#048A90]'>
        <Header />
        <ServiceGrid />
        <WorkSection />
    </div>
  )
}

export default Home