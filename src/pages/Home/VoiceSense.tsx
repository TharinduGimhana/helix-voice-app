import React, { useEffect, useState } from "react";
import "./VoiceSense.css";

type VoiceContent = {
    header: string;
    paraOne: string;
    paraTwo: string;
    paraThree: string;
    paraFour: string;
    paraFive: string;
    paraSix: string;
    paraSeven: string;
};

const VoiceSense: React.FC = () => {

    const [voiceContent, setVoiceContent] = useState<VoiceContent>({
        header: "",
        paraOne: "",
        paraTwo: "",
        paraThree: "",
        paraFour: "",
        paraFive:"",
        paraSix:"",
        paraSeven:""
    });

    useEffect(() => {
        fetch("/data/home/voicesense.json")
            .then(response => response.json())
            .then(data => setVoiceContent(data))
            .catch(error => console.error("Error loading contents:", error));
    }, []);

    return <div>
        <div className="voice-sense-container">
            <div className="text-container">
                <h1>{voiceContent.header}</h1>
                <p>{voiceContent.paraOne}</p>
                <p>{voiceContent.paraTwo}</p>
                <p>{voiceContent.paraThree}</p>
                <p>{voiceContent.paraFour}</p>
                <p>{voiceContent.paraFive}</p>
                <p>{voiceContent.paraSix}</p>
                <p>{voiceContent.paraSeven}</p>
            </div>
        </div>
    </div>;
};

export default VoiceSense;
