import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
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
                <Form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="fname">First Name:</label>
                    <div className="col-sm-10">
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
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="lname">Last Name:</label>
                    <div className="col-sm-10">
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
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
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
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="comment">Comment:</label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
