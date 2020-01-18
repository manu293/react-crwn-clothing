// imports
import React from 'react';
import { connect } from 'react-redux';

// local imports
import './checkout-item.styles.scss';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, clearItem, increaseQty, decreaseQty }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          role="button"
          tabIndex="0"
          onKeyDown={() => decreaseQty(cartItem)}
          onClick={() => decreaseQty(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          role="button"
          tabIndex="0"
          onKeyDown={() => increaseQty(cartItem)}
          onClick={() => increaseQty(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        role="button"
        tabIndex="0"
        onKeyDown={() => clearItem(cartItem)}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  increaseQty: item => dispatch(addItem(item)),
  decreaseQty: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
