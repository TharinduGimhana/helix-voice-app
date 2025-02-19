import React from "react";
import Background from "./Background";
import IntroSection from "./IntroSection";
import "./About.css";
import BottomSection from "./BottomSection";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <Background />
      <IntroSection />
      {/* Main Section */}
      <div className="about-section">
        {/* Left Sidebar */}
        <div className="about-sidebar">
          <h2>ABOUT US</h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <p>
          Meet Errol Shardelow, the visionary behind Helix Scalar, VoiceSense, and VoiceNotes. With a solid foundation in Electronics Engineering and over two decades as a dedicated full-time practitioner, Errol has meticulously fine-tuned his research to develop proprietary frequency programs. These programs have demonstrated remarkable benefits in sessions as brief as 30 minutes. Imagine the possibilities when your cells are empowered to reach their full potential through the cumulative effects of regular Helix Scalar use. Experience the future of wellness with our innovative solutions
          </p>
        </div>

        {/* Right Sidebar (Orange Section) */}
        <div className="about-right"></div>
      </div>

      <BottomSection />
    </div>
  );
};

export default About;
