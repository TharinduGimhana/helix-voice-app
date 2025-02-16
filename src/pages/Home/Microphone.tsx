import React from "react";
import "./Microphone.css";
import image from "../../assets/images/home/mic.png"
const Microphone: React.FC = () => {
    return <div>
        <div>
        <img src={image} alt="Overlapping" className="left-image" />
        </div>
    </div>;
};

export default Microphone;
