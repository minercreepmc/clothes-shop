import { createContext, useState } from 'react';

const INITIAL_CATEGORY_STATE = { name: '', slug: '' };

export const DashboardCategoriesContext = createContext({
  category: INITIAL_CATEGORY_STATE,
  setCategory: () => {},
});

export const DashboardCategoriesProvider = ({ children }) => {
  const [category, setCategory] = useState(INITIAL_CATEGORY_STATE);

  const value = {
    INITIAL_CATEGORY_STATE,
    category,
    setCategory,
  };

  return (
    <DashboardCategoriesContext.Provider value={value}>
      {children}
    </DashboardCategoriesContext.Provider>
  );
};
