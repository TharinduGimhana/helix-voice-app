import React, { useEffect, useState } from "react";
import "./VoiceInfo.css";
import image from "../../assets/images/home/voiceinfo.png"


type Product = {
    image: string;
    imageOverlay: string;
    header: string;
    paragraph: string;
    paraStrong: string;
};


const VoiceInfo: React.FC = () => {

    const [product, setProduct] = useState<Product>({
        image: "",
        imageOverlay: "",
        header: "",
        paragraph: "",
        paraStrong: "",
    });

    useEffect(() => {
        fetch("/data/home/voiceinfo.json")
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error loading contents:", error));
    }, []);

    return <div className="voice-info-p">
        <div className="voice-info-container">
            <div className="image-container">
                <img src={product.image} alt="Voice Analysis" className="voice-image" />
                <div className="image-overlay" dangerouslySetInnerHTML={{ __html: product.imageOverlay }}>

                </div>
            </div>
            <div className="text-container-v-info">
                <h2>{product.header}</h2>
                <p>
                    {product.paragraph}
                </p>
                <p><strong>{product.paraStrong}</strong></p>
            </div>
        </div>
    </div>;
};

export default VoiceInfo;
