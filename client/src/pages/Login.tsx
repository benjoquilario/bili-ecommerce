import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation, useGetAuthUserQuery } from "../services/auth";
import { useDispatch } from "react-redux";
import { authUser } from "../store/auth/slice";
import { useAppSelector } from "../hooks";
import { selectUser } from "../store/auth/selector";

const Login = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const response = await loginUser({ email, password });
      dispatch(authUser(response));
      navigate(redirect || "/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="small-container container">
      <h1 className="my-3">Sign In</h1>
      <form className="" onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
        <div className="mb-3">
          New customer?
          <a href="/signup?redirect=/">Create your account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
