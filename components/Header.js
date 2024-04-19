import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="header_area">
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <Link href="/" passHref>
            <span className="navbar-brand logo_h">
              <Image src="/logo.png" alt="" width={35} height={35} />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className={`collapse navbar-collapse ${
              isNavOpen ? "show" : ""
            } offset`}
          >
            <ul className="nav navbar-nav menu_nav justify-content-end">
              <li className="nav-item active">
                <Link href="/" passHref>
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" passHref>
                  <span className="nav-link">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
}
