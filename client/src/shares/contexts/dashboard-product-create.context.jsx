import { createContext, useState } from 'react';

export const DashboardProductCreateContext = createContext({
  isCreating: false,
  setIsCreating: () => { },
  product: null,
  setProduct: () => { },
  subCategories: [],
  setSubCategories: () => { },
});

export const DashboardProductCreateProvider = ({ children }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [product, setProduct] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const value = {
    isCreating,
    setIsCreating,
    product,
    setProduct,
    subCategories,
    setSubCategories,
  };

  return (
    <DashboardProductCreateContext.Provider value={value}>
      {children}
    </DashboardProductCreateContext.Provider>
  );
};
