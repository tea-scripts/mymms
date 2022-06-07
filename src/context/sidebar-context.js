import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  isSidebarOpen: false,
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

  return (
    <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);
export default useSidebarContext;
