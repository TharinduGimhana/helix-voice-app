import React from "react";
import IntroSection from "./IntroSection";
import "./About.css";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import Background from "../../components/Background";


const About: React.FC = () => {
  return (
    <div className="about-container">
      <Background title={
        <h1>
          Where Every VoiceSence<br /> and Helix Scalar
        </h1>
      } />
      <IntroSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default About;
