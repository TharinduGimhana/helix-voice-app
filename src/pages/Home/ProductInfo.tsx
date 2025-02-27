import React, { useEffect, useState } from "react";
import "./ProductInfo.css";

type Product = {
    image: string;
    imageOverlay: string;
    header: string;
    paragraph: string;
    paraStrong: string;
};

const ProductInfo: React.FC = () => {

    const [product, setProduct] = useState<Product>({
        image: "",
        imageOverlay: "",
        header: "",
        paragraph: "",
        paraStrong: "",
    });

    useEffect(() => {
        fetch("/data/home/productinfo.json")
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error loading products:", error));
    }, []);

    return <div className="product-info-p">
        <div className="product-info-container">
            <div className="image-container">
                <img src={product.image} alt="Voice Analysis" className="voice-image" />
                <div className="image-overlay" dangerouslySetInnerHTML={{ __html: product.imageOverlay }}>

                </div>
            </div>
            <div className="text-container-v-info">
                <h2>{product.header}</h2>
                <p dangerouslySetInnerHTML={{ __html: product.paragraph }}>
                    
                </p>
                <p><strong>{product.paraStrong}</strong></p>
            </div>
        </div>
    </div>;
};

export default ProductInfo;
