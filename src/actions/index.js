import { SET_CURRENT_USER, TOGGLE_CART_HIDDEN, ADD_ITEM } from './types';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
