import "./IntroSection.css";
import aboutIntroImage from "../../assets/images/about/about_intro.png"

const IntroSection: React.FC = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        {/* Left Side - Text */}
        <div className="intro-text">
          <h2>
            Feel the difference when <br />
            you use <span className="highlight">VoiceSence</span> and <br />
            Scalar wave together
          </h2>
        </div>

        {/* Right Side - Image */}
        <div className="intro-image">
          <img src={aboutIntroImage} alt="VoiceSence Experience" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
