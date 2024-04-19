import React, { useState } from "react";
import emailjs from 'emailjs-com';
import ContainerBlock from "@components/ContainerBlock";
import Link from "next/link";
export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.elements.name.value.trim(),
        email: e.target.elements.email.value.trim(),
        subject: e.target.elements.subject.value.trim(),
        message: e.target.elements.message.value.trim()
    };

    const newErrors = {};
    let hasErrors = false;

    // Check each field for errors
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `Please enter your ${key}.`;
        hasErrors = true;
      } else {
        newErrors[key] = '';
      }
    }

    // Update the errors state
    setErrors(newErrors);

    // If any field is empty, do not submit the form
    if (hasErrors) {
      return;
    }

    // Send the email
    emailjs.sendForm('service_cj43zds', 'template_4dbpy9u', e.target, 'ndidsGrLS8B-12_fJ')
      .then((result) => {
        console.log(result.text);
        setSubmitMessage('Message sent successfully!');
        setTimeout(() => {
            setSubmitMessage('');
          }, 3000);

      }, (error) => {
        console.log(error.text);
        setSubmitMessage('An error occurred, please try again later.');
      });

    // Reset the form
    e.target.reset();
  };

  return (
    <>
      <ContainerBlock>
        <section className="banner_area">
        <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content text-center">
                        <h2>Contact Us</h2>
                        <div className="page_link">
                        <Link href="/">Home</Link>
                        <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </section>
        <section className="contact_area section_gap">
        <div className="container">
            <div className="row contact_form">
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-home"></i>
                            <h6>Punjab, India</h6>
                            <p>Mohali</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-phone-handset"></i>
                            <h6>(+91) 9783870541</h6>
                            <p>Mon to Sun 9 am to 6 pm</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-envelope"></i>
                            <h6>manpreetsingh70.it@gmail.com</h6>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          <div className="container">
          {submitMessage && <p className="valid">{submitMessage}</p>}
            <form
              className="row contact_form"
              onSubmit={sendEmail}
              noValidate
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${errors.name && 'is-invalid'}`}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control ${errors.email && 'is-invalid'}`}
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${errors.subject && 'is-invalid'}`}
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                  />
                  <div className="invalid-feedback">{errors.subject}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className={`form-control ${errors.message && 'is-invalid'}`}
                    name="message"
                    id="message"
                    rows={1}
                    placeholder="Enter Message"
                    defaultValue={""}
                  />
                  <div className="invalid-feedback">{errors.message}</div>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="primary_btn">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
            
          </div>
        </section>

      </ContainerBlock>
    </>
  );
}
