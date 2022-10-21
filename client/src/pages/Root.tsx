import { Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <Link to="/">amazona</Link>
        </div>
        <div className="header-links">
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button">x</button>
        <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>
          <li>
            <Link to="/category/Shirts">Shirts</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">All right reserved.</footer>
    </div>
  );
};

export default RootLayout;
