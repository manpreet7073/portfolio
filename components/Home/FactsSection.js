import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { MdWorkHistory,MdLibraryBooks  } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { RiUserStarFill } from "react-icons/ri";


const FactsSection = () => {
  return (
    <div className="bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
      <div className="row g-4">
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
          {/* <i className="fa fa-certificate fa-3x text-secondary mb-3" /> */}
          <MdWorkHistory size={50} className="text-secondary mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">5+</h1>
          <p className="text-white mb-0">Years Experience</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
          <i className="fa fa-users-cog fa-3x text-secondary mb-3" />
          <FaUsersGear size={50} className="text-secondary mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">25+</h1>
          <p className="text-white mb-0">Team Members</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
          <i className="fa fa-users fa-3x text-secondary mb-3" />
          <RiUserStarFill size={50} className="text-secondary mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">15+</h1>
          <p className="text-white mb-0">Satisfied Clients</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
          <i className="fa fa-check fa-3x text-secondary mb-3" />
          <MdLibraryBooks  size={50} className="text-secondary mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">35+</h1>
          <p className="text-white mb-0">Compleate Projects</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FactsSection