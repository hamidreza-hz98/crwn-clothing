import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag/shopping-bag.svg.svg";
import { connect } from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cartActions";
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) =>( {
  toggleCartHidden : () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
