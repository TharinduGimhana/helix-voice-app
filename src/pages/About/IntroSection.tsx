import "./IntroSection.css";
import aboutIntroImage from "../../assets/images/about/about_intro.png";
import { useEffect, useState } from "react";

type IntroSectionContent = {
  aboutIntroText: string;
};

const IntroSection: React.FC = () => {
  const [introSectionContent, setIntroSectionContent] =
    useState<IntroSectionContent>({
      aboutIntroText: "",
    });

  useEffect(() => {
    fetch("/data/about.json")
      .then((response) => response.json())
      .then((data) => setIntroSectionContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-text">
          <h2 dangerouslySetInnerHTML={{ __html: introSectionContent.aboutIntroText }}>
          </h2>
        </div>
        <div className="intro-image">
          <img src={aboutIntroImage} alt="VoiceSence Experience" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
