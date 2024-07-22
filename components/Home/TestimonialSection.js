// "use client"
// import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Image from 'next/image';

// // interface TeamMember {
// //   name: string;
// //   role: string;
// //   image: string;
// // }

// const TestimonialSection = () => {
//   return (
//     <>
//      <div className="container-xxl py-5">
//     <div className="container py-5 px-lg-5">
//       <div className="wow fadeInUp" data-wow-delay="0.1s">
//         <p className="section-title text-secondary justify-content-center"><span />Testimonial<span /></p>
//         <h1 className="text-center mb-5">What Say Our Clients!</h1>
//       </div>
//     <Carousel infiniteLoop interval={1000} showArrows={false} swipeable={true} autoPlay={true} showIndicators={false} showStatus={false}>
//       <div className="row g-4">
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//           <div className="team-item bg-light rounded">
//             <div className="text-center border-bottom p-4">
//               <Image className="img-fluid rounded-circle mb-4" src="/img/team-1.jpg" alt="test" />
//               <h5>John Doe</h5>
//               <span>CEO &amp; Founder</span>
//             </div>
//             <div className="d-flex justify-content-center p-4">
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//           <div className="team-item bg-light rounded">
//             <div className="text-center border-bottom p-4">
//               <Image className="img-fluid rounded-circle mb-4" src="/img/team-2.jpg" alt="new" />
//               <h5>Jessica Brown</h5>
//               <span>Web Designer</span>
//             </div>
//             <div className="d-flex justify-content-center p-4">
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//           <div className="team-item bg-light rounded">
//             <div className="text-center border-bottom p-4">
//               <Image className="img-fluid rounded-circle mb-4" src="/img/team-3.jpg" alt="lo" />
//               <h5>Tony Johnson</h5>
//               <span>SEO Expert</span>
//             </div>
//             <div className="d-flex justify-content-center p-4">
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row g-4">
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//           <div className="team-item bg-light rounded">
//             <div className="text-center border-bottom p-4">
//               <Image className="img-fluid rounded-circle mb-4" src="/img/team-1.jpg" alt="lll" />
//               <h5>John Doe</h5>
//               <span>CEO &amp; Founder</span>
//             </div>
//             <div className="d-flex justify-content-center p-4">
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//           <div className="team-item bg-light rounded">
//             <div className="text-center border-bottom p-4">
//               <Image className="img-fluid rounded-circle mb-4" src="/img/team-2.jpg" alt="test" />
//               <h5>Jessica Brown</h5>
//               <span>Web Designer</span>
//             </div>
//             <div className="d-flex justify-content-center p-4">
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//           <div className="team-item bg-light rounded">
//             <div className="text-center border-bottom p-4">
//               <Image className="img-fluid rounded-circle mb-4" src="/img/team-3.jpg" alt="mmm" />
//               <h5>Tony Johnson</h5>
//               <span>SEO Expert</span>
//             </div>
//             <div className="d-flex justify-content-center p-4">
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-facebook-f" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-twitter" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-instagram" /></a>
//               <a className="btn btn-square mx-1"  href=""><i className="fab fa-linkedin-in" /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Carousel>
//       </div>
//     </div>
//   </>
//   )
// }

// export default TestimonialSection


import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';


const TestimonialSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const reviews = [
    {
      image: 'https://images.unsplash.com/photo-1637684666587-91e51b10a555?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      image: 'https://images.unsplash.com/photo-1548964095-b9a292144866?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      image: 'https://images.unsplash.com/photo-1618568949779-895d81686151?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Bob Smith',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      image: 'https://images.unsplash.com/photo-1637684666587-91e51b10a555?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      image: 'https://images.unsplash.com/photo-1618568949779-895d81686151?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Bob Smith',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    // Add more reviews here
  ];
  return (
    <>
    <div className="container-xxl py-5">
     <div className="container py-5 px-lg-5">
       <div className="wow fadeInUp" data-wow-delay="0.1s">
         <p className="section-title text-secondary justify-content-center"><span />Testimonial<span /></p>
         <h1 className="text-center mb-5">What Say Our Clients!</h1>
       </div>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={false}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      containerClass="carousel-container container-xxl py-5"
      itemClass="carousel-item-padding-40-px"
    >
      {reviews.map((review, index) => (
      <div  key={index} className="review-item w-400 col-md-6 wow fadeInUp">
      <Image src={review.image} height={200} width={250} alt={review.name} className="img-fluid" />
      <h5 className='main-cl'>{review.name}</h5>
      <p className='service-item'>{review.review}</p>
      </div>
              ))}
    </Carousel>
    </div>
    </div>
  </>
  )
}

export default TestimonialSection