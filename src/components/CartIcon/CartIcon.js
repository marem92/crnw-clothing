import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions';
import { selectCartItemsCount } from '../../selectors/cartSelectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
