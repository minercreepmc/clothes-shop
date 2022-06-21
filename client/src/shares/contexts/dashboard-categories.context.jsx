import { createContext, useState } from 'react';

const INITIAL_CATEGORY_STATE = { name: '', slug: '' };

export const DashboardCategoriesContext = createContext({
  isCreating: false,
  setIsCreating: () => { },
  category: INITIAL_CATEGORY_STATE,
  setCategory: () => { },
});

export const DashboardCategoriesProvider = ({ children }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [category, setCategory] = useState(INITIAL_CATEGORY_STATE);

  const value = {
    INITIAL_CATEGORY_STATE,
    isCreating,
    setIsCreating,
    category,
    setCategory,
  };

  return (
    <DashboardCategoriesContext.Provider value={value}>
      {children}
    </DashboardCategoriesContext.Provider>
  );
};
