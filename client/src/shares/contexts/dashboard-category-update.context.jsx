import { createContext, useState } from 'react';

const INITIAL_CATEGORY_STATE = { name: '', slug: '' };

export const DashboardCategoryUpdateContext = createContext({
  category: INITIAL_CATEGORY_STATE,
  setCategory: () => { },
});

export const DashboardCategoryUpdateProvider = ({ children }) => {
  const [category, setCategory] = useState(INITIAL_CATEGORY_STATE);

  const value = {
    category,
    setCategory,
    INITIAL_CATEGORY_STATE,
  };

  return (
    <DashboardCategoryUpdateContext.Provider value={value}>
      {children}
    </DashboardCategoryUpdateContext.Provider>
  );
};
