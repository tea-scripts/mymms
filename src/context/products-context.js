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
  product: {},
  checkout: {},
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
    try {
      const products = await client.product.fetchAll();
      dispatch({ type: 'SETUP_STORE', payload: products });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleItemQty = (id, value) => {
    dispatch({ type: 'TOGGLE_ITEM_QTY', payload: { id, value } });
  };

  const fetchProductWithHandle = async (handle) => {
    try {
      const product = await client.product.fetchByHandle(handle);
      dispatch({ type: 'GET_PRODUCT', payload: product });
    } catch (error) {
      console.log(error);
    }
  };

  // get single product

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  // console.log(state.checkout);

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
        toggleItemQty,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);
export default useProductsContext;
