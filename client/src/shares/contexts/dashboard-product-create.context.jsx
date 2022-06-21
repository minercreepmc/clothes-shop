import { createContext, useState } from 'react';

const INITIAL_PRODUCT_STATE = {
  title: '',
  description: '',
  price: 0,
  images: [],
  quantity: 0,
  shipping: '',
  brand: '',
  categoryId: '',
  subCategoriesId: '',
};

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
  const [product, setProduct] = useState(INITIAL_PRODUCT_STATE);
  const [subCategories, setSubCategories] = useState([]);
  const value = {
    isCreating,
    setIsCreating,
    product,
    setProduct,
    INITIAL_PRODUCT_STATE,
    subCategories,
    setSubCategories,
  };

  return (
    <DashboardProductCreateContext.Provider value={value}>
      {children}
    </DashboardProductCreateContext.Provider>
  );
};
