import "./BottomSection.css";
import aboutBottomImage1 from "../../assets/images/about/about_bottom_1.png";
import aboutBottomImage2 from "../../assets/images/about/about_bottom_2.png";
import { useEffect, useState } from "react";

type BottomSectionContent = {
  bottomSectionText: string;
};

const BottomSection: React.FC = () => {
  const [bottomSectionContent, setBottomSectionContent] =
    useState<BottomSectionContent>({
      bottomSectionText: "",
    });

  useEffect(() => {
    fetch("/data/about.json")
      .then((response) => response.json())
      .then((data) => setBottomSectionContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  return (
    <div className="bottom-container">
      <div className="bottom-content">
        <div className="bottom-left">
          <div className="card card-1">
            <img
              src={aboutBottomImage1}
              alt="Bottom 1"
              className="card-image"
            />
          </div>
          <div className="card card-2">
            <img
              src={aboutBottomImage2}
              alt="Bottom 2"
              className="card-image flipped-image"
            />
          </div>
        </div>
        <div className="bottom-right">
          <div className="card right-card-content">
            <p>{bottomSectionContent.bottomSectionText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
