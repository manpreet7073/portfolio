import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {

  return (
    <>
<section className="portfolio_area" id="portfolio">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main_title text-left">
          <h2>
            quality work <br />
            Recently done project{" "}
          </h2>
        </div>
      </div>
    </div>
    <div className="filters portfolio-filter">
      <ul>
        <li className="active" data-filter="*">
          all
        </li>
      </ul>
    </div>
    <div className="filters-content">
      <div className="row portfolio-grid justify-content-center">
        <div className="col-lg-4 col-md-6 all latest">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p1.png" width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p1.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://www.allenandunwin.com">Allen & Unwin</Link>
              </h4>
              <p>Frontend & Backend, portfolio</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 all popular">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p2.png"
                width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p2.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://www.allenandunwin.co.nz">Allen & Unwin New Zealand</Link>
              </h4>
              <p>Frontend & Backend, portfolio</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 all latest">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p3.png"
                width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p3.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://www.murdochbooks.com">Murdoch Books</Link>
              </h4>
              <p>Frontend & Backend, portfolio</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 all latest">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p4.png"
                width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p4.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://www.copyright.org.au">Australian Copyright Council</Link>
              </h4>
              <p>Frontend & Backend, portfolio</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 all latest">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p5.png"
                width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p5.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://affirmpress.com.au">Affirm Press</Link>
              </h4>
              <p>Frontend & Backend, portfolio</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 all latest">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p6.png"
                width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p6.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://www.bankingquest.com">Banking Quest</Link>
              </h4>
              <p>Frontend & Backend, portfolio</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 all latest">
          <div className="portfolio_box">
            <div className="single_portfolio">
              <Image
                className="img-fluid w-100"
                src="/portfolio/p7.png"
                width={1432} height={906}
                alt=""
              />
              <div className="overlay" />
              <Link href="../portfolio/p7.png" className="img-gal">
                <div className="icon">
                  <span className="lnr lnr-cross" />
                </div>
              </Link>
            </div>
            <div className="short_info">
              <h4>
                <Link href="https://dimoapp.com">dimo</Link>
              </h4>
              <p>Backend, portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  
  );
}
