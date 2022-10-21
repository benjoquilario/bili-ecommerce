import React from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../services/products';
// import { setQuantity } from '../store/cart/slice';

const InputQuantity = ({ qty, setQty, product }: any) => {
  const dispatch = useDispatch();
  const index = product._id;

  console.log(index);

  const handleChangeQuantity = (event: any) => {
    setQty(event.target.value);
    // dispatch(setQuantity({ index, qty }));
  };

  return (
    <select value={qty} onChange={e => handleChangeQuantity(e)}>
      {[...Array(product.countInStock).keys()].map(x => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>
  );
};

export default InputQuantity;
