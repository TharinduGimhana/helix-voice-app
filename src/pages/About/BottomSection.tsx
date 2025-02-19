import "./BottomSection.css";
import aboutBottomImage1 from "../../assets/images/about/about_bottom_1.png"
import aboutBottomImage2 from "../../assets/images/about/about_bottom_2.png"

const BottomSection = () => {
  return (
    <div className="bottom-container">
      <div className="bottom-content">
        {/* Left Side - Two vertical cards */}
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

        {/* Right Side - One card */}
        <div className="bottom-right">
          <div className="card right-card-content">
            <p>
            The discovery and history of Scalar Energy goes back to James Clark Maxwell in the 19th century.  Many years later, Nikola Tesla demonstrated the existence of Scalar energy. Later Einstein acknowledged the existence of Scalar energy which later led to the discovery and development of Quantum Physics. In the later years, Andrija Puharich concluded that Scalar Wave energy could enhance both endocrine and immune systems. Another researcher, Dr. Glen Rein, observed that human lymphocytes exposed to Scalar Waves showed improved cellular regeneration and DNA synthesis that naturally stimulated repair processes. These experiments and studies proved that Scalar Waves have the potential to positively improve the immune system’s response in the human body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
