import React, { useState } from "react";
import "./ContactForm.css";
import {
  FaPhoneVolume,
  FaEnvelope,
  FaFacebookF,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";

const API_URL = "https://helix-app/api/contact"; // API endpoint

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    file: null as File | null,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    description: false,
    file: false,
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [popup, setPopup] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type) || file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, file: true });
        setFileName(null);
        return;
      }
      setFileName(file.name);
      setFormData({ ...formData, file });
      setErrors({ ...errors, file: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: !validateEmail(formData.email),
      phone: formData.phone.trim() === "",
      description: formData.description.trim() === "",
      // file: formData.file === null,
      file: false,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("description", formData.description);
      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      const response = await fetch(API_URL, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setPopup({ message: "Message sent successfully!", type: "success" });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        file: null,
      });
      setFileName(null);
      setErrors({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        description: false,
        file: false,
      });
    } catch (error) {
      setPopup({ message: "Failed to send message. Try again later.", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 3000); 
    }
  };

  return (
    <div className="contact-form">
      {popup && <div className={`popup ${popup.type}`}>{popup.message}</div>}

      <div className="contact-left">
        <div>
          <h2>Get in Touch</h2>
          <p>Say something, start a live chat</p>
        </div>

        <div className="contact-info">
          <div><FaPhoneVolume /> +123 456 7890</div>
          <div><FaEnvelope /> contact@example.com</div>
          <div><FaMapMarkerAlt /> 123 Street, City, Country</div>
        </div>

        <div className="social-icons">
          <FaFacebookF />
          <FaSkype />
          <FaLinkedinIn />
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={errors.firstName ? "error" : ""}
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={errors.lastName ? "error" : ""}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={errors.email ? "error" : ""}
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className={errors.phone ? "error" : ""}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <textarea
              name="description"
              placeholder="Write your message..."
              className={errors.description ? "error" : ""}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="row file-upload">
            <label htmlFor="file-upload">
              <IoCloudUploadOutline className="upload-icon" />
              {fileName ? <p className="center-file-name">{fileName}</p> : <p className="center-file-name">Attach PDF, JPG, JPEG, PNG (Max 5MB)</p>}
            </label>
            <input type="file" id="file-upload" onChange={handleFileChange} />
          </div>
          {errors.file && <p className="error-message">Invalid file format or size exceeds 5MB.</p>}

          <div className="row button-row">
            <button type="submit" className="send-button" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
