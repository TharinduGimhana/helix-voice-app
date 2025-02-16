import React from "react";
import "./VoiceInfo.css";
import image from "../../assets/images/home/voiceinfo.png"
const VoiceInfo: React.FC = () => {
    return <div className="voice-info-p">
        <div className="voice-info-container">
            <div className="image-container">
                <img src={image} alt="Voice Analysis" className="voice-image" />
                <div className="image-overlay">
                    <h2>Let Your Voice Tell <br /> What Your Body Knows</h2>
                </div>
            </div>
            <div className="text-container-v-info">
                <h2>What is in a Voice</h2>
                <p>
                    Your voice is more than just sound—it’s a reflection of your entire being. Every organ, gland, and system in your body has a unique frequency, and VoiceSense captures these patterns to create a voiceprint—like a holographic snapshot of your energetic health.
                    This voiceprint reveals imbalances, showing where your body needs support, where energy is depleted, and where stimulation is needed. By understanding these frequency patterns, you can uncover the root causes of physical and emotional imbalances and take action toward better health and vitality.
                </p>
                <p><strong>Discover what your voice reveals about you.</strong></p>
            </div>
        </div>
    </div>;
};

export default VoiceInfo;
