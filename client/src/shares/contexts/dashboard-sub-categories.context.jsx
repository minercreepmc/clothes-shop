import { createContext, useState } from 'react';

export const DashboardSubcategoriesContext = createContext({
  isCreating: false,
  setIsCreating: () => { },
});

export const DashboardSubcategoriesProvider = ({ children }) => {
  const [isCreating, setIsCreating] = useState(false);

  const value = { isCreating, setIsCreating };

  return (
    <DashboardSubcategoriesContext.Provider value={value}>
      {children}
    </DashboardSubcategoriesContext.Provider>
  );
};
