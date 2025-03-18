import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    user: null,
    theme: 'light',
    isMobileMenuOpen: false
  });

  const updateState = (newState) => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  const toggleMobileMenu = () => {
    setState(prevState => ({
      ...prevState,
      isMobileMenuOpen: !prevState.isMobileMenuOpen
    }));
  };

  return (
    <AppContext.Provider 
      value={{ 
        state, 
        updateState,
        toggleMobileMenu
      }}
    >
      {children}
    </AppContext.Provider>
  );
}; 