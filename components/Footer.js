import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Function to check if the user is accessing from a mobile device
      const detectMobile = () => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
      };
  
      // Detect device type when the component mounts
      detectMobile();
  
      // Listen for window resize events to update the device type
      window.addEventListener('resize', detectMobile);
  
      // Cleanup function to remove event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', detectMobile);
      };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  return (
    <>
   <div id="whatsapp-popup">
      {isMobile ? (
        <a href="https://wa.me/+919783870541" target="_blank">
          <i className="fa fa-whatsapp"></i> Chat with Us on WhatsApp
        </a>
      ) : (
        <a href="https://web.whatsapp.com/send?phone=+919783870541" target="_blank">
          <i className="fa fa-whatsapp"></i> Chat with Us on WhatsApp Web
        </a>
      )}
    </div>
    
    <footer className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <Link href="#">
                  <Image src="/logo.png" alt="" width={40} height={40} />
                </Link>
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                <a href="https://linkedin.com/in/er-manpreet-singh-0a5a7a192" target="_blank" >
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright © All rights reserved |  {'\u00A0'}
             <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              Manpreet
          </p>
        </div>
      </div>
    </footer>
    {/*================End Footer Area =================*/}
  </>
  
  );
}
