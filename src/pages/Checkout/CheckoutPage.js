import React from "react";
import "./CheckoutPage.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsPrice,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton";

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <span className="header-block">Product</span>
      <span className="header-block">Description</span>
      <span className="header-block">Quantity</span>
      <span className="header-block">Price</span>
      <span className="header-block">Remove</span>
    </div>
    {
        cartItems.map(cartItem=>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
    }
    <div className="total">
      <span>TOTAL : ${total}</span>
    </div>
    <div className="test-warning" >
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 4242 - Exp : 01/20 - CVV : 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
