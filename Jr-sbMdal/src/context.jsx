import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
