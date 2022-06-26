import { createContext, useState } from 'react';

export const DashboardSubCategoryUpdateContext = createContext({
  subCategory: {},
  setSubCategory: () => { },
});

export const DashboardSubCategoryUpdateProvider = ({ children }) => {
  const [subCategory, setSubCategory] = useState({});

  const value = {
    subCategory,
    setSubCategory,
  };

  return (
    <DashboardSubCategoryUpdateContext.Provider value={value}>
      {children}
    </DashboardSubCategoryUpdateContext.Provider>
  );
};
