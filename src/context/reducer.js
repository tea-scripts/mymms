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

  // FETCH COLLECTIONS

  if (action.type === 'GET_COLLECTIONS') {
    let tempCollections = [...action.payload];
    tempCollections = tempCollections.map((collection) => collection.title);
    return {
      ...state,
      filters: { ...state.filters, collections: tempCollections },
    };
  }

  // SETUP STORE
  if (action.type === 'SETUP_STORE') {
    return {
      ...state,
      products: action.payload,
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

  // LOAD PRODUCTS FOR FILTER

  if (action.type === 'LOAD_PRODUCTS') {
    const maxPrice = Math.max(
      ...action.payload.map((product) => product.variants[0].price)
    );

    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  // UPDATE SORT

  if (action.type === 'UPDATE_SORT') {
    return { ...state, sort: action.payload };
  }

  // SORT PRODUCTS

  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (tempProducts.length > 0) {
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => {
          return Number(a.variants[0].price) - Number(b.variants[0].price);
        });
      }

      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => {
          return Number(b.variants[0].price) - Number(a.variants[0].price);
        });
      }

      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }

      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }
    }
    return { ...state, filtered_products: tempProducts };
  }

  // UPDATE FILTERS

  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  // FILTER PRODUCTS

  if (action.type === 'FILTER_PRODUCTS') {
    const { all_products } = state;
    const { text, collection, size, color, price } = state.filters;

    let tempProducts = [...all_products];
    // filtering
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(text)
      );
    }

    // price
    tempProducts = tempProducts.filter((product) => {
      return product.variants[0].price <= price;
    });

    return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
