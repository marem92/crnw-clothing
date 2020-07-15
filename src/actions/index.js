import {
  SET_CURRENT_USER,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM_QUANTITY,
  UPDATE_COLLECTIONS,
} from './types';

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

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseItemQuantity = item => ({
  type: DECREASE_ITEM_QUANTITY,
  payload: item,
});

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
