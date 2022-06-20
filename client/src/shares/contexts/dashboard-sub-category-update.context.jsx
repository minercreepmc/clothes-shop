import { createContext, useState } from 'react';

export const DashboardSubCategoryUpdateContext = createContext({
  isUpdating: false,
  setIsUpdating: () => { },
  subCategory: {},
  setSubCategory: () => { },
});

export const DashboardSubCategoryUpdateProvider = ({ children }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [subCategory, setSubCategory] = useState({});

  const value = { isUpdating, setIsUpdating, subCategory, setSubCategory };

  return (
    <DashboardSubCategoryUpdateContext.Provider value={value}>
      {children}
    </DashboardSubCategoryUpdateContext.Provider>
  );
};
