import { createContext, useState } from 'react';

const INITIAL_CATEGORY_STATE = { name: ' ' };

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
