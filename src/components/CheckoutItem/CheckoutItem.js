import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, decreaseItemQuantity } from '../../actions';

import './CheckoutItem.scss';

const CheckoutItem = ({
  cartItem,
  removeItem,
  decreaseItemQuantity,
  addItem,
}) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => decreaseItemQuantity(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => removeItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeItem, addItem, decreaseItemQuantity })(
  CheckoutItem
);
