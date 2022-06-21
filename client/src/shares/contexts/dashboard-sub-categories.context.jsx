import { createContext, useState } from 'react';

const INITIAL_SUB_CATEGORY_STATE = {
  name: '',
  categoryId: '',
};

export const DashboardSubcategoriesContext = createContext({
  isCreating: false,
  setIsCreating: () => { },
  subCategory: INITIAL_SUB_CATEGORY_STATE,
  setSubCategory: () => { },
  categoryId: '',
  setCategoryId: () => { },
});

export const DashboardSubcategoriesProvider = ({ children }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [subCategory, setSubCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const value = {
    isCreating,
    setIsCreating,
    subCategory,
    setSubCategory,
    categoryId,
    setCategoryId,
    INITIAL_SUB_CATEGORY_STATE,
  };

  return (
    <DashboardSubcategoriesContext.Provider value={value}>
      {children}
    </DashboardSubcategoriesContext.Provider>
  );
};
