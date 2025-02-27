import React from "react";
import ProductCard from "./ProductCard";
import Background from "../../components/Background";


const Product: React.FC = () => {

  return (
    <div className="products-container">
      <Background title={
        <h1>Scalar Products</h1>
      } />
      <ProductCard />
    </div>
  );
};

export default Product;
