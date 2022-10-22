import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
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
  );
};

export default Aside;
