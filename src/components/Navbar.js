import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            id="lws-searchTask"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
