import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectUser } from "../store/auth/selector";
import { selectCount } from "../store/cart/selector";
import { logout } from "../store/auth/slice";
import { clearCart, resetShipping } from "../store/cart/slice";

const Header = (): JSX.Element => {
  const count = useAppSelector(selectCount);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(resetShipping());
    dispatch(clearCart());
  };

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
        {user ? (
          <button onClick={logoutHandler}> Logout </button>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
