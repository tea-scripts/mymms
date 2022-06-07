const reducer = (state, action) => {
  // SIDEBAR TOGGLE
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false };
  }
  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
