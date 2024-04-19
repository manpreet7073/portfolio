import React from "react";
import Image from "next/image";
export default function Skills(){
    return (
        <> 
        <section className="features_area">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        <div className="main_title">
          <h2>Skills</h2>
          <p>
            Empowering Solutions with Proficiency: Explore Our Skills
          </p>
        </div>
      </div>
    </div>
    <div className="row feature_inner">
    <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/python.png" width={197} height={185} alt="" />
          <h4>Python</h4>
          <p>
          A high-level programming language known for its simplicity and readability.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/django.png" width={197} height={185} alt="" />
          <h4>Django</h4>
          <p>
          Python-based web framework for rapid development
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/react.png" width={197} height={185} alt="" />
          <h4>React</h4>
          <p>
          JavaScript library for building UI
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/next1.png" width={197} height={185} alt="" />
          <h4>Next.js</h4>
          <p>
            React framework for server-rendered apps
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/vue.png" width={197} height={185} alt="" />
          <h4>Vue.js</h4>
          <p>
          Progressive JavaScript framework
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/docker.png" width={197} height={185} alt="" />
          <h4>Docker</h4>
          <p>
          Containerization platform
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/html.png" width={197} height={185} alt="" />
          <h4>HTML</h4>
          <p>
            markup language used for creating web pages.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/css.png" width={197} height={185} alt="" />
          <h4>CSS</h4>
          <p>
            A styling language used for describing the presentation of a document written in HTML.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/jquery.png" width={197} height={185} alt="" />
          <h4>jQuery</h4>
          <p>
          Fast, small, and feature-rich JavaScript library
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/javasc.png" width={197} height={185} alt="" />
          <h4>JavaScript</h4>
          <p>
            A programming language that enables interactive web pages.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/sql.png" width={197} height={185} alt="" />
          <h4>SQL</h4>
          <p>
          A domain-specific language used in programming and managing data held in a relational database management system.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/server.png" width={197} height={185} alt="" />
          <h4>Server Management</h4>
          <p>
          Managing servers and deployments
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="feature_item">
          <Image src="/services/git.png" width={197} height={185} alt="" />
          <h4>Version Control (Git)</h4>
          <p>
          Managing source code versions
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}