import React, { useState } from 'react';
import Image from 'next/image';

const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    handleClose(); // Close the modal after submission
  };

  return (
    <>
      {show && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <div className="container contact">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="contact-info">
                        <h2>Contact Us</h2>
                        <Image width={500} height={500} src="/hero.png" alt="image"/>
                        <h4>We welcome your queries and are here to assist you.</h4>
                        <label className='control-label'><a href='mailto:info@rayonweb.com'>info@rayonweb.com</a></label>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fname"
                              placeholder="Enter First Name"
                              name="fname"
                              value={formData.fname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Last Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lname"
                              placeholder="Enter Last Name"
                              name="lname"
                              value={formData.lname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="comment" className="form-label">Comment:</label>
                            <textarea
                              className="form-control"
                              id="comment"
                              rows="5"
                              name="comment"
                              value={formData.comment}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
