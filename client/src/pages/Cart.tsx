import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store/store';
import { cartAddItem, removeItem } from '../store/cart/slice';
import { IProduct } from '../services/products';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartList, totalPrice, totalItems } = useAppSelector(
    (state: RootState) => state.cart
  );

  return (
    <div>
      <h1>Cart Page</h1>
      {cartList.length === 0 ? (
        <div>
          <h2>Cart is Empty</h2>
          <Link to="/">Go Shopping</Link>
        </div>
      ) : (
        <div>
          {cartList.map((item: IProduct) => (
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
              <button onClick={() => dispatch(removeItem(item))}>Delete</button>

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
      )}
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
      </div>
    </div>
  );
};

export default Cart;
