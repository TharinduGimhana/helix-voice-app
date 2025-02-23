import React, { useEffect, useState } from "react";
import "./Background.css";

// Define Product Type
type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
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
        <div className="product-card" key={index}>
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <button className="buy-now">BUY NOW</button>
              <span className="product-price">{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>;
};

export default ProductCard;
