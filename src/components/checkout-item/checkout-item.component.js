// imports
import React from 'react';
import { connect } from 'react-redux';

// local imports
import './checkout-item.styles.scss';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
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
          onKeyDown={() => removeItem(cartItem)}
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          role="button"
          tabIndex="0"
          onKeyDown={() => addItem(cartItem)}
          onClick={() => addItem(cartItem)}
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
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);