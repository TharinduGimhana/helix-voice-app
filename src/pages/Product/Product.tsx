import { useEffect, useState } from "react";
import "./Products.css";
import Background from "./Background";

// Define Product Type
type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImage: string;
  backgroundImage: string;
  backgroundColor: string;
  productImageMaxWidth: string;
  productAlignment: string;
  productInfoSectionWidth: string;
};

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="products-container">
      <Background />
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
            {/* Flex container to wrap image and info */}
            <div
              className={`product-content ${
                product.productAlignment === "right" ? "change-order" : ""
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
                  style={{ maxWidth: product.productImageMaxWidth }}
                  className="product-image"
                />
              </div>
              <div
                className={`product-info ${
                  product.productAlignment === "right" ? "change-order" : ""
                }`}
                style={{ width: product.productInfoSectionWidth }}
              >
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button className="buy-now">BUY NOW</button>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
