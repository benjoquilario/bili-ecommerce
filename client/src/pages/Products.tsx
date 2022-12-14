import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../services/products";
import { cartAddItem } from "../store/cart/slice";
import { useAppSelector } from "../hooks";
import { RootState } from "../store/store";
import Rating from "../components/Rating";
import Loading from "../components/LoadingBox";
import { selectCart } from "../store/cart/selector";
import { IProduct } from "../store/types";

const Products = (): JSX.Element => {
  const id: string = useParams().id || "";
  const { data: item, isFetching, isSuccess } = useGetProductQuery(id);
  const items = useAppSelector(selectCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AddCartHandler = () => {
    const existItem = items.find((x: IProduct) => x._id === item?._id);
    const quantity: number = existItem ? existItem.quantity + 1 : 1;

    const countInStock = item?.countInStock || 0;

    if (countInStock < quantity) {
      window.alert("Sorry product is out of stock");
      return;
    }

    dispatch(cartAddItem({ ...item, quantity } as IProduct));
    navigate(`/cart`);
  };

  return (
    <div>
      <Link to="/">Back to result</Link>
      {isFetching && <Loading />}
      {isSuccess && (
        <div className="row top">
          <div className="col-2">
            <img className="large" src={item?.image} alt={item?.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{item?.name}</h1>
              </li>
              <li>
                <Rating rating={item?.rating} numReviews={item?.numReviews} />
              </li>
              <li>Price: ${item?.price}</li>
              <li>
                Description:
                {/* <p>{item]</p> */}
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${item?.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>In Stock</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Qty:</div>
                  </div>
                </li>
                {item?.countInStock > 0 && (
                  <li>
                    <button onClick={AddCartHandler} className="primary block">
                      Add to cart
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
