import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { RootState } from "../store/store";

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const count = useAppSelector((state: RootState) => state.cart.count);

  return (
    <header className="header">
      <div className="brand">
        <Link to="/">amazona</Link>
      </div>
      <div className="header-links">
        <div>
          <Link to="/cart">Cart</Link>
          <div>{count}</div>
        </div>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
