import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  DECREASE_ITEM_QUANTITY,
  REMOVE_ITEM,
} from '../actions/types';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
