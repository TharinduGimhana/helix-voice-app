import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Background from "../../components/Background";

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
      <Background title={
        <h1>Scalar Products</h1>
      } />
      <ProductCard />
    </div>
  );
};

export default Product;
