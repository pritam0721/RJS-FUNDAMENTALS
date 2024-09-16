import { useContext, useEffect } from 'react';
import { createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import cartItems from './data';
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  DISPLAY_ITEMS,
  LOADING,
} from './action';
import { getTotal } from './util';
const url = 'https://www.course-api.com/react-useReducer-cart-project';
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const { totalAmount, totalItems } = getTotal(state.cart);
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeFromCart,
        increase,
        decrease,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
