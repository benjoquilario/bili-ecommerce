import { useLocation } from "react-router-dom";

const Login = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";

  return (
    <div className="small-container container">
      <h1 className="my-3">Sign In</h1>
      <form className="">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" id="password" className="form-control" />
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
