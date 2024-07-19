"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import CustomImage from './CustomImage';

const Header = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const totalPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollPx / totalPx) * 100;

      const progressBar = document.getElementById('myProgressBar');
      if (progressBar) {
        progressBar.style.width = scrollPercentage + '%';
      }
    };

    document.addEventListener('scroll', updateProgressBar);

    return () => {
      document.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div className="position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
        <Link href="/" className="navbar-brand p-0">
          <CustomImage
            alt="Logo"
            width={100}
            height={100}
            src="/logo.png"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link href="/about" className="nav-item nav-link">
              About
            </Link>
             <Link href="/service" className="nav-item nav-link">
              Service
            </Link>
             <Link href="/project" className="nav-item nav-link">
              Project
            </Link>
            <div className="nav-item dropdown">
               <Link href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link href="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link href="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link href="/" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
            Get Started
          </Link>
        </div>
      </nav>
      {/* Progress Bar */}
      <div className="progress-container-new">
        <div className="progress-bar-new" id="myProgressBar"></div>
      </div>
    </div>
  );
};

export default Header;
