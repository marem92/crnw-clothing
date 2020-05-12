//checking if item we are trying to add to cart already exist
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //if item already exist in cart, we are increasing quantity prop by 1
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if item doesn't exist in cart we return item with new prop of quantity: 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
