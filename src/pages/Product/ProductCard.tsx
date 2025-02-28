import React, { useEffect, useState } from "react";
import "./ProductCard.css";


type Product = {
    id: number;
    orderId:string;
    name: string;
    price: number;
    description: string;
    productImage: string;
    backgroundImage: string;
    backgroundColor: string;
    productImageMaxWidth: string;
    productAlignment: string;
    productInfoSectionWidth: string;
    productImageMargin: string;
};


const ProductCard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error loading products:", error));
    }, []);


    return <div>
        <div className="products-grid">
            {products.map((product, index) => (
                <div
                    className="product-card"
                    key={index}
                    style={{
                        ...(product.backgroundImage && {
                            backgroundImage: `url(${product.backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }),
                        ...(product.backgroundColor && {
                            backgroundColor: product.backgroundColor,
                        }),
                    }}
                >

                    <div
                        className={`product-content ${product.productAlignment === "right" ? "change-order" : ""
                            }`}
                        style={{
                            display: "flex",
                            flexDirection:
                                product.productAlignment === "right" ? "row-reverse" : "row",
                            alignItems: "center",
                        }}
                    >
                        <div className="product-image-container">
                            <img
                                src={product.productImage}
                                alt={product.name}
                                style={{ maxWidth: product.productImageMaxWidth, marginBottom: product.productImageMargin }}
                                className={`product-image order-${product.orderId}`}
                            />
                        </div>
                        <div
                            className={`product-info ${product.productAlignment === "right" ? "change-order" : ""
                                }`}
                            style={{ width: product.productInfoSectionWidth }}
                        >
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <div className={`product-actions ${product.productAlignment === "right" ? "change-alignment" : ""
                                }`}>
                                <button className="buy-now">BUY NOW</button>
                                <span className="product-price">{product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>;
};

export default ProductCard;
