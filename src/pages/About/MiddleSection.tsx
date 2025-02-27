import React, { useEffect, useState } from "react";
import "./MiddleSection.css";

type MiddleSectionContent = {
  aboutUsText: string;
  aboutContent: string;
};

const MiddleSection: React.FC = () => {
  const [middleSectionContent, setMiddleSectionContent] =
    useState<MiddleSectionContent>({
      aboutUsText: "",
      aboutContent: "",
    });

  useEffect(() => {
    fetch("/data/about.json")
      .then((response) => response.json())
      .then((data) => setMiddleSectionContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  return (
    <div>
      <div className="about-section">
        <div className="about-sidebar">
          <h2>{middleSectionContent.aboutUsText}</h2>
        </div>
        <div className="about-content">
          <p>{middleSectionContent.aboutContent}</p>
        </div>
        <div className="about-right"></div>
      </div>
    </div>
  );
};

export default MiddleSection;
