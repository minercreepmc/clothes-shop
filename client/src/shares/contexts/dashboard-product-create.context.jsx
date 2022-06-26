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
  product: null,
  setProduct: () => { },
  subCategories: [],
  setSubCategories: () => { },
});

export const DashboardProductCreateProvider = ({ children }) => {
  const [product, setProduct] = useState(INITIAL_PRODUCT_STATE);
  const [subCategories, setSubCategories] = useState([]);
  const value = {
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
