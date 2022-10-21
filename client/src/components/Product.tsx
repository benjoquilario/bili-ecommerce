import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }: any) => {
  return (
    <li>
      <div className="product">
        <Link to={`/product/${product._id}`}>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
        </div>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </div>
    </li>
  );
};

export default Product;
