import { createContext, useState } from 'react';

export const DashboardContext = createContext({
  isModalPasswordShow: false,
  setIsModalPasswordShow: () => { },
  isModalDeleteShow: false,
  setIsModalDeleteShow: () => { },
  isInformationChanging: false,
  setIsInformationChanging: () => { },
});

export const DashboardProvider = ({ children }) => {
  const [isModalPasswordShow, setIsModalPasswordShow] = useState(false);
  const [isModalDeleteShow, setIsModalDeleteShow] = useState(false);
  const [isInformationChanging, setIsInformationChanging] = useState(false);

  const value = {
    isModalPasswordShow,
    setIsModalPasswordShow,
    isModalDeleteShow,
    setIsModalDeleteShow,
    isInformationChanging,
    setIsInformationChanging,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
