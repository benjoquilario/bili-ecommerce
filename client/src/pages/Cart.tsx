import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { cartAddItem, removeItem } from "../store/cart/slice";
import { IProduct } from "../store/types";
import {
  selectCart,
  selectTotalItems,
  selectTotalPrice,
} from "../store/cart/selector";
import { selectUser } from "../store/auth/selector";

const Cart = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const items = useAppSelector(selectCart);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const user = useAppSelector(selectUser);
  // const { email, name, token, _id } = user?.data;
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {items.length === 0 ? (
        <div>
          <h2>Cart is Emptyasdasda!</h2>
          <Link to="/">Go Shopping</Link>
        </div>
      ) : (
        <>
          <div>
            {items.map((item: IProduct) => (
              <div key={item._id}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                {item.price}
                <button
                  onClick={() =>
                    dispatch(
                      cartAddItem({ ...item, quantity: item.quantity - 1 })
                    )
                  }
                  disabled={item.quantity === 0}
                >
                  -
                </button>
                <button onClick={() => dispatch(removeItem(item))}>
                  Delete
                </button>

                <button
                  onClick={() =>
                    dispatch(
                      cartAddItem({ ...item, quantity: item.quantity + 1 })
                    )
                  }
                  disabled={item.countInStock <= item.quantity}
                >
                  +
                </button>
              </div>
            ))}
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>
                    Subtotal ({totalItems}):$({totalPrice})
                  </h2>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={checkoutHandler}
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
