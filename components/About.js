import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <>
<section className="about_area section_gap">
  <div className="container">
    <div className="row justify-content-start align-items-center">
      <div className="col-lg-5">
        <div className="about_img">
          <Image className="" src="/about.jpg" width={325} height={631} alt="" />
        </div>
      </div>
      <div className="offset-lg-1 col-lg-5">
        <div className="main_title text-left">
          <h2>
            let s <br />
            Introduce about <br />
            myself
          </h2>
          <p>
          Hello, I m Manpreet Singh, a seasoned full stack developer with over 5+ years of hands-on experience in crafting innovative digital solutions. Passionate about technology, I specialize in building dynamic and responsive web applications that seamlessly integrate cutting-edge front-end and back-end technologies.
          </p>
          <p>
          Over the years, I ve honed my skills in designing captivating user interfaces and implementing robust server-side functionality, transforming ideas into reality. With a keen eye for detail and a commitment to excellence, I am dedicated to delivering high-quality, scalable solutions that exceed expectations.
          </p>
          <Link className="primary_btn" href="/cv/Manpreet.pdf" target="_blank" download="Manpreet.pdf">
            <span>Download CV</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


  </>
  
  );
}
