import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/support/submitSupportForm",
        formData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error submitting support form:", error);
    }
  };

  return (
    <div className="custom-container-1 text-black">
      <div className="custom-form-1">
        <h1 className="custom-title-1">Get in Touch</h1>
        <h2 className="custom-title-2">Let's Chat, Reach Out to Us</h2>
        <p className="custom-paragraph-1">
          Have a question or feedback? We’re here to help. Send us a message,
          and we’ll respond back.
        </p>
        <hr className="custom-divider-1" />
        <form className="custom-form-2" onSubmit={handleSubmit}>
          <label className="custom-label-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
            className="custom-input-1"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="custom-label-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            required
            className="custom-input-2"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <label className="custom-label-3" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            className="custom-input-3"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="custom-label-4" htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="custom-textarea-1"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="custom-button-1">
            Submit
          </button>
        </form>
      </div>
      <div className="custom-details-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.740527923266!2d72.87871831458548!3d19.076100487090758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf12e987e3b7%3A0xc7c16e26dbfba7b7!2sKohinoor%20City%20Mall%2C%20Kurla%20(West)%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1606225265400!5m2!1sen!2sin"
          width="400"
          height="280"
          className="custom-iframe-1"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
        <div className="custom-info-box-1">
          <div className="custom-info-1">
            <div className="custom-info-item-1">
              <span role="img" aria-label="location" className="custom-icon-1">
                📍
              </span>
              <p className="custom-text-1">
                G-12, Ground Floor, Kohinoor city Mall Kirol Road, Kurla (west)
                400070 Mumbai, India
              </p>
            </div>
            <div className="custom-info-item-2">
              <span role="img" aria-label="phone" className="custom-icon-2">
                📞
              </span>
              <p className="custom-text-2">+91 9867862744</p>
            </div>
            <div className="custom-info-item-3">
              <span role="img" aria-label="email" className="custom-icon-3">
                ✉️
              </span>
              <p className="custom-text-3">mail@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
