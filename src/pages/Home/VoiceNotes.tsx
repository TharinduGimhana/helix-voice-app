import React from "react";
import "./VoiceNotes.css";
import micIcon from "../../assets/images/home/voicenote.png"; // Update path as needed

const VoiceNotes: React.FC = () => {
  return (
    <div className="container-voicenotes">
      {/* Image Section */}
      <div className="image-container-voicenotes">
        <img
          src={micIcon}
          alt="Microphone Icon"
          className="microphone-icon"
        />
      </div>

      {/* Content Section */}
      <div className="content-voicenotes">
        <h2 className="title">VoiceNotes: Harmonize Your Health</h2>
       
        <p className="description">
          After identifying low-energy frequencies with VoiceSense, use VoiceNotes to target and strengthen these specific areas.
          By focusing on the weakest notes, VoiceNotes aids in restoring your body's natural balance, promoting overall well-being.
        </p>

        <h3 className="subtitle">Achieve Homeostasis Through Sound</h3>
        <h4>VoiceNotes empowers you to:</h4>
        <ul className="features">
          <li><span className="bullet">●</span> Identify: Pinpoint low-energy frequencies in your body.</li>
          <li><span className="bullet">●</span> Target: Apply specific tones to address these imbalances.</li>
          <li><span className="bullet">●</span> Balance: Guide your body back to a harmonious state.</li>
        </ul>

        <p className="footer-text">
          Experience the transformative power of sound therapy with VoiceNotes and take control of your health journey.
        </p>
      </div>
    </div>
  );
};

export default VoiceNotes;
