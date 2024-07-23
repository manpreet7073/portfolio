"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBars } from "react-icons/fa";
import CustomImage from './CustomImage';

const Header = () => {
  const router = useRouter();
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
    <>
  <div className="position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
      <Link href="/" className={`navbar-brand p-0 ${router.pathname === '/'? 'active' : ''}`}>
        <CustomImage
          alt="Logo"
          width={100}
          height={100}
          src="/logo.png"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
        <FaBars size={30} />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <Link href="/" className={`nav-item nav-link ${router.pathname === '/'? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-item nav-link ${router.pathname === '/about'? 'active' : ''}`}>
            About
          </Link>
          <Link href="/service" className={`nav-item nav-link ${router.pathname === '/service'? 'active' : ''}`}>
            Service
          </Link>
          <Link href="/portfolio" className={`nav-item nav-link ${router.pathname === '/portfolio'? 'active' : ''}`}>
            Portfolio
          </Link>
          {/*... */}
          <Link href="/contact" className={`nav-item nav-link ${router.pathname === '/contact'? 'active' : ''}`}>
            Contact
          </Link>
          <Link href="/career" className={`nav-item nav-link ${router.pathname === '/career'? 'active' : ''}`}>
            Career
          </Link>
        </div>
        <Link href="/contact" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
          Get Started
        </Link>
      </div>
    </nav>
    {/* Progress Bar */}
    <div className="progress-container-new">
      <div className="progress-bar-new" id="myProgressBar"></div>
    </div>
  </div>    
    </>
  )
};

export default Header;
