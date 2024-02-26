import React, { createContext, useContext } from "react";
import productsData from "./DATA.json";

const ProductsContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={productsData.products}>
      {children}
    </ProductsContext.Provider>
  );
};
