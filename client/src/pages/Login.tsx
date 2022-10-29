import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoginUserMutation } from "../services/auth";

const Login = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await loginUser({ email, password });
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
