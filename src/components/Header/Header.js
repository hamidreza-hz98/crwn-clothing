import React from "react";
import { connect } from "react-redux";
import "./Header.scss";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN{" "}
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectHidden
});

export default connect(mapStateToProps)(Header);
