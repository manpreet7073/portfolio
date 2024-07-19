"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TestimonialSection = () => {
  return (
    <>
     <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <p className="section-title text-secondary justify-content-center"><span />Testimonial<span /></p>
        <h1 className="text-center mb-5">What Say Our Clients!</h1>
      </div>
    <Carousel infiniteLoop interval={1000} showArrows={false} swipeable={true} autoPlay={true} showIndicators={false} showStatus={false}>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item bg-light rounded">
            <div className="text-center border-bottom p-4">
              <Image className="img-fluid rounded-circle mb-4" src="/img/team-1.jpg" alt="test" />
              <h5>John Doe</h5>
              <span>CEO &amp; Founder</span>
            </div>
            <div className="d-flex justify-content-center p-4">
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light rounded">
            <div className="text-center border-bottom p-4">
              <Image className="img-fluid rounded-circle mb-4" src="/img/team-2.jpg" alt="new" />
              <h5>Jessica Brown</h5>
              <span>Web Designer</span>
            </div>
            <div className="d-flex justify-content-center p-4">
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item bg-light rounded">
            <div className="text-center border-bottom p-4">
              <Image className="img-fluid rounded-circle mb-4" src="/img/team-3.jpg" alt="lo" />
              <h5>Tony Johnson</h5>
              <span>SEO Expert</span>
            </div>
            <div className="d-flex justify-content-center p-4">
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item bg-light rounded">
            <div className="text-center border-bottom p-4">
              <Image className="img-fluid rounded-circle mb-4" src="/img/team-1.jpg" alt="lll" />
              <h5>John Doe</h5>
              <span>CEO &amp; Founder</span>
            </div>
            <div className="d-flex justify-content-center p-4">
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light rounded">
            <div className="text-center border-bottom p-4">
              <Image className="img-fluid rounded-circle mb-4" src="/img/team-2.jpg" alt="test" />
              <h5>Jessica Brown</h5>
              <span>Web Designer</span>
            </div>
            <div className="d-flex justify-content-center p-4">
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item bg-light rounded">
            <div className="text-center border-bottom p-4">
              <Image className="img-fluid rounded-circle mb-4" src="/img/team-3.jpg" alt="mmm" />
              <h5>Tony Johnson</h5>
              <span>SEO Expert</span>
            </div>
            <div className="d-flex justify-content-center p-4">
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
              <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
      </div>
    </div>
  </>
  )
}

export default TestimonialSection