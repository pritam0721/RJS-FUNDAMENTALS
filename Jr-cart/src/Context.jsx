import { useContext } from 'react';
import { createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  DISPLAY_ITEMS,
  LOADING,
} from './action';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
