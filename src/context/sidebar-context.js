import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  isSidebarOpen: false,
  isCartOpen: false,
};

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // open sidebar
  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  // close sidebar
  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  // open cart
  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  // close cart
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  return (
    <SidebarContext.Provider
      value={{ ...state, openSidebar, closeSidebar, openCart, closeCart }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);
export default useSidebarContext;
