import React from 'react';
import { FaSearch, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";

const ServiceSection = ({ PageName }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span />Our Services<span />
          </p>
          <h1 className="text-center mb-5">What Solutions We Provide</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaLaptopCode size={50} />
              </div>
              <h5 className="mb-3">Web Designing and development</h5>
              <p className="m-0">A team of expert web developers and designers with a versatile skill-set enables us to create user-friendly websites that enhance your online presence and customer experience.</p>
              <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <GrCloudComputer size={50} />
              </div>
              <h5 className="mb-3">Cloud Computing</h5>
              <p className="m-0">Cloud Computing enables on-demand access to computing resources like servers and storage, delivered over the internet for enhanced scalability and flexibility</p>
              <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaSearch size={50} />
              </div>
              <h5 className="mb-3">SEO Optimization</h5>
              <p className="m-0">SEO Optimization involves techniques to enhance website visibility in search engine results, improving organic traffic and online presence effectively.</p>
              <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
            </div>
          </div>

          {PageName !== "home" && (
            <>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-facebook-f fa-2x" />
                  </div>
                  <h5 className="mb-3">PHP development</h5>
                  <p className="m-0">Geared toward improving business growth and customer experience, our PHP solutions are dynamic and robust, allowing you to develop superior performance parameters.</p>
                  <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-mail-bulk fa-2x" />
                  </div>
                  <h5 className="mb-3">eCommerce Solutions</h5>
                  <p className="m-0">Bolster your marketing efforts with an impressive eCommerce platform that allows you to run your online store with great efficiency, boosting your online business.</p>
                  <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-thumbs-up fa-2x" />
                  </div>
                  <h5 className="mb-3">CMS</h5>
                  <p className="m-0">Integrating a custom content management system means improved functionality, effective adaptability, and increased security, working more efficiently than off-the-shelf solutions.</p>
                  <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-android fa-2x" />
                  </div>
                  <h5 className="mb-3">NodeJS Development</h5>
                  <p className="m-0">A programming language written in JavaScript, our NodeJS development services support low APIs, allowing us to build applications that deliver competitive results.</p>
                  <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-android fa-2x" />
                  </div>
                  <h5 className="mb-3">Angular JS</h5>
                  <p className="m-0">Using UX/UI technologies, we create dynamic applications and websites that allow our clients to incorporate an effective interface into their business framework.</p>
                  <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-android fa-2x" />
                  </div>
                  <h5 className="mb-3">React JS</h5>
                  <p className="m-0">Our ReactJS Frameworks allow our clients to add and sustain flexibility and convenience to their websites and mobile applications.</p>
                  <a className="btn btn-square" href=""><FaArrowRight size={15} /></a>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
