/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-console */
// imports
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// local imports

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = parseInt(price * 71, 10);
    const publishableKey = 'pk_test_dE0HcccHO42ErhaWkw7tGdCe0036rkRIis';
    const onToken = token => {
        console.log('The token is : ', token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Price is : INR ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
