import { createContext, useState } from 'react';

const INITIAL_SUB_CATEGORY_STATE = {
  name: '',
  categoryId: '',
};

export const DashboardSubcategoriesContext = createContext({
  isCreating: false,
  setIsCreating: () => {},
  subCategory: INITIAL_SUB_CATEGORY_STATE,
  setSubCategory: () => {},
});

export const DashboardSubcategoriesProvider = ({ children }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [subCategory, setSubCategory] = useState(INITIAL_SUB_CATEGORY_STATE);

  const value = {
    isCreating,
    setIsCreating,
    subCategory,
    setSubCategory,
    INITIAL_SUB_CATEGORY_STATE,
  };

  return (
    <DashboardSubcategoriesContext.Provider value={value}>
      {children}
    </DashboardSubcategoriesContext.Provider>
  );
};
