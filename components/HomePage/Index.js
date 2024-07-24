import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const DynamicBanner = dynamic(() => import('../Home/BannerSection'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
})
const DynamicAbout = dynamic(() => import('../About/AboutContantSection'), {
    loading: () => <>
    <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
</>
})
const DynamicSkills = dynamic(() => import('../Home/SkillsSection'), {
    loading: () => <>
    <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
</>
})
const DynamicServiec = dynamic(() => import('../Home/ServiceSection'), {
    loading: () => <>
    <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
</>
})
const DynamicNewsletter = dynamic(() => import('../Home/NewsletterSection'), {
    loading: () => <>
    <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
</>
})
const DynamicProjects = dynamic(() => import('../Home/ProjectsSection'), {
    loading: () => <>
    <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
</>
})

const DynamicTestimonialSection = dynamic(() => import('../Home/TestimonialSection'), {
    loading: () => <>
    <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
</>
})
const Index = () => {
  return (
    <>
        <DynamicBanner />
        <DynamicSkills />
        <DynamicAbout PageName={'home'} />
        <DynamicServiec  PageName={'home'}/>
        <DynamicProjects />
        <DynamicTestimonialSection />
    </>

  )
}

export default Index