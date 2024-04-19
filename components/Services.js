import React from "react";
import Image from "next/image";
export default function Services() {
  return (
    <>
<section className="features_area">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        <div className="main_title">
          <h2>service offers </h2>
          <p>
          Seamlessly integrating front-end finesse with back-end robustness, we craft dynamic solutions tailored to elevate your online ventures. From captivating user interfaces to powerful server-side functionality, our comprehensive approach ensures your digital goals are not just met, but exceeded.
          </p>
        </div>
      </div>
    </div>
    <div className="row feature_inner">
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/s1.png" width={63} height={69} alt="" />
          <h4>Website development</h4>
          <p>
          Website development involves creating and maintaining websites on the internet. It includes planning, designing, coding, integrating functionalities, testing, and deploying websites to meet client requirements and user needs. Developers use a combination of frontend and backend technologies, databases, and third-party services to build secure, user-friendly, and visually appealing websites.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/s2.png" width={69} height={64} alt="" />
          <h4>UI/ux design</h4>
          <p>
            UI/UX design focuses on creating user interfaces and experiences that are intuitive, visually appealing, and user-friendly. UI (User Interface) design involves designing the layout, visual elements, and interactive components of a digital product, such as a website or mobile app.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/s3.png" width={64} height={68} alt="" />
          <h4>Web design</h4>
          <p>
            Web design encompasses the creation of visually appealing and functional websites. It involves various elements such as layout design, color schemes, typography, and graphical elements to enhance user experience. Web designers combine creativity with technical skills to produce websites that effectively communicate the intended message, engage users, and fulfill business objectives.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/s4.png" alt="" width={68} height={68} />
          <h4>seo optimize</h4>
          <p> 
            SEO optimization involves improving a website s visibility and ranking in search engine results pages (SERPs). It includes techniques such as keyword research, on-page optimization, content creation, link building, and technical optimization to attract more organic traffic to the website.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  
  );
}
