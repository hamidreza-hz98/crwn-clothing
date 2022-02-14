import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag/shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import {selectCartItemsCount} from '../../redux/cart/cartSelectors'
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
