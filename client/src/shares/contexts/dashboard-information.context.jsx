import { createContext, useState } from 'react';

export const DashboardInformationContext = createContext({
  password: '',
  setPassword: () => { },
});

export const DashboardInformationProvider = ({ children }) => {
  const [password, setPassword] = useState([]);

  const value = {
    password,
    setPassword,
  };

  return (
    <DashboardInformationContext.Provider value={value}>
      {children}
    </DashboardInformationContext.Provider>
  );
};
