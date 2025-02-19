import React, { useState } from "react";
import "./ContactForm.css";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaSkype, FaLinkedinIn, 
  FaCloudUploadAlt 
} from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="contact-form">
      {/* Left Side */}
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>Say something, start a live chat</p>
        <div className="contact-info">
          <div><FaPhone /> +123 456 7890</div>
          <div><FaEnvelope /> contact@example.com</div>
          <div><FaMapMarkerAlt /> 123 Street, City, Country</div>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaSkype />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Right Side */}
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
            placeholder="First Name" 
            onFocus={() => setFocusedField("firstName")} 
            onBlur={() => setFocusedField(null)} />
          <input type="text" 
            placeholder="Last Name" 
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
            placeholder="Email" 
            onFocus={() => setFocusedField("email")} 
            onBlur={() => setFocusedField(null)} />
          <input type="text" 
            placeholder="Phone Number" 
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
            <FaCloudUploadAlt className="upload-icon" />
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
