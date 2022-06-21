import { createContext, useState } from 'react';

export const DashboardProductsContext = createContext({
  products: [],
  setProducts: () => { },
});

export const DashboardProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts,
  };

  return (
    <DashboardProductsContext.Provider value={value}>
      {children}
    </DashboardProductsContext.Provider>
  );
};
