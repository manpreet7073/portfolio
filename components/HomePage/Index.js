import React from 'react'
import Banner from '../Home/BannerSection'
import About from '../About/AboutContantSection'
import Skills from '../Home/SkillsSection'
import Serviec from '../Home/ServiceSection'
import Newsletter from '../Home/NewsletterSection'
import Projects from '../Home/ProjectsSection'

const Index = () => {
  return (
    <>
        <Banner />
        <Skills />
        <About />
        <Serviec />
        <Newsletter />
        <Projects />
    </>

  )
}

export default Index