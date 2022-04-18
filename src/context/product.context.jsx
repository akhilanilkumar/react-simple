import { createContext, useState } from "react";
import PRODUCTS from '../product/products.model.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
//   useEffect(() => {
//     return fetch("http://jsonplaceholder.typicode.com/photos")
//   }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
