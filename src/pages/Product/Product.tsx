import React, { useEffect, useState } from "react";
import "../../components/Products.css";
import Background from "./Background";
import ProductCard from "./ProductCard";


const Product = () => {

  return (
    <div className="products-container">
    <Background />
    <ProductCard />
  </div>  
  );
};

export default Product;
