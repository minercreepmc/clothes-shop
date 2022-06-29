import { createContext, useState } from 'react';

const INITIAL_PRODUCT_STATE = {
  title: 'Fake vest',
  description: 'This just a fake vest',
  price: 99.99,
  images: [],
  quantity: 100,
  shipping: 'Yes',
  brand: 'Chanel',
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
