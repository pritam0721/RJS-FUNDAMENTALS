import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  DISPLAY_ITEMS,
  LOADING,
} from './action';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };

    // return {
    //   ...state,
    //   cart: new Map(state.cart).set(action.payload.id, {
    //     ...state.cart.get(action.payload.id),
    //     amount: state.cart.get(action.payload.id).amount + 1,
    //   }),
    // };
  }

  if (action.type === DECREASE) {
    const item = state.cart.get(action.payload.id);
    if (item.amount === 1) {
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return {
        ...state,
        cart: newCart,
      };
    } else {
      return {
        ...state,
        cart: new Map(state.cart).set(action.payload.id, {
          ...state.cart.get(action.payload.id),
          amount: state.cart.get(action.payload.id).amount - 1,
        }),
      };
    }
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, cart: newCart, loading: false };
  }
  throw new Error(`no matching type: ${action.type}`);
};

export default reducer;
