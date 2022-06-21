import { createContext, useState } from 'react';

const INITIAL_CATEGORY_STATE = { name: '', slug: '' };

export const DashboardCategoryUpdateContext = createContext({
  isUpdating: false,
  setIsUpdating: () => { },
  category: INITIAL_CATEGORY_STATE,
  setCategory: () => { },
});

export const DashboardCategoryUpdateProvider = ({ children }) => {
  const [category, setCategory] = useState(INITIAL_CATEGORY_STATE);
  const [isUpdating, setIsUpdating] = useState(false);

  const value = {
    category,
    setCategory,
    INITIAL_CATEGORY_STATE,
    isUpdating,
    setIsUpdating,
  };

  return (
    <DashboardCategoryUpdateContext.Provider value={value}>
      {children}
    </DashboardCategoryUpdateContext.Provider>
  );
};
