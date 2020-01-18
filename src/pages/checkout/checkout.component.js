// imports
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// local import
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, totalValue }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span>Product</span>
      </div>
      <div className="header-blocks">
        <span>Description</span>
      </div>
      <div className="header-blocks">
        <span>Quantity</span>
      </div>
      <div className="header-blocks">
        <span>Price</span>
      </div>
      <div className="header-blocks">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(i => (
      <CheckoutItem key={i.id} cartItem={i} />
    ))}
    <div className="total">
      <span>Total: ${totalValue}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
