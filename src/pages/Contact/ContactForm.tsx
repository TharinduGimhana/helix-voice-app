import React, { useState } from "react";
import "./ContactForm.css";
import {
  FaPhoneVolume , FaEnvelope,
  FaFacebookF, FaSkype, FaLinkedinIn,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";

const ContactForm: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="contact-form">

      <div className="contact-left">
        <div>
          <h2>Get in Touch</h2>
          <p>Say something, start a live chat</p>
        </div>

        <div className="contact-info">
          <div><FaPhoneVolume  />&nbsp; +123 456 7890</div>
          <div><FaEnvelope />&nbsp; contact@example.com</div>
          <div><FaMapMarkerAlt />&nbsp; 123 Street, City, Country</div>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaSkype />
          <FaLinkedinIn />
        </div>
      </div>

 
      <div className="contact-right">
        <div className="row">
          <label className={`column-label ${focusedField === "firstName" ? "active" : ""}`}>
            First Name
          </label>
          <label className={`column-label ${focusedField === "lastName" ? "active" : ""}`}>
            Last Name
          </label>
        </div>
        <div className="row">
          <input type="text"
        
            onFocus={() => setFocusedField("firstName")}
            onBlur={() => setFocusedField(null)} />
          <input type="text"
         
            onFocus={() => setFocusedField("lastName")}
            onBlur={() => setFocusedField(null)} />
        </div>

        <div className="row">
          <label className={`column-label ${focusedField === "email" ? "active" : ""}`}>
            Email
          </label>
          <label className={`column-label ${focusedField === "phone" ? "active" : ""}`}>
            Phone Number
          </label>
        </div>
        <div className="row">
          <input type="email"
       
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)} />
          <input type="text"
       
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)} />
        </div>

        <div className="row">
          <label className={`column-label ${focusedField === "description" ? "active" : ""}`}>
            Description
          </label>
        </div>
        <div className="row">
          <textarea placeholder="Write your message..."
            onFocus={() => setFocusedField("description")}
            onBlur={() => setFocusedField(null)}></textarea>
        </div>

        <div className="row file-upload">
          <label htmlFor="file-upload">
            <IoCloudUploadOutline className="upload-icon" />
            <p>Please include relevant PDF, JPG, JPEG, PNG files</p>
          </label>
          <input type="file" id="file-upload" />
        </div>

        <div className="row button-row">
          <button className="send-button">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
