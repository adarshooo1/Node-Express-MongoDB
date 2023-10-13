import { useEffect, useState } from "react";
import Product from "./Product";
// import data from "./data"; // Assuming you have a file named data.jsx
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get("http://localhost:1010/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <Product {...product} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
