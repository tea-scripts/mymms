import React, { useContext, useEffect } from 'react';
import { useReducer } from 'react';
import reducer from './reducer';
import Client from 'shopify-buy';

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  product_loading: false,
  product_error: false,
  filtered_products: [],
  sort: 'price-lowest',
  product: {},
  checkout: {},
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const ProductsContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const checkoutId = state.checkout.id;

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
    dispatch({ type: 'CREATE_CHECKOUT', payload: checkout });
  };

  const fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      dispatch({ type: 'SET_CHECKOUT', payload: checkout });
    });
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    );

    dispatch({ type: 'ADD_ITEM_TO_CHECKOUT', payload: checkout });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      checkoutId,
      lineItemIdsToRemove
    );
    dispatch({ type: 'REMOVE_LINE_ITEM', payload: checkout });
  };

  const fetchAllProducts = async () => {
    dispatch({ type: 'SETUP_STORE_BEGIN' });
    try {
      const products = await client.product.fetchAll();
      dispatch({ type: 'SETUP_STORE', payload: products });
      dispatch({ type: 'LOAD_PRODUCTS', payload: products });
    } catch (error) {
      dispatch({ type: 'SETUP_STORE_ERROR' });
    }
  };

  const fetchProductWithHandle = async (handle) => {
    dispatch({ type: 'GET_PRODUCT_BEGIN' });
    try {
      const product = await client.product.fetchByHandle(handle);
      dispatch({ type: 'GET_PRODUCT', payload: product });
    } catch (error) {
      dispatch({ type: 'GET_PRODUCT_ERROR' });
    }
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: 'UPDATE_SORT', payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'collection') {
      value = e.target.textContext;
    }

    if (name === 'color') {
      value = e.target.dataset.color;
    }

    if (name === 'price') {
      value = Number(value);
    }

    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };

  // get checkout id

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  useEffect(() => {
    dispatch({ type: 'SORT_PRODUCTS' });

    // Do something with the products
  }, [state.products, state.sort]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchProductWithHandle,
        fetchAllProducts,
        fetchCheckout,
        removeLineItem,
        addItemToCheckout,
        createCheckout,
        updateSort,
        updateFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);
export default useProductsContext;
