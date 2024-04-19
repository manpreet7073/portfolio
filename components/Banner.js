import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Banner() {
  return (
    <>
    <section className="home_banner_area">
    <div className="banner_inner">
        <div className="container">
        <div className="row">
            <div className="col-lg-7">
            <div className="banner_content">
                <h3 className="text-uppercase">Hell0</h3>
                <h1 className="text-uppercase">I am Manpreet Singh</h1>
                <h5 className="text-uppercase">Full Stack Developer</h5>
                <div className="d-flex align-items-center">
                <Link className="primary_btn" href="/contact">
                    <span>Hire Me</span>
                </Link>
                <Link className="primary_btn tr-bg" target="_blank" href="/cv/Manpreet.pdf" download="Manpreet.pdf">
                    <span>Get CV</span>
                </Link>
                </div>
            </div>
            </div>
            <div className="col-lg-5">
            <div className="home_right_img">
                <Image className="" src="/banner/home-right.png" width={527} height={703} alt="" />
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

  </>
  
  );
}
