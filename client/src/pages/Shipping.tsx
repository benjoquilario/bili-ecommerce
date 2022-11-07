import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { shipping } from "../store/cart/slice";
import { selectUser } from "../store/auth/selector";
import { useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";

const Shipping = (): JSX.Element => {
  const shippingAddress = useAppSelector((state) => state.cart.shippingAddress);
  const [fullName, setFullName] = useState(shippingAddress?.fullName || "");
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login?redirect=/shipping");
    }
  }, [navigate, user]);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      shipping({ fullName, address, city, postalCode, country, location: "" })
    );
    navigate("/payment");
  };

  return (
    <div>
      <CheckOut step1 step2 />
      <div className="container small-container">
        <h1>Shipping Address</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>FullName: </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
            />
          </div>
          <div className="mb-3">
            <label>Address: </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
          </div>
          <div className="mb-3">
            <label>City: </label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </div>
          <div className="mb-3">
            <label>Postal: </label>
            <input
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
              required
            />
          </div>
          <div className="mb-3">
            <label>Country: </label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
