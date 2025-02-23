import React from "react";
import Background from "./Background";
import IntroSection from "./IntroSection";
import "./About.css";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <Background />
      <IntroSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default About;
