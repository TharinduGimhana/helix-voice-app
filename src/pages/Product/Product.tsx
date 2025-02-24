import { useEffect, useState } from "react";
import Background from "./Background";
import ProductCard from "./ProductCard";

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
      <ProductCard />
    </div>
  );
};

export default Product;
