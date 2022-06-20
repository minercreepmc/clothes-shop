import { createContext, useState } from 'react';

export const DashboardProductCreateContext = createContext({
  isCreating: false,
  setIsCreating: () => { },
  product: null,
  setProduct: () => { },
  subCategory: [],
  setSubCategory: () => { },
});

export const DashboardProductCreateProvider = ({ children }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [product, setProduct] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const value = {
    isCreating,
    setIsCreating,
    product,
    setProduct,
    subCategory,
    setSubCategory,
  };

  return (
    <DashboardProductCreateContext.Provider value={value}>
      {children}
    </DashboardProductCreateContext.Provider>
  );
};
