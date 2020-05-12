import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toggleCartHidden: state.hidden,
  };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);