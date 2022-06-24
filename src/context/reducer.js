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

  // GET SINGLE PRODUCT
  if (action.type === 'GET_SINGLE_PRODUCT_BEGIN') {
    return { ...state, product_loading: true, product_error: false };
  }
  if (action.type === 'GET_SINGLE_PRODUCT_SUCCESS') {
    return { ...state, product_loading: false, product: action.payload };
  }

  // FETCH ALL PRODUCTS
  if (action.type === 'SETUP_STORE') {
    const featured_products = action.payload.filter(
      (product) =>
        product.options[2].name === 'Featured' &&
        product.options[2].values[0].value === 'True'
    );
    return { ...state, products: action.payload, featured_products };
  }

  // FETCH SINGLE PRODUCTS
  if (action.type === 'GET_PRODUCT') {
    return { ...state, product: action.payload };
  }

  // CREATE CHECKOUT
  if (action.type === 'CREATE_CHECKOUT') {
    return { ...state, checkout: action.payload };
  }

  // CREATE CHECKOUT
  if (action.type === 'SET_CHECKOUT') {
    return { ...state, checkout: action.payload };
  }

  // ADD ITEM TO CART
  if (action.type === 'ADD_ITEM_TO_CHECKOUT') {
    return { ...state, checkout: action.payload };
  }

  // REMOVE LINE ITEM
  if (action.type === 'REMOVE_LINE_ITEM') {
    return { ...state, checkout: action.payload };
  }

  // TOGGLE CART ITEM QTY
  if (action.type === 'TOGGLE_ITEM_QTY') {
    const { id, value } = action.payload;
    const tempItem = state.checkout.lineItems.map((item) => {
      console.log(item);
      if (item.id === id) {
        if (value === 'inc') {
          let newQty = item.quantity + 1;
          return { ...item, quantity: newQty };
        }
      }
      return item;
    });

    return { ...state, checkout: tempItem };
  }
  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
