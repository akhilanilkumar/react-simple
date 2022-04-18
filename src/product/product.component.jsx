import { useContext } from "react";
import { ProductsContext } from "../context/product.context";

const Product = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      {products.map((item, index) => (
        <p key={item.id}>
          {index + 1}: {item.title}
        </p>
      ))}
    </>
  );
};

export default Product;
