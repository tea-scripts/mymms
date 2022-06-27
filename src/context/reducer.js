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
  if (action.type === 'SETUP_STORE_BEGIN') {
    return { ...state, products_loading: true };
  }

  // SETUP STORE
  if (action.type === 'SETUP_STORE') {
    const featured_products = action.payload.filter(
      (product) =>
        product.options[2].name === 'Featured' &&
        product.options[2].values[0].value === 'True'
    );
    return {
      ...state,
      products: action.payload,
      featured_products,
      products_loading: false,
    };
  }

  // SETUP STORE ERROR
  if (action.type === 'SETUP_STORE_ERROR') {
    return { ...state, products_loading: false, products_error: true };
  }

  // FETCH SINGLE PRODUCTS BEGIN
  if (action.type === 'GET_PRODUCT_BEGIN') {
    return { ...state, product_loading: true, product_error: false };
  }
  // SUCCESS
  if (action.type === 'GET_PRODUCT') {
    return { ...state, product_loading: false, product: action.payload };
  }
  // ERROR
  if (action.type === 'GET_PRODUCT_ERROR') {
    return { ...state, product_loading: false, product_error: true };
  }

  // CREATE CHECKOUT
  if (action.type === 'CREATE_CHECKOUT') {
    return { ...state, checkout: action.payload };
  }

  // SET CHECKOUT
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

  // CLEAR CART
  if (action.type === 'CLEAR_CART') {
    return { ...state, checkout: {} };
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
