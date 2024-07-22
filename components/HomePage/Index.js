import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const DynamicBanner = dynamic(() => import('../Home/BannerSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
})
const DynamicAbout = dynamic(() => import('../About/AboutContantSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
})
const DynamicSkills = dynamic(() => import('../Home/SkillsSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
})
const DynamicServiec = dynamic(() => import('../Home/ServiceSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
})
const DynamicNewsletter = dynamic(() => import('../Home/NewsletterSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
})
const DynamicProjects = dynamic(() => import('../Home/ProjectsSection'), {
  loading: () => <>
        <div className="loader text-center">
            <Image src="/loding.png" width={50} height={50} alt="Loader" />
        </div>
    </>
})

import Projects from '../Home/ProjectsSection'

const Index = () => {
  return (
    <>
        <DynamicBanner />
        <DynamicSkills />
        <DynamicAbout />
        <DynamicServiec  PageName={'home'}/>
        <DynamicProjects />
        <DynamicNewsletter />
    </>

  )
}

export default Index