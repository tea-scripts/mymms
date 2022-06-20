const reducer = (state, action) => {
  // SIDEBAR TOGGLE
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false };
  }

  // CART TOGGLE
  if (action.type === 'OPEN_CART') {
    return { ...state, isCartOpen: true };
  }
  if (action.type === 'CLOSE_CART') {
    return { ...state, isCartOpen: false };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
